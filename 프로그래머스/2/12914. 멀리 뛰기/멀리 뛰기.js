function solution(n) {
    let answer = 0

    if (n === 0) {
        return 0
    }

    let array = new Array(n + 1)

    array[1] = 1
    array[2] = 2

    for (let i = 3; i <= n; i++) {
        array[i] = (array[i - 1] + array[i - 2]) % 1234567
    }

    answer = array[n]

    return answer
}