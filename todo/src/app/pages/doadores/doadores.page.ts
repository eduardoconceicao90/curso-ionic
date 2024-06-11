import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-doadores',
  templateUrl: './doadores.page.html',
  styleUrls: ['./doadores.page.scss'],
})
export class DoadoresPage implements OnInit {

  nome: any;

  constructor(private route: ActivatedRoute) { 
    this.nome = this.route.snapshot.paramMap.get('nome');
  }

  ngOnInit() {
  }

}
