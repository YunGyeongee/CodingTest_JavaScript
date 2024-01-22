function solution(absolutes, signs) {
    let result = 0
    absolutes.forEach((absolute, i) => {
        signs[i] ? result += absolute : result += -absolute
    })
    
    return result
}