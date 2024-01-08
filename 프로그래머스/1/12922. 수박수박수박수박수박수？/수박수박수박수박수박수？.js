function solution(n) {
    let result = ''
    for (let i = 1; i <= n; i++) {
        i % 2 === 0 ? result += '박' : result += '수'
    }
    
    return result
}