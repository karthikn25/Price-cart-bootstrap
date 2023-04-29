import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons"




function App() {
  

  
  return (
    <div className="App">
        <Cart/>
        <Page/>
        <Card/>
        <Foot/>
        
        
    </div>
  );
}

export default App;

// create a new component
function Cart(){
  return(
    <button className="btn btn-outline-dark" type="submit" style={{margin:'2rem 0.5rem 0.5rem 100rem '}}>
                            <i class="bi-cart-fill me-1"></i>
                            Cart
                            <span class="badge bg-dark text-white ms-1 rounded-pill">0</span>
                        </button>
  )
}

function Page() {
  return (
    
    <header className="bg-dark py-5">
    <div className="container px-4 px-lg-5 my-5">
    <div className="text-center text-white">
    <h1 className="display-4 fw-bolder">Shop in style</h1>
    <p className="lead fw-normal text-white-50 mb-0">with this shop homepage template</p>
    </div>
    </div>
    </header>
    
      );
}

function Card(){
return(
  <div className="container">
<div className="row">
<div className="col-3">
<div className="card">
<h4 className="img">450 X 300</h4>
<br/>
<p className="name"><b>Fancy Prodect</b></p>
<p className="rate">$40.00-$80.00</p>
<br/><br/>
<div className="text-center">
<button className="btn btn-outline-dark mt-auto">View option</button>
</div>
</div>
</div>
<div className="col-3">
<div className="card">
<div className="badge bg-dark " >Sale</div>
<h4 className="img">450 X 300</h4>
<br/>
<p className="name"><b>Special Item</b></p>
<span>
<FontAwesomeIcon icon={faStar} style={{color: "#e6df19",}} /><FontAwesomeIcon icon={faStar} style={{color: "#e6df19",}} />
<FontAwesomeIcon icon={faStar} style={{color: "#e6df19",}} /><FontAwesomeIcon icon={faStar} style={{color: "#e6df19",}} /><FontAwesomeIcon icon={faStar} style={{color: "#e6df19",}} /></span>
<p className="rate"><s>$20.00</s>$18.00</p>
<br/>
<div className="text-center">
<button className="btn btn-outline-dark mt-auto">Add to cart</button>
</div>
</div>
</div>
<div className="col-3">
<div className="card">
<div className="badge bg-dark " >Sale</div>
<h4 className="img">450 X 300</h4>
<br/>
<p className="name"><b>Sale Item</b></p>
<p className="rate"><s>$50.00</s>$25.00</p>
<br/><br/>
<div className="text-center">
<button className="btn btn-outline-dark mt-auto">Add to cart</button>
</div>
</div>
</div>
<div className="col-3">
<div className="card">
<h4 className="img">450 X 300</h4>
<br/>
<p className="name"><b>Popular Item</b></p>
<span>
<FontAwesomeIcon icon={faStar} style={{color: "#e6df19",}} /><FontAwesomeIcon icon={faStar} style={{color: "#e6df19",}} />
<FontAwesomeIcon icon={faStar} style={{color: "#e6df19",}} /><FontAwesomeIcon icon={faStar} style={{color: "#e6df19",}} /><FontAwesomeIcon icon={faStar} style={{color: "#e6df19",}} /></span>
<p className="rate">$40.00</p>
<br/>
<div className="text-center">
<button className="btn btn-outline-dark mt-auto">Add to cart</button>
</div>
</div>
</div>
</div>
<div className="row">
<div className="col-3">
<div className="card">
<div className="badge bg-dark " >Sale</div>
<h4 className="img">450 X 300</h4>
<br/>
<p className="name"><b>Sale Item</b></p>
<p className="rate"><s>$50.00</s>$25.00</p>
<br/><br/>
<div className="text-center">
<button className="btn btn-outline-dark mt-auto">Add to cart</button>
</div>
</div>
</div>
<div className="col-3">
<div className="card">
<h4 className="img">450 X 300</h4>
<br/>
<p className="name"><b>Fancy Prodect</b></p>
<p className="rate">$120.00-$280.00</p>
<br/><br/>
<div className="text-center">
<button className="btn btn-outline-dark mt-auto">View option</button>
</div>
</div>
</div>
<div className="col-3">
<div className="card">

<div className="badge bg-dark " >Sale</div>
<h4 className="img">450 X 300</h4>
<br/>
<p className="name"><b>Special Item</b></p>
<span>
<FontAwesomeIcon icon={faStar} style={{color: "#e6df19",}} /><FontAwesomeIcon icon={faStar} style={{color: "#e6df19",}} />
<FontAwesomeIcon icon={faStar} style={{color: "#e6df19",}} /><FontAwesomeIcon icon={faStar} style={{color: "#e6df19",}} /><FontAwesomeIcon icon={faStar} style={{color: "#e6df19",}} /></span>
<p className="rate"><s>$20.00</s>$18.00</p>
<br/>
<div className="text-center">
<button className="btn btn-outline-dark mt-auto">Add to cart</button>
</div>
</div>
</div>
<div className="col-3">
<div className="card">
<h4 className="img">450 X 300</h4>
<br/>
<p className="name"><b>Popular Item</b></p>
<span>
<FontAwesomeIcon icon={faStar} style={{color: "#e6df19",}} /><FontAwesomeIcon icon={faStar} style={{color: "#e6df19",}} />
<FontAwesomeIcon icon={faStar} style={{color: "#e6df19",}} /><FontAwesomeIcon icon={faStar} style={{color: "#e6df19",}} /><FontAwesomeIcon icon={faStar} style={{color: "#e6df19",}} /></span>
<p className="rate">$40.00</p>
<br/>
<div className="text-center">
<button className="btn btn-outline-dark mt-auto">Add to cart</button>
</div>
</div>
</div>
</div>
</div>)
}
function Foot(){
  return(
  <footer class="py-5 bg-dark">
            <div className="container"><p className="m-0 text-center text-white">Copyright © Your Website 2023</p></div>
        </footer>)
}
