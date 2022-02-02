import styled from 'styled-components';

const SHome = styled.section`
  width: 100%;
  background-color: var(--yColor);

  .projectList {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }
  @media only screen and (min-width: 700px) {
    .projectList {
      display: flex;
      flex-flow: row wrap;
      padding: 50px;
    }
  }
`;

export default SHome;
