import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'activia-fuku',
  templateUrl: './fuku.component.html',
  styleUrls: ['./fuku.component.scss']
})
export class FukuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    alert('fuku');
  }

}
