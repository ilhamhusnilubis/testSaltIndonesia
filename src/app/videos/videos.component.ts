import { Component } from '@angular/core';
import itemvideo from '../../assets/itemvideo.json'
import commentVideo from '../../assets/commentVideo.json'

interface videobig {
  name: string;
  totalview: string;
  image: string;
}

interface comments {
  name: string;
  comment: string;
  content: string;
  time: string;
  image: string;
  img: string;
}

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent {
  name = 'Angular';
  video: videobig[] = itemvideo;
  comment: comments[] = commentVideo;
}
