import logo from "./logo.svg";
import "./App.css";

const product = { item: "pen", price: 5, color: "white" };
const { price } = product;
const products = [
  { item: "pen", price: 5, color: "white" },
  { item: "pencil", price: 8, color: "blue" },
  { item: "sharpner", price: 6, color: "pink" },
  { item: "rubber", price: 8, color: "black" },
];

function App() {
  return (
    <div className="App">
      <Person id="01" name="fahim"></Person>
      <Person id="02" name="raju"></Person>
      <Person id="03" name="rafi"></Person>
      <div>
        <p>---------student---------</p>
      </div>
      <h1 className="default_style">{product.item}</h1>
      <h1 className="default_style">{price}</h1>
      <p>------------ products -----------</p>
      {
        products.map(product=> <Products item={product.item} price={product.price}></Products>)
      }
    </div>
  );
}

function Person(props) {
  console.log(props);
  return (
    <div className="person">
      <h1>Name : {props.name}</h1>
      <h2>Id : {props.id}</h2>
    </div>
  );
}

function Products(props) {
  return (
    <div className="default_style">
      <h1>Item : {props.item} </h1>
      <h2>Price : {props.price}</h2>
    </div>
  );
}

export default App;
