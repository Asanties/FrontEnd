import { Injectable } from '@angular/core';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: any[] = [];
  //
  // add(message: string) {
  //   this.messages.push(message);
  // }
  //
  // clear() {
  //   this.messages = [];
  // }


  add(message) {
    this.messages.push( message);
  }

  clear() {
    this.messages = [];
  }

}
