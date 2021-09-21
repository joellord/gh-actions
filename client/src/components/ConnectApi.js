import React, { Component } from "react";

export default class ConnectApi extends Component {

  constructor(props) {
    super(props);
    this.state = {
      result: {}
    }
    this.handleConnect = this.handleConnect.bind(this);
  }

  async handleConnect() {
    let result = await fetch("http://localhost:5000/hello").then(resp => resp.json());
    this.setState({result});
  }

  render() {
    return (
      <div>
        <button id="connect" onClick={this.handleConnect}>Connect to API</button>
        <br/>
        <br/>
        <pre id="result">{JSON.stringify(this.state.result, 2)}</pre>
      </div>
    )
  }

}