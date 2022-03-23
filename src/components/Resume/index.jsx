import { useState } from 'react';
import { Link } from 'react-router-dom';
import CVFR from '../../assets/CVFR.png';
import CVEN from '../../assets/CVEN.png';
import CVENpdf from '../../assets/CVEN.pdf';
import CVFRpdf from '../../assets/CVFR.pdf';
import dlBtn from '../../assets/downloadYellow.png';
import SResume from './style';

function Resume() {
  const [languages, setLanguages] = useState(false);
  const toggleLanguages = () => setLanguages(!languages);
  return (
    <SResume>
      <div className="switchCont">
        <button className="langBtn" type="button" onClick={toggleLanguages}>
          {languages ? 'EN' : 'FR'}
        </button>
      </div>
      <section className="cvSection">
        <button className="dlBtn" type="button">
          <Link to={languages ? CVFRpdf : CVENpdf} target="_blank" download>
            <img className="dlPic" src={dlBtn} alt="download" />
          </Link>
        </button>
        <img className="cv" src={languages ? CVFR : CVEN} alt="CV français" />
      </section>
    </SResume>
  );
}
export default Resume;
