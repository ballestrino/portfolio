import lightIcon from "../../public/light.icon.svg";
import darkIcon from "../../public/dark.icon.svg";
import { useContext, useEffect } from "react";
import Cookies from "js-cookie";
import { AppContext } from "../context/AppContextProvider";

export default function DarkLightMode() {
  const { mode, setMode } = useContext(AppContext);

  //Detects mode Change and changes the icon
  useEffect(() => {
    const Html = document.documentElement;
    const icon = document.getElementById("icon");
    if (mode === "dark") {
      icon.src = lightIcon;
      Html.classList.add("dark");
    } else if (mode === "light") {
      Html.classList.remove("dark");
      icon.src = darkIcon;
    }
    Cookies.set("mode", mode);
  }, [mode]);

  //Handles the change of mode on clicking the icon
  const handleChangeMode = () => {
    if (mode === "dark") {
      setMode("light");
      Cookies.set("mode", "light");
    } else {
      setMode("dark");
      Cookies.set("mode", "dark");
    }
  };

  return (
    <div className="flex w-full items-end justify-end pr-9 lg:justify-start">
      <img
        onClick={handleChangeMode}
        id="icon"
        src={lightIcon}
        alt="light dark mode"
        className="cursor-pointer select-none pl-5"
      />
    </div>
  );
}
