function solution(answers) {
    const student = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ]
    
    const result = []
    const student1 = answers.filter((answer, idx) => answer === student[0][idx % student[0].length]).length
    const student2 = answers.filter((answer, idx) => answer === student[1][idx % student[1].length]).length
    const student3 = answers.filter((answer, idx) => answer === student[2][idx % student[2].length]).length
    const max = Math.max(student1, student2, student3)
    
    if (student1 === max) { result.push(1) }
    if (student2 === max) { result.push(2) }
    if (student3 === max) { result.push(3) }
    
    return result
}