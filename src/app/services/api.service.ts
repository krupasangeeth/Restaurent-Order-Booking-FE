import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn : "root"
})
export class ApiService {

    private url : string = "http://localhost:3000/";
    constructor(private httpClient : HttpClient){

    }

    getApi(uri : string) : Observable<any>{
        return this.httpClient.get(this.url+uri);
    }

    postApi(uri : string,body : any): Observable<any>{
        return this.httpClient.post(this.url+uri, body);
    }
    
    
}