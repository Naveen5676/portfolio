export default function Hero() {
  return (
    <>
      <div className="hero reveal">
        <div className="eyebrow mono">
          <span>
            <i className="dot"></i>
            {"Naveen Wali / Software Engineer"}
          </span>
        </div>
        <h1>
          {"Good interfaces."}
          <br />
          <em>{"Solid foundations."}</em>
        </h1>
        <div className="hero-bottom">
          <div>
            <p className="intro">
              {
                "I build across the stack—from the details you interact with to the systems that keep everything moving."
              }
            </p>
            <div className="actions">
              <a className="button" href="#work">
                {"Explore my work "}
                <span>{"↓"}</span>
              </a>
              <a className="text-link" href="/Naveen-Wali-Resume.pdf" download>
                {"Download résumé ↗"}
              </a>
            </div>
          </div>
          <aside className="note">
            <div className="note-top mono">
              <span>{"A note on my work"}</span>
              <span>{"✳"}</span>
            </div>
            <p>
              {"Thoughtful on the surface."}
              <br />
              {"Reliable underneath."}
            </p>
            <div className="note-bottom mono">
              <span>{"React → Node → Systems"}</span>
              <span>{"NW / 01"}</span>
            </div>
          </aside>
        </div>
      </div>
      <div className="ticker mono">
        <span>{"My everyday toolkit"}</span>
        <b>{"React"}</b>
        <b>{"TypeScript"}</b>
        <b>{"Next.js"}</b>
        <b>{"Node.js"}</b>
        <b>{"MongoDB"}</b>
        <b>{"Redis"}</b>
      </div>
    </>
  );
}
