import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http'
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})
export class DashboardService{
    private SERVER_URL = environment.serverUrl;

    constructor(private http: HttpClient){}

    public getHttpTraces(): Observable<any>{
       return this.http.get(`${this.SERVER_URL}/httptrace`);
    }
}