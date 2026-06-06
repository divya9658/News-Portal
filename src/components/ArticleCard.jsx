import { memo } from 'react';
import {Link} from 'react-router-dom';

const ArticleCard = memo(function ArticleCard({article}) {
    return (
        <article data-testid={`article-card-${article.id}`} className="article-card">
            <img
              src={article.image}
              className="card-image"
              alt={article.title}
              title={article.title}
              width="600"
              height="400"
              loading="lazy"
              decoding="async"
            />
            <h2 data-testid={`article-title-${article.id}`}>{article.title}</h2>
            <p data-testid={`article-excerpt-${article.id}`}>{article.excerpt}</p>
            <Link to={`/article/${article.id}`} data-testid={`article-link-${article.id}`} className="card-link">Read More</Link>
        </article>
    );
});

export default ArticleCard;