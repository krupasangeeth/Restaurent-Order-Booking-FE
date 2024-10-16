import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { WebSocketSubject, WebSocketSubjectConfig } from 'rxjs/webSocket';

// class xyz implements WebSocketSubjectConfig<any>{

// }

@Injectable({
  providedIn: 'root',
})
export class OrderStatusWebsocketService {
  private socket$!: WebSocketSubject<any>;

  constructor() {
    // this.socket$ = new WebSocketSubject('ws://localhost:8080/ws/orderstatus');
    // console.log(new WebSocketSubject('ws://localhost:8080/ws/orderstatus'));
    console.log('web socket connection established after');

    // this.socket$.subscribe(() => {
    //   console.log('connected');
    // });
  }

  establishConnection(): WebSocketSubject<any> {
    const mobile = sessionStorage.getItem('mobile');
    return new WebSocketSubject(
      `ws://localhost:8080/ws/orderstatus?mobile=${mobile}`
    );
    // return this.socket$;
  }

  // getMessages(): WebSocketSubject<any> {
  //   return this.socket$;
  // }

  // getSocket(): WebSocketSubject<any> {
  //   return this.socket$;
  // }

  sendMessage(message: string) {
    console.log(message);
    this.socket$.next(message);
  }
}
