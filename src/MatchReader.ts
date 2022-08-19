import { MatchData } from "./MatchDataTuple";
import { dateStringToDate } from "./utils";
import { MatchResults } from "./MatchResults";
import { CsvFileReader } from "./CsvFileReader";

interface dataReader{ // interface
    read():void;
    data: string[][];
}

export class MatchReader{
    matches : MatchData[]=[];
    constructor(public reader:dataReader){}

    static readCsvFile(fileName:string):MatchReader{
        return new MatchReader(new CsvFileReader(fileName))
    }
    load():void{
        this.reader.read();

        this.matches = this.reader.data
                                  .map((row:string[]):MatchData=>{
                                        return [
                                            dateStringToDate(row[0]),
                                            row[1],
                                            row[2],
                                            +row[3],
                                            +row[4],
                                            row[5] as MatchResults,
                                            row[6]
                                        ]
                                    })
    }
}