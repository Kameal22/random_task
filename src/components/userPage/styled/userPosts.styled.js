import styled from "styled-components";

export const UserPostsDiv = styled.div`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: baseline;
  padding-top: 2vh;
  padding-bottom: 2vh;

  p {
    color: ${({ theme }) => theme.textColor.post};
    font-size: 0.9em;
    margin-left: 2em;

    &:hover {
      cursor: pointer;
    }
  }

  button {
    padding: 4px;
    background-color: transparent;
    border: ${({ theme }) => theme.border.button};
    color: ${({ theme }) => theme.textColor.button};
    border-radius: 8px;

    &:hover {
      cursor: pointer;
    }
  }
`;
