import React from 'react';
import checkoutActions from "../actions/checkout-action";
import checkoutStore from "../store/checkout-store";
class CartElements extends React.Component{
  constructor(){
    super()
    this.state = {
      currentCart : checkoutStore.getCart()
    }
  }
  componentDidMount(){
    checkoutStore.addListener(this.updateCartNumber)
  };
  updateCartNumber = () => {
    this.setState({
      currentCart: checkoutStore.getCart()
    })
  };
  updateCart = () => {
    
    checkoutActions.addCart(parseInt(this.refs.cartNumber.value))
  };
  gotoCheckout = () => {
    window.location.href +="?products=[1,2,3]"
  };
  render(){
    var checkoutButton = "";
    if(this.state.currentCart > 0){
      checkoutButton = <a className="button" href="/welcome/checkout?products=[1,2,3,4]">CheckOut</a>;
    }
    return(
      <div>
        <div className="input-group">
            <input type="number" ref="cartNumber"/>
        </div>
        <button className="button success" onClick={this.updateCart}>Add to Cart</button>
        {checkoutButton}
      </div>
    )
  }
}

export default CartElements