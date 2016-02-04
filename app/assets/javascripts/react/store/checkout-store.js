import dispatcher from '../dispatcher.js';
import EventEmitter from 'events';
import assign from 'object-assign';
var CHANGE_EVENT = 'change';
var EventEmitterEvent  = EventEmitter.EventEmitter 

var _number  = 0;
var checkoutStore = assign({}, EventEmitterEvent.prototype, {
  addCart: function(number){
    return _number = _number + number;
  },
  getCart: function(){
    return _number;
  },
  emitChange: function(){
    this.emit(CHANGE_EVENT)
  },
  addListener: function(callback){
    this.on(CHANGE_EVENT, callback)
  },
  removeListner: function(callback){
    this.removeListner(CHANGE_EVENT, callback)
  }   
});

dispatcher.register((action)=>{
  switch (action.actionType){
    case 'ADD_CART':
      console.log("hello")
      checkoutStore.addCart(action.data)
      checkoutStore.emitChange()
      break; 
  }
})


export default checkoutStore;