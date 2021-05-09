import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footerbar',
  templateUrl: './footerbar.component.html',
  styleUrls: ['./footerbar.component.css']
})
export class FooterbarComponent implements OnInit {
  currentYear: number = new Date().getFullYear();
  constructor() { }

  ngOnInit() {
  }

}
