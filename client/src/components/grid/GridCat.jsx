import React from "react";
import "./gridcat.scss";
import { Link } from "react-router-dom";

const GridCat = (props) => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29mZmVlJTIwc2hvcHxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <button>
            <Link className="link" to={props.link1}>
              Cafes & Restaurants
            </Link>
          </button>
        </div>
        <div className="row">
          <img
            src="https://images.unsplash.com/photo-1496024840928-4c417adf211d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBhcnR5fGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <button>
            <Link to={props.link2} className="link">
              Events
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          {" "}
          <img
            src="https://images.unsplash.com/photo-1535827841776-24afc1e255ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <button>
            <Link to={props.link3} className="link">
              Hotels
            </Link>
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default GridCat;