import { useState } from "react";
import SearchInput from "./SearchInput";
import SearchButton from "./SearchButton";

// SearchContainer, first named export
export function SearchContainer() {
  const [search, setSearch] = useState("");

  function handleSearch(e) {
    e.preventDefault();

    if (search.trim()) {
      window.location.href =
        "https://www.google.com/search?q=" +
        encodeURIComponent(search);
    }
  }

  return (
    <form className="search-container" onSubmit={handleSearch}>
      <SearchInput search={search} setSearch={setSearch} />
      <SearchButton />
    </form>
  );
}

// Frequentsites, second named export
export function FrequentSites() {
  return (
    <div className="frequent-sites">
      <a href="https://www.youtube.com">
        <img src="/icons/youtube.svg" alt="YouTube" width="40" />
        <p>YouTube</p>
      </a>

      <a href="https://github.com">
        <img src="/icons/github.svg" alt="GitHub" width="40" />
        <p>GitHub</p>
      </a>

      <a href="https://www.facebook.com">
        <img src="/icons/facebook.svg" alt="Facebook" width="40" />
        <p>Facebook</p>
      </a>
    </div>
  );
}
