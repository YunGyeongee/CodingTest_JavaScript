function solution(players, callings) {
    const hash = new Map();
    
    players.forEach((player, index) => {
        hash.set(player, index);
    })
    
    callings.forEach(calling => {
        const currIdx = hash.get(calling);
        const origin = players[currIdx - 1];

        [players[currIdx], players[currIdx -1]] = [players[currIdx -1], players[currIdx]];
        
        hash.set(calling, hash.get(calling) - 1);
        hash.set(origin, hash.get(calling) + 1);
    })
    
    return players;
}