import React, { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styled";

import axios from "axios";
import { AuthContext } from "../../contexts/AuthContext";

const SERVER_BASE_URL = process.env.REACT_APP_SERVER_BASE_URL;

const LoginPage = () => {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [isIdWarning, setIsIdWarning] = useState(false);
  const { setIsLoggedIn } = useContext(AuthContext);

  const idRef = useRef(null);
  const passwordRef = useRef(null);

  const englishRegex = /^[a-zA-Z]*$/;
  const numberRegex = /^[0-9]*$/;

  const handleIdChange = (event) => {
    const inputValue = event.target.value.trim();
    if (englishRegex.test(inputValue)) {
      setId(inputValue.toLowerCase());
      setIsIdWarning(false);
    } else if (numberRegex.test(inputValue)) {
      setId(inputValue);
      setIsIdWarning(false);
    } else {
      setIsIdWarning(true);
    }
  };

  const handlePasswordChange = (event) => {
    const inputValue = event.target.value.trim();
    setPassword(inputValue);
  };

  const handleLogin = (event) => {
    event.preventDefault();

    if (id === "") {
      alert("아이디를 입력해주세요.");
      idRef.current.focus();
      return;
    }

    // if (password === "") {
    //   alert("비밀번호를 입력해주세요.");
    //   passwordRef.current.focus();
    //   return;
    // }

    axios
      .post(`${SERVER_BASE_URL}/login`, { id, password })
      .then((res) => {
        localStorage.setItem("accessToken", res.data.accessToken);
        localStorage.setItem("player", JSON.stringify(res.data.player.ID));
        localStorage.setItem("role", res.data.player.ROLE);
        axios.defaults.headers.common["Authorization"] =
          "Bearer " + localStorage.getItem("accessToken");
        setIsLoggedIn(true);
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
        alert(err.response.data);
      });
  };

  return (
    <form>
      <S.Container>
        <S.Title>로그인</S.Title>
        <S.Content>
          <S.LabelGroup>
            <S.Label htmlFor='id'>아이디</S.Label>
            {isIdWarning && (
              <S.ErrorMsg>영문 소문자 및 숫자만 입력 가능합니다.</S.ErrorMsg>
            )}
          </S.LabelGroup>
          <S.IdInput
            id='phone'
            type='text'
            value={id}
            ref={idRef}
            placeholder='아이디 입력'
            onChange={handleIdChange}
          />
          <S.Label htmlFor='password'>비밀번호</S.Label>
          <S.PasswordInput
            id='password'
            type='password'
            value={password}
            ref={passwordRef}
            placeholder='비밀번호 입력'
            onChange={handlePasswordChange}
          />
        </S.Content>
        <S.LoginBtn onClick={handleLogin}>로그인</S.LoginBtn>
      </S.Container>
    </form>
  );
};

export default LoginPage;
