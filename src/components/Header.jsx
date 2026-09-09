function Header({ onDelete, hasData }) {
  function handleDelete() {
    if (window.confirm('Delete all browsing data? This cannot be undone.')) {
      onDelete()
    }
  }

  return (
    <header className="app-header">
      <div className="header-inner">
        <h1>Browser History Analyzer</h1>
        <button
          className="delete-btn"
          disabled={!hasData}
          onClick={handleDelete}
        >
          Delete Data
        </button>
      </div>
    </header>
  )
}

export default Header