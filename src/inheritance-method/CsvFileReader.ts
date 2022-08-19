import fs from 'fs';

export abstract class CsvFileReader<TypeOfData>{
    data:TypeOfData[] = [];
    
    constructor(public fileName:string){};

    abstract mapRow(row:string[]): TypeOfData;

    read():void{
        try {
            const data = fs.readFileSync(this.fileName, 'utf8');
            this.data = data.split("\n")
                            .map((row: string):string[] =>{
                                    return row.split(',');
                            })
                            .map( this.mapRow);
          } catch (err) {
            throw new Error("Could not read file for some reasons:");
          } 
    }
}