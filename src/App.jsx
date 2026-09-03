import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import AddProject from './Components/AddProject';
import SearchBar from './Components/SearchBar';
import ProjectList from './Components/ProjectList';
import ProjectDetails from './Components/ProjectDetails';
import './App.css';

export default function App() {
  
  const [projects, setProjects] = useState([
    { id: 1, title: 'E-Commerce App', description: 'A full-stack shopping platform.' },
    { id: 2, title: 'Weather Dashboard', description: 'Real-time weather data visualization.' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  // Event handler passed down to AddProject
  const handleAddProject = (newProject) => {
    console.log("Adding new project:", newProject); // Debugging
    setProjects([...projects, { ...newProject, id: Date.now() }]);
  };

  // Dynamic filtering based on search state
  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <Header />
      <main className="container">
        <Routes>
          
          <Route path="/" element={
            <>
              <AddProject onAddProject={handleAddProject} />
              <section className="card list-section">
                <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
                <ProjectList projects={filteredProjects} />
              </section>
            </>
          } />
          
          <Route path="/project/:id" element={<ProjectDetails projects={projects} />} />
        </Routes>
      </main>
    </div>
  );
}