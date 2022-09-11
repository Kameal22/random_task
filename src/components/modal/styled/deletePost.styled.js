import styled from "styled-components";

export const DeletePostDiv = styled.div`
  width: 25%;
  height: 15%;
  position: absolute;
  left: 50%;
  top: 35%;
  z-index: 999;
  transform: translate(-50%, -50%);
  border: ${({ theme }) => theme.border.modal};
  background-color: ${({ theme }) => theme.background.modal};
  color: ${({ theme }) => theme.textColor.modal};
  border-radius: 10px;
  padding-top: 1vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    text-align: center;
  }
  div {
    display: flex;
    justify-content: space-around;
    margin-bottom: 2vh;
  }
`;

export const DeleteButton = styled.button`
  padding: 2px;
  color: ${({ theme }) => theme.textColor.button};
  border: ${({ theme }) => theme.border.button};
  font-weight: bold;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
  }
`;

export const CancelButton = styled.button`
  padding: 2px;
  color: ${({ theme }) => theme.textColor.button};
  border: ${({ theme }) => theme.border.button};
  font-weight: bold;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
  }
`;
