import { useNavigate } from "react-router-dom";
import { SideNavIcons } from "../../../data/layout/navbarData";
import { useSideNav } from "../../../context/SideNavProvider";
import { useUser } from "../../../context/UserContext";

const SideNavbar: React.FC = () => {
  const navigate = useNavigate();

  const { isSideOpen } = useSideNav();
  const { user } = useUser();

  console.log(window.location.pathname.slice(1));

  return (
    <div
      className={`fixed top-16 left-0 h-full bg-gray-100 border-r-4 border-gray-300 md:min-w-[10vw] z-30
                ${
                  isSideOpen
                    ? "translate-x-0 md:translate-x-0"
                    : "-translate-x-12 md:-translate-x-48"
                }`}
    >
      {/* ^^^ transition-transform duration-300 ease-in-out */}

      <ul className="space-y-4 py-4 md:px-4">
        {SideNavIcons.map(({ Icon, text, path, onClick, loginOnly }, index) =>
          loginOnly === undefined || loginOnly === Boolean(user) ? ( //loginOnly 가 없거나 undefined 면 표시, true면 로그인후에만 표시
            <li
              key={index}
              className={`flex items-center p-2 md:hover:text-gray-700
                ${
                  window.location.pathname === path
                    ? "text-blue-600"
                    : "text-black"
                }`}
              onClick={() => (path ? navigate(path) : onClick?.())}
              role="button"
            >
              <Icon
                className={`w-7 h-7 hover:scale-110
                 ${
                   isSideOpen
                     ? "translate-x-0"
                     : "translate-x-12 md:-translate-x-0"
                 }`}
              />
              <div
                className={`ml-4 font-bold
                ${
                  isSideOpen
                    ? "translate-x-0 md:-translate-x-0 mr-4"
                    : "-translate-x-40 md:-translate-x-0"
                }`}
              >
                {text}
              </div>
            </li>
          ) : null
        )}
        {/*  <li onClick={() => navigate("/datas")}>Finhub Datas</li>
         <li onClick={() => navigate("/stock/test")}>stock test</li>
         <li onClick={() => navigate("/twelvedata")}>Twelve Data</li> */}
      </ul>
    </div>
  );
};

export default SideNavbar;
