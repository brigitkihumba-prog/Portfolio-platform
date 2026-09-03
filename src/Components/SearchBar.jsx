export default function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search projects by title or keyword..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}