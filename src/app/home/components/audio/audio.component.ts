import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css']
})
export class AudioComponent implements OnInit {
  isPlay: boolean = false;
  audio = new Audio();
 
  constructor() { }

  ngOnInit(): void {
    this.initAudio();
  }

  playStop() {
    if (this.isPlay === false) {
      this.isPlay = true;
      this.audio.play();
    }
    else if (this.isPlay === true) {
      this.isPlay = false;
      this.audio.pause();
    }
  }

  initAudio() {
    this.audio.src = "../../../../../assets/audio/12Mornings.mp3";
    this.audio.load();
  }


}
