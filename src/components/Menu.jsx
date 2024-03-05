import {Link as ScrollLink} from 'react-scroll';

function Menu() {
    return(
        <ul className="flex justify-between p-2 pr-10
        ">
            <li className="pl-10">
                <ScrollLink className='cursor-pointer' to="home" smooth={true} duration={1000}>Home</ScrollLink>
            </li>
            <li className="pl-10">
                <ScrollLink className='cursor-pointer' to="about" smooth={true} duration={1000}>About</ScrollLink>
                </li>
            <li className="pl-10">
                <ScrollLink className='cursor-pointer' to="projects" smooth={true} duration={1000}>Projects</ScrollLink>
                
            </li>
        </ul>
)
}
export default Menu;