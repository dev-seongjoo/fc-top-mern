import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

export const Title = styled.span`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const Content = styled.div``;

export const LabelGroup = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Label = styled.label`
  display: block;
  margin: 10px 0;
  font-size: 0.9rem;
  font-weight: 600;
`;

export const ErrorMsg = styled.span`
  color: red;
  font-size: 0.8em;
  margin-right: 5px;
`;

export const IdInput = styled.input`
  width: 300px;
  height: 50px;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  margin-right: 5px;
`;

export const PasswordInput = styled.input`
  width: 300px;
  height: 50px;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
`;

export const LoginBtn = styled.button`
  width: 320px;
  height: 50px;
  color: white;
  background-color: #c70101;
  border-radius: 30px;
  border: none;
  margin-top: 20px;

  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }

  &:active {
    opacity: 1;
  }
`;

export const LinkGroup = styled.div`
  display: flex;
`;

export const StyledLink = styled(Link)`
  display: block;
  margin-top: 10px;
  text-align: center;
  color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
`;
