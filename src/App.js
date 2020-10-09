import './App.css';
import Header from './component/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import CourseDetails from './component/CourseDetails/CourseDetails';
import Product from './component/Product/Product';


function App() {

  return (
    <div>
    
      <Header></Header>
      <CourseDetails></CourseDetails>
    </div>
  );
}

export default App;
