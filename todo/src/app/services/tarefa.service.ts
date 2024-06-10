import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  tarefaCollection: any[] = [];
  key = 'tarefaCollection';

  constructor() { }

  salvar(tarefa: any, callback: (() => void) | null = null){
    tarefa.feito = false;

    //Obter do localStorage
    let value = localStorage.getItem(this.key);

    if (value == null || value == undefined){
      this.tarefaCollection.push(tarefa);
      localStorage.setItem(this.key, JSON.stringify(this.tarefaCollection));
    } else{
      let collection: any[] = JSON.parse(value);
      collection.push(tarefa);
      localStorage.setItem(this.key, JSON.stringify(collection));
    }

    if (callback != null){
      callback();
    }
  }

}
