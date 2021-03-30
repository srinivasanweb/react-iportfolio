import React, { Component } from 'react';
import Typed from 'react-typed';


export default class Hero extends Component {

    render() {
        return (
<section id="hero" className="d-flex flex-column justify-content-center align-items-center">
  <div className="hero-container" data-aos="fade-in">
    <h1>Alex Smith</h1>
    <Typed
  strings={["I'm Designer", "I'm Developer", "I'm Freelancer", "I'm Phtographer"]}
  typeSpeed={100}
  backSpeed={100}
  backDelay={1}
  loop
  smartBackspace
  style={{"color":"#fff","marginBottom":"50px","fontSize":"26px","fontFamily":"\"Poppins\", sans-serif"}}
/>

  </div>
</section>

            )
    }
}
