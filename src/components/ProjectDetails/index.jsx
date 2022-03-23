import { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink, useParams } from 'react-router-dom';
import Duration from '../../assets/timeBlue.png';
import Teammates from '../../assets/userBlue.png';
import Arrow from '../../assets/arrowBlue.png';
import SProjectDetails from './style';

function ProjectDetails() {
  const [languages, setLanguages] = useState(false);
  const [projectDetails, setProjectDetails] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const lang = languages ? 'EN' : 'FR';
    axios
      .get(`http://localhost:5050/projects/${id}?language=${lang}`)
      .then(({ data }) => {
        setProjectDetails(data[0]);
      })
      .catch((err) => {
        setProjectDetails('Woops, there isnt anything here yet...');
        console.log(err);
      });
  }, [id, languages]);

  const toggleLanguages = () => setLanguages(!languages);
  return (
    <SProjectDetails>
      <div className="switchCont">
        <button className="langBtn" type="button" onClick={toggleLanguages}>
          {languages ? 'FR' : 'EN'}
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
            <img
              className="infosPic"
              src={projectDetails?.picture}
              alt="project preview"
            />
          </div>
          <div className="infosDetailsCont">
            <div className="leftDetailsCont">
              <p>
                {projectDetails?.date
                  ? `${projectDetails?.date.split('T')[0]}`
                  : ''}
              </p>
            </div>
            <div className="rightDetailsCont">
              <div className="rightDetailsLine">
                <p>{projectDetails?.nbrPeople}</p>
                <img className="detailsIcon" src={Teammates} alt="teammates" />
              </div>
              <div className="rightDetailsLine">
                <p>{projectDetails?.timeLimit}</p>
                <img className="detailsIcon" src={Duration} alt="duration" />
              </div>
              <div className="rightDetailsLine">
                <a href={projectDetails?.link} target="_blank" rel="noreferrer">
                  {languages ? 'Link to project' : 'Lien vers le projet'}
                </a>
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
          <h3 className="descTitle">{projectDetails?.title}</h3>
          <p className="descPara">{projectDetails?.description}</p>
        </div>
      </div>
    </SProjectDetails>
  );
}
export default ProjectDetails;
