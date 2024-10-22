import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaHackerrank } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 h-28" src="/Akile.png" alt="logo"/>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/abdul-gouse-syeedy-000027277?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"> <FaLinkedin/> </a>
        <a href="https://github.com/Abdulgsk" target="_blank"> <FaGithub/> </a>
        <a href="https://leetcode.com/u/Abdul_Gouse/"><SiLeetcode/></a>
        <a href="https://www.hackerrank.com/profile/abdul29112004" target="_blank"> <FaHackerrank/> </a>
      </div>
    </nav>
  )
}          


export default Navbar;