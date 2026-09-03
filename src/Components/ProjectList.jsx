import Project from './Project';

export default function ProjectList({ projects }) {
  if (projects.length === 0) {
    return <p className="no-results">No projects match your search.</p>;
  }

  return (
    <div className="project-list">
      {projects.map((project) => (
        <Project
          key={project.id}
          id={project.id}
          title={project.title}
          description={project.description}
        />
      ))}
    </div>
  );
}