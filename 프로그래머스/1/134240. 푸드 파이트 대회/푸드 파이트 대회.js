function solution(food) {
    const result = []
    const temp = food.map(i => parseInt(i / 2))

    const foods = temp.reduce((acc, cur, idx) => {
        const tempFoods = []
        for (let i = 1; i <= cur; i++) {
            tempFoods.push(idx)
        }
        acc.push(...tempFoods)
        
        return acc
    }, [])

    result.push(...foods, 0, ...foods.reverse())
    return result.join("")
}