import { outputTarget } from "../Summary";

export class ConsoleReport implements outputTarget {

    
    print(report: string): void {
        console.log(report)
    }


}