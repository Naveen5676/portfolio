import { useState } from "react";

const items = [
  {
    title: "Backend REST APIs, Authentication & RBAC",
    description:
      "Developed robust REST APIs using Node.js and Express.js with strict request validation, structured error handling, JWT authentication, refresh-token flows, and role-based access control (RBAC) across protected endpoints.",
  },
  {
    title: "Asynchronous Messaging & Distributed Caching",
    description:
      "Implemented RabbitMQ for event-driven asynchronous inter-service communication, decoupling backend workflows previously handled via synchronous HTTP. Integrated Redis caching for frequently queried endpoints, slashing redundant database reads and significantly improving API response times.",
  },
  {
    title: "API Contracts, Integration Testing & CI/CD",
    description:
      "Established rigorous API contracts and end-to-end integration testing to validate interactions between application layers. Configured automated Jenkins CI/CD pipelines to streamline builds, testing, and continuous deployment across frontend and backend services.",
  },
  {
    title: "Micro-frontends & Shared Design System",
    description:
      "Built a centralized UI library using React.js, TypeScript, and Storybook, standardizing typed, reusable components across modules. Engineered 4–5 micro-frontend modules to support parallel team workflows and isolated deployments.",
  },
  {
    title: "SSR Modernization & Resilient State",
    description:
      "Migrated legacy Angular applications to Next.js with server-side rendering (SSR) and optimized bundling for faster initial load. Built complex multi-step forms and state flows using Redux, React Hook Form, and Zod schema validation.",
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
            <h2>{"Backend systems to refined interfaces."}</h2>
          </div>
          <p>
            {
              "Designing resilient backend services, asynchronous pipelines, and shared full-stack foundations."
            }
          </p>
        </div>
        <div className="experience">
          <div>
            <span className="mono">{"Jun 2024 — Sep 2026 · Mumbai"}</span>
            <h3>{"Software Engineer"}</h3>
            <span className="company">{"Helo.ai ↗"}</span>
            <p className="intro" style={{ fontSize: "14px" }}>
              {
                "Architecting scalable backend services, caching & event-driven messaging, and high-performance full-stack web applications."
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
