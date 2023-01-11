import React from 'react';
import './CartProduct.css';

const componentName = (props) => {
    return (
        <div className = 'ParentBox'><div>

</div>
        <div className = "Photo">
        <img src ={props.photo}/>
      </div>
        <div className = "Deskripsi">
          <p className = "Category">{props.category}</p>
          <h1 className = "Title">{props.title}</h1>
          <p className = "Price">{props.price}</p>
          <p className = "info">{props.info}</p>
          </div> 
      </div>
      
    );
};

export default componentName;