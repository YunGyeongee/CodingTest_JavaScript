function solution(name, yearning, photo) {
    let people = {}
    name.forEach((item, index) => {
        people[item] = yearning[index]
    }) 
        
    return photo.map((group) => {
        return group.reduce((acc, cur) => acc + (people[cur] || 0), 0)
    })
}