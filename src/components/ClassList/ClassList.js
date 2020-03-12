import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'

export default class ClassList extends Component {
  constructor() {
    super()

    this.state = {
      students: []
    }
    
  }

  componentDidMount(){
    axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`)
    .then(response => {
      this.setState({students: response.data})
    })
  }

  render() {
    const students = this.state.students.map((student, index) => {
      return <Link to={`/student/${student.id}/${this.props.match.params.class}`} key={index}>
              <h3 >            
                  {student.first_name}
                  {student.last_name}
              </h3>
            </Link>
    })
    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {students}

        <Link to='/'>
        <p>Back to Home</p>
        </Link>

      </div>
    )
  }
}