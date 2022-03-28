import styled from 'styled-components';

const SResume = styled.section`
  background-color: var(--yColor);
  color: var(--mColor);
  // TOP BUTTONS & TITLES
  .switchCont {
    width: 100vw;
    display: flex;
    justify-content: space-between;
    margin: auto;
    align-items: center;
  }
  .langBtn {
    border: none;
    background-color: transparent;
    color: var(--mColor);
    font-family: var(--Font);
    margin: 5px;
    font-size: 20px;
  }
  .dlLink {
    text-decoration: underline;
    color: var(--mColor);
    text-align: center;
    width: 100px;
    margin: 10px;
    padding: 5px;
    border: 1px solid var(--mColor);
    font-size: 16px;
  }
  .titleSection {
    display: none;
  }
  .mobileTitle,
  .hobbiesTitle {
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 20px;
    text-decoration: underline;
    margin: 5px 0 10px 0;
  }
  //DETAILS
  .expScrollWindow {
    display: flex;
    flex-direction: column;
    height: 70vh;
    overflow: scroll;
  }
  .trainingSection,
  .expSection {
    width: 85vw;
    margin: auto;
  }
  .trainArt,
  .expArt {
    margin: 5px;
    min-height: 160px;
    border: 1px solid var(--mColor);
  }
  .emptyArt {
    display: none;
  }
  .date,
  .jobName,
  .place,
  .inDetails {
    margin: 5px;
    font-size: 16px;
  }
  .date {
    display: flex;
    justify-content: center;
  }
  .jobName {
    font-size: 20px;
  }
  .inDetails {
    margin: 5px 0 5px 30px;
    font-size: 12px;
  }
  // SKILLS & HOBBIES LISTS
  ul {
    display: flex;
    flex-flow: row wrap;
  }
  li {
    width: 100px;
    height: 75px;
    margin: 5px;
    padding: 2px;
  }
  .cvPic {
    width: 50px;
  }
  .picCont {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .codingTitle,
  .toolTitle,
  .languageTitle,
  .gameTitle,
  .musicTitle,
  .otherTitle {
    font-size: 16px;
    margin: 10px 5px 10px 5px;
  }
  .gameSection,
  .gameTitle,
  .otherSection,
  .otherTitle,
  .musicSection,
  .musicTitle {
    display: flex;
    justify-content: flex-start;
  }

  .legend {
    display: flex;
    justify-content: center;
    margin: 5px 0 5px 0;
    font-size: 12px;
  }

  @media only screen and (min-width: 700px) {
    min-height: 80vh;
    // TOP BUTTONS & TITLES
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
      border: 2px solid var(--mColor);
      font-size: 20px;
    }
    .dlLink:hover {
      background-color: var(--mColor);
      color: var(--yColor);
    }
    .titleSection {
      display: flex;
      flex-direction: row;
    }
    .mobileTitle {
      display: none;
    }
    .desktopTitle {
      width: 100%;
      display: flex;
      justify-content: center;
      font-size: 24px;
      text-decoration: underline;
      margin: 5px 0 10px 0;
    }
    // DETAILS
    .expScrollWindow,
    .skillsScrollWindow {
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
      display: flex;
      border: 1px solid transparent;
    }
    .date,
    .jobName,
    .place,
    .inDetails {
      font-size: 18px;
    }
    .jobName {
      font-size: 22px;
    }
    .inDetails {
      font-size: 14px;
    }
    // SKILLS & HOBBIES LISTS
    li {
      width: 125px;
      height: 100px;
    }
    .cvPic {
      width: 75px;
    }
    .legend {
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
  }
`;

export default SResume;
