import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";

const experience = [
  {
    period: "2026—NOW",
    role: "Co-Founder & Leading Engineer",
    company: "Merit Labs",
    location: "Mumbai Metropolitan Area",
    href: "https://meritlabs.ai",
    summary:
      "Building student-intelligence products that turn cognitive signals into useful, actionable guidance.",
  },
  {
    period: "2024—2026",
    role: "System Development Engineer",
    company: "Infosys — Lumen Technologies",
    location: "Minneapolis, Minnesota",
    summary:
      "Engineered network automation, Python diagnostics, CI/CD, and resilient delivery systems for Quantum Fiber.",
  },
  {
    period: "2023—2024",
    role: "Graduate Research Assistant",
    company: "Syracuse University College of Engineering and Computer Science",
    location: "Syracuse, New York",
    summary:
      "Built SmartNotes, a retrieval-aware AI workspace using Next.js, OpenAI, Pinecone, and MongoDB.",
  },
  {
    period: "2022—2024",
    role: "Student Mentor",
    company: "Syracuse University InclusiveU",
    location: "Syracuse, New York",
    href: "https://taishoffcenter.syr.edu/inclusiveu/",
    summary:
      "Supported neurodivergent students with academics, problem-solving, and independent learning strategies.",
  },
  {
    period: "2019—2020",
    role: "Machine Learning Intern",
    company: "Foxmula",
    location: "Mumbai, Maharashtra",
    summary:
      "Worked across data preparation, model training, and evaluation for practical machine-learning problems.",
  },
];

const education = [
  {
    period: "SEP 2022—MAY 2024",
    degree: "Master of Science (MS), Computer Science",
    school: "Syracuse University College of Engineering and Computer Science",
    location: "Syracuse, New York",
    note: "GO ORANGE!",
    courses: [
      "CIS 675 · Design & Analysis of Algorithms",
      "CIS 563 · Introduction to Data Science",
      "CIS 623 · Computer Architecture",
      "CIS 687 · Object Oriented Design",
      "CIS 600 · Applied Natural Language Processing",
      "CIS 655 · Structured Programming and Formal Methods",
      "CIS 581 · Introduction to Database Management Systems",
    ],
  },
  {
    period: "SEP 2018—JUL 2022",
    degree: "Bachelor of Engineering, Information Technology",
    school: "University of Mumbai · Pillai College of Engineering",
    location: "Mumbai, Maharashtra",
    note: undefined,
    courses: undefined,
  },
];

