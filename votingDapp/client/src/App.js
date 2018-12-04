import React, { Component } from "react";
import SimpleStorageContract from "./contracts/SimpleStorage.json";
import VoteTokenContract from './contracts/VoteToken.json';
import getWeb3 from "./utils/getWeb3";
import truffleContract from "truffle-contract";
import staceyAbramsPic from "./assets/Abrams.jpeg"
import brianKempPic from "./assets/Kemp.jpg"
import "./App.css";

class App extends Component {
  state = { storageValue: 0, web3: null, accounts: null, contract: null };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const Contract = truffleContract(SimpleStorageContract);
      Contract.setProvider(web3.currentProvider);
      const instance = await Contract.deployed();

      const Token = truffleContract(VoteTokenContract);
      Token.setProvider(web3.currentProvider);
      const token = await Token.deployed();

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: token }, this.voteTokenTest);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`
      );
      console.log(error);
    }
  };

  runExample = async () => {
    const { accounts, contract } = this.state;

    // Stores a given value, 5 by default.
    await contract.set(5, { from: accounts[0] });

    // Get the value from the contract to prove it worked.
    const response = await contract.get();

    // Update state with the result.
    this.setState({ storageValue: response.toNumber() });
  };

  voteTokenTest = async () => {
    const { accounts, contract } = this.state;
    const abrams = await contract.balanceOf("0x443c2Ec1f326787162E8095651ee77E5996d65Ae", { from: accounts[0] });

    this.setState({ abramsVoteTotal: abrams.toNumber() });

    const kemp = await contract.balanceOf("0x4825FF5fCC3404C996f8C2AEf6f94E11c9c1f8d4", { from: accounts[0] });

    this.setState({ kempVoteTotal: kemp.toNumber() });
  };

  abramsVoteTotal = async () => {
    const { accounts, contract } = this.state;

    const response = await contract.balanceOf("0x443c2Ec1f326787162E8095651ee77E5996d65Ae", { from: accounts[0] });

    this.setState({ abramsVoteTotal: response.toNumber() });

    console.log('Test');

  };

  kempVoteTotal = async () => {
    const { accounts, contract } = this.state;

    const response = await contract.balanceOf("0x4825FF5fCC3404C996f8C2AEf6f94E11c9c1f8d4", { from: accounts[0] });

    this.setState({ kempVoteTotal: response.toNumber() });

    console.log('Test');

  };

  TokenTransfer = async () => {
    // const { accounts, contract } = this.state;
    const { accounts, contract } = this.state;
    // const web3 = await getWeb3();
    contract.transfer("0xd9ac0a8865c219eDAa602EC13554f136dbB091F0", 1, { from: accounts[0] });
  };

  staceyAbramsVote = async () => {
    // const { accounts, contract } = this.state;
    const { accounts, contract } = this.state;
    // const web3 = await getWeb3();
    contract.transfer("0x443c2Ec1f326787162E8095651ee77E5996d65Ae", 1, { from: accounts[0] });
  };

  brianKempVote = async () => {
    // const { accounts, contract } = this.state;
    const { accounts, contract } = this.state;
    // const web3 = await getWeb3();
    contract.transfer("0x4825FF5fCC3404C996f8C2AEf6f94E11c9c1f8d4", 1, { from: accounts[0] });
  };




  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className="App">

        {/* <h1>Georgia Governor's Election</h1>
        <h2>Georgia Governor's Election</h2>
        <img id = "candidate" src = {brianKempPic} width="300" height="200"></img>
        <br></br>
       <button type="button" onClick= {this.brianKempVote}>Brian Kemp</button> 
        <br></br>
        <img src = {staceyAbramsPic}  width="300" height="200"></img>
        <br></br>
        <button type="button" width="150" height ="75" onClick= {this.staceyAbramsVote}>Stacey Abrams</button>x
        <div>The stored value is: {this.state.storageValue}</div> */}
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h1>Georgia 2018 Gubernatorial Ballot</h1>
        <h1>Vote Totals</h1>
        <h2>Kemp: {this.state.kempVoteTotal}      Abrams: {this.state.abramsVoteTotal}</h2>
        <div class="row">
          <div class="column">
            <h3>Click the picture below to learn more about Brian Kemp's campaign</h3>
            <a href="https://www.kempforgovernor.com/" target="_blank" rel="noopener noreferrer"><img src={brianKempPic} alt="Brian Kemp" width="600" height="400"></img></a>
            <div class="button" onClick={this.brianKempVote}>Click here to vote for Brian Kemp</div>
          </div>
          <div class="column">
            <h3>Click the picture below to learn more about Stacey Abram's campaign</h3>
            <a href="https://staceyabrams.com/" target="_blank" rel="noopener noreferrer"><img src={staceyAbramsPic} alt="Stacey Abrams" width="600" height="400"></img></a>
            <div class="button" onClick={this.staceyAbramsVote}>Click here to vote for Stacey Abrams</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
