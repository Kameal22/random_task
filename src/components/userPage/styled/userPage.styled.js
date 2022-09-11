import styled from "styled-components";

export const UserPageDiv = styled.div`
  background-color: ${({ theme }) => theme.background.body};
  min-height: 100vh;
  padding: 8vh 0;
  display: grid;
  place-items: center;

  i {
    position: absolute;
    top: 50%;
    left: 25%;
    transform: translate(-50%, -50%);
    color: ${({ theme }) => theme.icon.color};
    font-size: 2em;

    @media screen and (max-width: 1150px) {
      left: 15%;
    }

    @media screen and (max-width: 999px) {
      left: 5%;
    }

    @media screen and (max-width: 699px) {
      left: 5%;
      top: 95%;
    }

    &:hover {
      cursor: pointer;
    }
  }
`;

export const UserDiv = styled.div`
  width: 40%;
  height: 80vh;
  background-color: ${({ theme }) => theme.background.user};
  border: ${({ theme }) => theme.border.user};
  border-radius: 10px;
  padding-top: 2vh;
  padding-bottom: 2vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 1150px) {
    width: 60%;
  }

  @media screen and (max-width: 999px) {
    width: 75%;
  }

  @media screen and (max-width: 699px) {
    width: 95%;
  }

  h1 {
    color: ${({ theme }) => theme.textColor.user};
    text-align: center;
  }
`;

export const UserName = styled.h1`
  color: ${({ theme }) => theme.textColor.user};
  text-align: center;
`;

export const AddPostButton = styled.button`
  position: absolute;
  top: 50%;
  left: 75%;
  transform: translate(-50%, -50%);
  padding: 12px;
  background-color: transparent;
  border: ${({ theme }) => theme.border.button};
  color: ${({ theme }) => theme.textColor.button};
  border-radius: 10px;

  @media screen and (max-width: 1150px) {
    left: 88%;
  }

  @media screen and (max-width: 999px) {
    left: 94%;
    width: 10%;
  }

  @media screen and (max-width: 699px) {
    left: 88%;
    top: 95%;
    width: 20%;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const UserPosts = styled.div`
  height: 75%;
  overflow: auto;
`;
