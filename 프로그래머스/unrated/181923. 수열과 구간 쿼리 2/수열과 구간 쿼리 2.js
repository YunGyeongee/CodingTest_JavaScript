function solution(arr, queries) {
    let result = [];
    queries.forEach((query) => {
        const [s, e, k] = query
        const num = []
        
        for (let j = s; j <= e; j++) {
            if (arr[j] > k) {
                num.push(arr[j])
            }
        }
        if (num.length > 1) {
            const minNum = Math.min(...num)
            result.push(minNum)
        } else if (num.length === 1) {
            result.push(...num)
        } else {
            result.push(-1)
        }
    })
    
    return result;
}