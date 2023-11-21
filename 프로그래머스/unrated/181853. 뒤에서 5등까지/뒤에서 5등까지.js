function solution(num_list) {
    var answer = [];
    
    num_list.sort(function (num1, num2) {
                  return num1 - num2;
                });

    answer = num_list.slice(0,5)
    return answer;
}