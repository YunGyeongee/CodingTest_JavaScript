function solution(left, right) {
    let count = 0
    for (let i = left; i <= right; i++) {
        count += (Number.isInteger(Math.sqrt(i)) ? -1 : 1) * i
    }
        
    return count
}