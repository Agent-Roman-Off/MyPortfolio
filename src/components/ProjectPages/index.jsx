import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Duration from '../../assets/timeBlue.png';
import Teammates from '../../assets/userBlue.png';
import Arrow from '../../assets/arrowBlue.png';
import SProjectPage from './style';

function ProjectPage() {
  const [languages, setLanguages] = useState(false);
  const toggleLanguages = () => setLanguages(!languages);
  return (
    <SProjectPage>
      <div className="switchCont">
        <button className="langBtn" type="button" onClick={toggleLanguages}>
          {languages ? 'EN' : 'FR'}
        </button>
        <div className="mobileBackArrowCont">
          <NavLink to="/">
            <img className="backBtn" src={Arrow} alt="back arrow" />
          </NavLink>
        </div>
      </div>
      <div className="articleCont">
        <div className="infosCont">
          <div className="infosPicCont">
            <img className="infosPic" src="" alt="project preview" />
          </div>
          <div className="infosDetailsCont">
            <div className="leftDetailsCont">
              <p>April 2010</p>
            </div>
            <div className="rightDetailsCont">
              <div className="rightDetailsLine">
                <p>Ppl involved</p>
                <img className="detailsIcon" src={Teammates} alt="teammates" />
              </div>
              <div className="rightDetailsLine">
                <p>Time limit</p>
                <img className="detailsIcon" src={Duration} alt="duration" />
              </div>
              <div className="rightDetailsLine">
                <p>Link to project</p>
              </div>
            </div>
          </div>
          <div className="backArrowCont">
            <NavLink to="/">
              <img className="backBtn" src={Arrow} alt="back arrow" />
            </NavLink>
          </div>
        </div>
        <div className="descCont">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </SProjectPage>
  );
}

export default ProjectPage;
