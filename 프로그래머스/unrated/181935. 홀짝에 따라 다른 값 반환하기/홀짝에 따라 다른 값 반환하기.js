function solution(n) {
    let type = (n % 2 === 0) ? 'even' : 'odd'
    let result = 0
    if (type === 'even') {
        for (let i = 1; i <= n; i++) {
            if (i % 2 === 0) {
                result += i * i
            }
        }
    } else {
        for (let i = 1; i <= n; i++) {
            if (i % 2 !== 0) {
                result += i
            }
        }
    }
    
    return result
}