import myImage from './Vidisha-profile.jpg'
import './About.css'
import { MdEmail} from 'react-icons/md';
import { BsFillTelephoneFill} from 'react-icons/bs'
import { GrGithub} from 'react-icons/gr';
import { BsLinkedin} from 'react-icons/bs'
import { MdLocationOn} from 'react-icons/md'
import { BiDetail} from 'react-icons/bi'
const About=()=>
{
    return (
        <div id='aboutsec'>
            
            <h1 id='maintitle'>ABOUT</h1>
            <div id='ab'>
                <div id='mpdiv'>
                            <img id='my-profile' src={myImage}></img>
                            <h2>Professional Summary</h2>
                        </div>
                        <hr/>
                <div id="abmc">
            
                <div id="details">
                    
                        <div className='text'>
                        < MdEmail/>
                        <h4>vidishakhalpada@gmail.com</h4>
                        </div>
                        
                        <div className='text'>
                        < BsFillTelephoneFill/>
                        <h4>91-9537310854</h4>
                        </div>
                        <div className='text'>
                        < MdLocationOn/>
                        <h4>Gujarat, India</h4>
                        </div>
                        <div id='abticons' className='text'>
                        <a href="https://github.com/Vidisha-Khalpada"><GrGithub/></a>
                        <a href="https://www.linkedin.com/in/vidisha-khalpada-748740184/"><BsLinkedin/></a>
                        <a href="https://drive.google.com/file/d/1qK0ZbBWJtibuOelWwQXB00GYiT6L0nMm/view?usp=share_link"><BiDetail/></a>
                        </div>
                    
                    
                </div>
                <div id='abttext'>
                    <h4>An aspiring Full Stack Web Developer turned from a Transportation Engineer with prerequisite knowledge in MERN Stack. 
                    An active, punctual, willing and deterministic team player who loves writing codes and developing the websites using HTML, CSS, JS and REACT. 
                    Looking forward to contribute to the best of my knowledge and skills along with the enhancements to cherish down the road.</h4>
                </div>
                
                </div>
            </div>
        </div>
    
    )
}
export default About