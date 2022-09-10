import styled from "styled-components";

export const CreatePostDiv = styled.div`
  width: 45%;
  height: 55%;
  position: absolute;
  left: 50%;
  top: 35%;
  z-index: 999;
  transform: translate(-50%, -50%);
  border: ${({ theme }) => theme.border.modal};
  background-color: ${({ theme }) => theme.background.modal};
  color: ${({ theme }) => theme.textColor.modal};
  border-radius: 10px;
  -webkit-box-shadow: 0px 8px 22px -2px rgba(66, 68, 90, 1);
  -moz-box-shadow: 0px 8px 22px -2px rgba(66, 68, 90, 1);
  box-shadow: 0px 8px 22px -2px rgba(66, 68, 90, 1);
  padding-top: 1vh;

  h1 {
    text-align: center;
    font-size: 1.8em;
  }
`;

export const PostTitleDiv = styled.div`
  width: 80%;
  margin: 2vh auto 0 auto;

  p {
    text-align: center;
  }

  input {
    padding: 8px;
    border-radius: 12px;
    background-color: transparent;
    border: ${({ theme }) => theme.border.modal};
    display: block;
    margin: 2vh auto 0 auto;
    color: ${({ theme }) => theme.textColor.modal};
  }
`;

export const PostContentsDiv = styled.div`
  width: 80%;
  margin: 2vh auto 0 auto;

  p {
    text-align: center;
  }

  textarea {
    background-color: transparent;
    border: ${({ theme }) => theme.border.modal};
    margin: 2vh auto 0 auto;
    display: block;
    padding: 6px;
    width: 70%;
    height: 150px;
    color: ${({ theme }) => theme.textColor.modal};

    ::placeholder {
      text-align: center;
    }
  }
`;
