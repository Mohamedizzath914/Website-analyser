let idCounter = 0

function generateId() {
  idCounter++
  return `entry_${Date.now()}_${idCounter}`
}

function parseTimestamp(val) {
  const d = new Date(val)
  return isNaN(d.getTime()) ? null : d.toISOString()
}

function parseIntVal(val) {
  const n = parseInt(val, 10)
  return isNaN(n) ? 0 : n
}

function parseFloatVal(val) {
  const n = parseFloat(val)
  return isNaN(n) ? 0 : n
}

export function parseCSV(text) {
  const errors = []
  const lines = text.trim().split('\n')
  if (lines.length < 2) {
    return { entries: [], errors: ['CSV must have a header row and at least one data row'] }
  }

  const header = lines[0].split(',').map(h => h.trim().toLowerCase())
  const entries = []

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim()
    if (!line) continue
    const values = line.split(',').map(v => v.trim())
    const row = {}
    header.forEach((h, idx) => { row[h] = values[idx] || '' })

    const timestamp = parseTimestamp(row.timestamp)
    if (!timestamp) {
      errors.push(`Row ${i + 1}: invalid timestamp "${row.timestamp}"`)
      continue
    }

    entries.push({
      id: generateId(),
      url: row.url || '',
      title: row.title || '',
      timestamp,
      visitDuration: parseIntVal(row.visit_duration),
      visitCount: parseIntVal(row.visit_count),
    })
  }

  return { entries, errors }
}

export function parseJSON(text) {
  const errors = []
  let data

  try {
    data = JSON.parse(text)
  } catch (e) {
    return { entries: [], errors: ['Invalid JSON: ' + e.message] }
  }

  if (!Array.isArray(data)) {
    return { entries: [], errors: ['JSON must be an array of history entries'] }
  }

  const entries = []

  for (let i = 0; i < data.length; i++) {
    const item = data[i]
    if (!item.url) {
      errors.push(`Entry ${i + 1}: missing "url" field`)
      continue
    }

    const timestamp = parseTimestamp(item.timestamp)
    if (!timestamp) {
      errors.push(`Entry ${i + 1}: invalid timestamp`)
      continue
    }

    entries.push({
      id: generateId(),
      url: item.url,
      title: item.title || '',
      timestamp,
      visitDuration: parseFloatVal(item.visitDuration ?? item.visit_duration),
      visitCount: parseIntVal(item.visitCount ?? item.visit_count),
    })
  }

  return { entries, errors }
}