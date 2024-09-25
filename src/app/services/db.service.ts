import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn : "root"
})
export class DbService {

    private data !: {[key:string]: []};
    private url : string = "http://localhost:3000/";
    constructor(private httpClient : HttpClient){

    }

    getApi(uri : string){
        this.httpClient.get(this.url+uri).subscribe((res:any)=>{
            this.data = {...this.data, [uri]: res}
        });
    }

    postApi(uri : string,body : any){
        this.httpClient.post(this.url+uri, body).subscribe();
    }

    getData(uri : string):[]{
        return this.data[uri];
    }
    
    
}