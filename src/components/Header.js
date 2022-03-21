import React, { useState, useContext } from 'react';
import imageLogo from '../assets/images/logo.png'
import AppContext from '../context/AppContext';
import MyOrder from './MyOrder';
function Header()
{
    const [toggleOrders, setToggleOrders] = useState(false);
    const { state } = useContext(AppContext);
    return(
		<React.Fragment>
        {/*<!-- Header -->*/}
        <header>
        <div className="top-header">
        <div className= "logo">
            <a href="/"><img className="imagen-logo" src={imageLogo} alt="Logo de pagina"/></a>
        </div>
        <div className="form-busqueda">
            <form action="/products/busqueda" method="get">
                <div className="contenedorSelect">
                    <select className="selectBusqueda" name="category">
                        <option value=''>Seleccione</option> 
                    </select>
                </div>
                <input type="text" placeholder="Buscar productos" name="busqueda"/>
                <button type="submit"><i className="fa fa-search"></i></button>
            </form>
        </div>
        <div className="iconosHeader">
        <div className="iconH" id="carritoS">
            <a className="enlaceCarrito" href="#" onClick={() => setToggleOrders(!toggleOrders)}>
                <i className="fas fa-shopping-cart"></i>
                {state.cart.length > 0 ? <div className='nroProdComprados'>{state.cart.length}</div> : null}
            </a>
        </div>
        <div className="iconH" id="iconCuenta">
            <label  for="clickk">
                <i className="fas fa-user-circle" ></i> 
            </label>
            <input type="checkbox" className="inputCheck" id="clickk"/>
            <div className="login_desplegable">
            </div>
        </div>
        <div className="iconH" id="iconCuenta">
            <button className="switch" id="switch">
                <span><i className="fas fa-sun"></i></span>
                <span><i className="fas fa-moon"></i></span>
            </button>
        </div>
        </div>
        <div className="burger-menu">
            <i className="fa fa-bars burger"></i>
        </div>
        
        </div>
        
        <div className="menuDeOpciones">
            <ul>
                <li><a className="enlacesMenu" href="/products/novedades">Novedades</a></li>
            </ul>
        </div>

        <div className="button-header">
        <nav>
            <ul>
                <li><a href="/products/novedades">Novedades</a></li>
                <li><a href="/products/all">Ver todos</a></li>
            </ul>
        </nav>
    </div>
    {toggleOrders && <MyOrder />}
        </header>
		{/*<!-- End of Header -->*/}
		</React.Fragment>
    );
}

export default Header;