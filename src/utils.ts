export const dateStringToDate = (dateString: string):Date =>{
    const dateParts = dateString
                      .split("/") // "2020/09/23" to ['2020', '09', '23']
                      .map((value:string):number=>{
                            return parseInt(value)
                      })                      
    return new Date(dateParts[2], dateParts[1]-1, dateParts[0]);
}