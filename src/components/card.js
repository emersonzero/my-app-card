import React from 'react'
import Img from './img/nike19.png';

export default function card() {

    return(

        <div class="product-card">
        <div class="card-body">

            <div class="card-header">
                <div class="brand">
                    <img src="https://i.ibb.co/q7RKcZk/nike.png" alt="Brand Logo" srcset=""/>
                </div>
                <div class="price">
                    <span>120€</span>
                </div>
            </div>

            <div class="main-content">
                <h2 class="title">
                    AIR STRUCTURE 1
                </h2>
                <p class="description">
                    From the Flymesh upper to the triple-density foam midsole, the Nike Air Zoom Structure 19 Men's
                    Running Shoe offers plenty of support and the response you need for a smooth, stable ride that
                    feels
                    ultra fast.
                </p>
            </div>

            <span class="text-effect">AIR</span>
        </div>

        <div class="main-image">
            <img src={Img} alt="Best Shoes in the world" class="featured-image"/>
        </div>

        <div class="card-footer">
            <button class="btn-buy">
                Buy
            </button>
            <span class="product-category">Men Running Shoes</span>
        </div>
    </div>

    )

}
