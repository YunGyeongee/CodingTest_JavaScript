function solution(arr) {
    const minVal = Math.min(...arr)
    arr.splice(arr.indexOf(minVal), 1)
    
    return arr.length ? arr : [-1]
}