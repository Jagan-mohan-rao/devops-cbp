
import { useState } from 'react';
import { add, isValidEmail } from './utils/calculator.js';

const testCases = [
  {
    name: 'Addition Test',
    description: 'Check whether 2 + 3 equals 5',
    run: () => add(2, 3) === 5,
  },
  {
    name: 'Valid Email Test',
    description: 'Check student@example.com',
    run: () => isValidEmail('student@example.com') === true,
  },
  {
    name: 'Invalid Email Test',
    description: 'Reject studentexample.com',
    run: () => isValidEmail('studentexample.com') === false,
  },
];

function App() {
  const [results, setResults] = useState([]);
  const [hasRun, setHasRun] = useState(false);

  function runTests() {
    const newResults = testCases.map((test) => {
      try {
        const passed = test.run();

        return {
          name: test.name,
          description: test.description,
          passed,
          message: passed ? 'Passed' : 'Failed',
        };
      } catch (error) {
        return {
          name: test.name,
          description: test.description,
          passed: false,
          message: error.message,
        };
      }
    });

    setResults(newResults);
    setHasRun(true);
  }

  const passedCount = results.filter((test) => test.passed).length;
  const failedCount = results.length - passedCount;

  return (
    <main style={styles.page}>
      <header style={styles.header}>
        <div style={styles.logo}>CI/CD</div>
        <div>
          <h1 style={styles.title}> DevOps Quality Dashboard</h1>
          <p style={styles.subtitle}>
              Automated Code Quality and Deployment Using GitHub Actions
          </p>
        </div>
      </header>

      <section style={styles.card}>
        <h2> Test Runner</h2>
        <p style={styles.description}>
          
        </p>

        <button onClick={runTests} style={styles.button}>
          Run Demo Tests
        </button>

        {hasRun && (
          <div style={styles.results}>
            <h3>Test Results</h3>

            <div style={styles.summary}>
              <span>Passed: {passedCount}</span>
              <span>Failed: {failedCount}</span>
            </div>

            {results.map((test) => (
              <div key={test.name} style={styles.testRow}>
                <div>
                  <strong>{test.name}</strong>
                  <p style={styles.description}>{test.description}</p>
                </div>

                <span
                  style={{
                    ...styles.badge,
                    background: test.passed ? '#dcfce7' : '#fee2e2',
                    color: test.passed ? '#166534' : '#991b1b',
                  }}
                >
                  {test.message}
                </span>
              </div>
            ))}

            <h3 style={{
              color: failedCount === 0 ? '#15803d' : '#b91c1c',
            }}>
              {failedCount === 0
                ? 'All demo tests passed!'
                : 'Some demo tests failed.'}
            </h3>
          </div>
        )}
      </section>

      <section style={styles.card}>
        <h2>CI/CD Pipeline</h2>

        {[
          ['01', 'Source Code', 'GitHub repository'],
          ['02', 'Code Quality', 'ESLint'],
          ['03', 'Automated Tests', 'Vitest'],
          ['04', 'Production Build', 'Vite'],
          ['05', 'Deployment', 'GitHub Pages'],
        ].map(([number, title, tool]) => (
          <div key={number} style={styles.pipelineRow}>
            <span style={styles.number}>{number}</span>
            <div>
              <strong>{title}</strong>
              <p style={styles.description}>{tool}</p>
            </div>
          </div>
        ))}

        <p style={styles.note}>
          The pipeline status must be verified in GitHub Actions.
          These labels describe the workflow; they do not report
          live GitHub status.
        </p>
      </section>

      <footer style={styles.footer}>
        DevOps CBP Project · React · Vitest · GitHub Actions
      </footer>
    </main>
  );
}

const styles = {
  page: {
    minHeight: '100vh',
    background: '#0f172a',
    color: '#f8fafc',
    padding: '32px 20px',
    fontFamily: 'Arial, sans-serif',
    boxSizing: 'border-box',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: 16,
    maxWidth: 850,
    margin: '0 auto 28px',
  },
  logo: {
    background: '#7c3aed',
    padding: 16,
    borderRadius: 12,
    fontWeight: 'bold',
  },
  title: {
    margin: 0,
    fontSize: 28,
  },
  subtitle: {
    color: '#cbd5e1',
    lineHeight: 1.5,
  },
  card: {
    maxWidth: 810,
    margin: '0 auto 22px',
    padding: 24,
    border: '1px solid #334155',
    borderRadius: 16,
    background: '#1e293b',
    boxSizing: 'border-box',
  },
  description: {
    color: '#cbd5e1',
    fontSize: 14,
    lineHeight: 1.5,
  },
  button: {
    background: '#7c3aed',
    color: '#fff',
    border: 0,
    borderRadius: 8,
    padding: '12px 20px',
    cursor: 'pointer',
    fontSize: 16,
    fontWeight: 'bold',
  },
  results: {
    marginTop: 24,
  },
  summary: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 20,
    padding: 16,
    background: '#0f172a',
    borderRadius: 8,
  },
  testRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
    padding: '14px 0',
    borderBottom: '1px solid #334155',
  },
  badge: {
    padding: '7px 12px',
    borderRadius: 20,
    fontSize: 13,
    fontWeight: 'bold',
    whiteSpace: 'nowrap',
  },
  pipelineRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 16,
    padding: '12px 0',
    borderBottom: '1px solid #334155',
  },
  number: {
    background: '#334155',
    padding: 10,
    borderRadius: 8,
    fontWeight: 'bold',
  },
  note: {
    color: '#fbbf24',
    fontSize: 13,
    lineHeight: 1.6,
    marginTop: 20,
  },
  footer: {
    textAlign: 'center',
    color: '#94a3b8',
    padding: 20,
    fontSize: 13,
  },
};

export default App;
