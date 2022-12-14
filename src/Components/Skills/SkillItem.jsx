import './Skills.css'
const SkillItem=(props)=>
{
    const{Icon,title}=props
    return(
        <div className="iconcont">
            <img className='Iconimg' src={Icon}></img>
            <h4>{title}</h4>
        </div>
    )
}
export default SkillItem