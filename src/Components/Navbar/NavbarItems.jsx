import './Navbar.css'
const NavbarItems=(props)=>
{
   let {image,name,link}=props
    return(
        <div className='linkdisp'>
                    <img src={image}/>
                    <a href={link}><h4>{name}</h4></a>
                </div>
    )
}
export default NavbarItems