export default function Home() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#content">
        Skip to content
      </a>

      <SiteHeader />

      <main id="content">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">FOUNDER · ENGINEER · RESEARCHER</p>
            <h1 id="hero-title">
              RITIKA
              <span>RADHAKRISHNAN</span>
            </h1>
            <p className="role">
              Co-Founder &amp; Leading Engineer, <a href="https://meritlabs.ai">Merit Labs</a>
            </p>
            <p className="intro">
              Engineering and student mentorship shaped my belief that the right guidance
              can change a young person’s future. I am building AI powered tools to help
              India’s youth discover their potential &amp; move forward with confidence!
            </p>
          </div>

          <aside className="system-panel" aria-label="Current research focus">
            <div className="panel-head">
              <span>CURRENT_MISSION.SYS</span>
              <span className="online"><i aria-hidden="true" /> LIVE</span>
            </div>
            <div className="panel-body">
              <p className="panel-kicker">CURRENT RESEARCH</p>
              <p className="panel-main">Reliable vibration-current fusion under real evaluation stress.</p>
              <dl className="system-list">
                <div><dt>MODE</dt><dd>RESEARCHER</dd></div>
                <div><dt>FOCUS</dt><dd>MULTISENSOR ML</dd></div>
                <div><dt>METHOD</dt><dd>LEAKAGE-CONTROLLED</dd></div>
                <div><dt>STATUS</dt><dd>MANUSCRIPT IN PREP</dd></div>
              </dl>
              <a className="panel-link" href="#research">
                VIEW RESEARCH <span aria-hidden="true">↓</span>
              </a>
              <div className="signal" aria-hidden="true">
                <span /><span /><span /><span /><span /><span />
              </div>
            </div>
          </aside>
        </section>

        <section className="section" id="experience" aria-labelledby="experience-title">
          <header className="section-head">
            <p>[ 01 ]</p>
            <h2 id="experience-title">Experience</h2>
            <span>2019—NOW</span>
          </header>
          <div className="experience-list">
            {experience.map((item) => (
              <article className="experience-row" key={`${item.role}-${item.company}`}>
                <div className="experience-meta">
                  <time>{item.period}</time>
                  <span>{item.location}</span>
                </div>
                <div className="experience-title">
                  <h3>{item.role}</h3>
                  <p>
                    {item.href ? (
                      <a href={item.href}>{item.company} <span aria-hidden="true">↗</span></a>
                    ) : item.company}
                  </p>
                </div>
                <p className="experience-summary">{item.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section research" id="research" aria-labelledby="research-title">
          <header className="section-head">
            <p>[ 02 ]</p>
            <h2 id="research-title">Research</h2>
          </header>
          <article className="research-card">
            <div className="research-status">
              <p className="research-label">CONDITION MONITORING / MULTISENSOR ML</p>
              <span>UPDATED 28 AUG 2026</span>
            </div>
            <h3>
              Reliable Multisensor Machine Learning for Bearing Diagnosis
            </h3>
            <div className="research-copy">
              <p>
                I investigated if fusing vibration and motor-current data yields genuinely robust
                bearing-diagnosis models or merely artificially inflated results!
              </p>
              <p>
                Using the Paderborn University Dataset, I built a strict leakage free pipeline to
                separate physical bearings between training and evaluation. Then I compared single
                sensor and fusion models across unseen bearings, operating shifts and measurement
                degradation to determine their true reliability, calibration and also uncertainty.
              </p>
            </div>
            <dl className="research-metrics" aria-label="Phase 11 research highlights">
              <div><dt>60</dt><dd>FROZEN RUNS</dd></div>
              <div><dt>81</dt><dd>STRESS SCENARIOS</dd></div>
              <div><dt>16</dt><dd>NEW DIAGNOSTIC TABLES</dd></div>
              <div><dt>3</dt><dd>OUTER SPLITS</dd></div>
            </dl>
            <ul className="research-keywords" aria-label="Research methods and skills">
              <li>BEARING-WISE EVALUATION</li>
              <li>DISTRIBUTION SHIFT</li>
              <li>SIGNAL CORRUPTION</li>
              <li>CALIBRATION &amp; UNCERTAINTY</li>
              <li>CONFORMAL PREDICTION</li>
              <li>ABLATION STUDIES</li>
            </ul>
            <div className="research-foot">
              <p>ORIGINAL RESEARCH MANUSCRIPT IN PREPARATION</p>
              <span>TARGET JOURNAL · MEASUREMENT</span>
            </div>
          </article>
        </section>

        <section className="section education" id="education" aria-labelledby="education-title">
          <header className="section-head">
            <p>[ 03 ]</p>
            <h2 id="education-title">Education</h2>
          </header>
          <div className="education-list">
            {education.map((item) => (
              <article className="education-row" key={item.degree}>
                <div className="education-meta">
                  <time>{item.period}</time>
                  <span>{item.location}</span>
                </div>
                <h3>{item.degree}</h3>
                <div className="education-info">
                  <p>{item.school}</p>
                  {item.note && <span className="education-spirit">{item.note}</span>}
                  {item.courses && (
                    <details className="coursework">
                      <summary>SELECTED COURSEWORK</summary>
                      <ul>
                        {item.courses.map((course) => <li key={course}>{course}</li>)}
                      </ul>
                    </details>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
