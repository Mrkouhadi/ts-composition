import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";


const gameReader = MatchReader.readCsvFile('football.csv')
gameReader.load();


//////// html report
const gameSummary = Summary.printAnalysisWithHtmlReport('Man United');
gameSummary.buildAndPrintReport(gameReader.matches);
