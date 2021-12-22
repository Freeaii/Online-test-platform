export function removeElement(arr,value) {
    let index=arr.indexOf(value);
    if(index>-1){
        arr.splice(index,1);
    }
    return arr
}

export function majuscule(nowLetter) {
    for(let i=65;i<91;i++){
        if(String.fromCharCode(i)===nowLetter){
            return String.fromCharCode(i+1)
        }
    }
}
