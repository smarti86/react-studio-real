import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

    const [card, setCard] = useState({});

    // Citation: TrueQ's ReactJS: How to work with Map in useState hook
    // const updateCard = (key, value) => {
    //   setCard(prevCard => new Map(map.set(key, value)));
    // }

  

  return (
    <div className="App">
      <div>

        <h1>Sandy's Bakery</h1> {}

        {bakeryData.map((item, index) => ( 
          <BakeryItem data={item} index={index} 
          buttonUpdate = {() => {
            setCard((prevCard) => {
              const newCard = {...prevCard};
              newCard[item.name] = (newCard[item.name] || 0) + item.price;
              return newCard
            })}} />
        ))}

        <div>
          <h2>Cart</h2>
          {card.map} 
          
          {/* find the sum 
              keep track of how many prices I'e added 
              display name and price
               */}
        </div>
      </div>

    
      </div>
  );
}

export default App;
