import React, { Component } from 'react';
import Logoutbutton from './Logoutbutton';
import Loginbutton from "./Loginbutton";
import Conditionalrengering from "./Conditionalrengering"; 





class Logincontrol extends Component {
  constructor(props) {
    super(props);

    this.handleLoginclick = this.handleLoginclick.bind(this);
    this.handleLogoutclick = this.handleLogoutclick.bind(this);

    this.state = { isLoggedIn: false };
  }

  handleLoginclick() {
    this.state({ isLoggedIn: true });
  }
  handleLogoutclick(){
    this.state({isLoggedIn:false});
  }

  render() {
    const isLoggedIn =this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <Logoutbutton onClick={this.handleLogoutclick} />;
    } else {
      button = <Loginbutton onClick={this.handleLoginclick} />;
    }
    return (
      <>
        <div>
          <Conditionalrengering isLoggedIn={isLoggedIn} />
          {button}
        </div>
      </>
    );
  }
}
 
export default Logincontrol ;