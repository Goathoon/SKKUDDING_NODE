const rest_json = require('./restaurant.json');
shop_list = rest_json.restaurants
for(var i = 0; i<shop_list.length; i++){ 
    a_shop = shop_list[i]
    console.log("이 름 : "+a_shop.name);
    console.log("주 소 : "+a_shop.address);
    console.log("번 호 : "+a_shop.phone);
    console.log('');

}