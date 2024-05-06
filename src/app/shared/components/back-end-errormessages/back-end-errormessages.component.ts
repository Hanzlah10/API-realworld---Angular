import { Component, Input, OnInit } from '@angular/core';
import { BackendErrorsInterface } from '../../types/backendErrors.interface';
import { NgFor } from '@angular/common';

@Component({
  selector: 'mc-backend-error-messages',
  standalone: true,
  imports: [NgFor],
  templateUrl: './back-end-errormessages.component.html',
  styleUrl: './back-end-errormessages.component.css',
})
export class BackEndErrormessagesComponent implements OnInit {
  @Input() backendError: BackendErrorsInterface = {};
  errorMessages: string[] = [];
  ngOnInit(): void {
    this.errorMessages = Object.keys(this.backendError).map((name: string) => {
      const messages = this.backendError[name].join(' ');
      console.log(messages);
      
      return `${name} ${messages}`;
    });
  }
}
