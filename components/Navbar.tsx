import React, { useEffect, useState } from "react"
import Link from "next/link"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [colour, setColour] = useState("transparent")
  const [textColour, setTextColour] = useState("white")

  const handleNav = () => {
    setNav(!nav)
  }
  useEffect(() => {
    const changeColour = () => {
      if (window.scrollY >= 500) {
        setColour("#fffffff")
        setTextColour("#000000")
      } else {
        setColour("transparent")
        setTextColour("#9E9E9E")
      }
    }
  window.addEventListener("scroll", changeColour)
   
  })

  return (
    
    
    <div
      style={{ backgroundColor: `${colour}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/">
          <h1 style={{ color: `${textColour}` }} className="font-bold text-4xl">
            Tristan&apos;s Blog
          </h1>
        </Link>
        <ul className="hidden sm:flex">
          <li className="p-4">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4">
            <Link href="/#posts">Posts</Link>
          </li>
          <li className="p-4">
            <Link href="/projects">Projects</Link>
          </li>
          <li className="p-4">
            <Link href="/resume">Resume</Link>
          </li>
        </ul>

        {/* Mobile button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColour}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColour}` }} />
          )}
        </div>

        {/* mobile menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/">Home</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/#posts">Posts</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/projects">Projects</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/resume">Resume</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
