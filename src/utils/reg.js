export function reg(str) {
    let result=str.match(/([(]#[0-9]*-[0-9]*[)]|[(]#[0-9]*[)])/g)
    if(result){
        return [...result]
    }else {
        return []
    }
}
