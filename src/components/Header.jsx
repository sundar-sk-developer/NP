import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoCloseCircle } from "react-icons/io5";

const Header = () => {
  const [toggle,setToggle] = useState(false)
  return (
    <>
    <header className='flex justify-between  items-center px-5 py-2 bg-primary z-20 sticky top-0'>
            <a href="#" className='text-black font-bold text-2xl'>Somasundaram</a>
      {/* desktop menu */}
        <nav className='hidden md:block'>
            <ul className='flex px-3 items-center text-white'>
                <a href="#hero"><li>Home</li></a>
                <a href="#about"><li>About</li></a>
                <a href="#projects"><li>Project</li></a>
                <a href="#resume"><li>Resume</li></a>
                <a href="#contact"><li>Contact</li></a>
            </ul>
        </nav>
        {/* mobile menu */}
        { toggle &&  <nav className={`block md:hidden bg-blue-600/50 backdrop-blur mobile-menu z-10 ${toggle ? 'transition-all': 'transition-all'}`}>
            <ul onClick={()=> setToggle(!toggle)} className='block  items-center text-white text-center'>
                <a href="#hero"><li>Home</li></a>
                <a href="#about"><li>About</li></a>
                <a href="#projects"><li>Project</li></a>
                <a href="#resume"><li>Resume</li></a>
                <a href="#contact"><li>Contact</li></a>
            </ul>
        </nav>}
        <button onClick={()=>setToggle(!toggle)} className="block md:hidden">{!toggle ? <HiMenuAlt3 className="text-white" size={30}/> : <IoCloseCircle className="text-white" size={30}/>}</button>
    </header>

    </>
  )
}

export default Header
