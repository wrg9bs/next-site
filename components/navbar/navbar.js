
const Navbar = ({menuOpen, setMenuOpen}) => {
    return (
        <div className={'navbar ' + (menuOpen && 'active')} id='navbar'>
            <div className="wrapper">
                <div className="right">
                    <hr/>
                    <a href='#intro' className='logo'>BO-AT</a>
                    <hr/>

                </div>
                
                <div className="left">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                         
                    </div>   
                </div>
            </div> 
            
        </div>
    )
}

export default Navbar
