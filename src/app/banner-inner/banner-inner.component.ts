import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-banner-inner',
  templateUrl: './banner-inner.component.html',
  styleUrls: ['./banner-inner.component.css']
})
export class BannerInnerComponent implements OnInit {

  @Input() breadTitle;
  constructor() { }

  ngOnInit() {
  }

}
