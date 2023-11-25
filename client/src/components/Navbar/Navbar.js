import React, { useContext, useState } from "react";
import logo from "../../assets/fc-top.png";
import { AuthContext } from "../../contexts/AuthContext";
import * as S from "./styled";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("player");
    localStorage.removeItem("role");
    localStorage.removeItem("accessToken");
    setIsLoggedIn(false);
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <S.NavContainer>
        <S.ArrowBack
          className='material-symbols-outlined'
          onClick={() => navigate(-1)}
          style={{
            display: location.pathname !== "/" ? "block" : "none",
          }}
        >
          arrow_back_ios
        </S.ArrowBack>
        <S.Logo>
          <S.LogoImg onClick={handleLogoClick} src={logo} alt='logo' />
        </S.Logo>
        <S.MenuIcon
          className='material-symbols-outlined'
          onClick={handleMenuClick}
        >
          menu
        </S.MenuIcon>
        {isMenuOpen && (
          <S.MenuList onClick={handleMenuClick}>
            {!isLoggedIn ? (
              <>
                <S.Menu to='/signup'>회원가입</S.Menu>
                <S.Menu to='/login'>로그인</S.Menu>
              </>
            ) : (
              <>
                <S.Menu onClick={handleLogout}>로그아웃</S.Menu>
                <S.Menu to='/mypage'>마이페이지</S.Menu>
              </>
            )}
            {/* <S.Menu to='/player'>선수단</S.Menu> */}
            <S.Menu to='/schedule'>일정/결과</S.Menu>
            <S.Menu to='/record'>기록/순위</S.Menu>
          </S.MenuList>
        )}
      </S.NavContainer>
    </>
  );
};

export default Navbar;
