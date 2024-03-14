function solution(progresses, speeds) {
    let days = []
    let result = []
    
    progresses.forEach((progress, i) => {
        let count = 0
        let cur = progress
        
        while (cur <= 99) {
            cur += speeds[i]
            count++
        }
        
        days.push(count)
    })
    
    let compare = days[0]
    let count = 0

    for (let i = 0; i < days.length; i++) {
        if (compare >= days[i]) {
            count++
        } else {
            result.push(count)
            count = 1
            compare = days[i]
        }
    }

    result.push(count)
    return result
}