import { useState } from 'react';
import UseStateExamples from './UseStateExamples';
import UseEffectExamples from './UseEffectExamples';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('useState');

  return (
    <div style={{minHeight: '100vh', backgroundColor: 'var(--background-color)'}}>
      <div style={{
        backgroundColor: 'var(--card-bg)',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        marginBottom: '2rem',
        borderBottom: '1px solid var(--border-color)'
      }}>
        <div className="container">
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem'
          }}>
            <button
              onClick={() => setActiveTab('useState')}
              style={{
                padding: '1rem 0',
                border: 'none',
                background: 'none',
                borderBottom: `2px solid ${activeTab === 'useState' ? 'var(--primary-color)' : 'transparent'}`,
                color: activeTab === 'useState' ? 'var(--primary-color)' : 'var(--text-muted)',
                fontWeight: 500,
                fontSize: '0.875rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseOver={(e) => {
                if (activeTab !== 'useState') {
                  e.target.style.color = 'var(--text-color)';
                  e.target.style.borderBottomColor = 'var(--border-color)';
                }
              }}
              onMouseOut={(e) => {
                if (activeTab !== 'useState') {
                  e.target.style.color = 'var(--text-muted)';
                  e.target.style.borderBottomColor = 'transparent';
                }
              }}
            >
              useState Examples
            </button>
            <button
              onClick={() => setActiveTab('useEffect')}
              style={{
                padding: '1rem 0',
                border: 'none',
                background: 'none',
                borderBottom: `2px solid ${activeTab === 'useEffect' ? 'var(--primary-color)' : 'transparent'}`,
                color: activeTab === 'useEffect' ? 'var(--primary-color)' : 'var(--text-muted)',
                fontWeight: 500,
                fontSize: '0.875rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseOver={(e) => {
                if (activeTab !== 'useEffect') {
                  e.target.style.color = 'var(--text-color)';
                  e.target.style.borderBottomColor = 'var(--border-color)';
                }
              }}
              onMouseOut={(e) => {
                if (activeTab !== 'useEffect') {
                  e.target.style.color = 'var(--text-muted)';
                  e.target.style.borderBottomColor = 'transparent';
                }
              }}
            >
              useEffect Examples
            </button>
          </div>
        </div>
      </div>

      <main className="container">
        <div style={{padding: '1.5rem 0'}}>
          {activeTab === 'useState' ? <UseStateExamples /> : <UseEffectExamples />}
        </div>
      </main>
    </div>
  );
}

export default App;