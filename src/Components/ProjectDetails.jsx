import { useParams, Link } from 'react-router-dom';

export default function ProjectDetails({ projects }) {
  const { id } = useParams();
  
  // Find the specific project matching the URL ID
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="card">
        <h2>Project not found</h2>
        <Link to="/">Return to Home</Link>
      </div>
    );
  }

  return (
    <div className="card details-card">
      <h2>{project.title}</h2>
      <div className="project-icon large-icon">📁</div>
      <p className="full-desc">{project.description}</p>
      <Link to="/" className="btn back-btn">&larr; Back to Portfolio</Link>
    </div>
  );
}