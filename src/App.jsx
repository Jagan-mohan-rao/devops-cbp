import { useState } from 'react';
import { add, isValidEmail } from './utils/calculator.js';

const testCases = [
  {
    name: 'Addition Test',
    description: 'Verify that 2 + 3 equals 5',
    file: 'calculator.test.js',
    run: () => add(2, 3) === 5,
  },
  {
    name: 'Valid Email Test',
    description: 'Accept student@example.com',
    file: 'calculator.test.js',
    run: () => isValidEmail('student@example.com') === true,
  },
  {
    name: 'Invalid Email Test',
    description: 'Reject studentexample.com',
    file: 'calculator.test.js',
    run: () => isValidEmail('studentexample.com') === false,
  },
];

const pipelineStages = [
  { number: '01', name: 'Checkout Code', detail: 'Fetch repository source' },
  { number: '02', name: 'Install Dependencies', detail: 'npm ci' },
  { number: '03', name: 'Code Quality', detail: 'ESLint validation' },
  { number: '04', name: 'Automated Tests', detail: 'Vitest test suite' },
  { number: '05', name: 'Production Build', detail: 'Vite build' },
  { number: '06', name: 'Deploy Website', detail: 'GitHub Pages' },
];

function App() {
  const [results, setResults] = useState([]);
  const [hasRun, setHasRun] = useState(false);

  function runTests() {
    const nextResults = testCases.map((test) => {
      try {
        const passed = test.run();
        return {
          name: test.name,
          description: test.description,
          passed,
          message: passed ? 'PASSED' : 'FAILED',
        };
      } catch (error) {
        return {
          name: test.name,
          description: test.description,
          passed: false,
          message: error.message || 'Test error',
        };
      }
    });

    setResults(nextResults);
    setHasRun(true);
  }

  const passedCount = results.filter((test) => test.passed).length;
  const failedCount = results.length - passedCount;

  const colors = {
    background: '#080d19',
    panel: '#111a2b',
    border: '#26344a',
    muted: '#9aabc3',
    text: '#f1f5f9',
    purple: '#a78bfa',
    green: '#4ade80',
    red: '#fb7185',
  };

  const styles = {
    page: {
      minHeight: '100vh',
      background: colors.background,
      color: colors.text,
      fontFamily: 'Inter, Segoe UI, Arial, sans-serif',
      padding: '28px 20px',
      boxSizing: 'border-box',
    },
    container: {
      maxWidth: 1120,
      margin: '0 auto',
    },
    topbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 16,
      borderBottom: `1px solid ${colors.border}`,
      paddingBottom: 20,
      marginBottom: 35,
    },
    brand: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
    },
    logo: {
      width: 46,
      height: 46,
      display: 'grid',
      placeItems: 'center',
      borderRadius: 13,
      background: '#6d28d9',
      fontWeight: 800,
      fontSize: 13,
      letterSpacing: 1,
    },
    eyebrow: {
      color: colors.purple,
      textTransform: 'uppercase',
      letterSpacing: 2,
      fontSize: 11,
      fontWeight: 800,
      margin: '0 0 8px',
    },
    title: {
      fontSize: 'clamp(27px, 5vw, 43px)',
      lineHeight: 1.15,
      letterSpacing: -1.2,
      margin: '0 0 14px',
    },
    muted: {
      color: colors.muted,
      lineHeight: 1.7,
      fontSize: 14,
    },
    tag: {
      border: '1px solid #35516b',
      background: '#142337',
      color: '#93c5fd',
      borderRadius: 20,
      padding: '8px 12px',
      fontSize: 12,
      fontWeight: 700,
    },
    hero: {
      padding: '10px 0 30px',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
      gap: 16,
      margin: '22px 0 30px',
    },
    panel: {
      background: colors.panel,
      border: `1px solid ${colors.border}`,
      borderRadius: 16,
      padding: 22,
      boxSizing: 'border-box',
      minWidth: 0,
    },
    statLabel: {
      color: colors.muted,
      fontSize: 13,
      marginBottom: 12,
    },
    statValue: {
      fontSize: 28,
      fontWeight: 800,
      margin: '0 0 8px',
    },
    sectionTitle: {
      fontSize: 20,
      margin: '0 0 8px',
    },
    button: {
      background: '#7c3aed',
      color: '#fff',
      border: '1px solid #8b5cf6',
      borderRadius: 10,
      padding: '13px 18px',
      cursor: 'pointer',
      fontSize: 14,
      fontWeight: 800,
    },
    secondaryButton: {
      background: '#1e293b',
      color: colors.text,
      border: `1px solid ${colors.border}`,
      borderRadius: 9,
      padding: '10px 14px',
      cursor: 'pointer',
      fontSize: 13,
      fontWeight: 700,
    },
    stage: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '15px 0',
      borderBottom: `1px solid ${colors.border}`,
    },
    stageNumber: {
      flexShrink: 0,
      width: 38,
      height: 38,
      display: 'grid',
      placeItems: 'center',
      background: '#202c43',
      borderRadius: 10,
      color: colors.purple,
      fontWeight: 800,
      fontSize: 12,
    },
    badge: {
      flexShrink: 0,
      padding: '6px 9px',
      borderRadius: 7,
      fontSize: 10,
      fontWeight: 800,
      letterSpacing: 0.5,
    },
    testRow: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 14,
      padding: '16px 0',
      borderBottom: `1px solid ${colors.border}`,
    },
    note: {
      background: '#2b2414',
      border: '1px solid #655020',
      color: '#fde68a',
      borderRadius: 10,
      padding: 14,
      fontSize: 12,
      lineHeight: 1.7,
      marginTop: 20,
    },
    footer: {
      textAlign: 'center',
      color: '#718198',
      fontSize: 12,
      lineHeight: 1.8,
      padding: '35px 0 10px',
    },
  };

  const badgeStyle = (passed) => ({
    ...styles.badge,
    background: passed ? '#123526' : '#451e2b',
    color: passed ? colors.green : colors.red,
  });

  return (
    <main style={styles.page}>
      <div style={styles.container}>
        <header style={styles.topbar}>
          <div style={styles.brand}>
            <div style={styles.logo}>CI/CD</div>
            <div>
              <div style={{ fontWeight: 800, fontSize: 16 }}>
                DevOps Quality
              </div>
              <div style={{ color: colors.muted, fontSize: 12, marginTop: 4 }}>
                Continuous Integration & Deployment
              </div>
            </div>
          </div>
          <span style={styles.tag}>● React + Vite + GitHub Actions</span>
        </header>

        <section style={styles.hero}>
          <p style={styles.eyebrow}> Project Dashboard</p>
          <h1 style={styles.title}>
            Automated Code Quality
            <br />
            <span style={{ color: colors.purple }}>
              and Deployment
            </span>
          </h1>
          <p style={{ ...styles.muted, maxWidth: 720, fontSize: 15 }}>
            A CI/CD workflow that validates source code, runs automated tests,
            builds the application, and deploys the website through GitHub
            Actions.
          </p>
        </section>

        <section style={styles.grid}>
          <div style={styles.panel}>
            <div style={styles.statLabel}>AUTOMATION PLATFORM</div>
            <p style={styles.statValue}>GitHub Actions</p>
            <div style={styles.muted}>Workflow orchestration</div>
          </div>
          <div style={styles.panel}>
            <div style={styles.statLabel}>BROWSER DEMO TESTS</div>
            <p style={styles.statValue}>
              {hasRun ? `${passedCount}/${results.length}` : '3'}
            </p>
            <div style={styles.muted}>
              {hasRun ? 'Tests passed in the last demo run' : 'Ready to run'}
            </div>
          </div>
          <div style={styles.panel}>
            <div style={styles.statLabel}>LAST DEMO RESULT</div>
            <p
              style={{
                ...styles.statValue,
                color: !hasRun
                  ? colors.purple
                  : failedCount === 0
                    ? colors.green
                    : colors.red,
              }}
            >
              {!hasRun ? 'NOT RUN' : failedCount === 0 ? 'PASSED' : 'FAILED'}
            </p>
            <div style={styles.muted}>Interactive browser checks</div>
          </div>
        </section>

        <section style={{ ...styles.panel, marginBottom: 22 }}>
          <p style={styles.eyebrow}>Workflow Overview</p>
          <h2 style={styles.sectionTitle}>The CI/CD pipeline</h2>
          <p style={styles.muted}>
            Each stage contributes to a repeatable quality and deployment
            process.
          </p>

          {pipelineStages.map((stage) => (
            <div key={stage.number} style={styles.stage}>
              <div style={styles.stageNumber}>{stage.number}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: 14 }}>
                  {stage.name}
                </div>
                <div
                  style={{
                    color: colors.muted,
                    fontSize: 12,
                    marginTop: 5,
                  }}
                >
                  {stage.detail}
                </div>
              </div>
              <span
                style={{
                  ...styles.badge,
                  background: '#202c43',
                  color: '#cbd5e1',
                }}
              >
                WORKFLOW
              </span>
            </div>
          ))}

          <p style={{ ...styles.muted, fontSize: 12, marginBottom: 0 }}>
            These are pipeline stages; the actual run results are in your repository Actions tab.
          </p>
        </section>
        <section style={styles.panel}>
          <p style={styles.eyebrow}>Automated Test Report</p>
          <h2 style={styles.sectionTitle}>Test Cases</h2>

          <p style={styles.muted}>
            Run these checks in the browser. The same cases are also executed by
            Vitest in the GitHub Actions workflow.
          </p>

          <button type="button" style={styles.button} onClick={runTests}>
            Run tests
          </button>

          {testCases.map((test, index) => {
            const result = results[index];

            return (
              <div key={test.name} style={styles.testRow}>
                <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
                  <div style={styles.stageNumber}>
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 14 }}>
                      {test.name}
                    </div>
                    <div
                      style={{
                        color: colors.muted,
                        fontSize: 12,
                        marginTop: 6,
                      }}
                    >
                      {test.description}
                    </div>
                    <div
                      style={{
                        color: colors.purple,
                        fontSize: 11,
                        marginTop: 5,
                      }}
                    >
                      {test.file}
                    </div>
                  </div>
                </div>

                <span
                  style={
                    result
                      ? badgeStyle(result.passed)
                      : {
                          ...styles.badge,
                          background: '#202c43',
                          color: '#cbd5e1',
                        }
                  }
                >
                  {result?.message ?? 'NOT RUN'}
                </span>
              </div>
            );
          })}

          <div style={styles.note}>
            Open GitHub repository → Actions → latest workflow run → automated
            test step
          </div>
        </section>

     

        <footer style={styles.footer}>
          <div style={{ fontWeight: 700, color: '#cbd5e1' }}>
            Automated Code Quality and Deployment Using GitHub Actions
          </div>
          <div> React · ESLint · Vitest · Vite · GitHub Pages</div>
        </footer>
      </div>
    </main>
  );
}

export default App;