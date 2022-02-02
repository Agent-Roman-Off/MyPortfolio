import styled from 'styled-components';

const SFooter = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: var(--mColor);
  width: 100%;
  height: 70px;
  color: var(--yColor);
  font-size: 12px;
  @media only screen and (min-width: 700px) {
    font-size: 16px;
  }
`;

export default SFooter;
