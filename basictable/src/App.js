import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import injectTapEventPlugin from "react-tap-event-plugin";

import logo from "./logo.svg";
import "./App.css";
import Form from "./Form";
import Table from "./Table";
import TextField from "material-ui/TextField/TextField";

injectTapEventPlugin();

class App extends Component {
  state = {
    data: [],
    editIdx: -1,
  };

  handleRemove = (i) => {
    this.setState(state => ({
      data: state.data.filter((row, j) => j !==i),
    }));
  }

  startEditing = (i) => {
    this.setState({editIdx: i});
  }

  stopEditing = () => {
    this.setState({editIdx: -1});
  }
// when j ===i, it changes, ptherwise return current row
  handleChange = (e, name, i) => {
    const { value } = e.target;
    this.setState(state => ({
      data: state.data.map(
      (row, j) => ( j === i ? {...row, [name]: value} : row)
    )
    }));
  };

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Form
            onSubmit={submission =>
              this.setState({
                data: [...this.state.data, submission]
              })}
          />
          <Table
            handleRemove={this.handleRemove} 
            handleChange={this.handleChange}
            startEditing={this.startEditing}
            stopEditing={this.stopEditing} 
            editIdx={this.state.editIdx}
            data={this.state.data}
            header={[
              {
                name: "Description",
                prop: "description"
              },
              {
                name: "SKU",
                prop: "sku"
              },
              {
                name: "Quantity",
                prop: "quantity"
              },
              {
                name: "Cost",
                prop: "cost"
              },
              {
                name: "Total",
                prop: "total"
              }
            ]}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
