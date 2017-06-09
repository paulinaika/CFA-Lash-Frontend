import React from 'react';
import { Link } from 'react-router-dom'
import { Table } from 'react-bootstrap';


const LashListing = (props) => {
  return(
    <div>
      {/* <Link to={`/listings/${props.listing._id}`}>{props.listing.name}</Link>
      <p>{props.listing.quantity}</p>
      <p>${props.listing.price}</p> */}

      <Table striped bordered>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td><img src={props.listing.image} alt="lash_image" height="80" width="80" className="img-responsive"/></td>
            <td><Link to={`/listings/${props.listing._id}`}>{props.listing.name}</Link></td>
            <td>{props.listing.quantity}</td>
            <td> $ {props.listing.price}</td>
            <td>{props.listing.quantity <= 30 ? "Low in Stock" : " ✓ In Stock " }</td>
          </tr>
        </tbody>

      </Table>


    </div>
  )
}

export default LashListing;
