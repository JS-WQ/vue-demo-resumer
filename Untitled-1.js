const colorMap = {
    "one":'red',
    "two":"green",
    "three":'yellow',
    "four":"pink"
}



let color = (function(){
    let result = []

    for(i in colorMap){
        result.push(colorMap[i])
    }
    return result
})()
console.log(color)