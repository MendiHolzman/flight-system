import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit {
  isSimulatorStart: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  startSimulator() {
    this.isSimulatorStart = true;
  }

  stopSimulator() {
    this.isSimulatorStart = false;
  }


}
