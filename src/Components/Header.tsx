const Header = () => {
  return (
    <header className="main-nav" aria-expanded="false">
      <nav className="main-nav__primary" aria-label="primary">
        <div className="main-nav__up">
          <a href="#">
            <img
              className="main-nav__logo-img"
              src="/ableton-logo.svg"
              alt="Ableton Logo"
            />
          </a>

          <button
            className="main-nav__trigger"
            aria-controls="main-nav-content"
          >
            Menu
          </button>
          <div
            id="main-nav-content"
            className="main-nav__primary-wrapper"
            aria-hidden="false"
          >
            <ul className="main-nav__link-list-primary">
              <li className="main-nav__list-item">
                <a className="list-item__link" href="#">
                  Live
                </a>
              </li>
              <li className="main-nav__list-item">
                <a className="list-item__link" href="#">
                  Push
                </a>
              </li>
              <li className="main-nav__list-item">
                <a className="list-item__link" href="#">
                  Note
                </a>
              </li>
              <li className="main-nav__list-item">
                <a className="list-item__link" href="#">
                  Link
                </a>
              </li>
              <li className="main-nav__list-item">
                <a className="list-item__link" href="#">
                  Shop
                </a>
              </li>
              <li className="main-nav__list-item">
                <a className="list-item__link" href="#">
                  Packs
                </a>
              </li>
              <li className="main-nav__list-item">
                <a className="list-item__link" href="#">
                  Help
                </a>
              </li>
              <li className="main-nav__list-item">
                <button
                  className="main-nav__list-item__more"
                  aria-expanded="false"
                >
                  <span>
                    More
                    <span className="main-nav__more-expanded">+</span>
                    <span className="main-nav__more-collapsed">-</span>
                  </span>
                </button>
              </li>
              <li className="main-nav__list-item main-nav__list-item__try">
                <a className="list-item__link" href="#">
                  Try Live for free
                </a>
              </li>
              <li className="main-nav__list-item main-nav__list-item__account">
                <a className="list-item__link" href="#">
                  Log in or register
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div id="more" className="main-nav__more">
          <section>
            <h3 className="main-nav__section-heading">More on Ableton.com: </h3>
            <ul className="main-nav__link-list">
              <li className="main-nav__list-item">Blog</li>
              <li className="main-nav__list-item">Ableton for the Classroom</li>
              <li className="main-nav__list-item">
                Ableton for Colleges and Universities
              </li>
              <li className="main-nav__list-item">Certified Training</li>
              <li className="main-nav__list-item is-selected">About Ableton</li>
              <li className="main-nav__list-item">Jobs</li>
              <li className="main-nav__list-item">Apprenticeships</li>
            </ul>
          </section>
          <section className="main-nav__section-bottom">
            <h3 className="main-nav__section-heading">More on Ableton.com: </h3>
            <div className="main-nav__section-grid">
              <ul className="main-nav__link-list-grid">
                <li className="main-nav__list-item-grid">
                  <h4>Loop</h4>
                  <p>
                    Watch Talks, Performances and Features from Ableton's Summit
                    for Music Makers
                  </p>
                </li>
                <li className="main-nav__list-item-grid">
                  <h4>Learning Music</h4>
                  <p>
                    Learn the fundamentals of music making right in your
                    browser.
                  </p>
                </li>
                <li className="main-nav__list-item-grid">
                  <h4>Learning Synths</h4>
                  <p>
                    Get started with synthesis using a web-based synth and
                    accompanying lessons.
                  </p>
                </li>
                <li className="main-nav__list-item-grid">
                  <h4>Making Music</h4>
                  <p>
                    Some tips from 74 Creative Strategies for Electronic
                    Producers.
                  </p>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </nav>
    </header>
  );
};
export default Header;
