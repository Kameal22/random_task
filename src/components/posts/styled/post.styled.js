import styled from "styled-components";

export const PostDiv = styled.div`
  background-color: ${({ theme }) => theme.background.body};
  min-height: 100vh;
  padding: 8vh 0;
  display: grid;
  place-items: center;
`;
