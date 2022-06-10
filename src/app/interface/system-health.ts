export interface SystemHealth{
    status: String;
    details:{
        db:{
            status: String,
            details:
            {
                database:String,
                hello:number
            }
        },
        diskSpace:{
            status: String,
            details:
            {
                total:number,
                free:number | string,
                threshold:number
            }
        }
    };

}