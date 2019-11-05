import React from 'react';
import './App.css';

let shoppingCartItems = [
  {
    item: 'Ultimate Space Guide',
    image: 'https://iconutopia.com/wp-content/uploads/2016/05/space-book.png',
    description: 'Will never let you get lost with 200 maps',
    price: '100 Stars',
    option: 'Physical copy / Online version'
  },
  {
    item: 'Pizza Forever',
    image: 'https://static.vecteezy.com/system/resources/previews/000/553/222/non_2x/pizza-slice-vector-icon.jpg',
    description: "Essential for who can never live without Pizza",
    option: '+) Free 500ml Tabasco',
    price: '300 stars'
  },
  {
    item: 'Emergency Oxygen Provider',
    image: 'https://www.creativefabrica.com/wp-content/uploads/2019/04/Oxygen-icon-by-hellopixelzstudio-580x386.jpg',
    description: 'One and only savior when you need that air',
    option: '+) Free 1 Hand Sanitizer',
    price: '1000 stars'
  }
]

function App() {
  return (
    <div className="App">
      <h1 id="mallName">Infinity n Beyond</h1>
      <h1 id="shoppingCart">Shopping Cart</h1>
     <SearchForm />
     <ShoppingCart />
    </div>
  );
}

function ShoppingCart() {
  return(
    <div className="cart">
      {shoppingCartItems.map(Product)}
    </div>
  );
}

function Product(props) {
  return(
    <div className="product">
      <img className="img" src={props.image}/>
      <div className="item"> {props.item} </div>
      <div className="description"> {props.description} </div>
      <div className="option"> {props.option} </div>
      <div className="price"> {props.price} </div>
    </div>
  )
}

function SearchForm() {
  return(
    <form>
      <label>
        Search: 
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default App;
