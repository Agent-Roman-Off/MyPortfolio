import styled from 'styled-components';

const SResume = styled.section`
  width: 100%;
  background-color: var(--yColor);
  .cvSection {
    display: flex;
    justify-content: center;
  }
  .hidden {
    display: none;
  }
  @media only screen and (min-width: 700px) {
    .switchCont {
    }
    .langBtn {
      border: none;
      margin: 10px;
      background-color: transparent;
      color: var(--mColor);
      font-family: var(--Font);
      font-size: 20px;
      cursor: pointer;
    }
    .langBtn:hover {
      background-color: var(--mColor);
      color: var(--yColor);
    }
    .cv {
      width: 600px;
      aspect-ratio: 0.7;
    }
  }
`;

export default SResume;
