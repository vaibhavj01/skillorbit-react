import { useEffect, useMemo, useRef, useState } from "react";
import { Link, NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { Bookmark, Compass, LayoutDashboard, LogOut, Search, Settings, UserRound, Zap } from "lucide-react";
import { ASSETS } from "../../data/siteConfig";
import { useAuth } from "../auth/AuthContext";
import { searchRoadmaps } from "../data/catalog";
import { initials } from "../utils";
import "../roadmap-platform.css";

const NAV = [
  { to: "/roadmap", label: "Roadmaps", end: true },
  { to: "/roadmap/progress", label: "My Progress" },
  { to: "/roadmap/bookmarks", label: "Bookmarks" },
  { to: "/roadmap/resources", label: "Resources" },
];

const AUTH_PATHS = ["/roadmap/login", "/roadmap/register", "/roadmap/forgot-password"];

function navClass({ isActive }) {
  return isActive ? "is-active" : "";
}

export default function RoadmapLayout() {
  const { user, logout, isAuthenticated } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [openMenu, setOpenMenu] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const menuRef = useRef(null);
  const isAuthPage = AUTH_PATHS.includes(location.pathname);

  const results = useMemo(() => (query.trim().length > 1 ? searchRoadmaps(query).slice(0, 6) : []), [query]);

  useEffect(() => {
    setOpenMenu(false);
    setOpenSearch(false);
    setQuery("");
  }, [location.pathname]);

  useEffect(() => {
    const onDoc = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) setOpenMenu(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  const homeTo = isAuthenticated ? "/roadmap/dashboard" : "/roadmap";

  if (isAuthPage) {
    return (
      <div className="so-roadmap rm-shell">
        <header className="rm-topbar">
          <Link to="/" className="rm-logo">
            <img src={ASSETS.logo} alt="SkillOrbit" />
          </Link>
        </header>
        <Outlet />
      </div>
    );
  }

  return (
    <div className="so-roadmap rm-shell">
      <header className="rm-topbar">
        <Link to={homeTo} className="rm-logo">
          <img src={ASSETS.logo} alt="SkillOrbit" />
        </Link>
        <nav className="rm-nav" aria-label="Roadmap">
          {NAV.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.end} className={navClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="rm-search-wrap">
          <Search size={16} className="rm-search-icon" />
          <input
            className="rm-search"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setOpenSearch(true);
            }}
            onFocus={() => setOpenSearch(true)}
            placeholder="Search roadmaps..."
            aria-label="Search roadmaps"
          />
          {openSearch && query.trim().length > 1 ? (
            <div className="rm-search-results">
              {results.length ? (
                results.map((item) => (
                  <Link key={item.slug} to={`/roadmap/${item.slug}`}>
                    {item.title}
                  </Link>
                ))
              ) : (
                <p>No matching roadmaps.</p>
              )}
            </div>
          ) : null}
        </div>
        {isAuthenticated ? (
          <div className="rm-avatar-wrap" ref={menuRef}>
            <button type="button" className="rm-avatar-btn" aria-label="Account menu" onClick={() => setOpenMenu((v) => !v)}>
              {initials(user.name)}
            </button>
            {openMenu ? (
              <div className="rm-menu" role="menu">
                <Link to="/roadmap/profile"><UserRound size={15} /> My Profile</Link>
                <Link to="/roadmap/progress"><Zap size={15} /> My Progress</Link>
                <Link to="/roadmap/settings"><Settings size={15} /> Settings</Link>
                <button
                  type="button"
                  onClick={() => {
                    logout();
                    navigate("/roadmap/login");
                  }}
                >
                  <LogOut size={15} /> Logout
                </button>
              </div>
            ) : null}
          </div>
        ) : (
          <RmLinkLogin />
        )}
      </header>

      <main className={`rm-main ${location.pathname.split("/").length > 2 && !location.pathname.includes("dashboard") ? "rm-main--wide" : ""}`}>
        <Outlet />
      </main>

      <nav className="rm-bottom-nav" aria-label="Mobile roadmap">
        <NavLink to="/roadmap" end className={navClass}>
          <Compass size={18} />
          Roadmaps
        </NavLink>
        <NavLink to="/roadmap/progress" className={navClass}>
          <LayoutDashboard size={18} />
          Progress
        </NavLink>
        <NavLink to="/roadmap/bookmarks" className={navClass}>
          <Bookmark size={18} />
          Saved
        </NavLink>
        <NavLink to={isAuthenticated ? "/roadmap/profile" : "/roadmap/login"} className={navClass}>
          <UserRound size={18} />
          {isAuthenticated ? "Profile" : "Login"}
        </NavLink>
      </nav>
    </div>
  );
}

function RmLinkLogin() {
  return (
    <Link to="/roadmap/login" className="rm-btn rm-btn--primary" style={{ minHeight: "2.35rem", padding: "0.4rem 0.85rem", fontSize: "0.82rem" }}>
      Login
    </Link>
  );
}
