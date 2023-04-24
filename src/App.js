import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons"
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function App() {
  

  // data.map((value, index, accArr) => console.log(value, index, accArr))
  return (
    <div className="App">
  
        <Profile/>
    </div>
  );
}

export default App;

// create a new component

function Profile() {
  return (
    <div className="profile class-name">
      <div className="container">
      <div className="row">
      <div className="col-4">
      <div className="box-1">
       <div className="head">
        <p>FREE</p>
        <h1>$0<span className="mon">/month</span></h1></div> 
        <hr />
        <ul className="fa-ul">
        
        <li><span><FontAwesomeIcon icon={faCheck}/></span>Single User</li>
        <li><span><FontAwesomeIcon icon={faCheck}/></span>5GB Storage</li>
        <li><span><FontAwesomeIcon icon={faCheck}/></span>Unlimited Public Projects</li>
        <li><span><FontAwesomeIcon icon={faCheck}/></span>Community Access</li>
        
      
        <li className="text-muted"><span><FontAwesomeIcon icon={faXmark} /></span>Unlimited Private Projects</li>
        <li className="text-muted"><span><FontAwesomeIcon icon={faXmark} /></span>Dedicated Phone Support</li>
        <li className="text-muted"><span><FontAwesomeIcon icon={faXmark} /></span>Free Subdomain</li>
        <li className="text-muted"><span><FontAwesomeIcon icon={faXmark} /></span>Monthly Status Reports</li> 
      
      </ul> 
        <Button className="primary" variant="primary">BUTTON</Button>{' '}
      </div>
      </div>
      <div className="col-4">
      <div className="box-1">
      <div className="head">
      <p>PLUS</p>
      <h1>$9<span className="mon">/month</span></h1>
      </div>
      <hr />
      <ul className="fa-ul">
      <li><span><FontAwesomeIcon icon={faCheck}/></span>5 Users</li>
      <li><span><FontAwesomeIcon icon={faCheck}/></span>50GB Storage</li>
      <li><span><FontAwesomeIcon icon={faCheck}/></span>Unlimited Public Projects</li>
      <li><span><FontAwesomeIcon icon={faCheck}/></span>Community Access</li>
      <li><span><FontAwesomeIcon icon={faCheck}/></span>Unlimited Private Projects</li>
      <li><span><FontAwesomeIcon icon={faCheck}/></span>Dedicated Phone Support</li>
      <li><span><FontAwesomeIcon icon={faCheck}/></span>Free Subdomain</li>
      <li className="text-muted"><span><FontAwesomeIcon icon={faXmark} /></span>Monthly Status Reports</li>
      </ul>
      <Button className="primary" variant="primary">BUTTON</Button>{' '}
      </div>
      </div>
      <div className="col-4">
      <div className="box-1">
      <div className="head">
      <p>PRO</p>
      <h1>$49<span className="mon">/month</span></h1>
      </div>
      <hr />
      <ul className="fa-ul">
      <li><span><FontAwesomeIcon icon={faCheck}/></span><b>Unlimited Users</b></li>
      <li><span><FontAwesomeIcon icon={faCheck}/></span>150GB Storage</li>
      <li><span><FontAwesomeIcon icon={faCheck}/></span>Unlimited Public Projects</li>
      <li><span><FontAwesomeIcon icon={faCheck}/></span>Community Access</li>
      <li><span><FontAwesomeIcon icon={faCheck}/></span>Unlimited Private Projects</li>
      <li><span><FontAwesomeIcon icon={faCheck}/></span>Dedicated Phone Support</li>
      <li><span><FontAwesomeIcon icon={faCheck}/></span><b>Unlimited</b> Free Subdomain</li>
      <li><span><FontAwesomeIcon icon={faCheck}/></span>Monthly Status Reports</li>
      </ul>
      <Button className="primary" variant="primary">BUTTON</Button>{' '}
      </div>
      </div>
          
      </div>
      </div>
    </div>
  );
}