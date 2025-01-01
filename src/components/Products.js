import React, { Component } from 'react'
import util from '../util'

export default class Products extends Component {
  render() {
        const productItems = this.props.products.map( product => ( 
            <div key={product.id} className='col-md-3 my-2 mx-4 p-2 border border-primary border-2 rounded'>
                <div className='thumbnail text-center'>
                    <a href={`#${product.id}`}>
                        <img src={`/products/${product.sku}_2.jpg`} alt={product.title} />
                        <div>
                            <p>{product.title}</p>
                        </div>
                    </a>
                    <div>
                      <button className='btn btn-primary' onClick={(e) => this.props.handleAddToCart(e,product)}>Add to cart</button>
                    </div>
                    <b>{util.formatCurrency(product.price)}</b>
                </div>
            </div>
        ))
    return (
      <div className='row'>
        {productItems}
      </div>
    )
  }
}
