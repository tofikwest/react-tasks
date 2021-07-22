import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  text-transform: uppercase;
  height: 60px;
  border-bottom: 3px solid ${(props) => props.colors.darkColors.main};
  background-color: ${(props) => props.colors.darkColors.background};

  .headerLogo {
    font-weight: 700;
    font-size: 24px;
    color: ${(props) => props.colors.darkColors.main};
  }
`;
