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

    &:hover {
      cursor: pointer;
    }
  }
`;

export const UserDiv = styled.div`
  width: 40%;
  height: 80vh;
  border: ${({ theme }) => theme.border.user};
  border-radius: 10px;
  padding-top: 2vh;
  padding-bottom: 2vh;
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

  &:hover {
    cursor: pointer;
  }
`;
