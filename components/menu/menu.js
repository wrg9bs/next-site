import Link from 'next/link';

const Menu = ({menuOpen, setMenuOpen}) => {
    const menuBarHandler = () => setMenuOpen(false)
    return (
        <div className={'menu '+ (menuOpen && 'active')}>
            <ul>
                <li onClick={menuBarHandler}>
                  <Link href='/'><a>Home</a></Link>
                </li>
                <li onClick={menuBarHandler}>
                    <Link href='/about'><a>About</a></Link>
                </li>
                <li onClick={menuBarHandler}>
                    <Link href='/projects'><a>Projects</a></Link>
                </li>
                <li onClick={menuBarHandler}>
                    <Link href='/contact'><a>Contact</a></Link>
                </li>
                
            </ul>
            
        </div>
    )
}

export default Menu;
