import st from './navbar.module.css';

export const Navbar = () => (
  <header className={st.navbar}>
    <div className={st.navbar__wrapper}>
      <div className={st.navbar__wrapper__left}>
        <span className={st.navbar__title}>EL HOOKS</span>
        <span className={st.navbar__subtitle}>
          Let's learn about React hooks
        </span>
      </div>

      <nav className={st.navbar__wrapper__right}>
        <ul className={st.navbar__nav}>
          <li className={st.navbar__nav__item}>
            <a href="/">Homepage</a>
          </li>
          <li className={st.navbar__nav__item}>
            <a href="/form">Form</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);
