const EXPERIENCE = [
  {
    company: "Techy Birds",
    role: "Web Development Intern",
    location: "Gujarat, India",
    period: "Jan 2024 – May 2024",
    bullets: [
      "Engineered a RESTful portfolio platform using CodeIgniter MVC, React, MySQL, JavaScript, and Bootstrap.",
      "Accelerated page load speed by 30% by optimizing Redis caching, CDN delivery, SQL queries, and async AJAX.",
      "Shipped secure cloud releases using Docker, AWS EC2/RDS/S3, GitHub CI/CD, JWT, and HTTPS.",
    ],
    tags: ["CodeIgniter", "React", "MySQL", "Redis", "Docker", "AWS EC2/S3", "GitHub CI/CD", "JWT"],
  },
  {
    company: "UniQual iTech",
    role: "Android Development Intern",
    location: "Gujarat, India",
    period: "Jun 2023 – Jul 2023",
    bullets: [
      "Developed an Item List app with <200ms CRUD operations using Java, Android Studio, RecyclerView, and ViewModel.",
      "Boosted scroll performance by 40% across 100+ items with RecyclerView diffing, lazy loading, and multithreading.",
      "Reduced memory usage by 20% with reliable offline storage via Room DB and SharedPreferences.",
    ],
    tags: ["Java", "Android Studio", "RecyclerView", "Room DB", "MVVM", "SharedPreferences"],
  },
];

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="exp-heading">
      <div className="container">
        <div className="section-marker">// 04 — experience</div>
        <h2 id="exp-heading" className="section-title">Where I&apos;ve worked.</h2>
        <p className="section-sub">
          Industry experience building web platforms and mobile apps shipping production code from day one.
        </p>

        <div className="exp-grid">
          {EXPERIENCE.map((job) => (
            <article key={job.company} className="exp-card">
              <div className="exp-card-body">
                <h3 className="exp-company">{job.company}</h3>
                <p className="exp-role">{job.role}</p>
                <p className="exp-location">{job.location}</p>
                <ul className="exp-bullets" aria-label={`Responsibilities at ${job.company}`}>
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <div className="tag-row" role="list" aria-label="Technologies used">
                  {job.tags.map((t) => (
                    <span className="tag" key={t} role="listitem">{t}</span>
                  ))}
                </div>
              </div>
              <div className="edu-date">{job.period}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
