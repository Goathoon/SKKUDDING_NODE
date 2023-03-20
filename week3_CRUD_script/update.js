const fs = require('fs');
[shop, new_loc, new_num] = process.argv.slice(2);
const readBuffer = fs.readFileSync('restaurant.json', 'utf8');
const jsonBuffer = JSON.parse(readBuffer);
check = false;
jsonBuffer.restaurants.forEach((x, idx) => {
    if (x["name"] === shop) {
        x["address"] = new_loc;
        x["phone"] = new_num;
        writeBuffer = JSON.stringify(jsonBuffer);
        fs.writeFileSync('restaurant.json', writeBuffer);
        check = true;
    }
});
if (check) {
    console.log('처리되었습니다');
}
else {
    console.log('맛집 정보가 존재하지 않습니다');
}