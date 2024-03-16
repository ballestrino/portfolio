import iconJs from "../../public/javascript.png";
import iconReact from "../../public/react.png";
import iconTailwind from "../../public/tailwind.png";
import iconVite from "../../public/vite.png";
import iconGit from "../../public/git.png";

export default function icons() {
  //List of Icons
  const iconsRoutesList = [iconReact, iconJs, iconTailwind, iconVite, iconGit];
  return (
    <div className="flex w-full items-center justify-center pl-1 lg:items-start lg:justify-start">
      <ul className="flex">
        {iconsRoutesList.map((icon, index) => {
          return (
            <li key={index}>
              <img
                src={icon}
                alt="programming language icon"
                className="mr-4 mt-5 h-7 w-7 transition-all duration-300 ease-in-out hover:scale-110 lg:mt-0"
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
