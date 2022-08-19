import { MatchData } from "../MatchDataTuple";
import { MatchResults } from "../MatchResults";
import { Analyzer } from "../Summary";

export class WinsAnalysis implements Analyzer{

    constructor(public team:string){}

    run(matches:MatchData[]):string{
        
        let teamWins = 0;

        for(let match of matches){
            if(match[1]===this.team && match[5] === MatchResults.HomeWin)  teamWins++;
            else if(match[2]===this.team && match[5] === MatchResults.AwayWin) teamWins++
        }

        return `Man united won ${teamWins} games`;
    }
}   