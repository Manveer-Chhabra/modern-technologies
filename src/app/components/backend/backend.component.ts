import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-backend',
  templateUrl: './backend.component.html',
  styleUrls: ['./backend.component.scss'],
})
export class BackendComponent implements OnInit {
  backendTechnologiesList = [];
  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.sharedService.getMockData().subscribe(
      (response) => {
        console.log(response);
        this.backendTechnologiesList = response.data.filter(
          (d) => d.type === 'Back End'
        );
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
