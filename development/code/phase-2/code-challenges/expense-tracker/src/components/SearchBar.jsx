function SearchBar({ searchTerm, onSearch }) {
  return (
    <input
      type="text"
      placeholder="Search expenses..."
      value={searchTerm}
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}

export default SearchBar;
