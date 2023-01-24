import './Navbar.css'
import myImage from './Profile.jpg'
import FullPic from './bckg.jpg'
import NavbarItems from './NavbarItems'
import { GrGithub} from 'react-icons/gr';
import { BsLinkedin} from 'react-icons/bs'
import { BsList} from 'react-icons/bs'
import { BiDetail} from 'react-icons/bi'
import { useState } from 'react';
const Navbar=()=>
{
    const[state,setstate]=useState(false)
    return(
        <div id='parent'>
        <div id="navbar">
            <div id='navbarleft' className='links'>
                <img id='profilepic' src={myImage} alt="" /><br/>
                <div style={{textAlign:"center"}}>
                <a href="">Vidisha Khalpada</a>
                <h4>Full Stack Web Developer</h4><br/>
                </div>
            </div>
            <div id='hamburger' onClick={()=>
            {
                setstate(!state)
            }} style={{float:"right",backgroundColor:" lightgray"}} >
                <BsList size={30}/>
            </div>
            <div id='navbarlinkmq' className='links'onClick={()=>
            {
                setstate(!state)
            }}style={{display:state?'block':'none'}}>
                <NavbarItems link="#home" image="https://cdn-icons-png.flaticon.com/512/553/553416.png" name="Home"/>
                <NavbarItems link="#aboutsec" image="https://cdn-icons-png.flaticon.com/512/8945/8945089.png" name="About"/>
                <NavbarItems link="#aboutskills" image="https://cdn-icons-png.flaticon.com/512/3095/3095221.png" name="Skills"/>
                <NavbarItems link="#aboutprojects" image="https://cdn-icons-png.flaticon.com/512/4946/4946348.png" name="Projects"/>
                <NavbarItems link="#aboutrecog" image="https://cdn-icons-png.flaticon.com/512/2666/2666535.png" name="Recognitions"/>
                <NavbarItems link="#abouteduc" image="https://cdn-icons-png.flaticon.com/512/2936/2936719.png" name="Education"/>
                <NavbarItems link="#aboutcontact" image="https://cdn-icons-png.flaticon.com/512/2043/2043285.png" name="Contact"/>
                <NavbarItems link="https://drive.google.com/file/d/1ThbOFODB4nbN5SGCifWqJC19jUW1G92x/view?usp=share_link" target="_blank"image="https://cdn-icons-png.flaticon.com/512/942/942748.png" name="Resume"/>
            </div>
            <div id='navbarlink' className='links'>
                <NavbarItems link="#home" image="https://cdn-icons-png.flaticon.com/512/553/553416.png" name="Home"/>
                <NavbarItems link="#aboutsec" image="https://cdn-icons-png.flaticon.com/512/8945/8945089.png" name="About"/>
                <NavbarItems link="#aboutskills" image="https://cdn-icons-png.flaticon.com/512/3095/3095221.png" name="Skills"/>
                <NavbarItems link="#aboutprojects" image="https://cdn-icons-png.flaticon.com/512/4946/4946348.png" name="Projects"/>
                <NavbarItems link="#aboutrecog" image="https://cdn-icons-png.flaticon.com/512/2666/2666535.png" name="Recognitions"/>
                <NavbarItems link="#abouteduc" image="https://cdn-icons-png.flaticon.com/512/2936/2936719.png" name="Education"/>
                <NavbarItems link="#aboutcontact" image="https://cdn-icons-png.flaticon.com/512/2043/2043285.png" name="Contact"/>
                <NavbarItems link="https://drive.google.com/file/d/1ThbOFODB4nbN5SGCifWqJC19jUW1G92x/view?usp=share_link" target="_blank" image="https://cdn-icons-png.flaticon.com/512/942/942748.png" name="Resume"/>
            </div>
        </div>
        <div id='home'>
            <img src={FullPic} alt="" />
            <div id="homeicons">
                <a href="https://github.com/Vidisha-Khalpada" target="_blank"><GrGithub/></a><br/>
                <a href="https://www.linkedin.com/in/vidisha-khalpada-748740184/" target="_blank"><BsLinkedin/></a><br/>
                <a href="https://drive.google.com/file/d/1ThbOFODB4nbN5SGCifWqJC19jUW1G92x/view?usp=share_link" target="_blank"><BiDetail/></a>
            </div>
            <h1>"I will let the work I have done speak for me...."</h1>
        </div>
        </div>
    )
}
export default Navbar