const axios = require('axios');
var URL = "https://1c41e2f9-20ad-471a-9dbb-0629e45e12cd.mock.pstmn.io/productList";
//Postman 의 Mock(가짜) 서버 사용하여 클라이언트에서 GET메소드로 데이터 요청함.


async function getData2() {
    return (await axios.get(URL)).data;
}

async function calculateSum() {
    var data = await getData2();
    var total = 0;
    for (var item of data) {
        total += item.price;
    }
    console.log(total);
}

calculateSum();

