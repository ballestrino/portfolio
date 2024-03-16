import iconLinkedIn from "../../public/linkedIn.icon.svg";
import iconGitHub from "../../public/github.icon.svg";

export default function LinkIcons() {
  return (
    <section className="mt-5 flex">
      <img src={iconLinkedIn} alt="LinkedIn icon" className="mr-4 h-7 w-7" />
      <a href="https://github.com/ballestrino" target="_blank">
        <img src={iconGitHub} alt="" className="h-7 w-7" />
      </a>
    </section>
  );
}
