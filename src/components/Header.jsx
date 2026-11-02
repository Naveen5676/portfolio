export default function Header() {
  return (
    <>
      <header>
        <a className="brand" href="#">
          {"Naveen Wali"}
          <span>{"↗"}</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#work">{"Selected work"}</a>
          <a href="#experience">{"Experience"}</a>
          <a href="#about">{"About"}</a>
          <a className="nav-contact" href="#contact">
            {"Let’s talk ↗"}
          </a>
        </nav>
      </header>
    </>
  );
}
