// import '/Navbar.css';

function Navbar(){
    return (
        <nav className="navbar">
            <div>
                <h2>My Portfolio</h2>
            </div>          
            <ul className='navbar-links'>
                <li><a href='#hero'>Inicio</a></li>
                <li><a href='#projects'>Proyectos</a></li>
                <li><a href='#technologies'>Tecnologías</a></li>
                <li><a href='#contact'>Contactos</a></li>
            </ul>
            
    
            </nav>
    )
}

export default Navbar;