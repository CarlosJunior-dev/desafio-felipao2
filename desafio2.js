let victorys = 122
let defeats = 22
level(victorys, defeats)
let results = elo

function level(numA, numB){
    let results = numA - numB
        if(results <= 10 )
        elo = "Ferro"
        else if(results >= 11 && results <= 20)
        elo = "Bronze"
        else if(results >= 21 && results <= 50)
        elo = "Prata"
        else if(results >= 51 && results <= 80)
        elo = "Ouro"
        else if(results >= 81 && results <= 90)
        elo = "Diamante"
        else if(results >= 91 && results <= 100)
        elo = "Lendário"
        else if(results >= 101)
        elo = "Imortal"
        return results
}
console.log("O Herói tem saldo de " + results + " vitórias" + " e está no nivel de " + results)