import React, { Component } from 'react'

export default class Filter extends Component {
  render() {
    return (
      <div className='row'>
            <div className='col-md-4'>
                {this.props.count} product found
            </div>
            <div className='col-md-4'>
                <label> Order by
                    <select className='form-control' value={this.props.sort} onChange={this.props.handleSortChange}>
                        <option value="">Select</option>
                        <option value="lowestprice"> Lowest to highest</option>
                        <option value="highestprice"> Highest to lowest</option>
                    </select>
                </label>

            </div>
            <div className='col-md-4' value={this.props.size} onChange={this.props.handleSizeChange}>
                <label> Filter Size
                    <select className='form-control'>
                        <option value="">All</option>
                        <option value="x">XS</option>
                        <option value="s">S</option>
                        <option value="m">M</option>
                        <option value="l">L</option>
                        <option value="xl">XL</option>
                        <option value="xxl">XXL</option>
                    </select>
                </label>
            </div>
      </div>
    )
  }
}
