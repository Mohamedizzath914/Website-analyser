import { useState } from 'react'

function DateFilter({ onDateRangeChange }) {
  const [start, setStart] = useState('')
  const [end, setEnd] = useState('')

  function handleStart(e) {
    const val = e.target.value
    setStart(val)
    onDateRangeChange({ start: val, end })
  }

  function handleEnd(e) {
    const val = e.target.value
    setEnd(val)
    onDateRangeChange({ start, end: val })
  }

  return (
    <div className="date-filter">
      <div className="date-field">
        <label className="date-label" htmlFor="date-from">From</label>
        <input
          id="date-from"
          type="date"
          className="date-input"
          value={start}
          onChange={handleStart}
          aria-label="Filter from date"
        />
      </div>
      <div className="date-field">
        <label className="date-label" htmlFor="date-to">To</label>
        <input
          id="date-to"
          type="date"
          className="date-input"
          value={end}
          onChange={handleEnd}
          aria-label="Filter to date"
        />
      </div>
    </div>
  )
}

export default DateFilter