import React, { useContext } from "react"
import cartuchera from '../assets/images/cartuchera.jpg'
import hojas from '../assets/images/hojas.jpg'
import AppContext from '../context/AppContext';
function Article(props)
{
    const { addToCart } = useContext(AppContext);
    const handleClick = item => {
		addToCart(item);
	}
    return(
        <React.Fragment>
            <article className="articuloClass">
                <a href="#">
                    <img src={cartuchera} className="imagenProducto" />
                </a>
                <div className="main-article-principal">
                    <h4>{props.producto.title} </h4>
                    <p>{props.producto.description}</p>
                    <div className="contenedor-precio">
                        <p className="precio">${props.producto.price} </p>
                        <button onClick={() => handleClick(props.producto)}><span style={{fontSize: 14+'px'}}>Agregar</span><i className="fas fa-cart-plus"></i></button>
                    </div>
                </div>
            </article>
        </React.Fragment>
    );

}

export default Article;