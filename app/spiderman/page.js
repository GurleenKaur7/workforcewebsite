
"use client";

import React, { useEffect, useState } from "react";
import styles from "./special.module.css";

function Spiderman() {
  const [movies, setMovies] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(""); // Year filter
  const [type, setType] = useState(""); // Type filter (movie, series, episode)
const [page,setPage]=useState(1);



const limit = 10; // OMDb returns max 10 per page
  const totalPages = Math.ceil(total / limit);
  // Initial load
  useEffect(() => {
    fetchMovies("Godfather", "", "",1, false);
  }, []);

  // Debounced search on query, year, or type change
  useEffect(() => {
    if (query.trim().length < 3) return;

    const delay = setTimeout(() => {
      setPage(1);
      fetchMovies(query, category, type, 1,true);
    }, 500);

    return () => clearTimeout(delay);
  }, [query, category, type]);

  // Fetch movies from OMDb API
  async function fetchMovies(searchTerm, year = "", typeFilter = "",pageNo=1, showLoader = true,) {
    if (searchTerm.trim().length < 3) {
      setMovies([]);
      setTotal(0);
      setError("");
      return;
    }

    if (showLoader) setLoading(true);
    setError("");

    try {
      // Inline URL construction for search, year, and type
      const url = `https://www.omdbapi.com/?apikey=7af605d6&s=${encodeURIComponent(
        searchTerm
      )}${year ? `&y=${year}` : ""}${typeFilter ? `&type=${typeFilter}` : ""}&page=${pageNo}`;

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

  // Handle form search submit
  function handleSearch(e) {
    e.preventDefault();
    if (!query.trim()) return;
    setPage(1);

    fetchMovies(query, category, type,1, true);
  }




  const handlePrevPage = () => {
    if (page >1) {
      const newPage = page - 1;
      setPage(newPage);
      fetchMovies(query ||"Godfather", category, type, newPage, true);
    }
  };



  const handleNextPage = () => {
    if (page < totalPages) {
      const newPage = page + 1;
      setPage(newPage);
      fetchMovies(query||"Godfather", category, type, newPage, true);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Movies from API</h1>

      {/* Search Bar + Filters */}
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

        {/* Year Dropdown */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{ padding: "8px", marginLeft: "10px" }}
        >
          <option value="">All Years</option>
          <option value="2025">2025</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
        </select>

        {/* Type Dropdown */}
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          style={{ padding: "8px", marginLeft: "10px" }}
        >
          <option value="">All Types</option>
          <option value="movie">Movie</option>
          <option value="series">Series</option>
          <option value="episode">Episode</option>
        </select>
      </form>

      {/* Status Messages */}
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!loading && !error && <p>Total Results: {total}</p>}

      {/* Movies Grid */}
      <div className={styles.grid}>
        {movies
          .filter(
            (movie) =>
              (!category || movie.Year === category) && (!type || movie.Type === type)
          )
          .map((movie, index) => (
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
      </div >

{totalPages>0&&(
      <div className={styles.pagination}>
<button onClick={handlePrevPage} disabled={page===1}>
  Prev
</button>
<h2>{page}/{totalPages}</h2>
<button onClick={handleNextPage} disabled={page===totalPages}>Next</button>
      </div>
)}
    </div>
  );
}

export default Spiderman;