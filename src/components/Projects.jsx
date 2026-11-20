import BookingDemo from "./BookingDemo";
import VoiceStudioDemo from "./VoiceStudioDemo";

export default function Projects() {
  return (
    <>
      <section id="work">
        <div className="section-head">
          <div>
            <span className="mono">{"01 / Selected work"}</span>
            <h2>{"Built to work. Built to last."}</h2>
          </div>
          <p>
            {
              "Production-grade systems and personal projects exploring real-time AI, distributed architecture, and resilient backends."
            }
          </p>
        </div>

        {/* 01: Voice AI Studio */}
        <article className="project">
          <VoiceStudioDemo />
          <div className="project-copy">
            <span className="mono">{"01 — Real-Time Voice AI & RAG"}</span>
            <h3>{"Voice Studio"}</h3>
            <p>
              {
                "An end-to-end conversational Voice AI platform powered by a Python real-time voice worker for sub-second audio pipelines (STT, LLM inference with vector RAG retrieval, and TTS) over WebRTC."
              }
            </p>
            <p>
              {
                "Engineered with a React + Material UI studio interface, Express and Better Auth session security, PostgreSQL and Prisma persistence, and customizable agent personalities."
              }
            </p>
            <div className="tags">
              <span>{"Python"}</span>
              <span>{"WebRTC"}</span>
              <span>{"RAG & Vector"}</span>
              <span>{"FastAPI"}</span>
              <span>{"React"}</span>
              <span>{"Express"}</span>
              <span>{"Better Auth"}</span>
              <span>{"PostgreSQL"}</span>
              <span>{"Prisma"}</span>
            </div>
            <div className="project-actions">
              <a
                className="project-link"
                href="https://voice-ai-k37a.onrender.com/login"
                target="_blank"
                rel="noopener"
              >
                {"Try live demo ↗"}
              </a>
              <a
                className="project-link secondary"
                href="https://github.com/Naveen5676/Voice-AI"
                target="_blank"
                rel="noopener"
              >
                {"GitHub repository ↗"}
              </a>
            </div>
          </div>
        </article>

        {/* 02: TicketFlow */}
        <article className="project">
          <BookingDemo />
          <div className="project-copy">
            <span className="mono">{"02 — Distributed systems"}</span>
            <h3>{"TicketFlow"}</h3>
            <p>
              {
                "An event booking system built around six independent services. Redis distributed locks protect seat reservations, while RabbitMQ keeps confirmations and notifications moving asynchronously."
              }
            </p>
            <div className="tags">
              <span>{"Node.js"}</span>
              <span>{"MongoDB"}</span>
              <span>{"Redis"}</span>
              <span>{"RabbitMQ"}</span>
              <span>{"Docker"}</span>
            </div>
            <p>
              {
                "Designed around concurrent bookings, independent services, and faster reads through indexing and caching."
              }
            </p>
            <a
              className="project-link"
              href="https://github.com/Naveen5676"
              target="_blank"
              rel="noopener"
            >
              {"Explore GitHub profile ↗"}
            </a>
          </div>
        </article>

        {/* 03: Dev Tinder */}
        <article className="project">
          <div className="project-visual dev-visual">
            <div className="profile-stack">
              <span className="mono">{"Dev Tinder / Connection flow"}</span>
              <div className="avatar">{"</>"}</div>
              <h4>{"Meet your next collaborator."}</h4>
              <span className="mono">{"Discover · Connect · Build"}</span>
              <div className="connection">
                {"○ Profile → Request → Connection"}
              </div>
            </div>
          </div>
          <div className="project-copy">
            <span className="mono">{"03 — Full-stack application"}</span>
            <h3>{"Dev Tinder"}</h3>
            <p>
              {
                "A networking platform for developers, with profile discovery, connection requests, and a personalized feed."
              }
            </p>
            <p>
              {
                "Built REST APIs and indexed MongoDB schemas; implemented JWT authentication, bcrypt password hashing, cookie-based sessions, and protected routes."
              }
            </p>
            <div className="tags">
              <span>{"React"}</span>
              <span>{"Redux Toolkit"}</span>
              <span>{"Express"}</span>
              <span>{"MongoDB"}</span>
              <span>{"JWT"}</span>
            </div>
            <a
              className="project-link"
              href="https://github.com/Naveen5676"
              target="_blank"
              rel="noopener"
            >
              {"Explore GitHub profile ↗"}
            </a>
          </div>
        </article>
      </section>
    </>
  );
}
