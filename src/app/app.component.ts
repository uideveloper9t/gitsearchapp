import { Component } from '@angular/core';
import {GithubService} from './services/github.service';
@Component({
  selector: 'my-app',
  template: `
         <nav class="navbar navbar-default">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Github Search</a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
         
            
        </div><!--/.navbar-collapse -->
      </div>
    </nav>
    <div class = "container">
  <profile></profile>
  </div>`,
  providers:[GithubService]
})
export class AppComponent  { }
