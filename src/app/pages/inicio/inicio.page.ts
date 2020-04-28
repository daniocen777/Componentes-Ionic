import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
      icon: 'american-football',
      name: 'Action Sheet',
      rediectTo: '/action-sheet'
    },
    {
      icon: 'logo-google-playstore',
      name: 'Alert',
      rediectTo: '/alert'
    },
    {
      icon: 'person',
      name: 'Avatar',
      rediectTo: '/avatar'
    },
    {
      icon: 'radio-button-on',
      name: 'Botones y Router',
      rediectTo: '/botones'
    },
    {
      icon: 'card',
      name: 'Card',
      rediectTo: '/card'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

interface Componente {
  icon: string;
  name: string;
  rediectTo: string;
}
