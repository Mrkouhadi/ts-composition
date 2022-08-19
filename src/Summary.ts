import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { MatchData } from "./MatchDataTuple";
import { HtmlReport } from "./reportTargets/HtmlReport";

export interface Analyzer{
    run(matches:MatchData[]):string
}

export interface outputTarget{
    print(report:string):void;
}

export class Summary{
    constructor(public analyzer:Analyzer, public outputTarget:outputTarget){}

    static printAnalysisWithHtmlReport(teamName:string):Summary{
        return new Summary(new WinsAnalysis(teamName), new HtmlReport())
    }
    buildAndPrintReport(matches: MatchData[]):void{
        const output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    }
}
