function solution(arr)
{
    const answer = [];
    arr.forEach((item, idx) => {
        if (idx === 0) {
            answer.push(item)
        }
        
        if (answer[answer.length - 1] != arr[idx]) {
            answer.push(item)
        }
    })
    
    return answer;
}