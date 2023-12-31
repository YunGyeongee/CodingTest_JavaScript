function solution(n) {
    return Number(Array.from(String(n)).sort().reverse().join(''))
}