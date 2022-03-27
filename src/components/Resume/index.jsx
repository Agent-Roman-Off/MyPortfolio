import { useState } from 'react';
import CVENpdf from '../../assets/CVEN.pdf';
import CVFRpdf from '../../assets/CVFR.pdf';
import HTML from '../../assets/html.png';
import CSS from '../../assets/css.png';
import JS from '../../assets/javascript.png';
import Reactlogo from '../../assets/react.png';
import NodeJS from '../../assets/nodejs.png';
import MySQL from '../../assets/mysql.png';
import Git from '../../assets/git.png';
import Github from '../../assets/githublogo.png';
import Figma from '../../assets/figma.png';
import Notion from '../../assets/notion.png';
import Trello from '../../assets/trello.png';
import macOS from '../../assets/apple.png';
import French from '../../assets/france.png';
import English from '../../assets/unitedkingdom.png';
import Chinese from '../../assets/china.png';
import German from '../../assets/germany.png';
import Italian from '../../assets/italy.png';
import WoW from '../../assets/worldofwarcraft.png';
import Pokemon from '../../assets/pokemon.png';
import Diablo from '../../assets/diablo.png';
import Overwatch from '../../assets/overwatch.png';
import Vinyl from '../../assets/vinyl.png';
import Acoustic from '../../assets/acoustic.png';
import Electric from '../../assets/electric.png';
import Ukulele from '../../assets/ukulele.png';
import LFC from '../../assets/lfc.png';
import Chess from '../../assets/chess.png';
import SResume from './style';

