import { Link } from 'react-router-dom';

export default function Project({ id, title, description }) {
  return (
    <div className="project-item">
      <div className="project-icon">📁</div>
      <div className="project-details">
        <h3>{title}</h3>
        <p>{description.substring(0, 60)}...</p>
        <Link to={`/project/${id}`} className="view-link">View Details &rarr;</Link>
      </div>
    </div>
  );
}