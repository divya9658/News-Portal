// src/pages/Search.jsx

import { useLocation, Link } from "react-router-dom";
import { articles } from "../data/articles";

function Search() {
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const query = params.get("q") || "";

  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Search Results</h1>

      <p data-testid="search-query-display">
        Search Query: <strong>{query}</strong>
      </p>

      <p data-testid="results-count">
        Results Found: {filteredArticles.length}
      </p>

      <div data-testid="search-results-list">
        {filteredArticles.length > 0 ? (
          filteredArticles.map((article) => (
            <div
              key={article.id}
              style={{
                border: "1px solid #ddd",
                padding: "16px",
                marginBottom: "16px",
                borderRadius: "8px",
              }}
            >
              <h2>{article.title}</h2>
              <p>{article.excerpt}</p>

              <Link to={`/article/${article.id}`}>
                Read More
              </Link>
            </div>
          ))
        ) : (
          <p>No articles found.</p>
        )}
      </div>

      <br />

      <Link to="/articles">
        ← Back to Articles
      </Link>
    </div>
  );
}

export default Search;