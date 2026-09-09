function Timeline({ entries }) {
  if (!entries || entries.length === 0) return null

  const sorted = [...entries].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))

  function formatTime(iso) {
    const d = new Date(iso)
    return d.toLocaleString(undefined, {
      month: 'short', day: 'numeric', year: 'numeric',
      hour: '2-digit', minute: '2-digit'
    })
  }

  function formatDuration(seconds) {
    if (!seconds) return ''
    if (seconds < 60) return `${Math.round(seconds)}s`
    const mins = Math.floor(seconds / 60)
    const secs = Math.round(seconds % 60)
    return `${mins}m ${secs}s`
  }

  return (
    <div className="timeline">
      <h2 className="timeline-heading">History Timeline</h2>
      {sorted.map(entry => (
        <div key={entry.id} className="timeline-card">
          <div className="timeline-card-top">
            <span className="timeline-title">{entry.title || '(no title)'}</span>
            <span className="timeline-time">{formatTime(entry.timestamp)}</span>
          </div>
          <div className="timeline-url">{entry.url}</div>
          <div className="timeline-meta">
            {entry.visitDuration > 0 && (
              <span className="timeline-meta-item">Duration: {formatDuration(entry.visitDuration)}</span>
            )}
            {entry.visitCount > 0 && (
              <span className="timeline-meta-item">Visits: {entry.visitCount}</span>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Timeline