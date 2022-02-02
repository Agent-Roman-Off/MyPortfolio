import { NavLink } from 'react-router-dom';
import liLogo from '../../assets/linkedinYellow.png';
import ghLogo from '../../assets/githubYellow.png';
import SHeader from './style';

function Header() {
  return (
    <SHeader>
      <section className="menuCat">
        <NavLink to="/resume">
          <p>CV</p>
        </NavLink>
      </section>
      <section className="myName">
        <NavLink to="/">
          <p>Romain Brehon</p>
        </NavLink>
      </section>
      <section className="socials">
        <div className="picCont">
          <a href="https://www.linkedin.com/in/romain-brehon/">
            <img className="socialPic" src={liLogo} alt="linkedin link" />
          </a>
        </div>
        <div className="picCont">
          <a href="https://github.com/Agent-Roman-Off">
            <img className="socialPic" src={ghLogo} alt="github link" />
          </a>
        </div>
      </section>
    </SHeader>
  );
}
export default Header;
