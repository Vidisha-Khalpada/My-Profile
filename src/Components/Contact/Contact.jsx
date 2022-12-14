import { MdEmail} from 'react-icons/md';
import { BsFillTelephoneFill} from 'react-icons/bs'
import { GrGithub} from 'react-icons/gr';
import { BsLinkedin} from 'react-icons/bs'
import { MdLocationOn} from 'react-icons/md'
import './Contact.css'
const Contact=()=>
{
    return (
        <div id='aboutcontact'>
            <h1 id='maintitle'>CONTACT</h1>
            <div id="contdetails">
                <div className='text'>
                < MdEmail/>
                <h4>vidishakhalpada@gmail.com</h4>
                </div>
                
                <div className='text'>
                < BsFillTelephoneFill/>
                <h4>91-9537310854</h4>
                </div>
                <div className='text'>
                < GrGithub/>
                <a href='https://github.com/Vidisha-Khalpada'><h4>github.com/Vidisha-Khalpada</h4></a>
                </div>
                <div className='text'>
                < BsLinkedin/>
                <a href='https://www.linkedin.com/in/vidisha-khalpada-748740184/'><h4>linkedin.com/in/vidisha-khalpada</h4></a>
                </div>
            </div>
        </div>
    
    )
}
export default Contact