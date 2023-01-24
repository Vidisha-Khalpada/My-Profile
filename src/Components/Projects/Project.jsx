import asos from './asos.jpg'
import BMS from './BMS.jpg'
import './Project.css'
import { GrGithub} from 'react-icons/gr';
import { CgMediaLive} from 'react-icons/cg'
import { FaHtml5} from 'react-icons/fa'
import { FaCss3Alt} from 'react-icons/fa'
import { DiJavascript} from 'react-icons/di'

const Project=()=>
{
    return (
        <div id='aboutprojects'>
            <h1 id='maintitle'>PROJECTS</h1>
            <div className='projectscont'>
                <div className='projectdesc'>
                    <div className='lhs'>
                        <img src={asos}></img>
                        <h3>Tech Stack Used: </h3>
                            <div id='techstack'>
                                <p> HTML</p>
                                <p> CSS</p>
                                <p> JS</p>   
                            </div>
                            <div id='icons'>
                                <a href="https://github.com/shivam-m-7/asos" target="_blank"><GrGithub /></a>
                                <a href="https://clone-asos.netlify.app/" target="_blank"><CgMediaLive /></a>
                            </div>
                            <h4>A collaborative project built by a team of 4 Full Stack Web Developers executed in a week.</h4>
                        
                    </div>
                    <div className='comp'>
                        <h2>ASOS CLONE</h2>
                        <h4>An e-Commerce website for clothing and fashion accessories shipping worlwide.</h4>
                        <h3>Features: </h3>
                        <div id='features'>
                            <p>Home Page</p>
                            <p>User Signup and Login</p>
                            <p>Products Page</p>   
                            <p>Product Filters</p>
                            <p>Wishlist Page</p>
                            <p>Cart Page</p>
                            <p>Checkout Page</p>
                        </div>
                       
                        <h3>Areas of Responsibility: </h3>
                        <div id='features'>
                            <p>Home Page</p>
                            <p>Men LandingPage</p>
                            <p>Women LandingPage</p>
                            <p>User Signup and Login</p>
                            <p>Wishlist Page</p>
                        </div>
                        
                    </div>
                    
                </div>

                <div className='projectdesc'>
                    <div className='lhs'>
                        <img src={BMS}></img>
                        <h3>Tech Stack Used: </h3>
                            <div id='techstack'>
                                <p> HTML</p>
                                <p> CSS</p>
                                <p> JS</p>   
                            </div>
                            <div id='icons'>
                                <a href="https://github.com/Vidisha-Khalpada/BookMyShow" target="_blank"><GrGithub /></a>
                                <a href="https://bookmyshowclone-9.netlify.app/" target="_blank"><CgMediaLive /></a>
                            </div>
                            <h4>A collaborative project built by a team of 5 Full Stack Web Developers executed in a week.</h4>
                    </div>
                    
                    <div className='comp'>
                        <h2>BOOKMYSHOW CLONE</h2>
                        <h4>An online movies, events, plays and sports tickets booking website.</h4>
                        <h3>Features: </h3>
                        <div id='features'>
                            <p>Home Page</p>
                            <p>User Signup and Login</p>
                            <p>Movies List</p> 
                            <p>Movie Descriptions</p>  
                            <p>Movie filters</p>
                            <p>Show Timings</p>
                            <p>Seat Selection</p>
                            <p>Checkout Page</p>
                        </div>
                        
                        <h3>Areas of Responsibility: </h3>
                        <div id='features'>
                            <p>Movie List Page</p>
                            <p>Movie Description Page</p>
                            <p>Movie Timings Page</p>
                        </div>
                        
                    </div>
                    
                    
                </div>
            </div>
        </div>
    
    )
}
export default Project