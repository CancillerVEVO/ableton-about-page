const Header = () => {
  return (
    <header className="main-nav">
      <nav aria-label="primary">
        <a href="#" className="main-nav__logo">
          <img
            className="main-nav__logo__image"
            src="./abletonlive-svgrepo-com.svg"
            alt="ableton logo"
          />
        </a>
        <div className="main-nav__content">
          <ul className="main-nav__link-list main-nav__link-list__primary">
            <li className="main-nav__link-list__item">
              <a href="#">Live</a>
            </li>
            <li className="main-nav__link-list__item">
              <a href="#">Push</a>
            </li>
            <li className="main-nav__link-list__item">
              <a href="#">Note</a>
            </li>
            <li className="main-nav__link-list__item">
              <a href="#">Link</a>
            </li>
            <li className="main-nav__link-list__item">
              <a href="#">Shop</a>
            </li>
            <li className="main-nav__link-list__item">
              <a href="#">Packs</a>
            </li>
            <li className="main-nav__link-list__item">
              <a href="#">Help</a>
            </li>
            <li className="main-nav__link-list__item main-nav__hide-small">
              <button
                className="main-nav__more-button"
                aria-expanded="false"
                aria-controls="more"
                aria-haspopup="true"
              >
                <span>More</span>
                <span className="main-nav__hide-on-more-expand">
                  <span className="main-nav__icon main-nav__icon--expand">
                    +
                  </span>
                </span>
                <span className="main-nav__hide-on-more-collapsed">
                  <span className="main-nav__icon main-nav__icon-collapsed">
                    -
                  </span>
                </span>
              </button>
            </li>
            <li className="main-nav__link-list__item main-nav__link-list__try">
              <a href="#">Try Live for free</a>
            </li>
            <li className="main-nav__link-list__item main-nav__link-list__account">
              <a href="#">Log in or register</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Header;
