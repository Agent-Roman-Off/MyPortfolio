import styled from 'styled-components';

const SHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: var(--mColor);
  width: 100%;
  height: 70px;

  a {
    text-decoration: none;
    color: var(--yColor);
  }
  .menuCat,
  .myName,
  .socials {
    margin: auto 0px;
    padding: 5px;
    text-align: center;
    display: flex;
    flex-direction: row;
  }
  .menuCat {
    width: 20%;
    justify-content: flex-start;
    font-size: 20px;
  }
  .myName {
    width: 50%;
    justify-content: center;
    font-size: 30px;
  }
  .socials {
    width: 20%;
    justify-content: flex-end;
  }
  .picCont {
    width: 30px;
    aspect-ratio: 1;
    margin: 5px;
  }
  .socialPic {
    width: 100%;
  }

  @media only screen and (min-width: 700px) {
    height: 10vh;
    a {
      cursor: pointer;
    }
    .myName {
      width: 40%;
      font-size: 36px;
    }
  }
`;

export default SHeader;
