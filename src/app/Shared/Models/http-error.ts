export class HttpError {
    public type : string = "error";
    public message : string;
    public status : number;
    public data : any;

    constructor(message : string , status : number){
        this.message = message;
        this.status = status;
    }
}
