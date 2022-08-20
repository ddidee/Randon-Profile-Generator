import React, { Component } from 'react'

class profile extends Component {
    state = {
        firstName: '',
        lastName: '',
        gender: '',
        age: '',
        email: '',
        phoneNo: '',
        image: ''
    }
    clickHandler = () => {
        fetch('https://randomuser.me/api/')
        .then(res => {
            if(!res.ok){
                throw Error('no data available!')
            }

            return res.json()
        })
        .then(data => {
            console.log(data);
            this.setState({
                firstName: data.results[0].name.first,
                lastName: data.results[0].name.last,
                gender: data.results[0].gender,
                age: data.results[0].dob.age,
                email: data.results[0].email,
                phoneNo: data.results[0].phone,
                image: data.results[0].picture.large

            })
        })
    }

    render() {
    return (
      <div>
        <img src={this.state.image} alt=''/>
        <p>FirstName: {this.state.firstName}</p>
        <p>LastName: {this.state.lastName}</p>
        <p>Gender: {this.state.gender}</p>
        <p>Email: {this.state.email}</p>
        <p>Age: {this.state.age}</p>
        <p>PhoneNumber: {this.state.phoneNo}</p>
        <button onClick={this.clickHandler}>Get Profile</button>
      </div>
    )
  }
}

export default profile
