import styled from "styled-components";

export const HomePageDiv = styled.div`
  background-color: ${({ theme }) => theme.background.body};
  min-height: 100vh;
  padding: 12vh 0;
  display: grid;
  place-items: center;

  h1 {
    color: ${({ theme }) => theme.textColor.user};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
