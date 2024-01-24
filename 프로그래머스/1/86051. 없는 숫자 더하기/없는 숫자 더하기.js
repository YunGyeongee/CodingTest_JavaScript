function solution(numbers) {
    let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    
    numbers.forEach((number) => {
        array = array.filter((element) => element !== number)
    })
    
    return array.reduce((acc, cur) => acc + cur, 0)
}