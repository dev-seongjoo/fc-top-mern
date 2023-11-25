import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { NavList, RecordPageNav } from "./styled";
import { useEffect } from "react";

const RecordPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navLists = [
    { path: "/record/attendance", label: "출석 순위" },
    { path: "/record/goal", label: "득점 순위" },
    { path: "/record/assist", label: "도움 순위" },
    { path: "/record/participation", label: "선수별 기록" },
  ];

  useEffect(() => {
    if (location.pathname === "/record" || location.pathname === "/record/") {
      navigate("/record/attendance");
    }
  }, [location.pathname, navigate]);

  return (
    <>
      <RecordPageNav>
        {navLists.map((list) => (
          <NavList
            key={list.path}
            to={list.path}
            selected={location.pathname === list.path}
          >
            {list.label}
          </NavList>
        ))}
      </RecordPageNav>
      <Outlet />
    </>
  );
};

export default RecordPage;
