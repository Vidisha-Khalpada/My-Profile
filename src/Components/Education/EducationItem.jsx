const EducationItem=(props)=>
{
    const{course,instit,time}=props
    return(
        <div className="courseitem">
            <h2>{course}</h2>
            <h4>{instit}</h4>
            <h5>{time}</h5>
        </div>
    )
}
export default EducationItem