import React, {Component} from "react";
import { Link } from "react-router-dom";




class FAQ extends Component {

    render(){
    
      return( 

        <div>
      <div className="headBackground">
    
    <section className="SectionHomeFaq">
    
    <div className="TitleNameFaq">
        <img className="InProgressImg" src="img\InProgress.png" alt="" />
    </div>
    <div className="btnSectionHome"><Link to="/PreviousWork"><button class="btn1">Back to my work</button></Link></div>
    
    </section>
    </div>
  

<div> 
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
</div>
   </div>

 
      )}}
    
  
  
  
  
  export default FAQ