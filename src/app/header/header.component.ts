import { Component, OnInit } from '@angular/core';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faLinkedIn = faLinkedinIn;
  gitHub = faGithub;


  constructor() { }

  ngOnInit(): void {
  }


}
