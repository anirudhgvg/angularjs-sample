(function () {
'use strict';

angular.module('ShoppingApp', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingCartService', ShoppingCartService);

ToBuyController.$inject = ['ShoppingCartService'];    
function ToBuyController(ShoppingCartService) {
    var ToBuy = this;
    ToBuy.items = [
        { name:"cookies", quantity: 10},
        { name:"chips", quantity: 20},
        { name:"bags", quantity: 14},
        { name:"balls", quantity: 14},
        { name:"cars", quantity: 11},
    ];     
    
    ToBuy.checkItem = function(index, item) {
        ToBuy.items.splice(index, 1);
        ShoppingCartService.addItem(item.quantity, item.name);    
    }
}

AlreadyBoughtController.$inject = ['ShoppingCartService'];    
function AlreadyBoughtController(ShoppingCartService) {
    var AlreadyBought = this;    
    AlreadyBought.items = ShoppingCartService.getItems();
    
}
    
function ShoppingCartService() {
    var ShoppingCart = this;
    var items = [];
    
    ShoppingCart.addItem = function(quantity, name){
        items.push({quantity: quantity, name: name});
    };
    
    ShoppingCart.rmItem = function(index){
        items.splice(index,1);
    };
    
    ShoppingCart.getItems = function(){
        return items;
    };
}    

})();
