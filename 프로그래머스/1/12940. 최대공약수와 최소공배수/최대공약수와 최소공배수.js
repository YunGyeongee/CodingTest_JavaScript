function solution(n, m) {
    let maxDivideNum = 0
    for (let i = 1;i <= Math.min(n,m); i++) {
        if (Math.max(n,m) % i === 0 && Math.min(n,m) % i === 0) {
            maxDivideNum = i
        }
    }

    return [maxDivideNum , n * m / maxDivideNum]
}