function Resume() {
  const [languages, setLanguages] = useState(false);
  const toggleLanguages = () => setLanguages(!languages);
  return (
    <SResume>
      {/* HBUTTONS & TOP TITLES */}
      <div className="switchCont">
        <button className="langBtn" type="button" onClick={toggleLanguages}>
          {languages ? 'EN' : 'FR'}
        </button>
        <a
          className="dlLink"
          href={languages ? CVFRpdf : CVENpdf}
          target="_blank"
          rel="noreferrer"
        >
          {languages ? 'Télécharger' : 'Download'}
        </a>
      </div>
      <div className="titleSection">
        <h3 className="trainTitle">{languages ? 'Formation' : 'Training'}</h3>
        <h3 className="expTitle">
          {languages
            ? 'Expérience professionnelle'
            : 'Professionnal experience'}
        </h3>
        <h3 className="skillsTitle">{languages ? 'Compétences' : 'Skills'}</h3>
      </div>
      {/* TRAINING & EXPERIENCE */}
      <div className="detailsSection">
        <div className="scrollWindow">
          <div className="trainingSection">
            <article className="trainArt">
              <p className="date">09/2021 - 02/2022</p>
              <p className="jobName">
                {languages
                  ? 'Développeur web/web mobile'
                  : 'Web/Web Mobile Developer'}
              </p>
              <p className="place">Wild Code School, Lille</p>
              <p className="inDetails">
                {languages
                  ? 'Réalisation de projets de groupe en suivant une méthode agile (SCRUM)'
                  : 'Realized multiple group projects while following an agile method (SCRUM)'}
              </p>
              <p className="inDetails">
                {languages
                  ? `Participation à des masterclass sur des sujets technologiques tels la cybersécurité, l'accessibilité`
                  : 'Followed masterclasses on a wide range of technology-related topics such as cybersecurtiy or accessibility'}
              </p>
            </article>
            <article className="trainArt">
              <p className="date">03/2021</p>
              <p className="jobName">
                {languages
                  ? 'Introduction au développement web'
                  : 'Introduction to web development'}
              </p>
              <p className="place">3W Academy</p>
              <p className="inDetails">
                {languages
                  ? 'Premiers pas dans le monde du développement web'
                  : 'First steps into web development'}
              </p>
            </article>
            <article className="trainArt emptyArt" />
            <article className="trainArt">
              <p className="date">09/2014 - 12/2015</p>
              <p className="jobName">
                {languages
                  ? 'Master de Langues et Management Interculturel'
                  : `Master's degree in Languages and Intercultural Management`}
              </p>
              <p className="place">
                {languages
                  ? `Université d'Artois, Arras`
                  : 'Artois University, Arras'}
              </p>
              <p className="inDetails">
                {languages ? 'Langues étrangères' : 'Foreign languages'}
              </p>
              <p className="inDetails">
                {languages
                  ? 'Marketing, commerce international, logistique et finances'
                  : 'Marketing, international trade, logistics and finance'}
              </p>
            </article>
            <article className="trainArt">
              <p className="date">09/2013 - 06/2014</p>
              <p className="jobName">
                {languages
                  ? 'Troisème année de licence'
                  : 'Third year of Bachelor degree'}
              </p>
              <p className="place">Nanjing University, Nanjing</p>
              <p className="inDetails">
                {languages
                  ? 'Langues et relations interculturelles'
                  : 'Foreign languages and intercultural relations'}
              </p>
              <p className="inDetails">
                {languages ? 'Communication' : 'Communication'}
              </p>
            </article>
            <article className="trainArt">
              <p className="date">09/2011 - 06/2014</p>
              <p className="jobName">
                {languages
                  ? 'Licence de Langues Étrangères Appliquées'
                  : 'Bachelor degree in Languages Applied to Business'}
              </p>
              <p className="place">
                {languages
                  ? `Université d'Artois, Arras`
                  : 'Artois University, Arras'}
              </p>
              <p className="inDetails">
                {languages
                  ? 'Langues et civilisations étrangères'
                  : 'Foreign languages and civilizations'}
              </p>
              <p className="inDetails">
                {languages
                  ? 'Économie, droit et techniques de communication'
                  : 'Economy, law and communication'}
              </p>
            </article>
            <article className="trainArt">
              <p className="date">09/2008 - 06/2011</p>
              <p className="jobName">
                {languages
                  ? 'Baccalauréat Économique et Social'
                  : 'A-Degree in Economics and Social Sciences'}
              </p>
              <p className="place">
                {languages
                  ? 'Lycée Carnot, Bruay Labuissière'
                  : 'Carnot Highschool, Bruay Labuissière'}
              </p>
              <p className="inDetails">
                {languages ? 'Section européenne' : 'European section'}
              </p>
            </article>
          </div>
          <div className="expSection">
            <article className="expArt emptyArt" />
            <article className="expArt emptyArt" />
            <article className="expArt">
              <p className="date">05/2015 - 08/2015 ; 02/2016 - 08/2016</p>
              <p className="jobName">
                {languages ? `Stage de fin d'année` : 'End of year internship'}
              </p>
              <p className="place">Trésors et Nature, Cabourg</p>
              <p className="inDetails">
                {languages
                  ? 'Étude du marché des cosmétiques'
                  : 'Study of the cosmetics market'}
              </p>
              <p className="inDetails">
                {languages ? 'Développement digital' : 'Digital development'}
              </p>
            </article>
            <article className="expArt emptyArt" />
            <article className="expArt">
              <p className="date">06/2012 - 08/2012</p>
              <p className="jobName">
                {languages ? 'Manutentionnaire' : 'Warehouse worker'}
              </p>
              <p className="place">Heppner, Saint-Priest</p>
              <p className="inDetails">
                {languages
                  ? 'Déchargement des palettes et contrôle de produits'
                  : 'Unloading of trucks and product control'}
              </p>
              <p className="inDetails">
                {languages
                  ? `Sécurité de l'environnement de travial`
                  : 'Safety of work environnement'}
              </p>
            </article>
            <article className="expArt">
              <p className="date">06/2011 - 08/2011</p>
              <p className="jobName">
                {languages ? 'Commis de salle' : 'Bus boy'}
              </p>
              <p className="place">Cora Cafeteria, Bruay Labuissière</p>
              <p className="inDetails">
                {languages
                  ? 'Mise en place et rangement du service'
                  : 'Setting and clearing up the room'}
              </p>
              <p className="inDetails">
                {languages ? 'Nettoyage' : 'Cleaning dishes'}
              </p>
            </article>
          </div>
        </div>
        {/* SKILLS */}
        <div className="scrollWindow">
          <div className="skillsSection">
            <h5 className="codingTitle">{languages ? 'Codage' : 'Coding'}</h5>
            <ul>
              <li>
                <div className="picCont">
                  <img className="cvPic" src={HTML} alt="html" />
                </div>
                <p className="legend">HTML</p>
              </li>
              <li>
                <div className="picCont">
                  <img className="cvPic" src={CSS} alt="css" />
                </div>
                <p className="legend">CSS</p>
              </li>
              <li>
                <div className="picCont">
                  <img className="cvPic" src={JS} alt="javascript" />
                </div>
                <p className="legend">JavaScript</p>
              </li>
              <li>
                <div className="picCont">
                  <img className="cvPic" src={Reactlogo} alt="react" />
                </div>
                <p className="legend">React</p>
              </li>
              <li>
                <div className="picCont">
                  <img className="cvPic" src={NodeJS} alt="nodejs" />
                </div>
                <p className="legend">NodeJS</p>
              </li>
              <li>
                <div className="picCont">
                  <img className="cvPic" src={MySQL} alt="mysql" />
                </div>
                <p className="legend">MySQL</p>
              </li>
            </ul>
            <h5 className="toolTitle">{languages ? 'Outils' : 'Tools'}</h5>
            <ul>
              <li>
                <div className="picCont">
                  <img className="cvPic" src={Git} alt="git" />
                </div>
                <p className="legend">Git</p>
              </li>
              <li>
                <div className="picCont">
                  <img className="cvPic" src={Github} alt="github" />
                </div>
                <p className="legend">GitHub</p>
              </li>
              <li>
                <div className="picCont">
                  <img className="cvPic" src={Figma} alt="figma" />
                </div>
                <p className="legend">Figma</p>
              </li>
              <li>
                <div className="picCont">
                  <img className="cvPic" src={Notion} alt="notion" />
                </div>
                <p className="legend">Notion</p>
              </li>
              <li>
                <div className="picCont">
                  <img className="cvPic" src={Trello} alt="trello" />
                </div>
                <p className="legend">Trello</p>
              </li>
              <li>
                <div className="picCont">
                  <img className="cvPic" src={macOS} alt="mac OS" />
                </div>
                <p className="legend">macOS</p>
              </li>
            </ul>
            <h5 className="languageTitle">
              {languages ? 'Langues' : 'Languages'}
            </h5>
            <ul>
              <li>
                <div className="picCont">
                  <img className="cvPic" src={French} alt="french" />
                </div>
                <p className="legend">
                  {languages ? 'Langue maternelle' : 'Mother tongue'}
                </p>
              </li>
              <li>
                <div className="picCont">
                  <img className="cvPic" src={English} alt="english" />
                </div>
                <p className="legend">{languages ? 'Courant' : 'Fluent'}</p>
              </li>
              <li>
                <div className="picCont">
                  <img className="cvPic" src={Chinese} alt="chinese" />
                </div>
                <p className="legend">
                  {languages ? 'Intermédiaire' : 'Intermediate'}
                </p>
              </li>
              <li>
                <div className="picCont">
                  <img className="cvPic" src={German} alt="german" />
                </div>
                <p className="legend">{languages ? 'Basique' : 'Basic'}</p>
              </li>
              <li>
                <div className="picCont">
                  <img className="cvPic" src={Italian} alt="italian" />
                </div>
                <p className="legend">{languages ? 'Basique' : 'Basic'}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* HOBBIES */}
      <div className="hobbiesSection">
        <h3 className="hobbiesTitle">{languages ? 'Loisirs' : 'Hobbies'}</h3>
        <h5 className="gameTitle">
          {languages ? 'Jeux vidéos' : 'Video Games'}
        </h5>
        <ul className="gameSection">
          <li>
            <div className="picCont">
              <img className="cvPic" src={WoW} alt="world of warcraft" />
            </div>
            <p className="legend">World of Warcraft</p>
            <p className="legend">
              {languages ? '(top 1000 guilde)' : '(top 1000 guild)'}
            </p>
          </li>
          <li>
            <div className="picCont">
              <img className="cvPic" src={Pokemon} alt="pokemon" />
            </div>
            <p className="legend">Pokemon</p>
          </li>
          <li>
            <div className="picCont">
              <img className="cvPic" src={Diablo} alt="diablo 3" />
            </div>
            <p className="legend">Diablo III</p>
          </li>
          <li>
            <div className="picCont">
              <img className="cvPic" src={Overwatch} alt="overwatch" />
            </div>
            <p className="legend">Overwatch</p>
          </li>
        </ul>
        <h5 className="musicTitle">{languages ? 'Musique' : 'Music'}</h5>
        <ul className="musicSection">
          <li>
            <div className="picCont">
              <img className="cvPic" src={Vinyl} alt="vinyles" />
            </div>
            <p className="legend">Vinyles</p>
          </li>
          <li>
            <div className="picCont">
              <img className="cvPic" src={Acoustic} alt="acoustic guitar" />
            </div>
            <p className="legend">
              {languages ? 'Guitare acoustique' : 'Acoustic guitar'}
            </p>
          </li>
          <li>
            <div className="picCont">
              <img className="cvPic" src={Electric} alt="electric guitare" />
            </div>
            <p className="legend">
              {languages ? 'Guitare électrique' : 'Electric guitar'}
            </p>
          </li>
          <li>
            <div className="picCont">
              <img className="cvPic" src={Ukulele} alt="ukulele" />
            </div>
            <p className="legend">Ukulele</p>
          </li>
        </ul>
        <h5 className="otherTitle">{languages ? 'Autres' : 'Others'}</h5>
        <ul className="otherSection">
          <li>
            <div className="picCont">
              <img className="cvPic" src={LFC} alt="liverpool fc" />
            </div>
            <p className="legend">Liverpool FC</p>
          </li>
          <li>
            <div className="picCont">
              <img className="cvPic" src={Chess} alt="chess" />
            </div>
            <p className="legend">{languages ? 'Échecs' : 'Chess'}</p>
          </li>
        </ul>
      </div>
    </SResume>
  );
}

export default Resume;
