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

  listar(){
    //Obter do localStorage
    let value = localStorage.getItem(this.key);
    
    if (value == null || value == undefined){
      return [];
    }

    let collection: any[] = JSON.parse(value);
    return collection;
  }

  delete(tarefa: any, callback: (() => void) | null = null){
  
    let value = localStorage.getItem(this.key);
    
    if (value == null || value == undefined){
      return;
    }

    let collection: any[] = JSON.parse(value);   
    let resultCollection = collection.filter(item => {return item.tarefa != tarefa.tarefa});
    localStorage.setItem(this.key, JSON.stringify(resultCollection));

    if (callback != null){
      callback();
    }
  }

}
