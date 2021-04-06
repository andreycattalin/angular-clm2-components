import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cardsArticle = [
    {
      title: "Compra un iPhone",
      description: "Lorem iphone de mi vida",
      type: 1
    },
    {
      title: "Compra un Android",
      description: "Lorem andreid de mi life",
      type: 2
    }
  ]

  alumnos = ["Fernando", "Sara"]

  constructor() { }

  ngOnInit() {
  }

  addAlumno(newAlumno: string) {
    this.alumnos.push(newAlumno);
  }
}
