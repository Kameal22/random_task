import styled from "styled-components";

export const PostDiv = styled.div`
  background-color: ${({ theme }) => theme.background.body};
  min-height: 100vh;
  position: relative;
  display: grid;
  place-items: center;

  @media screen and (max-width: 699px) {
    display: flex;
    flex-direction: column;
  }

  h1 {
    color: ${({ theme }) => theme.textColor.post};
    text-align: center;
    margin-top: 2vh;

    @media screen and (max-width: 699px) {
      font-size: 1.7em;
    }
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
  left: 15%;
  transform: translate(-50%, -50%);

  @media screen and (max-width: 1150px) {
    left: 12%;
  }

  @media screen and (max-width: 999px) {
    left: 5%;
  }

  @media screen and (max-width: 699px) {
    left: 10%;
    top: 92%;
    width: 15%;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const PostContent = styled.div`
  width: 60%;
  height: 75vh;
  background-color: ${({ theme }) => theme.background.user};
  border: ${({ theme }) => theme.border.user};
  margin-left: auto;
  margin-right: auto;
  margin-top: 2vh;
  padding-bottom: 2vh;
  padding-left: 2em;
  padding-right: 2em;
  overflow-y: auto;

  @media screen and (max-width: 1150px) {
    width: 60%;
  }

  @media screen and (max-width: 999px) {
    width: 75%;
  }

  @media screen and (max-width: 699px) {
    width: 95%;
    margin-top: 6vh;
    padding-left: 1em;
    padding-right: 1em;
  }

  h2 {
    font-weight: bold;
    color: ${({ theme }) => theme.textColor.user};
    text-align: center;
    margin-top: 2vh;

    @media screen and (max-width: 699px) {
      font-size: 1.4em;
    }
  }

  p {
    color: ${({ theme }) => theme.textColor.user};
    text-align: center;
    margin-top: 4vh;
    margin-left: auto;
    margin-right: auto;
    text-align: justify;

    @media screen and (max-width: 699px) {
      font-size: 0.85em;
    }
  }
`;

export const ShowComments = styled.button`
  padding: 12px;
  width: 30%;
  background-color: transparent;
  border: ${({ theme }) => theme.border.button};
  color: ${({ theme }) => theme.textColor.button};
  border-radius: 8px;
  margin-top: 2vh;

  @media screen and (max-width: 699px) {
    width: 40%;
    padding: 8px;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const CommentsDiv = styled.div`
  margin-top: 2vh;
`;

export const CommentDiv = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.textColor.user};

  div {
    width: 100%;
    display: flex;

    @media screen and (max-width: 999px) {
      flex-direction: column;
    }

    @media screen and (max-width: 699px) {
      flex-direction: column;
    }
  }
`;

export const CommentEmail = styled.p`
  font-size: 0.8em;
  width: 25%;
  font-weight: bold;
  @media screen and (max-width: 999px) {
    width: 50%;
  }

  @media screen and (max-width: 699px) {
    width: 75%;
  }
`;

export const CommentName = styled.p`
  font-size: 0.8em;
  width: 50%;

  @media screen and (max-width: 999px) {
    width: 50%;
  }

  @media screen and (max-width: 699px) {
    width: 75%;
  }
`;

export const CommentContent = styled.p`
  font-size: 0.85em;
  width: 95%;
`;
