import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() articulo: any = {};
  @Output() addNewStudent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  addStudent(nameStudent: string) {
    this.addNewStudent.emit(nameStudent)
  }

}
