import '../stylesheets/Header.css';
import logo from '../img/logo-w.png';
const Header = (props) => {
    return (
        <div className="header-body">
            <img className='header-logo' src={logo} alt="Logo de la pagina" />
        </div>
    )
}

export default Header;



