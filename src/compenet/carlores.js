import React from "react";
import vi from './Climate.jpg'
import gi from './aquarium-night-time.jpg'
import ti from './8951082.jpg'
import { useTypewriter } from "react-simple-typewriter";
export function Caelo(){
    return(
        <>
       <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={ vi } class="d-block w-100"  id="bg-carousel"alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Climate Change</h5>
        <p>Climate change continues to be a significant threat to marine ecosystems. Rising sea temperatures, ocean acidification, and extreme weather events can negatively affect marine life.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={ gi } class="d-block w-100" id="bg-carousel" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>oceans Explaoration</h5>
        <p>Continued exploration of the deep sea will likely unveil new species and ecosystems. Understanding these environments is crucial for making informed decisions about conservation and management.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={ ti } class="d-block w-100" id="bg-carousel" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>World Ocean Day </h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </>
    )
}