import { Component} from '@angular/core';
import { Http} from '@angular/http';

@Component({
  selector: 'home',
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {
  constructor(private http: Http) {

  }
}
