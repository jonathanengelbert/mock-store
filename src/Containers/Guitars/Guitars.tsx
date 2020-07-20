import React from 'react';
import ProductList from "../../Components/ProductList/ProductList";

import './guitarsStyles.scss';

export default function Guitars() {
    return (
        <div>
            <header>
                <h1>Guitars</h1>
                <p>No matter the style, we got you covered</p>
            </header>
            <main>
                <ProductList></ProductList>

                <article>
                    <p>Not finding what you are looking for?</p>
                    <p>Contact us for special requests!</p>
                </article>
            </main>

        </div>
    )
}