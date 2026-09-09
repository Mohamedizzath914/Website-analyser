import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import FileUpload from './components/FileUpload'
import Timeline from './components/Timeline'
import SearchBar from './components/SearchBar'
import DateFilter from './components/DateFilter'
import SiteSummary from './components/SiteSummary'
import { useHistoryData } from './hooks/useHistoryData'

function App() {
  const { entries, isLoading, error, loadFromFile, loadSample, clearData } = useHistoryData()
  const [searchQuery, setSearchQuery] = useState('')
  const [dateRange, setDateRange] = useState({ start: '', end: '' })

  const filteredEntries = entries.filter(entry => {
    if (searchQuery) {
      const q = searchQuery.toLowerCase()
      const matchesSearch = entry.title.toLowerCase().includes(q) || entry.url.toLowerCase().includes(q)
      if (!matchesSearch) return false
    }

    if (dateRange.start) {
      const start = new Date(dateRange.start)
      const entryDate = new Date(entry.timestamp)
      if (entryDate < start) return false
    }

    if (dateRange.end) {
      const end = new Date(dateRange.end + 'T23:59:59')
      const entryDate = new Date(entry.timestamp)
      if (entryDate > end) return false
    }

    return true
  })

  return (
    <div className="app">
      <Header onDelete={clearData} hasData={entries.length > 0} />
      <main className="app-main">
        {error && <div className="error-banner">{error}</div>}
        {isLoading && <div className="loading">Processing file...</div>}

        {entries.length === 0 && !isLoading && (
          <FileUpload onFileSelect={loadFromFile} onLoadSample={loadSample} />
        )}

        {entries.length > 0 && (
          <>
            <div className="controls-row">
              <SearchBar onSearch={setSearchQuery} />
              <DateFilter onDateRangeChange={setDateRange} />
            </div>
            <div className="content-layout">
              <aside className="content-sidebar">
                <SiteSummary entries={filteredEntries} />
              </aside>
              <div className="content-main">
                <Timeline entries={filteredEntries} />
                {filteredEntries.length === 0 && (
                  <div className="no-results">No entries match your search or filters.</div>
                )}
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  )
}

export default App