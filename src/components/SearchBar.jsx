import { useState } from 'react'

function SearchBar({ onSearch }) {
  const [value, setValue] = useState('')

  function handleChange(e) {
    const v = e.target.value
    setValue(v)
    onSearch(v)
  }

  function handleClear() {
    setValue('')
    onSearch('')
  }

  return (
    <div className="search-bar">
      <span className="search-icon">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <circle cx="7" cy="7" r="5.5" stroke="#6e6e73" strokeWidth="1.5"/>
          <path d="M11 11L14.5 14.5" stroke="#6e6e73" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </span>
      <input
        type="text"
        className="search-input"
        placeholder="Search by website or keyword..."
        value={value}
        onChange={handleChange}
        aria-label="Search history entries"
      />
      {value && (
        <button className="search-clear" onClick={handleClear} aria-label="Clear search">
          &times;
        </button>
      )}
    </div>
  )
}

export default SearchBar