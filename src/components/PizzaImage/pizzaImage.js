import React from 'react';
import classes from './pizzaImage.module.css';
import PizzaImage from '../../assets/pizza.jpg';

const pizzaImage = (props) => (
    <div className={classes.pizzaImage}>
        <img src={PizzaImage} className={classes.pizzaImage}/>
    </div>
)

export default pizzaImage;