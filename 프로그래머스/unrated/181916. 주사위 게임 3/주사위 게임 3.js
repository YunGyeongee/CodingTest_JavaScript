function solution(a, b, c, d) {
    const arr = [a, b, c, d]
    const number = arr.reduce((acc, cur) => {
        acc[cur] = acc[cur] ?? 0
        acc[cur]++
        return acc
    }, {})
    
    const valInfo = Object.values(number)
    const keyInfo = Object.keys(number)

    const countVal = Math.max(...valInfo)
    switch(countVal) {
        case 4:
            return a * 1111
        case 3: {
            const threeKey  = keyInfo.find((a) => number[a] === 3)
            const oneKey = keyInfo.find((a) => number[a] === 1)
            
            return (10 * Number(threeKey) + Number(oneKey)) ** 2
        }
        case 2: {
            if(keyInfo.length === 2) {
                if(a === b) return (a + c) * Math.abs(a - c)
                return (a + b) * Math.abs(a - b)
            } else {
                return  keyInfo.reduce((acc, cur) => number[cur] === 1 ? acc * cur : acc, 1)
            }
        }   
        default: {
            return Math.min(a, b, c, d)
        }
    }
    
    return number
}