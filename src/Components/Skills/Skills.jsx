import SkillItem from './SkillItem'
import './Skills.css'
// import { AiFillHtml5} from 'react-icons/ai';
// import { DiCss3} from 'react-icons/di';
// import {DiJavascript } from 'react-icons/di';
// import {DiReact } from 'react-icons/di';
// import { DiJava} from 'react-icons/di';
const Skills=()=>
{
    return (
        <div id='aboutskills'>
            <h1 id='maintitle'>SKILLS</h1>
            <div id='iconparent'>
                <SkillItem Icon="https://cdn-icons-png.flaticon.com/512/1051/1051277.png" title="HTML" />
                <SkillItem Icon="https://cdn-icons-png.flaticon.com/512/732/732190.png" title="CSS" />
                <SkillItem Icon="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" title="JavaScript" />
                <SkillItem Icon="https://cdn-icons-png.flaticon.com/512/3334/3334886.png" title="React" />
                <SkillItem Icon="https://cdn-icons-png.flaticon.com/512/5968/5968282.png" title="Java" />
            </div>
        </div>
    
    )
}
export default Skills