import styled from "styled-components";

export const PostDiv = styled.div`
  background-color: ${({ theme }) => theme.background.body};
  min-height: 100vh;
  padding: 8vh 0;
  position: relative;

  h1 {
    color: ${({ theme }) => theme.textColor.post};
    text-align: center;
  }
`;

export const GoBack = styled.button`
  padding: 8px;
  background-color: transparent;
  border: ${({ theme }) => theme.border.button};
  color: ${({ theme }) => theme.textColor.button};
  border-radius: 8px;
  position: absolute;
  top: 50%;
  left: 25%;
  transform: translate(-50%, -50%);

  &:hover {
    cursor: pointer;
  }
`;

export const PostContent = styled.div`
  width: 40%;
  height: 70vh;
  background-color: ${({ theme }) => theme.background.user};
  border: ${({ theme }) => theme.border.user};
  margin-left: auto;
  margin-right: auto;
  margin-top: 6vh;
  padding-left: 2em;
  padding-right: 2em;

  h2 {
    font-weight: bold;
    color: ${({ theme }) => theme.textColor.user};
    text-align: center;
    margin-top: 2vh;
  }

  p {
    color: ${({ theme }) => theme.textColor.user};
    text-align: center;
    margin-top: 12vh;
    margin-left: auto;
    margin-right: auto;
    text-align: justify;
  }
`;

export const ShowComments = styled.button`
  padding: 12px;
  width: 30%;
  background-color: transparent;
  border: ${({ theme }) => theme.border.button};
  color: ${({ theme }) => theme.textColor.button};
  border-radius: 8px;
  margin-top: 4vh;

  &:hover {
    cursor: pointer;
  }
`;
