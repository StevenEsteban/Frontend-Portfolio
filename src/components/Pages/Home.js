import React, {Component} from "react";
import { BrowserRouter, Route, Link, Router } from "react-router-dom";
import Navbar from "../Navbar";



class Home extends Component {

    render(){
    
      return( 
<div>
<section className="SectionHome">
<div className="TitleName">
<h1>Steven Esteban Gonzalez</h1>
<h3>Hi, I'm a Belgian Dev Trainee. <br/> Be my guest and make sure to checkout my work !</h3>
</div>
<div className=""><Link to="/PreviousWork"><button class="btn1">Check my work out</button></Link></div>

</section>

<body class="has-animations">



    <header class="pt2 pb1 align--center">
        <div class="container">
            
            <h1>About Me</h1>
        </div>
    </header>


    <main>

        <div class="container">


            <section class="grid-row grid-row--center">

                <div class="grid-column span-half pt3 pb3 mobile-m order-1 reveal-on-scroll is-revealing">
                    <div class="relative">
                        <img src="https://images.adsttc.com/media/images/5ecd/d4ac/b357/65c6/7300/009d/large_jpg/02C.jpg?1590547607" height="" alt="Cabin"/>
                    </div>
                </div>
                <div class="grid-column span-half pt3 pb3 mobile-m order-2">
                    <h3>Get the right estimation</h3>
                    <p>Our greatest experts gathered their knowledge to give you the most precise estimation for your future home.Thanks to the form below, you'll get an idea of what your future dreamhouse might cost you.</p>
                </div>

                <div class="grid-column span-half pt3 pb3 mobile-m order-4">
                    <h3>As fast as the API can load</h3>
                    <p>In just a few seconds (normally) you'll be able to estimate any type of house you can think about. <br/> Everything starts with a price prediction. </p>
                </div>
                <div class="grid-column span-half pt3 pb3 mobile-m order-3 reveal-on-scroll is-revealing">
                    <div class="relative2">
                        <img src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" alt="Teepee"/>
                    </div>
                </div>

                <div class="grid-column span-half pt3 pb3 mobile-m order-5 reveal-on-scroll is-revealing">
                    <div class="relative">
                        <img class="info-image relative z2 image" src="https://images.adsttc.com/media/images/5e1d/02c3/3312/fd58/9c00/06e9/large_jpg/NewHouse_SA_Photo_01.jpg?1578959519" alt="Fishing"/>

                    </div>
                </div>
                <div class="grid-column span-half pt3 pb3 mobile-m order-6">
                    <h3>Get in touch </h3>
                    <p>Want to buy or sell your house ? <br/>Then make sure to fill in the contact form below to reach us out. Our experts will do their best to find your new house that matches all your expectations. </p>
                </div>

            </section>

        </div>




    </main>
    <div id="root"></div>
    <section class="align--center pt2 pb3">
        <p class="h2">Want to create something together ?</p>
        <div className=""><Link to="/Contact"><button class="btn1">Reach me out !</button></Link></div>

    </section>
   
 

    <footer class="pt2 pb2">
        <div class="container align--center">
            <p class="adresse">Cantersteen 10, 1000 Bruxelles</p>

            <ul class="no-bullets list--inline mt1">
                <li class="mr1">
                    <a href="https://www.facebook.com" class="link"><img class="icon" src="/img/facebook.svg" alt="Facebook"/></a>
                </li>
                <li class="mr1">
                    <a href="https://www.linkedin.com" class="link"><img class="icon" src="/img/instagram.svg" alt="Instagram"/></a>
                </li>
                 <li class="mr1">
                    <a href="https://www.twitter.com" class="link"><img class="icon2" src="/img/linkedin.svg" alt="Linkedin"/></a>
                </li>
            </ul>
        </div>
    </footer>


    <script src="https://unpkg.com/scrollreveal@4.0.0/dist/scrollreveal.min.js"></script>


    <script src="js/production.js"></script>






</body>



</div>

      )}}
    
  
  
  
  
  export default Home