import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";

import BakeryItem from "./components/BakeryItem.js"

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(0);

  const handleClick = (item, price) => {
    setCart([...cart, item])
    setCount(count + price)
}

  return (
    <div className="App">
      <h1>Thu's Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components iterates through the data and does something
        // <p>Bakery Item {index}</p> // replace with BakeryItem component
        <BakeryItem image = {item.image} name = {item.name} description = {item.description} price = {item.price} handleClick = {handleClick}/>
      ))}

      {/* {items.map((item) => (
        <div>item: {cart}</div>
      ))} */}

      <div>
        <h2>Cart</h2>
        {/* TODO: render a list of items in the cart */}
        <h2>Total Price: {count}</h2>
        <h4>Items: {cart}</h4>
      </div>
    </div>
  );
}
/* 
*/
export default App;
