import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss'],
})
export class TestingComponent implements OnInit {
  testingTechnologiesList = [];
  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.sharedService.getMockData().subscribe(
      (response) => {
        console.log(response);
        this.testingTechnologiesList = response.data.filter(
          (d) => d.type === 'Testing'
        );
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
