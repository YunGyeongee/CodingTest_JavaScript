function solution(elements) {
    let result = []
    const extend = [...elements, ...elements]

    elements.forEach((element, idx) => {
        if (idx < elements.length) {
            for (let i = 0; i <elements.length; i++) {
                const slice = extend.slice(i, i + 1 + idx)
                result.push(slice.reduce((acc, val) => acc + val, 0))
            }
        }
    })

    const set = new Set(result)
    return [...set].length
}