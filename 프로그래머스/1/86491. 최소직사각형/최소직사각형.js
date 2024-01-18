function solution(sizes) {
    let answer = 0
    sizes.forEach((size, i) => {
        sizes[i] = size.sort((a, b) => a - b)
    });

    const left = sizes.map((size) => size[0])
    const right = sizes.map((size) => size[1])
    
    return Math.max(...left) * Math.max(...right)
}