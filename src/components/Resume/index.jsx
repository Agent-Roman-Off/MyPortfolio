import { useState } from 'react';
import CVFR from '../../assets/CVFR.png';
import CVEN from '../../assets/CVEN.png';
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
        <img
          className={languages ? 'cv' : 'hidden'}
          src={CVFR}
          alt="CV français"
        />
        <img
          className={languages ? 'hidden' : 'cv'}
          src={CVEN}
          alt="English resume"
        />
      </section>
    </SResume>
  );
}
export default Resume;
