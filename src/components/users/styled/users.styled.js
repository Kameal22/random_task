import styled from "styled-components";

export const UsersDiv = styled.div`
  width: 80%;

  display: grid;
  grid-template-columns: 20% 20% 20% 20%;
  justify-content: space-around;
  place-items: center;
  gap: 10vh;

  @media screen and (max-width: 1150px) {
    grid-template-columns: 25% 25% 25%;
  }

  @media screen and (max-width: 999px) {
    grid-template-columns: 40% 40%;
  }

  @media screen and (max-width: 699px) {
    grid-template-columns: 80%;
  }
`;
