import styled from 'styled-components';

const SHome = styled.section`
  width: 100%;
  background-color: var(--yColor);
  .listCont {
    padding: 10px;
  }
  .date {
    margin: auto;
    width: 200px;
    height: 30px;
    text-align: center;
    font-size: 24px;
    color: var(--mColor);
  }
  .projectList {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }
  a {
    color: var(--mColor);
    text-decoration: none;
  }
  @media only screen and (min-width: 700px) {
    min-height: 80vh;
    .date {
      font-size: 30px;
    }
    .projectList {
      display: flex;
      flex-flow: row wrap;
      padding: 30px;
    }
  }
`;

export default SHome;
