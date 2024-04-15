import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChatComponent } from "./chat/chat.component";
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, ChatComponent]
})
export class AppComponent {
  title = 'angular-chat-front-tutorial';
}
