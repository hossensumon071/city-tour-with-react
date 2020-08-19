import React, { Component } from 'react';
import Tour from "../Tour"
import './TourList.scss'
import { tourData } from "../../tourData";
export class TourList extends Component {
 state = {
  tours: tourData
 };
 removeTour = id => {
   console.log(id)
 }
 render() {

  const { tours } = this.state;
  return (
   <section className="tourlist">
     {
      tours.map(tour => (<Tour Key={tour.id} tour={tour} removeTour={this.removeTour}></Tour>))
     }
   </section>
  )
 }
}

export default TourList
