function solution(s){
    let string = s.toLowerCase()
    let arr = [...string]
    
    let p = 0
    let y = 0
    console.log(arr)
    arr.forEach((item) => {
        if (item === 'p') {
            p++
        }
        if (item === 'y') {
            y++
        }
    })

    return p === y ? true : false
}