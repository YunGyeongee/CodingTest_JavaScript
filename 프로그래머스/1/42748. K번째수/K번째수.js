function solution(array, commands) {
    const result = []
    commands.forEach((command) => {
        let newArray = array.slice(command[0] - 1, command[1]).sort((a, b) => a - b)
        result.push(newArray[command[2] - 1])
    })
    
    return result
}