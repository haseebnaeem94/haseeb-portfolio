import "./Navbar.css"
import Link from "next/link"

const Navbar = () => {
  return (
    <div className='mynav'>
    <ul className='nav'>
      <li><Link href="/">Home</Link></li>
      <li><Link href="./about">About</Link></li>
      <li><Link href="./portfolio">Portfolio</Link></li>
      <li><Link href="./skills">Skills</Link></li>
      <li><Link href="./contact">Contact</Link></li>
    </ul>
  </div>
  )
}

export default Navbar
