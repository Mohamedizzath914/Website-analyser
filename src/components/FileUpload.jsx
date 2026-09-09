import { useRef, useState } from 'react'

function FileUpload({ onFileSelect, onLoadSample }) {
  const inputRef = useRef(null)
  const [dragOver, setDragOver] = useState(false)
  const [fileName, setFileName] = useState(null)

  function handleClick() {
    inputRef.current?.click()
  }

  function handleFile(file) {
    if (!file) return
    setFileName(file.name)
    onFileSelect(file)
  }

  function handleInputChange(e) {
    handleFile(e.target.files[0])
  }

  function handleDragOver(e) {
    e.preventDefault()
    setDragOver(true)
  }

  function handleDragLeave() {
    setDragOver(false)
  }

  function handleDrop(e) {
    e.preventDefault()
    setDragOver(false)
    const file = e.dataTransfer.files[0]
    if (file) handleFile(file)
  }

  return (
    <div>
      <div
        className={`upload-zone${dragOver ? ' upload-zone--drag' : ''}`}
        onClick={handleClick}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleClick() }}
        aria-label="Upload browser history file"
      >
        <div className="upload-zone-icon">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <path d="M24 4L24 32M24 4L16 12M24 4L32 12" stroke="#c7c7cc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 28V40C8 41.1046 8.89543 42 10 42H38C39.1046 42 40 41.1046 40 40V28" stroke="#c7c7cc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <p className="upload-zone-text">
          {fileName ? `File: ${fileName}` : 'Drop your CSV or JSON file here, or click to browse'}
        </p>
        <p className="upload-zone-hint">
          Supports .csv and .json files from browser history exports
        </p>
        <input
          ref={inputRef}
          type="file"
          accept=".csv,.json"
          onChange={handleInputChange}
          style={{ display: 'none' }}
        />
      </div>
      <button className="sample-btn" onClick={onLoadSample}>
        Load Sample Data
      </button>
    </div>
  )
}

export default FileUpload