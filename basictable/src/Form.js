import React from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import Input from 'react-input-component';
import './index.css'

export default class Form extends React.Component {
  state = {
    // firstName: '',
    description:'',
    descriptionError: '',
    // firstNameError: '',
    // lastName: '',
    // lastNameError: '',
    sku:'',
    skuError: '',
    // username: '',
    // usernameError: '',
    quantity: '',
    quantityError: '',
    // email: '',
    // emailError: '',
    cost: '',
    costError: '',
    total: '',
    totalError: '',
  };

  change = e => {
    // this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  validate = () => {
    let isError = false;
    const errors = {
      descriptionError: '',
      skuError: '',
      quantityError: '',
      costError: '',
      totalError: ''
    };

    if (this.state.sku.length < 1) {
      isError = true;
      errors.skuError = "SKU can not be blank";
    }

    if (this.state.cost.length < 0) {
      isError = true;
      errors.costError = "Cost can not be blank or negative";
    }

    this.setState({
      ...this.state,
      ...errors
    });

    return isError;
  };

  onSubmit = e => {
    e.preventDefault();
    const err = this.validate();
    if (!err) {
      this.props.onSubmit(this.state);
      // clear form
      this.setState({
        description:'',
        descriptionError: '',
        sku:'',
        skuError: '',
        quantity: '',
        quantityError: '',
        cost: '',
        costError: '',
        total: '',
        totalError: '',
      });
    }
  };

  render() {
    return (
      <form>
        <TextField
        id="text-field-default" 
        className="text-field-custom"
        defaultValue="Default Value"
          name="description"
          placeholder="Description"
          value={this.state.description}
          onChange={e => this.change(e)}
          errorText={this.state.descriptionError}
          // floatingLabelFixed
        />
        <TextField
        id="text-field-default" 
        className="text-field-custom"
        defaultValue="Default Value"
          name="sku"
          placeholder="SKU"
          value={this.state.sku}
          onChange={e => this.change(e)}
          errorText={this.state.skuError}
          // floatingLabelFixed
        />
        <TextField
        id="text-field-default" 
        className="text-field-custom"
        defaultValue="Default Value"
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={this.state.quantity}
          onChange={e => this.change(e)}
          errorText={this.state.quantityError}
          // floatingLabelFixed
        />
        <TextField
        type="number"
          name="cost"
          placeholder="Cost"
          value={this.state.cost}
          onChange={e => this.change(e)}
          errorText={this.state.costError}
          // floatingLabelFixed
        />
        <TextField
        id="text-field-default" 
        className="text-field-custom"
        defaultValue="Default Value"
        type="number"
          name="total"
          placeholder="Total"
          value={this.state.total}
          onChange={e => this.change(e)}
          errorText={this.state.totalError}
          // floatingLabelFixed
        />
        <br />
        <RaisedButton label="Submit" onClick={e => this.onSubmit(e)} primary />
      </form>
    );
  }
}
