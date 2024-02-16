function solution(n) {
    const count = n.toString(2).replace(/0/gi,'').length
    let result = n + 1
    
    while (n < result) {
        const resultCount = result.toString(2).replace(/0/gi,'').length
        
        if (resultCount === count) {
            break;
        }
        result++
    }
    
    return result
}
