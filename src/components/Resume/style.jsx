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
  .langBtn {
    border: none;
    background-color: transparent;
    color: var(--mColor);
    font-family: var(--Font);
    cursor: pointer;
    margin: 5px;
    font-size: 20px;
  }
  @media only screen and (min-width: 700px) {
    .switchCont {
    }
    .langBtn {
      margin: 10px;
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
