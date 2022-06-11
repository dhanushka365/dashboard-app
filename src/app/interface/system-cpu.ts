export interface SystemCpu{
    name:String;
    description: String;
    baseUnit:any;
    measurements:[{statistic:string, value:number}];
    availableTags: any[];
}