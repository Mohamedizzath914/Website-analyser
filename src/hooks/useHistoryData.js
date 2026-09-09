import { useState, useEffect } from 'react'
import { parseCSV, parseJSON } from '../utils/parser'
import { saveEntries, loadEntries, clearEntries } from '../utils/localStorage'
import sampleData from '../data/sample.json'

export function useHistoryData() {
  const [entries, setEntries] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const saved = loadEntries()
    if (saved.length > 0) {
      setEntries(saved)
    }
  }, [])

  function persistAndSet(newEntries) {
    setEntries(newEntries)
    saveEntries(newEntries)
  }

  function loadFromFile(file) {
    setIsLoading(true)
    setError(null)

    const reader = new FileReader()

    reader.onload = (e) => {
      const text = e.target.result
      const isCSV = file.name.endsWith('.csv')
      const result = isCSV ? parseCSV(text) : parseJSON(text)

      if (result.errors.length > 0) {
        setError(result.errors.join('; '))
      }

      if (result.entries.length > 0) {
        persistAndSet(result.entries)
      } else if (result.errors.length > 0) {
        setError('No valid entries found. ' + result.errors.join('; '))
      }

      setIsLoading(false)
    }

    reader.onerror = () => {
      setError('Failed to read file')
      setIsLoading(false)
    }

    reader.readAsText(file)
  }

  function loadSample() {
    setError(null)
    const entries = sampleData.map(item => ({
      ...item,
      id: `sample_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`
    }))
    persistAndSet(entries)
  }

  function clearData() {
    setEntries([])
    setError(null)
    clearEntries()
  }

  return { entries, isLoading, error, loadFromFile, loadSample, clearData }
}