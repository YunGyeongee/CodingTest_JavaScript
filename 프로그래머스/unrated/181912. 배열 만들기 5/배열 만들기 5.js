function solution(intStrs, k, s, l) {
    const result = []
    intStrs.forEach((item) => {
        const number = item.split('').splice(s, l).join('')
        if (number > k) {
            result.push(Number(number))
        }
    })
    
    return result
}