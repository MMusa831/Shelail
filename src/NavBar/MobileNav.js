import NavLinks from "./NavLinks";
import './Nav.css';
import {HiOutlineMenuAlt3} from 'react-icons/hi';
import {CgClose} from 'react-icons/cg'
import {useState} from 'react';



function MobileNav () {

  const [show, setShow] = useState(false) 
  const openIcons = <HiOutlineMenuAlt3 className="hamburger"  size='40px' color='white'

                         onClick={() => setShow(!show)}

                        />
  const closeIcons =  <CgClose className="hamburger"  size='40px' color='white'

                         onClick={() => setShow(!show)}

                        />                     

  return (

    <nav className="MobileNav">

      {show ? closeIcons : openIcons}

     {show && <NavLinks/> }

     </nav>
  )
}

export default MobileNav;