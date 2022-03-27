import styled from 'styled-components';

const SResume = styled.section`
  background-color: var(--yColor);
  color: var(--mColor);
  .langBtn {
    border: none;
    background-color: transparent;
    color: var(--mColor);
    font-family: var(--Font);
    margin: 5px;
    font-size: 20px;
  }
  @media only screen and (min-width: 700px) {
    min-height: 80vh;
    // TOP BUTTONS & TITLES
    .switchCont {
      width: 100vw;
      display: flex;
      justify-content: space-between;
      margin: auto;
      align-items: center;
    }
    .langBtn {
      cursor: pointer;
      margin: 10px;
    }
    .langBtn:hover {
      background-color: var(--mColor);
      color: var(--yColor);
    }
    .dlLink {
      width: 200px;
      margin: 10px;
      padding: 5px;
      text-decoration: underline;
      color: var(--mColor);
      border: 2px solid var(--mColor);
      font-size: 20px;
      cursor: pointer;
      text-align: center;
    }
    .dlLink:hover {
      background-color: var(--mColor);
      color: var(--yColor);
    }
    .dlPicCont {
      width: 20px;
      height: 20px;
      border: 1px dotted white;
    }
    .dlPic {
      width: 100%;
    }
    .titleSection {
      display: flex;
      flex-direction: row;
    }
    .trainTitle,
    .expTitle,
    .skillsTitle,
    .hobbiesTitle {
      width: 100%;
      display: flex;
      justify-content: center;
      font-size: 24px;
      text-decoration: underline;
      margin: 5px 0 10px 0;
    }
    // DETAILS
    .scrollWindow {
      display: flex;
      flex-direction: row;
      height: 65vh;
      overflow: scroll;
    }
    .detailsSection {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
    }
    .trainingSection,
    .expSection,
    .skillsSection {
      width: 30vw;
    }
    .expSection {
      margin-top: 80px;
    }
    .trainArt,
    .expArt {
      margin: 5px;
      min-height: 160px;
      border: 1px solid var(--mColor);
    }
    .emptyArt {
      border: 1px solid transparent;
    }
    .date,
    .jobName,
    .place,
    .inDetails {
      margin: 5px;
      font-size: 18px;
    }
    .date {
      display: flex;
      justify-content: center;
    }
    .jobName {
      font-size: 22px;
    }
    .inDetails {
      margin: 5px 0 5px 30px;
      font-size: 14px;
    }
    // SKILLS & HOBBIES LISTS
    ul {
      display: flex;
      flex-flow: row wrap;
    }
    li {
      width: 125px;
      height: 100px;
      margin: 5px;
      padding: 2px;
    }
    .cvPic {
      width: 75px;
    }
    .legend {
      display: flex;
      justify-content: center;
      margin: 5px 0 5px 0;
      font-size: 14px;
    }
    .hobbiesSection {
      width: 50vw;
      margin: 5px 5px 0px 10px;
    }
    .codingTitle,
    .toolTitle,
    .languageTitle,
    .gameTitle,
    .musicTitle,
    .otherTitle {
      font-size: 20px;
      margin: 10px 5px 10px 5px;
    }
    .gameSection,
    .gameTitle,
    .otherSection,
    .otherTitle {
      display: flex;
      justify-content: flex-start;
    }
    .musicSection,
    .musicTitle {
      display: flex;
      justify-content: flex-end;
    }
    .picCont {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
`;

export default SResume;
