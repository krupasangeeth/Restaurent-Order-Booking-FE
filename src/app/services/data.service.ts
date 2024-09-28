import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data !: {[key:string]: [] | {}};

  constructor() { }

  getData(uri : string): [] | {} {
    return this.data[uri];
  }

  setdata(res :any, uri : string){
    this.data = {...this.data, [uri]: res}
  }
}
