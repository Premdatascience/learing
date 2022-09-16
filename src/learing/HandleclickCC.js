import React, { Component } from "react";

class HandleclickCC extends Component {
  constructor(props) {

    super(props);

    this.state={count:0};

}
  // state = {  }

  handleclick() {
    console.log("ur are useless");
    console.log(this);
  }


  handlemyclick=(e)=>{
      alert('ok');

      console.log(e);
  }

  handlestateclick(){
    this.setState({
        count:this.state.count+1
    },
    function(){
        console.log("job done");
    }
    
    );
  }

  render() {
    return (
      <>
        <button onClick={this.handleclick}>click me</button>
        <button onClick={this.handlemyclick.bind(this)}>e-fun</button>
        {/* //setState */}
        <div className="mt-5">
          <div className="click-count">button press: {this.state.count}</div>
          <button onClick={this.handlestateclick.bind(this)}>setState</button>
        </div>
      </>
    );
  }
}

export default HandleclickCC;
