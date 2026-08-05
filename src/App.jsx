import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const progress = Math.min(Math.abs(count) % 20, 20)

  const moodLabel =
    count === 0 ? 'Ready' : count > 0 ? 'Building momentum' : 'Cooling down'

  const handleStep = (step) => {
    setCount((currentCount) => currentCount + step)
  }

  return (
    <main className="app-shell">
      <div className="orb orb-one" aria-hidden="true" />
      <div className="orb orb-two" aria-hidden="true" />
      <div className="grid-overlay" aria-hidden="true" />

      <section className="counter-panel">
        <div className="panel-copy">
          <span className="eyebrow">Glassmorphic counter</span>
          <h1>Minimal motion. Maximum presence.</h1>
          <p>
            A bold counter experience with layered depth, soft highlights, and
            controls that feel premium from the first click.
          </p>
        </div>

        <div className="counter-card">
          <div className="card-topline">
            <span className="status-pill">{moodLabel}</span>
            <span className="mono-label">Live value</span>
          </div>

          <div className="count-wrap" aria-live="polite" aria-atomic="true">
            <span className="count-value">{count}</span>
            <span className="count-caption">Dynamic counter</span>
          </div>

          <div className="progress-shell" aria-hidden="true">
            <div className="progress-track">
              <div className="progress-fill" style={{ width: `${progress * 5}%` }} />
            </div>
            <span>{progress}/20</span>
          </div>

          <div className="actions">
            <button type="button" className="ghost-button" onClick={() => handleStep(-1)}>
              -1
            </button>
            <button type="button" className="primary-button" onClick={() => handleStep(1)}>
              +1
            </button>
            <button type="button" className="ghost-button" onClick={() => handleStep(5)}>
              +5
            </button>
          </div>

          <button type="button" className="reset-button" onClick={() => setCount(0)}>
            Reset counter
          </button>
        </div>

        <div className="feature-row">
          <article>
            <span>Layered glass</span>
            <p>Blurred panels, translucent borders, and a reflective glow.</p>
          </article>
          <article>
            <span>Responsive flow</span>
            <p>Scales cleanly from desktop hero layout to compact mobile stacking.</p>
          </article>
          <article>
            <span>Instant feedback</span>
            <p>Every action updates the value, mood, and progress indicator live.</p>
          </article>
        </div>
      </section>
    </main>
  )
}

export default App
