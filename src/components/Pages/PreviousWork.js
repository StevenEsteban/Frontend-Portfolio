import React, { Component } from "react";
import { BrowserRouter, Route, Link, Router } from "react-router-dom";
import Navbar from "../Navbar";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";


class PreviousWork extends Component {

    render(){
    
        return( 
  <div>
      <div className="DosSectionHome"> 
      <section>
  <div className="TitleName">
  <h1>Portfolio</h1>
  </div>
  
  </section></div>
 
  
  <body class="has-animations">
  
  
  
      <header class="pt2 pb1 align--center">
          <div class="container">
              <p>Welcome to</p>
              <h1>okkkk</h1>
          </div>
      </header>
  
  
      <main>

<div class="container">


    <section class="grid-row grid-row--center">

        <div class="grid-column span-half pt3 pb3 mobile-m order-5 reveal-on-scroll is-revealing">
            <div class="relative">
            
                <img class="info-image relative z2 image" src="img/macbook.png" alt="Fishing"/>
           
            </div>
        </div>
        <div class="grid-column span-half pt3 pb3 mobile-m order-6">
            <h3>Price Prediction Form </h3>
            <p className="paragraphes">Here's my first project using React where I created, designed and linked a form to an existing API. </p>
        </div>

        <div class="grid-column span-half pt3 pb3 mobile-m order-4">
            <h3>Fully responsive website</h3>
            <p className="paragraphes">Although this definitely deserves an update today, this was my first fully responsive single page website with a contact form and paying attention to the SEO (search engine optimization). </p>
        </div>
        <div class="grid-column span-half pt3 pb3 mobile-m order-3 reveal-on-scroll is-revealing">
            <div class="relative2">
           
                   
                <img src="/img/Futuresole2.png" alt="Teepee"/>
              
                         
            </div>
        </div>

        <div class="grid-column span-half pt3 pb3 mobile-m order-1 reveal-on-scroll is-revealing">
            <div class="relative">
            
                        
                <img src="/img/Imac-macbook.png" alt="Cabin"/>
              
                         
            </div>
        </div>
        <div class="grid-column span-half pt3 pb3 mobile-m order-2">
            <h3>DarkWep</h3>
            <p className="paragraphes">Funny side project where I had to create and desing a full e-commerce experience. Although this is probably my most advanced project so far, it unfortunaly cannot be put online...  </p>
        </div>

       

    </section>

</div>




</main>
<div id="root"></div>
    <section class="align--center pt2 pb3">
        <p class="WanTo">Want to create something together ?</p>
        <div className=""><Link to="/Contact"><button class="btn1">Reach me out !</button></Link></div>

    </section>
      
  
      <footer class="pt2 pb2">
        <div class="container align--center">
            <p class="adresse">Cantersteen 10, 1000 Bruxelles</p>

            <ul class="no-bullets list--inline mt1">
                <li class="mr1">
                    <a href="https://www.facebook.com/steven.estebangonzalez/" class="link"><img class="icon" src="/img/facebook.svg" alt="Facebook"/></a>
                </li>
                <li class="mr1">
                    <a href="https://www.instagram.com/steven_esteban/" class="link"><img class="icon" src="/img/instagram.svg" alt="Instagram"/></a>
                </li>
                 <li class="mr1">
                    <a href="https://www.linkedin.com/in/steven-esteban-gonzalez-/" class="link"><img class="icon2" src="/img/linkedin.svg" alt="Linkedin"/></a>
                </li>
                <li class="mr1">
                    <a href="https://github.com/StevenEsteban" class="link"><img class="icon2" src="/img/iconmonstr-github-1.svg" alt="Github"/></a>
                </li>
            </ul>
        </div>
    </footer>

  
  
      <script src="https://unpkg.com/scrollreveal@4.0.0/dist/scrollreveal.min.js"></script>
  
  
      <script src="js/production.js"></script>
  
  
  
  
  
  
  </body>
  
  
  
  </div>
  
        )}}





export default PreviousWork