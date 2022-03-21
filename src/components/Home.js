import React from 'react';
import Header from './Header'
import images1 from '../assets/images/agenda.jpg'
import images2 from '../assets/images/beneficio.jpg'
import images3 from '../assets/images/minnie.jpg'
import images4 from '../assets/images/posca.jpg'
import '../assets/css/editPassAndEmail.css';
import '../assets/css/stylecarrito.css';
import '../assets/css/styles.css';
import '../assets/css/stylesAdmin.css';
import '../assets/css/stylesHeader-Footer.css';
import '../assets/css/stylesLogin.css';
import Article from './Article';
import Footer from './Footer';
import MyOrder from './MyOrder';

let primerProd = {
    id:1,
    title: 'Limberth Estrada',
    description: 'AAAAAAAAAAAAAAAAA', 
    image: "cartuchera.jpg",
    price: 32323
}



let segundoProd = {
    id:2,
    title:'Daniel Vasquez', 
    description:'BBBBBBBBBBBBBB', 
    image: "hojas.jpg",
    price: 1232
}



let tercerProd = {
    id:3,
    title:'Alberto Cortez' ,
    description:'CCCCCCCCCCCCC',
    image: "lapicera.jpg",
    price: 19909
}

let cuartoProd = {
    id:4,
    title:'Adela Cervantes' ,
    description:'CCCCCCCCCCCCC',
    image: "lapicera.jpg",
    price: 19909
}

let products = [primerProd, segundoProd, tercerProd, cuartoProd];

function Home()
{
    return(
		<React.Fragment>
         <Header />
            <div className="slider">
                <ul>
                    <li><img src={images1} alt="" /></li>
                    <li><img src={images2} alt=""/></li>
                    <li><img src={images3} alt=""/></li>
                    <li><img src={images4} alt=""/></li>
                </ul>
            </div> 
            <main>
                <section className="filtrado-contenedor">
                    <div className="filtrado">
                    <h3>Filtrar por:</h3>
                    <form action="/products/filtrado" method="get" className="filtrar-marca">
                        <div>
                            <h4><label for="marcas"> Marcas <br/></label></h4>
                            <select name="marcas">
                                <option value="">Selecciona una marca</option>
                            </select> 
                        </div>
                        <div>
                            <h4><label for="colores"> Color <br/></label></h4>
                            <select name="colores">
                                <option value="">Selecciona un color</option>
                            </select>
                        </div>
                        <div>
                            <h4><label for="precio"> Precio <br/></label></h4>
                            <select name="precio">
                                <option value="">Selecciona un precio</option> 
                                <option value="1000">Mayor a $1000</option> 
                                <option value="2500">Mayor a $2500</option>
                                <option value="3400">Mayor a $3400</option> 
                                <option value="5000">Mayor a $5000</option> 
                            </select>
                        </div>
                        <div>
                            <button className="enemy" type="submit" >Realizar filtrado</button>
                        </div>
                    </form>
                    </div>
                </section>
            <section className="productos">
                <h3>Productos destacados</h3>
                <div className="destacados">
                    {products.map((product, i) => {
                        return <Article producto={{...product}} key={i} />
                    })}
                </div>
            </section>
        </main>
        
    <Footer />
		</React.Fragment>
    );
}

export default Home;