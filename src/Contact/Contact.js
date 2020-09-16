import React, { Component } from 'react';

class Contact extends Component {
    state = {
        firstName: "",
        lastName: "",
        impression: ""
      }
 
     
      onFirstName = (event) => {
          console.log('event target value', event.target.value)
        this.setState({
          firstName: event.target.value
        })
      }
    
      onLastName = (event) => {
        this.setState({
          lastName: event.target.value
        })
      }

      onImpression = (event) => {
          this.setState({
              impression: event.target.value
          })
      }

      toReset = () => {
        this.setState({
            firstName: "",
            lastName: "",
            impression: ""
        })
      }

      enterName = () => {
        if(this.state.firstName !== "" && this.state.lastName !== "" && this.state.impression) {
          alert(`Thanks for joining us ${this.state.firstName}`)
        }
      }

    render() {
        let welcomeMsg;
        if(this.state.firstName !== "" && this.state.lastName !== "" && this.state.impression) {
            welcomeMsg = `${this.state.firstName} ${this.state.lastName}'s best impression is ${this.state.impression}`
        }
        
        return (
        <div>
            <h2>Contact</h2>
            <div id="forms">
                <input type="text" placeholder="First Name" onChange={this.onFirstName}/>
                <input type="text" placeholder="Last Name" onChange={this.onLastName}/>
                <input type="text" placeholder="Impression" onChange={this.onImpression}/>
                <button onClick={this.enterName}>Join Us!</button>
            </div>
            <div>
                {welcomeMsg}
            </div>
                <p>Phone: 1-800-WE-REACT</p>
                <p>Email: info@ReactActors.com</p>
        </div>
        )
    }
}

export default Contact;