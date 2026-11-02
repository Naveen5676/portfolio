import BookingDemo from "./BookingDemo";
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
              "Personal projects exploring the practical problems behind everyday products."
            }
          </p>
        </div>
        <article className="project">
          <BookingDemo />
          <div className="project-copy">
            <span className="mono">{"01 — Distributed systems"}</span>
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
            <span className="mono">{"02 — Full-stack application"}</span>
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
