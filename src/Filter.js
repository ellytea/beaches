import React, { Component } from 'react';


class Filter extends Component {
  constructor(){
    super();
  }

  render(){
    return(
      <div className='filter-dropdown'>
        <select onChange={this.props.filterByCounty}
          className='filter'
          placeholder='Filter by County'>
        <option className='filter-names' value='all-counties'>All Counties</option>
        {
          this.props.beaches.map((beach) => {
            return <option className='filter-names' value={beach.county}>{beach.county}</option>
          })
        }
        </select>
      </div>

    )
  }
}

export default Filter;
