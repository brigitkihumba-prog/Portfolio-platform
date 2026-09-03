import { useState } from 'react';

export default function AddProject({ onAddProject }) {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    if (!title.trim() || !description.trim()) {
      setError('Both title and description are required.');
      console.log("Validation failed: Empty inputs detected.");
      return; 
    }

    
    onAddProject({ title, description });
    setTitle('');
    setDescription('');
    setError('');
  };

  return (
    <section className="card form-section">
      <h2>Add New Project</h2>
      {error && <p className="error-msg">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g., Portfolio Website"
          />
        </div>
        <div className="input-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe the tech stack and purpose..."
          ></textarea>
        </div>
        <button type="submit" className="btn">Add Project</button>
      </form>
    </section>
  );
}