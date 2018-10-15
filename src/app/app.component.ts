import { Component, OnInit } from '@angular/core';
import { GithubService } from './github.service';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ GithubService ]
})
export class AppComponent implements OnInit {
  user: any;

  constructor(private githubService: GithubService) {}

  ngOnInit() {
    this.githubService.getUser().subscribe(user => {
      this.user = user;
    });
  }
}
