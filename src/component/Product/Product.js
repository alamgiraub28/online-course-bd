import React from 'react';
import css from './Product.css';

const Product = (props) => {
    const {first_name, duration_month, fee, img} = props.product;
    
    return (
        <div className="d-flex all-content">
        <div className="img"><img src={img} alt=""/></div>
        <div className="details">
        <h4 className="text-success">Course Name:{first_name}</h4>
        <h5>Duration:{duration_month}</h5>
        <h5>Course Fee:$ {fee}</h5>
        <button 
        
        className="btn btn-success"
        onClick= {() => props.handleAddProduct(props.product)}
        >
        Enroll Now</button>
        </div>
        </div>
    );
};

export default Product;