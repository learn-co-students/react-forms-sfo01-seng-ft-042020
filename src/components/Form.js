import React from 'react';

class Form extends React.Component {
  render() {
    return(
      <div>
        <form>
          <input 
            type="text" 
            name="firstName"
            onChange={this.props.handleChange}
            value={this.props.formData.firstName}
          />
          <input 
            type="text" 
            name="lastName"
            onChange={this.props.handleChange}
            value={this.props.formData.lastName}
          />
          <button
            type="submit"
            onClick={this.props.handleSubmit}
          >Submit</button>
        </form>
      </div>
    )
  }
}

export default Form;