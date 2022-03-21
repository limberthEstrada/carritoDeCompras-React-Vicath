import React from 'react';
import amazon from '../assets/images/amazon.png'
import mcard from '../assets/images/mcard.png'
import visa from '../assets/images/visa.png'
import paypal from '../assets/images/paypal.png'
function Footer()
{
    return(
		<React.Fragment>
        {/*<!-- Footer -->*/}
		<footer>
        <div className="footer-contenedor">
        <div className="seguinos">
            <h4> Seguinos</h4>
            <i className="fab fa-facebook" id="face"></i>
            <i className="fab fa-instagram" id="insta"></i>
            <i className="fab fa-twitter" id="twitter"></i>
        </div>
        <div className="suscribe">
            <h4> Suscribite</h4>
            <input type="email" placeholder="Ingresa tu e-mail" className="enemy"/> 
            <button className="enemy"> Suscribirme</button>
        </div>
       <div className="mediospago">
           <h4>Medios de pago</h4>
           <div className="imglogos">
           <img src={amazon} alt="" className="imagen-foot"/>
           <img src={mcard} alt="" className="imagen-foot"/>
           <img src={visa} alt="" className="imagen-foot"/>
           <img src={paypal} alt="" className="imagen-foot"/>
        </div>
        </div>
        </div>
    </footer>	
		{/*<!-- End of Footer -->*/}
		</React.Fragment>
    );
}

export default Footer;