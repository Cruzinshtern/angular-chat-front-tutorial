import { Component } from '@angular/core';
import { io } from 'socket.io-client';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatIconModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {
  private socket;
  messages: any[] = [];
  value: string = 'mock value';

  constructor() {
      this.socket = io('http://localhost:3000');
      this.socket.on('message', (message: string) => {
          this.messages.push(message);
          console.log('this.messages', this.messages);
      });
  }

  sendMessage() {
      this.socket.emit('newMessage', this.value);
  }
}
