"use client";

import { useState } from "react";

const categories = [
  {
    label: "Frontend",
    skills: [
      "JavaScript", "TypeScript", "React", "Next.js", "Angular",
      "Redux", "Redux Thunk", "HTML5", "CSS3", "SCSS", "Sass",
      "Tailwind CSS", "Bootstrap", "Material Design", "jQuery", "Three.js",
    ],
  },
  {
    label: "Backend",
    skills: [
      "Node.js", "Express.js", "NestJS", "Go", "Java",
      "GraphQL", "RESTful API",
    ],
  },
  {
    label: "Database",
    skills: ["MongoDB", "SQL", "Redis", "Firebase"],
  },
  {
    label: "Mobile",
    skills: ["Android"],
  },
  {
    label: "DevOps",
    skills: ["Docker", "GitHub", "GitHub CI/CD", "CircleCI"],
  },
  {
    label: "Concepts",
    skills: [
      "Microservices", "Progressive Web Apps", "Isomorphic React",
      "Frontend Caching", "Backend Caching", "Push Notifications",
      "Offline Capabilities", "SEO",
    ],
  },
];

export default function Skills() {
  const [active, setActive] = useState<string | null>(null);

  const visibleSkills = active
    ? categories.find((c) => c.label === active)?.skills ?? []
    : categories.flatMap((c) => c.skills);

  return (
    <div className="mil-container mil-p-0-90" id="skills">
      <div className="row">
        <div className="col-xl-8 mil-mb30">
          <h2 className="mil-fs24 mil-mb30 mil-up">Coding Skills</h2>
        </div>

        <div className="col-12 mil-mb30 mil-up">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            <button
              onClick={() => setActive(null)}
              style={{
                padding: "6px 18px",
                borderRadius: "20px",
                border: "none",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "0.5px",
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "all 0.3s",
                background: !active ? "#FF4C33" : "transparent",
                color: !active ? "#fff" : "#737373",
              }}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat.label}
                onClick={() => setActive(active === cat.label ? null : cat.label)}
                style={{
                  padding: "6px 18px",
                  borderRadius: "20px",
                  border: "none",
                  fontSize: "13px",
                  fontWeight: 600,
                  letterSpacing: "0.5px",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  transition: "all 0.3s",
                  background: active === cat.label ? "#FF4C33" : "transparent",
                  color: active === cat.label ? "#fff" : "#737373",
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="col-12 mil-up">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              transition: "all 0.3s",
            }}
          >
            {visibleSkills.map((skill) => (
              <span
                key={skill}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "10px 22px",
                  borderRadius: "30px",
                  fontSize: "14px",
                  fontWeight: 500,
                  background: "rgba(29, 29, 29, 0.04)",
                  border: "1px solid rgba(29, 29, 29, 0.08)",
                  color: "#1D1D1D",
                  transition: "all 0.3s",
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
