const fs = require('fs');
shop = process.argv[2];
const readBuffer = fs.readFileSync('restaurant.json'); //파일의 내용 반환
const dataJson = readBuffer.toString();
const restJson = JSON.parse(dataJson); //parse하여 String을 JavaScript Object로 만듦

check = false;

//forEach 는 return을 걸어도 계속 continue함
//따라서 check 라는 flag로 확인
restJson.restaurants.forEach((x, idx) => {
    if (x["name"] === shop) {
        restJson.restaurants.splice(idx, 1); //삭제
        const writeJson = JSON.stringify(restJson);
        fs.writeFileSync('restaurant.json', writeJson);
        check = true;
    }
});

if (check) {
    console.log(shop, "처리되었습니다");
}
else {
    console.log("해당 맛집 정보가 존재하지 않습니다.");
}