import styled from 'styled-components';

const SProjectPage = styled.section`
  width: 100%;
  background-color: var(--yColor);
  min-height: 80vh;
  .switchCont {
    display: flex;
    justify-content: space-between;
  }
  .langBtn {
    border: none;
    background-color: transparent;
    color: var(--mColor);
    font-family: var(--Font);
    margin: 5px;
    font-size: 20px;
  }
  .backBtn {
    width: 30px;
    margin: 5px;
  }
  .articleCont {
    display: flex;
    flex-direction: column;
    margin: 0 20px;
  }
  .infosCont {
    border-radius: 8px;
  }
  .infosPicCont {
    width: 330px;
    aspect-ratio: 1.6;
    border-radius: 8px;
  }
  .infosPic {
    width: 100%;
  }
  .infosDetailsCont {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 5px;
  }
  .rightDetailsLine {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    text-align: center;
    border: 2px dotted red;
  }
  .detailsIcon {
    width: 20px;
  }
  .descCont {
    font-size: 16px;
    line-height: 20px;
    margin: 5px;
    padding: 5px;
    border: 2px dotted green;
  }
  .backArrowCont {
    display: none;
  }
  @media only screen and (min-width: 700px) {
    .langBtn {
      cursor: pointer;
    }
    .langBtn:hover {
      background-color: var(--mColor);
      color: var(--yColor);
    }
    .articleCont {
      flex-direction: row;
      margin: 40px;
    }
    .infosCont {
      margin: 20px;
    }
    .infosPicCont {
      width: 300px;
    }
    .infosDetailsCont {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 5px;
    }
    .detailsIcon {
      width: 20px;
    }
    .backArrowCont {
      display: flex;
    }
    .backBtn {
      width: 30px;
      cursor: pointer;
    }
    .descCont {
      margin: 20px;
      font-size: 20px;
      line-height: 24px;
    }
    .mobileBackArrowCont {
      display: none;
    }
  }
`;
export default SProjectPage;
