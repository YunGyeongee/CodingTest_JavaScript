function solution(num_list) {
    let add = 0
    let multi = 0
    
    num_list.forEach((item, index) => {
        add += item
        if (index === 0) {
            multi = item
        } else {
            multi = multi * item
        }
    })
    console.log(Math.pow(add,2) + ' ' + multi)
    return Math.pow(add, 2) > multi ? 1 : 0;
}