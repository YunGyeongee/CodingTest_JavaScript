function solution(s) {
    let answer = []
    let count = 0
    let zero = 0

    while (s !== '1') {
        let str = ''

        for (let i = 0; i < s.length; i++) {
            s[i] === '0' ? zero += 1 : str += s[i]
        }
        count += 1

        str = (str.length).toString(2)
        s = str
    }

    return [count, zero]
}