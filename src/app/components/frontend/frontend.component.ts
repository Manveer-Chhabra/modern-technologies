import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-frontend',
  templateUrl: './frontend.component.html',
  styleUrls: ['./frontend.component.scss']
})
export class FrontendComponent implements OnInit {
  frontendTechnologiesList = [];
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.getMockData().subscribe(response => {
      console.log(response);
      this.frontendTechnologiesList = response.data.filter(d => d.type === 'Front End');
    }, err => {
      console.log(err);
    });
  }

}
