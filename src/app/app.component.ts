import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Modern Technologies';
  constructor(private router: Router) {}
  tabs = [
    { name: 'Home', path: 'home' },
    { name: 'Front End', path: 'frontEnd' },
    { name: 'Back End', path: 'backEnd' },
    { name: 'Testing', path: 'testing' },
  ];
  selected = new FormControl(0);

  ngOnInit() {
    this.selected.valueChanges.subscribe((data) => {
      console.log(this.tabs[data].path);
      this.router.navigate([this.tabs[data].path]);
    });
  }
}
