function solution(my_string, indices) {
    let result = [...my_string]
    indices.forEach((indice) => {
        delete result[indice]
    })
    
    return result.join('')
}