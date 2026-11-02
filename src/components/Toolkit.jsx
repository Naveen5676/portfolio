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
              "From the first interaction to the final deployment. Explore the tools I build with."
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
                {" "}
                {"All tools"}
              </button>
              <button
                className={filter === "frontend" ? "active" : ""}
                aria-pressed={filter === "frontend"}
                onClick={() => setFilter("frontend")}
              >
                {" "}
                {"Frontend"}
              </button>
              <button
                className={filter === "backend" ? "active" : ""}
                aria-pressed={filter === "backend"}
                onClick={() => setFilter("backend")}
              >
                {" "}
                {"Backend"}
              </button>
              <button
                className={filter === "delivery" ? "active" : ""}
                aria-pressed={filter === "delivery"}
                onClick={() => setFilter("delivery")}
              >
                {" "}
                {"Delivery"}
              </button>
            </div>
          </div>
          <div className="toolkit-cards">
            <article
              className="toolkit-card"
              data-category="frontend"
              hidden={filter !== "all" && filter !== "frontend"}
            >
              <div className="toolkit-card-top">
                <span className="toolkit-icon" aria-hidden="true">
                  {"</>"}
                </span>
                <span className="mono">{"01 / Frontend"}</span>
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
                <span>{"Redux"}</span>
                <span>{"Tailwind CSS"}</span>
                <span>{"React Hook Form"}</span>
                <span>{"Zod"}</span>
              </div>
            </article>
            <article
              className="toolkit-card"
              data-category="backend"
              hidden={filter !== "all" && filter !== "backend"}
            >
              <div className="toolkit-card-top">
                <span className="toolkit-icon" aria-hidden="true">
                  {"{ }"}
                </span>
                <span className="mono">{"02 / Backend"}</span>
              </div>
              <h3>{"Systems that connect."}</h3>
              <p>{"APIs, data, caching, and asynchronous communication."}</p>
              <div className="toolkit-tags">
                <span>{"Node.js"}</span>
                <span>{"Express"}</span>
                <span>{"MongoDB"}</span>
                <span>{"SQL"}</span>
                <span>{"Redis"}</span>
                <span>{"RabbitMQ"}</span>
                <span>{"REST APIs"}</span>
                <span>{"JWT authentication"}</span>
              </div>
            </article>
            <article
              className="toolkit-card"
              data-category="delivery"
              hidden={filter !== "all" && filter !== "delivery"}
            >
              <div className="toolkit-card-top">
                <span className="toolkit-icon" aria-hidden="true">
                  {"↗"}
                </span>
                <span className="mono">{"03 / Delivery"}</span>
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
                <span>{"Git"}</span>
                <span>{"Storybook"}</span>
                <span>{"Python"}</span>
              </div>
            </article>
          </div>
          <div className="toolkit-learning">
            <div>
              <span className="mono">
                <i className="dot"></i>
                {"Currently exploring"}
              </span>
              <h3>{"The next layer: AI engineering."}</h3>
            </div>
            <div className="ai-tools">
              <span>{"FastAPI"}</span>
              <span>{"RAG"}</span>
              <span>{"Vector databases"}</span>
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
