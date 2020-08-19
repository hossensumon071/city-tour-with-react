import React, { Component } from 'react'
import './Tour.scss';

export default class Tour extends Component {
 render() {
  const {id, city, name,img ,info} = this.props.tour;
  const { removeTour } = this.props;
  return (
   <article className="tour">
    <div className="img-container">
     <img src={img} alt="image of the tour "/>
     <span className="close-btn">
       <i className="fa fa-window-close"></i>
     </span>
    </div>
    <div className="tour-info">
     <h3>{city}</h3>
     <h4>{name}</h4>
     <h5>
      info{""}
      <span>
       <i className=" far fa-caret-square-down "/>
      </span>
     </h5>
  <p>{info}</p>
    </div>
   </article>
  )
 }
}


