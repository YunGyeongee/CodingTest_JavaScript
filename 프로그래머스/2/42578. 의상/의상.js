function solution(clothes) {
    let result = 1
    let type = new Map()
    
    clothes.forEach((item) => {
        if (type.has(item[1])) {
            type.set(item[1], type.get(item[1]) + 1)
        } else {
            type.set(item[1], 1)
        }
    })
    
    for (let [key, value] of type) {
        result *= value + 1
    }

    result -= 1

    return result
}