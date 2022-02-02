import styled from 'styled-components';

const SHome = styled.section`
  width: 100%;
  background-color: var(--yColor);
  padding: 10px;

  .projectList {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }
  @media only screen and (min-width: 700px) {
    .date {
      margin: auto;
      width: 200px;
      height: 30px;
      text-align: center;
      font-size: 30px;
      color: var(--mColor);
    }
    .projectList {
      display: flex;
      flex-flow: row wrap;
      padding: 30px;
    }
  }
`;

export default SHome;
