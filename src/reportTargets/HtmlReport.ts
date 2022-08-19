import { outputTarget } from "../Summary";
import fs from 'fs';


export class HtmlReport implements outputTarget{

    print(report:string):void{
        const html = `
                    <div>
                        <h1>Analysis Output: </h1>
                        <div>This is the report analysis of your chose Team: ${report}</div>
                    </div>
                    `
        try {
          fs.writeFileSync('HtmlReport.html', html);
        } catch (err) {
          alert(err);
        }               
    }
}