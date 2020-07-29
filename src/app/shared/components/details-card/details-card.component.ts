import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-details-card',
  templateUrl: './details-card.component.html',
  styleUrls: ['./details-card.component.scss'],
})
export class DetailsCardComponent implements OnInit {
  @Input() data = {
    name: '',
    category: '',
    latestVersion: '',
    documentation: '',
    description: '',
  };
  showDescription = false;

  constructor() {}

  ngOnInit(): void {}

  switchDetails(showDetails) {
    this.showDescription = showDetails;
  }
}
