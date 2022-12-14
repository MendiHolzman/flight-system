import { Component, OnInit } from '@angular/core';
import { LegsServiceService } from 'src/app/legs/services/legs-service.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor(private legsSer: LegsServiceService) { }

  ngOnInit(): void {
  }

  goToLeg(legNumber: number) {
    this.legsSer.navigateToLeg(legNumber);
  }

}
