import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { MyPageNav, NavList } from "./styled";

const MyPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navLists = [
    { path: "/mypage/myinfo", label: `나의 TOP` },
    { path: "/mypage/myattendance", label: "출석" },
    { path: "/mypage/myrecord", label: "경기 기록" },
    { path: "/mypage/setting", label: "설정" },
  ];

  useEffect(() => {
    if (location.pathname === "/mypage" || location.pathname === "/mypage/") {
      navigate("/mypage/myinfo");
    }
  }, [location.pathname, navigate]);

  return (
    <>
      <MyPageNav>
        {navLists.map((list) => (
          <NavList
            key={list.path}
            to={list.path}
            selected={location.pathname === list.path}
          >
            {list.label}
          </NavList>
        ))}
      </MyPageNav>
      <Outlet />
    </>
  );
};

export default MyPage;
