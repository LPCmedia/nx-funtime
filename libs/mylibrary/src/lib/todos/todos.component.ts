import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'activia-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    alert('todo');
  }

}
