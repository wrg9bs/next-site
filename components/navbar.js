import Link from 'next/link'

const Navbar = ({menuOpen, setMenuOpen}) => {
    return ( 
        <div className={'topbar ' + (menuOpen && 'active')} id='topbar'>
            <div className="wrapper">
                <div className="left">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>  
                    </div> 
                </div>
 
                <div className="right">
                    <hr/>
                    <Link href='/'>
                        <a className='logo'>BO-AT</a>
                    </Link>
                        
                    <hr/>
                </div>
            </div> 
            
        </div>
     );
}
 
export default Navbar;