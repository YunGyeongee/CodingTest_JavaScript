function solution(numLog) {
    let number = 0
    let string = ''
    numLog.forEach((item) => {
        if (item - number === 1) {
            string += 'w'
        }
        if (item - number === -1) {
            string += 's'
        }
        if (item - number === 10) {
            string += 'd'
        }
        if (item - number === -10) {
            string += 'a'
        }
        number = item
    })
    
    return string
}