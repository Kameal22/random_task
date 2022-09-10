import styled from "styled-components";

export const UserPageDiv = styled.div`
  background-color: ${({ theme }) => theme.background.body};
  min-height: 100vh;
  padding: 8vh 0;
  display: grid;
  place-items: center;
`;

export const UserDiv = styled.div`
  width: 80%;
  height: 80vh;
  border: ${({ theme }) => theme.border.user};
`;
