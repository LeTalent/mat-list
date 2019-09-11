import { Component } from '@angular/core';

export interface File {
  name: string;
  updated: Date;
}

export interface Message {
  from: string;
  subject: string;
  content: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  links: string[] = [ 'htpp://www.angular.com', 'http://www.deutche-bahn.de' ];
  files: File[] = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    }
  ];
  messages: Message[] = [
    {
      from: 'jack',
      subject: 'angular',
      content: 'first content'
    },
    {
      from: 'gatuso',
      subject: 'git',
      content: 'second content'
    },
    {
      from: 'maldini',
      subject: 'web',
      content: 'third content is a subject that i just guest at the moment to make some fun'
    }
  ]

  public showInfo(e: any) {}
}
