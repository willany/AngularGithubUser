import {Component, OnInit} from '@angular/core';
import {GithubService} from './github.service';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',

  styleUrls: ['./app.component.css'],
  providers: [ GithubService ]
})
export class AppComponent implements OnInit {

  user: any;

  constructor(private _githubService: GithubService) {}
  ngOnInit() {
    this._githubService.getUser().subscribe(user => {
      this.user = user;
    });
  }

}
