import React from 'react'
import Form from './Form';
import DisplayData from './DisplayData'
class ParentComponent extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      submittedData:[],
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    let formData = { firstName: this.state.firstName, lastName: this.state.lastName }
    let dataArray = this.state.submittedData.concat(formData)
    this.setState({submittedData: dataArray})
    this.state.firstName = ""
    this.state.lastName = ""
    
   
  }

  render() {
    return(
      <div>
        <Form 
          formData={this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        
        <DisplayData formData={this.state.submittedData}/>
      </div>
    )
  }
}

export default ParentComponent