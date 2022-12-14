import EducationItem from './EducationItem'
import './Education.css'
const Education=()=>
{
    return (
        <div id='abouteduc'>
            <h1 id='maintitle'>EDUCATION</h1>
            <div id='coursecont'>
                <EducationItem course="Full Stack Web Development" instit="Masai School" time="2022-23"/>
                <EducationItem course="M.E. Transportation Engineering" instit="BITS Pilani" time="2016-18"/>
                <EducationItem course="B.E. Civil Engineering" instit="L.D. College of Engineering" time="2012-16"/>
            </div>
        </div>
    
    )
}
export default Education
// https://andrewborstein.com/