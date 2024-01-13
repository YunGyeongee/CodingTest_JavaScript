function solution(t, p) {
    let result = 0
    
    for (let i = 0; i < t.length; i++) {
        let string = t.slice(i, p.length + i)

        if (string.length === p.length) {
            if (string <= p) {
                result++    
            }
        }
    }
    
    return result
}