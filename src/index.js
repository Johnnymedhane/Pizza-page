import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];

  

function App() {
   
    return (
    <div className="container">
   <Header />
   <Menu />
   {/* <ItemList /> */}
   <Footer />
    </div>
    )
}

function Header(){
    // color: "red", fontSize: "48px", textTransform: "uppercase"
    const style = {};
 return(
    
    <header className="header">
 <h1 style={style}> Fast React Comp.
 </h1>
 
 </header>
 
);
}
function Menu(){

   const  pizzas = pizzaData;
return (
    <main className="menu">
        <h2> Our Menu</h2>
        {pizzas ? (
           <>
            <p>Authentic Italian cuisaine 6 creative dishes to choose
    from. All from our owen, all organic, all delicious.
 </p>
         <ul className="pizzas">
          {pizzaData.map((item) => (
            
            <Pizza pizzaObject={item} key={item.name} /> 
          )
       ) }
    </ul>
    </>
) : null}
</main>
)
}
function Pizza({pizzaObject}) {
    console.log(pizzaObject);
    // if(pizzaObject.soldOut) return null;
    return (
    <li className={`pizza ${pizzaObject.soldOut ? "sold-out": ""}`}>
        <img src={pizzaObject.photoName} alt={pizzaObject.name} />
         <div>
       <h3>{pizzaObject.name}
       </h3>
       <p>{pizzaObject.ingredients}
       </p>
      <span>{pizzaObject.soldOut ?"SoldOut": pizzaObject.price  }     
      </span>
      </div>
      </li>
    )
}

function Footer() {

const hour = new Date().getHours();
const openHour = 12;
const closeHours = 22;
const isOpen = hour >= openHour && hour <= closeHours;
console.log(isOpen);


return (
 <footer className="footer">
  {isOpen ? (
    <Order closeHours={closeHours} openhours={openHour} />
 
): (
    <p>
        We're happy to welcome you between {openHour}:00 and {closeHours}:oo.</p>
)}
</footer>

) ;

}

function Order({closeHours, openhours}) {
    return(
        <div className="order">
        <p> 
        we're open from {openhours}:00 until {closeHours}:00. come visit us or order online.
        </p>
        <button className="btn">onrder</button>
        </div>
    )
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

