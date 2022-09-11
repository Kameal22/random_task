import styled from "styled-components";

export const NavbarDiv = styled.div`
  padding: 1vh 2em;
  position: absolute;
  width: 100%;

  i {
    font-size: 2em;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const Disclaimer = styled.button`
  color: ${({ theme }) => theme.textColor.post};
  font-weight: bold;
  font-size: 1.1em;
  text-transform: uppercase;
  position: absolute;
  top: 30%;
  right: 5%;
  background-color: transparent;
  border: ${({ theme }) => theme.border.button};
  color: ${({ theme }) => theme.textColor.button};
  border-radius: 12px;
  padding: 4px;

  &:hover {
    cursor: pointer;
    -webkit-box-shadow: -9px 4px 21px -6px rgba(66, 68, 90, 1);
    -moz-box-shadow: -9px 4px 21px -6px rgba(66, 68, 90, 1);
    box-shadow: -9px 4px 21px -6px rgba(66, 68, 90, 1);
  }
`;

export const DisclaimerDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 600px;
  border: ${({ theme }) => theme.border.button};
  color: ${({ theme }) => theme.textColor.post};
  z-index: 999;
  background-color: ${({ theme }) => theme.background.user};
  -webkit-box-shadow: -9px 4px 16px -2px rgba(66, 68, 90, 1);
  -moz-box-shadow: -9px 4px 16px -2px rgba(66, 68, 90, 1);
  box-shadow: -9px 4px 16px -2px rgba(66, 68, 90, 1);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 2vh;
  padding-top: 2vh;

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
    text-align: center;

    @media screen and (max-width: 699px) {
      font-size: 1.7em;
    }
  }

  h2 {
    text-align: center;

    @media screen and (max-width: 699px) {
      font-size: 1.2em;
    }
  }

  p {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    text-align: justify;

    @media screen and (max-width: 699px) {
      font-size: 0.9em;
    }
  }
`;
