import { Component, OnInit } from '@angular/core';
import peopleVideo from '../../assets/peopleVideo.json';
import app from '../../assets/app.json';
interface people {
  name: string;
}
interface app {
  name: string;
  application: string;
}

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  name = 'Angular';
  peoples: people[] = peopleVideo;
  apps: app[] = app;

  constructor() { }

  ngOnInit(): void {
  }

}
