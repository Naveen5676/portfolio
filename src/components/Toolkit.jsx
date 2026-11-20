import { useState } from "react";

export default function Toolkit() {
  const [filter, setFilter] = useState("all");

  return (
    <>
      <section id="about">
        <div className="section-head">
          <div>
            <span className="mono">{"03 / Toolkit"}</span>
            <h2>{"The stack behind the work."}</h2>
          </div>
          <p>
            {
              "From low-latency AI agents to interactive user interfaces and resilient distributed backends."
            }
          </p>
        </div>
        <div className="toolkit-shell">
          <div className="toolkit-toolbar">
            <span className="mono">{"Explore my toolkit"}</span>
            <div
              className="toolkit-filters"
              role="group"
              aria-label="Filter skills"
            >
              <button
                className={filter === "all" ? "active" : ""}
                aria-pressed={filter === "all"}
                onClick={() => setFilter("all")}
              >
                {"All tools"}
              </button>
              <button
                className={filter === "ai" ? "active" : ""}
                aria-pressed={filter === "ai"}
                onClick={() => setFilter("ai")}
              >
                {"AI & Real-Time"}
              </button>
              <button
                className={filter === "frontend" ? "active" : ""}
                aria-pressed={filter === "frontend"}
                onClick={() => setFilter("frontend")}
              >
                {"Frontend"}
              </button>
              <button
                className={filter === "backend" ? "active" : ""}
                aria-pressed={filter === "backend"}
                onClick={() => setFilter("backend")}
              >
                {"Backend"}
              </button>
              <button
                className={filter === "delivery" ? "active" : ""}
                aria-pressed={filter === "delivery"}
                onClick={() => setFilter("delivery")}
              >
                {"Delivery"}
              </button>
            </div>
          </div>
          <div className="toolkit-cards">
            {/* 01: AI & Real-Time */}
            <article
              className="toolkit-card"
              data-category="ai"
              hidden={filter !== "all" && filter !== "ai"}
            >
              <div className="toolkit-card-top">
                <span className="toolkit-icon" aria-hidden="true">
                  {"✳"}
                </span>
                <span className="mono">{"01 / AI & Real-Time"}</span>
              </div>
              <h3>{"Conversational & grounded."}</h3>
              <p>
                {
                  "Real-time voice agents, sub-second WebRTC streams, and retrieval-augmented generation."
                }
              </p>
              <div className="toolkit-tags">
                <span>{"Python"}</span>
                <span>{"WebRTC Audio"}</span>
                <span>{"RAG Architecture"}</span>
                <span>{"Vector Databases"}</span>
                <span>{"LLM Pipelines"}</span>
                <span>{"FastAPI"}</span>
                <span>{"Speech-to-Text"}</span>
                <span>{"Text-to-Speech"}</span>
              </div>
            </article>

            {/* 02: Frontend */}
            <article
              className="toolkit-card"
              data-category="frontend"
              hidden={filter !== "all" && filter !== "frontend"}
            >
              <div className="toolkit-card-top">
                <span className="toolkit-icon" aria-hidden="true">
                  {"</>"}
                </span>
                <span className="mono">{"02 / Frontend"}</span>
              </div>
              <h3>{"Interfaces that click."}</h3>
              <p>
                {
                  "Reusable components, responsive layouts, and predictable state."
                }
              </p>
              <div className="toolkit-tags">
                <span>{"React"}</span>
                <span>{"Next.js"}</span>
                <span>{"TypeScript"}</span>
                <span>{"JavaScript"}</span>
                <span>{"Redux Toolkit"}</span>
                <span>{"Tailwind CSS"}</span>
                <span>{"Material UI"}</span>
                <span>{"React Hook Form"}</span>
                <span>{"Zod"}</span>
              </div>
            </article>

            {/* 03: Backend */}
            <article
              className="toolkit-card"
              data-category="backend"
              hidden={filter !== "all" && filter !== "backend"}
            >
              <div className="toolkit-card-top">
                <span className="toolkit-icon" aria-hidden="true">
                  {"{ }"}
                </span>
                <span className="mono">{"03 / Backend"}</span>
              </div>
              <h3>{"Systems that connect."}</h3>
              <p>{"APIs, data, caching, and asynchronous communication."}</p>
              <div className="toolkit-tags">
                <span>{"Node.js"}</span>
                <span>{"Express"}</span>
                <span>{"PostgreSQL"}</span>
                <span>{"Prisma"}</span>
                <span>{"MongoDB"}</span>
                <span>{"Redis"}</span>
                <span>{"RabbitMQ"}</span>
                <span>{"REST APIs"}</span>
                <span>{"Better Auth & JWT"}</span>
              </div>
            </article>

            {/* 04: Delivery */}
            <article
              className="toolkit-card"
              data-category="delivery"
              hidden={filter !== "all" && filter !== "delivery"}
            >
              <div className="toolkit-card-top">
                <span className="toolkit-icon" aria-hidden="true">
                  {"↗"}
                </span>
                <span className="mono">{"04 / Delivery"}</span>
              </div>
              <h3>{"Built. Tested. Shipped."}</h3>
              <p>
                {
                  "Tools for repeatable builds and a smoother path to production."
                }
              </p>
              <div className="toolkit-tags">
                <span>{"Docker"}</span>
                <span>{"Docker Compose"}</span>
                <span>{"Jenkins CI/CD"}</span>
                <span>{"Git & GitHub"}</span>
                <span>{"Render / Vercel"}</span>
                <span>{"Linux"}</span>
              </div>
            </article>
          </div>

          <div className="toolkit-learning">
            <div>
              <span className="mono">
                <i className="dot"></i>
                {"Core Focus & Evolution"}
              </span>
              <h3>{"High-performance Voice AI & Agentic RAG."}</h3>
            </div>
            <div className="ai-tools">
              <span>{"Python Voice Pipeline"}</span>
              <span>{"Vector RAG"}</span>
              <span>{"WebRTC"}</span>
              <span>{"FastAPI"}</span>
            </div>
            <span className="ai-mark" aria-hidden="true">
              {"✳"}
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
