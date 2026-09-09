function SiteSummary({ entries }) {
  if (!entries || entries.length === 0) return null

  const siteMap = {}

  entries.forEach(entry => {
    try {
      const hostname = new URL(entry.url).hostname.replace(/^www\./, '')
      if (!siteMap[hostname]) {
        siteMap[hostname] = { hostname, count: 0, totalDuration: 0 }
      }
      siteMap[hostname].count += entry.visitCount || 1
      siteMap[hostname].totalDuration += entry.visitDuration || 0
    } catch {
      // skip invalid URLs
    }
  })

  const sorted = Object.values(siteMap).sort((a, b) => b.count - a.count)

  return (
    <div className="site-summary">
      <h2 className="site-summary-heading">Most Visited Sites</h2>
      <div className="site-summary-list">
        {sorted.map(site => (
          <div key={site.hostname} className="site-summary-row">
            <span className="site-summary-name">{site.hostname}</span>
            <span className="site-summary-count">{site.count} visits</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SiteSummary