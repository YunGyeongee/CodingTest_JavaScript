function solution(arr, idx) {
    const answer = arr.reduce((acc, cur, i) => {
        if (i >= idx) {
            if (cur === 1) {
                acc = [...acc, i]
            }
        }

        return acc
    }, [])

    return answer.length ? Math.min(...answer) : -1
}