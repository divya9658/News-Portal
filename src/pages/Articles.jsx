import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ArticleCard from "../components/ArticleCard";
import { articles } from "../data/articles";
import './Articles.css';

function Articles() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    const trimmedQuery = query.trim();
    navigate(`/search?q=${encodeURIComponent(trimmedQuery)}`);
  };

  return (
    <div className="articles-page">
      <header className="hero">
          <h1>Daily News Portal</h1>
          <p>Stay updated with the latest stories from around the world</p>
      </header>

      <div className="search-container">
          <input
            data-testid="search-input"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={(event) => event.key === "Enter" && handleSearch()}
            placeholder="Search articles"
            aria-label="Search articles"
          />
          <button
            data-testid="search-button"
            type="button"
            onClick={handleSearch}
          >
            Search
          </button>
      </div>
      <div data-testid="articles-list" className="articles-list">
        {articles.map((article) => (
          <ArticleCard
            key={article.id}
            article={article}
          />
        ))}
      </div>
    </div>
  );
}

export default Articles;