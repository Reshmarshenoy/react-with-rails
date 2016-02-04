import dispatcher from "../dispatcher";
import constants from "../const/store-const";
var checkoutActions  = {
  addCart: function(data){
    dispatcher.dispatch({
      actionType: constants.ADD_CART,
      data: data
    })
  }
}
export default checkoutActions;