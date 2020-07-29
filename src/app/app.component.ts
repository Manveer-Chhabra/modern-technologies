import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Modern Technologies';
  activatedRoute;
  tabs = [
    { name: 'Home', path: 'home' },
    { name: 'Front End', path: 'frontEnd' },
    { name: 'Back End', path: 'backEnd' },
    { name: 'Testing', path: 'testing' },
  ];
  selected = new FormControl();
  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.activatedRoute = this.route.snapshot['_routerState'].url.split(
          '/'
        )[1];
        if (this.tabs.find((t) => t.path === this.activatedRoute)) {
          this.selected.setValue(
            this.tabs.findIndex((t) => t.path === this.activatedRoute),
            { emitEvent: false }
          );
        } else {
          this.selected.setValue(0);
        }
      }
    });
  }

  ngOnInit() {
    this.selected.valueChanges.subscribe((data) => {
      console.log(this.tabs[data].path);
      this.router.navigate([this.tabs[data].path]);
    });
  }
}
