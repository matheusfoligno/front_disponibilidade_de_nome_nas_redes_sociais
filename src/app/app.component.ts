import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'front-nomedeusuariosdisponiveis';

  testes = [
    {id: 1, name:'Instagram'},
    {id: 2, name:'Facebook'},
    {id: 5, name:'Twiiter'}
  ];
}
