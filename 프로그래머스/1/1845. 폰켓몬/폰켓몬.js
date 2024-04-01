function solution(nums) {
    let answer = 0
    let length = Math.floor(nums.length / 2)
    let setHash = [...new Set(nums)].length

    return setHash < length ? setHash : length
}