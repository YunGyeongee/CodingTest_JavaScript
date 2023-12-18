function solution(arr, queries) {
    return queries.reduce((acc, cur) => {
        const result = [...acc]
        const [s, e, k] = cur
        
        return result.map((item, i) => {
            if (s <= i && i <= e) {
                if (i % k === 0) {
                    return item + 1
                }
            }
            return item
        })
    }, arr)
}