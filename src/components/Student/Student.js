import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {Switch, Route} from 'react-router-dom'
import axios from 'axios'


export default class Student extends Component {
  constructor() {
    super()

    this.state = {
      studentInfo: {}
    }
  }

  componentDidMount(){
    axios.get(`http://localhost:3005/students/${this.props.match.params.id}`)
    .then(response => {
      this.setState({studentInfo: response.data})
    })
  }

  render() {
      const {studentInfo} = this.state
      console.log(this.props)
    return (
      <div className="box">
        <h1>Student</h1>
        <h1>{studentInfo.first_name}{studentInfo.last_name}</h1>
        <h3>Grade: {studentInfo.grade}</h3>
        <h3>Email:{studentInfo.email}</h3>

        {/* <p onClick={() => this.props.history.goBack()}>Back to Classlist</p> */}

        <Link to={`/classlist/${this.props.match.params.class}`}>
        <p>
          Go Back
        </p>
        </Link>

      </div>
    )
  }
}