import styled from 'styled-components';

const SOldResume = styled.section`
  width: 100%;
  background-color: var(--yColor);
  min-height: 80vh;

  .langBtn {
    border: none;
    background-color: transparent;
    color: var(--mColor);
    font-family: var(--Font);
    cursor: pointer;
    margin: 5px;
    font-size: 20px;
  }
  .cvSection {
    position: relative;
    margin: auto;
    width: 300px;
    aspect-ratio: 0.7;
  }
  .dlBtn {
    position: absolute;
    width: 35px;
    top: 10px;
    right: 5px;
    background-color: transparent;
    border: none;
  }
  .dlPic {
    width: 100%;
  }
  .cv {
    width: 100%;
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
    .cvSection {
      width: 800px;
      aspect-ratio: 0.7;
    }
    .dlBtn {
      width: 50px;
      top: 15px;
      right: 10px;
      cursor: pointer;
    }
  }
`;

export default SOldResume;
