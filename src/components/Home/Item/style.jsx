import styled from 'styled-components';

const SProject = styled.article`
  .projectCont {
    width: 300px;
    aspect-ratio: 1.6;
    margin: 10px;
    border-radius: 5px;
  }

  .picContainer {
    width: 100%;
    aspect-ratio: 1.8;
    border-radius: 5px;
    border: 2px dotted white;
  }
  .projectTitle {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    height: 30px;
    font-size: 20px;
    color: var(--mColor);
  }
  @media only screen and (min-width: 700px) {
    .projectCont {
      width: 400px;
      margin: 20px;
      border-radius: 8px;
      transition: 0.7s;
    }
    .projectCont:hover {
      -webkit-box-shadow: 0px 10px 13px -7px #000000,
        5px 5px 15px 5px rgba(0, 0, 0, 0);
      box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
      transition: 0.7s;
      cursor: pointer;
    }
    .picContainer {
      width: 100%;
      border-radius: 8px;
      transition: 0.7s;
    }

    .projectTitle {
      border-radius: 8px;
      height: 30px;
      font-size: 20px;
    }
  }
`;

export default SProject;
