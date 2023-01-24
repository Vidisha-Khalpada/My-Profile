import Stats from './Stats.jpg'
import Lang from './Lang.jpg'
import Streak from './Streak.jpg'
import Cont from './Cont.jpg'
import PS from './PS.jpg'
import Java from './Java.jpg'
import './Recognitions.css'
import { GrCertificate} from 'react-icons/gr'
const Recognitions=()=>
{
    return (
        <div id='aboutrecog'>
            <h1 id='maintitle'>RECOGNITIONS</h1>
            <div id='Recogcont'>
                <h2>GITHUB Overview</h2>
                <div id='imgcont'>
                    <img src={Stats}></img>
                    <img src={Streak}></img>
                    <img src={Lang}></img>
                    <img src={Cont}></img>
                </div>
                <h2> HackerRank Badges & Verified Skills</h2>
                <div id='imgcontbad'>
                    <img src={PS}></img>
                    <div id='imgconta'>
                    <a href="https://www.hackerrank.com/certificates/abd39c349f6c" target="_blank"><GrCertificate /></a>
                    <a href="https://www.hackerrank.com/certificates/6c26778f050f" target="_blank"><GrCertificate /></a>
                    </div>
                    <img src={Java}></img>
                </div>
                
            </div>
        </div>
    
    )
}
export default Recognitions