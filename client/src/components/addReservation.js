import React, { Component } from "react";
import axios from "axios";

class AddReservation extends Component {
  constructor(props) {
    super(props);

    this.changeproductName = this.changeproductName.bind(this);
    this.onChangequantity = this.onChangequantity.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      productName: "",
      quantity: 0,
      date: new Date().toLocaleString(),
      id: props.location.state.userId,
    };
  }

  changeproductName(e) {
    this.setState({
      productName: e.target.value,
    });
  }

  onChangequantity(e) {
    this.setState({
      quantity: e.target.value,
    });
  }
  onChangeDate(e) {
    console.log(e.target.value.toLocaleString());
    this.setState({
      date: e.target.value.toLocaleString(),
    });
  }
  onSubmit(e) {
    e.preventDefault();

    const resv = {
      userid: this.state.id,
      productName: this.state.productName,
      quantity: this.state.quantity,
      date: this.state.date,
    };

    console.log(resv);

    axios
      .post(`http://localhost:5000/users/profile/${this.state.id}/add`, resv)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    window.location = "/profile";
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className="mt-5">
          <div className="form-group">
            <label>Product Name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.productName}
              onChange={this.changeproductName}
            />
          </div>
          <div className="form-group">
            <label>Quantity: </label>
            <input
              type="number"
              className="form-control"
              value={this.state.quantity}
              onChange={this.onChangequantity}
            />
          </div>
          <div>
            <label>Booking Date: </label>
            <input
              type="date"
              className="form-control"
              onChange={this.onChangeDate}
            ></input>
          </div>
          <div className="form-group">
            <input type="submit" value="Add" className="btn btn-primary mt-3" />
          </div>
        </form>
      </div>
    );
  }
}

export default AddReservation;
