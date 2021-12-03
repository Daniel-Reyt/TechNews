import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/Services/chat.service';
import localeFr from '@angular/common/locales/fr';
import { Form, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {


  id_user: any;
  messages: any = []
  isWhiteLogo: boolean = false;
  messageForm: FormGroup = new FormGroup({
    messageToSend: new FormControl()
  });

  constructor(private chatService: ChatService, private fb: FormBuilder) {
    registerLocaleData(localeFr, 'fr');
  }

  ngOnInit(): void {
    this.id_user = localStorage.getItem('id_user');
    this.getMessages();
  }

  getMessages() {
    this.chatService.getMessages().subscribe((res: any) => {
      this.messages = res
      for (let i = 0; i < this.messages.length; i++) {
        this.messages[i].date_message = new Date(this.messages[i].date_message).toLocaleDateString('fr');
      }
    })
  }

  setIfWitheOrBlack(boolean: boolean) {
    if (this.isWhiteLogo === boolean && boolean === false) {
      this.isWhiteLogo = true
    } else {
      this.isWhiteLogo = false
    }
  }
  sendMessage() {
    console.log(this.messageForm.controls['messageToSend'].value);
    this.chatService.sendMessageGeneral(this.messageForm.controls['messageToSend'].value, this.id_user).subscribe((res: any) => {
       this.getMessages()
    })
  }
  getBgColorIfMessageIsUser(id_user: any) {
    let style = {}
    if (id_user == this.id_user) {
      let style = {
        'background-color': 'lightgray'
      }
      return style
    } else {
      let style = {
        'background-color': 'white'
      }
      return style
    }
  }
}
