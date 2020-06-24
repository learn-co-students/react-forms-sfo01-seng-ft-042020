import React from 'react'

class DisplayData extends React.Component {
  listOfSubmissions = (formData) => {
    return formData.map(data => {
      return <div><span>{data.firstName}</span> <span>{data.lastName}</span></div>
    })
  }

  render() {
    return (
      <div>
        <h1>{this.listOfSubmissions(this.props.formData)}</h1>
      </div>
    )
  }
}

export default DisplayData;