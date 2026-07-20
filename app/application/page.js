
"use client";

import React, { Suspense, useState, useEffect } from "react";
import styles from "./package.module.css";

// ----------- Resource Wrapper for Suspense -----------
function wrapPromise(promise) {
  let status = "pending";
  let result;
  let suspender = promise.then(
    (res) => {
      status = "success";
      result = res;
    },
    (err) => {
      status = "error";
      result = err;
    }
  );
  return {
    read() {
      if (status === "pending") throw suspender;
      if (status === "error") throw result;
      return result;
    },
  };
}

// ----------- Fetch Movies Function with Error Handling -----------
function fetchMoviesAPI(searchTerm) {
  const url = `https://www.omdbapi.com/?apikey=7af605d6&s=${encodeURIComponent(
    searchTerm
  )}`;
  return fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (data.Response === "True") {
        return data;
      } else {
        // Return empty list + error message instead of throwing
        return { Search: [], totalResults: 0, Error: data.Error || "No movies found" };
      }
    });
}

// ----------- MovieList Component -----------
function MovieList({ resource }) {
  const data = resource.read();
  const movies = data.Search || [];
  const total = data.totalResults || 0;

  if (movies.length === 0) {
    return <p style={{ color: "red" }}>{data.Error || "No movies found"}</p>;
  }

  return (
    <>
      <p>Total Results: {total}</p>
      <div className={styles.grid}>
        {movies.map((movie, index) => (
          <div key={index} className={styles.card}>
            <img
              src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.png"}
              alt={movie.Title}
              width={150}
              height={200}
              className={styles.poster}
            />
            <ul className={styles.movieInfo}>
              <li>
                <strong>Title:</strong> {movie.Title}
              </li>
              <li>
                <strong>Year:</strong> {movie.Year}
              </li>
              <li>
                <strong>Type:</strong> {movie.Type}
              </li>
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}

// ----------- Main Component -----------
function Api() {
  const [input, setInput] = useState(""); // User input
  const [query, setQuery] = useState("Godfather"); // Actual search term
  const [resource, setResource] = useState(() =>
    wrapPromise(fetchMoviesAPI("Godfather"))
  );

  // ----------- Debounce input -----------
  useEffect(() => {
    if (input.trim().length < 3) return;

    const delay = setTimeout(() => {
      setQuery(input);
      setResource(wrapPromise(fetchMoviesAPI(input)));
    }, 500); // Wait 500ms after typing stops

    return () => clearTimeout(delay);
  }, [input]);

  // ----------- Handle Search Button -----------
  const handleSearch = (e) => {
    e.preventDefault();
    if (input.trim().length < 3) return;
    setQuery(input);
    setResource(wrapPromise(fetchMoviesAPI(input)));
  };

  return (
    <div className={styles.container}>
      <h1>Movies from API</h1>

      {/* Search Bar */}
      <form onSubmit={handleSearch} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a movie name..."
          style={{ padding: "8px", width: "250px" }}
        />
        <button type="submit" style={{ padding: "8px 12px", marginLeft: "8px" }}>
          Search
        </button>
      </form>

      {/* Suspense Wrapper */}
      <Suspense fallback={<p>Loading movies...</p>}>
        <MovieList resource={resource} />
      </Suspense>
    </div>
  );
}

export default Api;
