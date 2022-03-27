import styled from 'styled-components';

const SProjectDetails = styled.section`
  width: 100%;
  background-color: var(--yColor);
  min-height: 80vh;
  p {
    color: var(--mColor);
  }
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

  .leftDetailsCont .rightDetailsCont {
    width: 100%;
  }
  .rightDetailsLine {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    text-align: center;
  }
  .rightDetailsLine a {
    text-decoration: none;
    color: var(--mColor);
  }
  .detailsIcon {
    width: 20px;
  }
  .descCont {
    font-size: 16px;
    line-height: 20px;
    margin: 5px;
    padding: 5px;
  }
  .descTitle {
    color: var(--mColor);
    font-size: 20px;
    text-decoration: underline;
  }
  .descPara {
    margin: 10px 0;
    font-size: 16px;
  }
  .backArrowCont {
    display: none;
  }
  @media only screen and (min-width: 700px) {
    min-height: 80vh;
    .langBtn {
      cursor: pointer;
      margin: 10px;
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
    .descTitle {
      font-size: 30px;
    }
    .descPara {
      margin: 20px 0;
      font-size: 20px;
    }
    .mobileBackArrowCont {
      display: none;
    }
  }
`;
export default SProjectDetails;
