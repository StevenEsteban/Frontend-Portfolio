import React from 'react'
import {Component} from "react";
import Navbar from '../Navbar';
import { useState } from 'react';
import { send } from 'emailjs-com';


function Contact() {
 const [toSend, setToSend] = useState ({
        from_name:'',
        to_name:'',
        message:'',
        reply_to:'',
      });

      const onSubmit = (e) => {
        e.preventDefault();
        send(
          'service_fx01jpa',
          'template_1grr6i8',
          toSend,
          'user_glocIcRowhRyBqPWbUgo7'
        )
        .then((response) => {
          console.log ('message sent !', response.status, response.text);
          // alert
        })
        .catch((err) => {
          console.log('failed to send your message', err);
        })
      }

      const handleChange = (e) => {
        setToSend({...toSend, [e.target.name]: e.target.value});
      };

     return( 
<div>
<div className="DosSectionHome"> 
        <section>
    <div className="TitleName">
    <h1>Bienvenu</h1>
    <h3>okkkkkk<br/> </h3>
    </div>
    
    </section></div>
<header class="pt2 pb1 align--center">
        <div class="container">
            
            <h2>Links</h2>
        </div>
    </header>
    
  <div className="SocialM"><ul className="SocialM">
    <li class="Twitter"><a href="https://www.facebook.com/steven.estebangonzalez/" target="blank_">
        <h3>Facebook</h3>
        </a></li>
        <li class="GitHub"><a href="https://github.com/StevenEsteban" target="blank_">
        <h3>GitHub</h3>
        </a></li>
    <li class="Dribbble"><a href="https://www.linkedin.com/in/steven-esteban-gonzalez-/" target="blank_">
        <h3>Linkedin</h3>
        </a></li>
    
</ul>
</div>

  

<div className="SendForm">
      <section class="bg--secondary-color pt3 pb3">
        <div class="container">
            <div class="mb2 align--center">
                <h3 class="mb1">Or send me directly a mail</h3>
                <p>I'll reply, I promise</p>
            </div>


            <form onSubmit={onSubmit}>
                <div class="grid-row">
                    <div class="grid-column mt1">
                        <label class="label" for="name">Name</label>
                        <input name="from_name" value={toSend.from_name} onChange={handleChange} class="form-control" id="name" />
                    </div>
                    {/* <div class="grid-column span-half mt1">
                        <label class="label" for="email">Email</label>
                        <input name="to_name" value={toSend.to_name} onChange={handleChange} class="form-control" id="email"/>
                    </div> */}
                </div>
                <label class="label mt1" for="dates">Email</label>
                <input name="reply_to" value={toSend.reply_to} onChange={handleChange} class="form-control" id="dates"/>
                <label class="label mt1" for="message">Message</label>
                <textarea type="text" name="message" value={toSend.message} onChange={handleChange} class="form-control" id="message"></textarea>
                <div class='submitButton'>
                      <button type="submit" class="btn btn--outline">Send</button>
                </div>
            </form>
        </div>
    </section>
     </div>
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
        
        
      )}
export default Contact