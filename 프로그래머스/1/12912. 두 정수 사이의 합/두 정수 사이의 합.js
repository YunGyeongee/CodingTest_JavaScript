function solution(a, b) {
    let result = 0
    const [max, min] = a >= b ? [a, b] : [b, a]
    for (let i = min; i <= max; i++) {
        result += i
    }
    
    return result
}