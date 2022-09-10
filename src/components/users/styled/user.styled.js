import styled from "styled-components";

export const UserDiv = styled.div`
  border-radius: 10px;
  width: 100%;
  padding: 2vh 5% 2vh 5%;
  height: 250px;
  position: relative;
  background-color: ${({ theme }) => theme.background.user};
  color: ${({ theme }) => theme.textColor.user};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  -webkit-box-shadow: 0px 8px 22px -2px rgba(66, 68, 90, 1);
  -moz-box-shadow: 0px 8px 22px -2px rgba(66, 68, 90, 1);
  box-shadow: 0px 8px 22px -2px rgba(66, 68, 90, 1);

  &:hover {
    cursor: pointer;
    border: ${({ theme }) => theme.border.user};
  }

  i {
    font-size: 2em;
    display: block;
    text-align: center;
  }
`;

export const UserName = styled.h3`
  text-align: center;
`;

export const UserData = styled.p`
  font-size: 0.8em;
`;
