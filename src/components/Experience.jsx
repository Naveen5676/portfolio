import { useState } from "react";
const items = [
  {
    title: "Reusable interfaces, independent modules",
    description:
      "Built a shared React, TypeScript, and Storybook UI library, reducing duplicate component code by an estimated 30%. Worked across 4–5 micro-frontend modules to support parallel development and independent deployments.",
  },
  {
    title: "A faster frontend foundation",
    description:
      "Migrated legacy Angular applications to Next.js using server-side rendering and optimized bundles. Standardized responsive layouts with Tailwind CSS and managed complex forms with Redux, React Hook Form, and Zod.",
  },
  {
    title: "Services that keep work moving",
    description:
      "Built REST APIs using Node.js and Express, with standardized authentication, payload validation, and error handling. Used Redis caching and RabbitMQ messaging to reduce database load and decouple services.",
  },
  {
    title: "Performance through delivery",
    description:
      "Used Node.js clustering and worker threads for CPU-intensive processing. Configured CI/CD pipelines to streamline integration and deployment across frontend and backend services.",
  },
];
export default function Experience() {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <>
      <section id="experience">
        <div className="section-head">
          <div>
            <span className="mono">{"02 / Experience"}</span>
            <h2>{"From UI details to delivery."}</h2>
          </div>
        </div>
        <div className="experience">
          <div>
            <span className="mono">{"Jun 2024 — Sep 2026 · Mumbai"}</span>
            <h3>{"Software Engineer"}</h3>
            <span className="company">{"Helo.ai ↗"}</span>
            <p className="intro" style={{ fontSize: "14px" }}>
              {
                "Building shared frontend foundations and backend services for a product team."
              }
            </p>
          </div>
          <div>
            {items.map((item, index) => (
              <details
                className="details"
                key={item.title}
                open={openIndex === index}
              >
                <summary
                  onClick={(event) => {
                    event.preventDefault();
                    setOpenIndex(openIndex === index ? null : index);
                  }}
                >
                  {item.title}
                </summary>
                <p>{item.description}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
