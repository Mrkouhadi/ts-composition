import fs from 'fs';

export class CsvFileReader{
    data:string[][] = [];
    constructor(public fileName:string){}

    read():void{
        try {
            const data = fs.readFileSync(this.fileName, 'utf8');
            this.data = data.split("\n")
                            .map((row: string):string[] =>{
                                    return row.split(',');
                            });
          } catch (err) {
            throw new Error("Could not read file for some reasons:");
          } 
    }
}



