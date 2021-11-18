    export function getRoundom(max){
        return Math.ceil(Math.random()*max)
    }
    export function getRoundomArrayItem(arr){
        return arr[getRoundom(arr.length-1)]
    }
