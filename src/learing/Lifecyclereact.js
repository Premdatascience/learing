 import React, { Component } from 'react'
 
// USESTATE
 class Lifecyclereact extends Component {
    constructor(props) {
        super(props);
        this.state = {count:0};

        console.log('welcome');
    }

handelreset(){
    this.setState({count :null})
}

componentDidMount(){
    console.log("update!");
}

// componentDidUpdate(prevprops,prestate){
//     console.log("first app");;
//      console.log("app-prevprops", prevprops);
//       console.log("prevstate", prestate);
// }


   increment(){
    let count =this.state.count
    this.setState({count : count +=1});
   }

   decrement(){
   let count = this.state.count;
   this.setState({ count: (count -= 1) });

   }


    render() { 
        console.log("view!");
        return (
          <>
            <div className="mt-5">
              <h1>count</h1>
              <div>{<h2>{this.state.count}</h2>}</div>

              <div>
                <button onClick={this.increment.bind(this)}>add</button>
                <button onClick={this.decrement.bind(this)}>sub</button>
                <button onClick={this.handelreset.bind(this)}>reset</button>
              </div>
            </div>
          </>
        );
    }
 }
  
 export default Lifecyclereact;