import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.span`
  font-size: 2rem;
  font-weight: 700;
  margin: 40px 0 20px 0;
`;
export const Content = styled.div``;

export const Label = styled.label`
  display: block;
  margin: 10px 0;
  font-size: 0.9rem;
  font-weight: 600;
`;

export const Id = styled.div`
  display: flex;
  margin-bottom: 3px;
`;

export const IdInput = styled.input`
  width: 200px;
  height: 50px;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  margin-right: 5px;
`;

export const IdCheckBtn = styled.button`
  width: 145px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  background-color: transparent;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }

  &:active {
    background-color: transparent;
  }
`;

export const LastNameInput = styled.input`
  width: 170px;
  height: 50px;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  margin-right: 3px;
`;

export const FirstNameInput = styled.input`
  width: 175px;
  height: 50px;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
`;

export const LabelGroup = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Msg = styled.span`
  color: rgba(0, 0, 0, 0.6);
  font-size: 0.8em;
  margin-right: 5px;
`;

export const ErrorMsg = styled.span`
  color: red;
  font-size: 0.8em;
  margin-right: 5px;
`;

export const ResetMsg = styled.span`
  color: rgba(0, 0, 0, 0.6);
  font-size: 0.8em;
  margin-left: -20px;
  margin-right: 5px;

  &:hover {
    cursor: pointer;
  }
`;

export const PasswordInput = styled.input`
  width: 348px;
  height: 50px;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
`;

export const Phone = styled.div`
  display: flex;
  margin-bottom: 3px;
`;

export const PhoneInput = styled.input`
  width: 230px;
  height: 50px;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  margin-right: 5px;
`;

export const PhoneBtn = styled.button`
  width: 115px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  background-color: transparent;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }

  &:active {
    background-color: transparent;
  }

  &:disabled:hover {
    background-color: transparent;
    cursor: default;
  }
`;

export const PhoneAuth = styled.div`
  display: flex;
`;

export const PhoneInputWithTimer = styled.div`
  position: relative;
`;

export const PhoneAuthTimer = styled.div`
  position: absolute;
  top: 19px;
  right: 20px;
  font-size: 12px;
  color: #888;
`;

export const PhoneAuthInput = styled.input`
  width: 230px;
  height: 50px;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  margin-right: 5px;
`;

export const PhoneAuthBtn = styled.button`
  width: 115px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  background-color: transparent;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }

  &:active {
    background-color: transparent;
  }

  &:disabled:hover {
    background-color: transparent;
    cursor: default;
  }
`;

export const PostCode = styled.div`
  display: flex;
  margin-bottom: 3px;
`;

export const PostCodeInput = styled.input`
  display: inline;
  width: 230px;
  height: 50px;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  margin-right: 5px;
`;

const highlightAnimation = keyframes`
  0% {
    background-color: transparent;
  }

  50% {
    background-color: rgba(0,0,0,0.1);
  }

  100% {
    background-color: transparent;
  }
`;

export const PostCodeSearchBtn = styled.button`
  width: 115px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  background-color: transparent;

  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.1);
  }

  &:active {
    background-color: transparent;
  }

  &.highlight-animation {
    animation: ${highlightAnimation} 1s;
  }
`;

export const Address = styled.input`
  display: block;
  width: 350px;
  height: 50px;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
`;

export const Select = styled.select`
  width: 115px;
  padding: 13px 16px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  margin-right: 3px;
  cursor: pointer;
`;

export const Option = styled.option`
  padding: 8px 16px;
`;

export const SignUpBtn = styled.button`
  width: 350px;
  height: 50px;
  color: white;
  background-color: #c70101;
  border-radius: 30px;
  border: none;
  margin: 20px 0;

  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }

  &:active {
    opacity: 1;
  }
`;
