export default function Contact() {
  return (
    <>
      <div className="contact" id="contact">
        <span className="mono">{"05 / Next conversation"}</span>
        <h2>
          {"Have something"}
          <br />
          <em>{"worth building?"}</em>
        </h2>
        <div className="contact-bottom">
          <a className="email" href="mailto:naveenwali34@gmail.com">
            {"naveenwali34@gmail.com ↗"}
          </a>
          <div className="socials">
            <a
              href="https://github.com/Naveen5676"
              target="_blank"
              rel="noopener"
            >
              {"GitHub ↗"}
            </a>
            <a
              href="https://linkedin.com/in/naveen-wali-714258227"
              target="_blank"
              rel="noopener"
            >
              {"LinkedIn ↗"}
            </a>
            <a href="/Naveen-Wali-Resume.pdf" download>
              {"Résumé ↓"}
            </a>
          </div>
        </div>
        <footer className="mono">
          <span>
            {"© "}
            <span>{new Date().getFullYear()}</span>
            {" Naveen Wali"}
          </span>
          <span>{"Care in the details. Clarity in the code."}</span>
          <a href="#">{"Back to top ↑"}</a>
        </footer>
      </div>
    </>
  );
}
