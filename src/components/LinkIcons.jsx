import iconLinkedInLight from "../../public/linkedIn.icon.light.svg";
import iconGitHubLight from "../../public/github.icon.light.svg";
import iconLinkedInDark from "../../public/linkedIn.icon.dark.svg";
import iconGitHubDark from "../../public/github.icon.dark.svg";

import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContextProvider";

export default function LinkIcons() {
  const { mode } = useContext(AppContext);
  useEffect(() => {
    const iconLinkedIn = document.getElementById("iconLinkedIn");
    const iconGitHub = document.getElementById("iconGitHub");
    if (mode === "dark") {
      iconLinkedIn.src = iconLinkedInDark;
      iconGitHub.src = iconGitHubDark;
    } else {
      iconLinkedIn.src = iconLinkedInLight;
      iconGitHub.src = iconGitHubLight;
    }
  }, [mode]);
  return (
    <section className="mt-5 flex">
      <img
        src={iconLinkedInLight}
        alt="LinkedIn icon"
        className="mr-4 h-7 w-7"
        id="iconLinkedIn"
      />
      <a href="https://github.com/ballestrino" target="_blank">
        <img src={iconGitHubLight} alt="" className="h-7 w-7" id="iconGitHub" />
      </a>
    </section>
  );
}
