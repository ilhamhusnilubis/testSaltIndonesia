import { Component, OnInit } from '@angular/core';
import documentVideo from '../../assets/documentVideo.json'

interface document {
  name: string;
  image: string;
}

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {

  name = 'Angular';
  documents: document[] = documentVideo;


  constructor() { }

  ngOnInit(): void {
  }

}
