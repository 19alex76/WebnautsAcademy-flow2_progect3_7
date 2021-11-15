'use strict';
    function getRoundom(max){
        return Math.ceil(Math.random()*max)
    }
    function getRoundomArrayItem(arr){
      return arr[getRoundom(arr.length-1)]
    }
    const TITLES = [ `Хрущевка`,`Бунгало для двоих`,`Дворец птн`,`Хостел для народа`]
    const OFFER_TYPES = [`palace`,`flat`,`house`,`bungalo`]
    const TIME_VALUES = ['12:00','13:00','14:00']
    const FEATURES = ["wifi", "dishwasher", "parking", "washer", "elevator","conditioner"]

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
   console.log(getMocksArray()) ;
