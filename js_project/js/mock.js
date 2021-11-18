import { getRoundom } from "./helpers.js"
import { getRoundomArrayItem } from "./helpers.js"
import {TITLES, FEATURES, TIME_VALUES,OFFER_TYPES} from"./constans.js"
    function getMock(){
     let mock = {
        "author": {
          "avatar":` img/avatars/default.png`,
        },   
       "offer": {
          "title": `Хрущeвка`,
          "address": `600, 350`,
          "price": `1000`,
          "type": ` house`,
          "rooms":`2`,
          "guests":` 12`,
          "checkin": `14:00`,
          "checkout": `14:00`,
          "features": [],
          "description":`строка с описанием`,
        },
    
    "location": {
          "x": 1200,
          "y": 630,
         }
       } 
mock.author.avatar = `img/avatars/user0` +getRoundom(8) + `.png`;

mock.location.x = getRoundom(1200)
mock.location.y= getRoundom(600)



mock.offer.title = getRoundomArrayItem(TITLES)
mock.offer.price = getRoundom(100000)
mock.offer.address = `${mock.location.x},${mock.location.y}`
mock.offer.type = getRoundomArrayItem(OFFER_TYPES)
mock.offer.rooms = getRoundom(5)
mock.offer.guests = getRoundom(5)
mock.offer.checkin= getRoundomArrayItem(TIME_VALUES)
mock.offer.checkout= getRoundomArrayItem(TIME_VALUES)
mock.offer.description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'


for(let i =0; i < FEATURES.length; i++){
const currentItem = FEATURES[i];
  if(getRoundom(10)>5){
  mock.offer.features.push(currentItem)
    }
  }
return mock

}
function getMocksArray(mockCount = 8){
  const resultArray = []
   for(let i =0;i<mockCount ;i++){
      const mock = getMock()
      resultArray.push(mock)
   }
   return resultArray
}
export default getMocksArray 

