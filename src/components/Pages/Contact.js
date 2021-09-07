import React from 'react'
import {Component} from "react";
import Navbar from '../Navbar';

class Contact extends Component {

    render(){
    
      return( 

        <section class="bg--secondary-color pt3 pb3">
        <div class="container">
            <div class="mb2 align--center">
                <h3 class="mb1">Contact me to get started</h3>
                <p>I'll reply, I promise</p>
            </div>


            <form>
                <div class="grid-row">
                    <div class="grid-column span-half mt1">
                        <label class="label" for="name">Name</label>
                        <input class="form-control" id="name"/>
                    </div>
                    <div class="grid-column span-half mt1">
                        <label class="label" for="email">Email</label>
                        <input class="form-control" id="email" type="email"/>
                    </div>
                </div>
                <label class="label mt1" for="dates">Company Name (optional)</label>
                <input class="form-control" id="dates"/>
                <label class="label mt1" for="message">Message</label>
                <textarea class="form-control" id="message"></textarea>
                <div class='submitButton'>
                      <button class="btn btn--outline">Send</button>
                </div>
            </form>
        </div>
    </section>
      )}}
    
  
  
  
  
  export default Contact