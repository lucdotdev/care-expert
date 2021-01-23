import {Component, OnInit, ViewChild} from '@angular/core';
import {IonContent, NavController} from '@ionic/angular';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})

export class ChatPage implements OnInit {

  private contactInfo: any = {
    name: 'JOHN DOE',
    status: 'ONLINE'
  };
  private showOptions = false;
  private messages: Array < any > = [{
      text: 'Hey what\'s up?',
      type: 'received',
      created: '14:02'
    },
    {
      text: 'Nothing',
      type: 'send',
      created: '14:05'
    },
    {
      text: 'Want to go to the movies?',
      type: 'send',
      created: '14:05'
    },
    {
      text: 'I\'m sorry, I can\'t',
      type: 'received',
      created: '14:15'
    },
    {
      text: 'but can we go tomorrow?',
      type: 'received',
      created: '14:16'
    },
    {
      text: 'Nothing',
      type: 'send',
      created: '14:05'
    },
    {
      text: 'Nothing',
      type: 'send',
      created: '14:05'
    },
    {
      text: 'Nothing',
      type: 'send',
      created: '14:05'
    },
    {
      text: 'Nothing',
      type: 'send',
      created: '14:05'
    },
    {
      text: 'I\'m sorry, I can\'t',
      type: 'received',
      created: '14:15'
    },
    {
      text: 'but can we go tomorrow?',
      type: 'received',
      created: '14:16'
    },
  ];

  @ViewChild(IonContent, {static: false}) content: IonContent;
  newMsg: any;
  constructor() {}
  sendMessage() {
    this.messages.push({
      text: this.newMsg,
      type: 'received',
      created: '14:16'
    });
  }

  ngOnInit() {}

  showOptionsToggle(value ?: boolean) {
    if (value !== undefined) {
      this.showOptions = value;
      return;
    }
    this.showOptions = !this.showOptions;
    setTimeout(() => {
      this.content.scrollToBottom(200);
    });
  }

}
