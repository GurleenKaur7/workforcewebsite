/*"use client";

import React, { useEffect, useState } from "react";
import styles from "./api.module.css";

function Api() {
  const [movies, setMovies] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState();
   const [error, setError] = useState("");
   const [query, setQuery] = useState("");


  useEffect(() => {
    GodFather();
  }, []);








  async function GodFather() {
 



    const url = "https://www.omdbapi.com/?apikey=7af605d6&s=Godfather";
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.Response === "True") { 
        setMovies(data.Search);
        setTotal(data.totalResults);   
      } else {
        console.error("API returned Response: false");
      }
    } catch (err) {
      console.error("Error fetching movies:", err);
    } finally {
       setLoading(false);
    }
  }




async function handleSearch(e) {
    e.preventDefault();
    if (!query) return;

    setLoading(true);
    setError("");


    try {
      const url = `https://www.omdbapi.com/?apikey=7af605d6&s=${encodeURIComponent(query)}`;
      const response = await fetch(url);
      const data = await response.json();

      if (data.Response === "True") {
        setMovies(data.Search);
        setTotal(data.totalResults);
      } else {
        setMovies([]);
        setTotal(0);
        setError(data.Error || "No movies found");
      }
    } catch (err) {
      console.error(err);
      setError("Failed to fetch movies");
    } finally {
      setLoading(false);
    }
}




  if (loading) return <p>Loading...</p>;

  return (
    <div className={styles.container}>
      <h1>Movies from API</h1>
      <p>Total Results: {total}</p>

 
      <form onSubmit={handleSearch} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Type a movie name..."
          style={{ padding: "8px", width: "250px" }}
        />
         <button type="submit" style={{ padding: "8px 12px", marginLeft: "8px" }}>
          Search
        </button>
        </form>


         {error && <p style={{ color: "red" }}>{error}</p>}
      {!error && <p>Total Results: {total}</p>}



      <div className={styles.grid}>
        { movies && movies.map((movie, index) => (
          <div key={index} className={styles.card}>
            <img
              src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.png"}
              alt={movie.Title}
              width={150}
              height={200}
              className={styles.poster}
            />
            <ul className={styles.movieInfo}>
              <li><strong>Title:</strong> {movie.Title}</li>
              <li><strong>Year:</strong> {movie.Year}</li>
              <li><strong>Type:</strong> {movie.Type}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Api;*/





"use client";

import React, { useEffect, useState } from "react";
import styles from "./api.module.css";

function Api() {
  const [movies, setMovies] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");

 
  useEffect(() => {
    GodFather(false); 
  }, []);

  
  useEffect(() => {
    if (query.trim().length<3) return; 

    const delay = setTimeout(() => {
      fetchMovies(query, true); 
    }, 500);

    return () => clearTimeout(delay); 
  }, [query]);

  
  async function GodFather(showLoader = false) {
    if (showLoader) setLoading(true);
    setError("");

    const url = "https://www.omdbapi.com/?apikey=7af605d6&s=Godfather";

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.Response === "True") {
        setMovies(data.Search);
        setTotal(data.totalResults);
      } else {
        console.error("API returned Response: false");
      }
    } catch (err) {
      console.error("Error fetching movies:", err);
    } finally {
      if (showLoader) setLoading(false);
    }
  }

  async function fetchMovies(searchTerm, showLoader = true) {
   if (searchTerm.trim().length < 3) {
      setMovies([]);
      setTotal(0);
      setError("");
      return; 
    }
   
   
   
   
    if (showLoader) setLoading(true);
    setError("");

    try {
      const url = `https://www.omdbapi.com/?apikey=7af605d6&s=${encodeURIComponent(
        searchTerm
      )}`;
      const response = await fetch(url);
      const data = await response.json();

      if (data.Response === "True") {
        setMovies(data.Search);
        setTotal(data.totalResults);
      } else {
        setMovies([]);
        setTotal(0);
        setError(data.Error || "No movies found");
      }
    } catch (err) {
      console.error(err);
      setError("Failed to fetch movies");
    } finally {
      if (showLoader) setLoading(false);
    }
  }

  async function handleSearch(e) {
    e.preventDefault();
    if (!query.trim()) return;

    fetchMovies(query, true); 
  }

  
  return (
    <div className={styles.container}>
      <h1>Movies from API</h1>

      {/* Search Bar */}
      <form onSubmit={handleSearch} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Type a movie name..."
          style={{ padding: "8px", width: "250px" }}
        />
        <button type="submit" style={{ padding: "8px 12px", marginLeft: "8px" }}>
          Search
        </button>
      </form>

      
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!loading && !error && <p>Total Results: {total}</p>}

      
      <div className={styles.grid}>
        {movies &&
          movies.map((movie, index) => (
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
    </div>
  );
}

export default Api;