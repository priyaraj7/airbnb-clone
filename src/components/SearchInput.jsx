import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { MdSearch } from "react-icons/md";

export default (props) => {
  return (
    <form>
      <div class="form-row">
        <div class="form-group col-md-3">
          <div>LOCATION</div>
          <input
            type="text"
            class="form-control"
            id="inputEmail4"
            placeholder="add city, landmark, or address"
          />
        </div>
        <div class="form-group col-md-3">
          <div>CHECK IN/ CHECK OUT </div>

          <input
            type="text"
            class="form-control"
            id="inputPassword4"
            placeholder="add dates"
          />
        </div>
        <div class="form-group col-md-3">
          <div>GUESTS </div>
          <input
            type="number"
            class="form-control"
            id="inputAddress"
            placeholder="add guests"
          />
        </div>
        <div class="form-group col-md-3">
          <label for="inputAddress"></label>
          <br />
          <button type="submit" class="btn btn-danger">
            <MdSearch /> Search
          </button>{" "}
        </div>
      </div>
    </form>
  );
};
