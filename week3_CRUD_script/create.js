const fs = require('fs');
[new_shop, new_loc, new_num] = process.argv.slice(2);
const readBuffer = fs.readFileSync('restaurant.json', encoding = 'utf8'); //readFile에서 콜백함수로 동기처리 할 수는 있음
const jsonBuffer = JSON.parse(readBuffer);
function check(buf) {
    noCheck = false;
    buf.restaurants.forEach((x, idx) => {
        if (x["name"] === new_shop) {
            return false;
        }
        if (idx === buf.restaurants.length - 1) {
            noCheck = true;
            return true;
        }
    })
    return noCheck;
};

if (check(jsonBuffer)) {
    let obj = {}
    obj.name = new_shop;
    obj.address = new_loc;
    obj.phone = new_num;
    jsonBuffer.restaurants.push(obj)
    writeJson = JSON.stringify(jsonBuffer);
    fs.writeFileSync('restaurant.json', writeJson);
    console.log('추가되었습니다');
}
else {
    console.log('이미 존재하는 맛집입니다');
};