
function SearchInput({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Ask Google..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default SearchInput;
