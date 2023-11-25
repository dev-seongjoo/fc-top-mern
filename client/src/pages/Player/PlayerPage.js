import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { NavList, PlayerPageNav } from "./styled";

const PlayerPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navLists = [
    { path: "/player/all", label: "ALL" },
    { path: "/player/fw", label: "FW" },
    { path: "/player/mf", label: "MF" },
    { path: "/player/df", label: "DF" },
    { path: "/player/gk", label: "GK" },
  ];

  useEffect(() => {
    if (location.pathname === "/player" || location.pathname === "/player/") {
      navigate("/player/all");
    }
  }, [location.pathname, navigate]);

  return (
    <>
      <PlayerPageNav>
        {navLists.map((list) => (
          <NavList
            key={list.path}
            to={list.path}
            selected={location.pathname === list.path}
          >
            {list.label}
          </NavList>
        ))}
      </PlayerPageNav>
      <Outlet />
    </>
  );
};

export default PlayerPage;
