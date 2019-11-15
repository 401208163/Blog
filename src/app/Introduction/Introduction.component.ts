import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Introduction',
  templateUrl: './Introduction.component.html',
  styleUrls: ['./Introduction.component.css']
})
export class IntroductionComponent implements OnInit {
  public visibility = 'intorduction';

  constructor() { }

  ngOnInit() {
  }

}
