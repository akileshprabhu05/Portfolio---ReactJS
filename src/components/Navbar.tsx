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
        <a href="https://www.linkedin.com/in/akilesh-prabhu-3b4b15209/" target="_blank"> <FaLinkedin/> </a>
        <a href="https://github.com/akileshprabhu05" target="_blank"> <FaGithub/> </a>
        <a href="https://leetcode.com/u/akileshsakthi05/"><SiLeetcode/></a>
        <a href="https://www.hackerrank.com/profile/akileshsakthi05" target="_blank"> <FaHackerrank/> </a>
      </div>
    </nav>
  )
}          


export default Navbar;