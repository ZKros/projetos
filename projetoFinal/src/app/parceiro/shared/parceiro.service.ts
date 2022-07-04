import { Injectable } from '@angular/core';
import { Site } from './site.model';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ParceiroService {
  dadosUrl = 'https://web.qualityautomacao.com.br/QualityPostoWEB/webresources/service/203/REPRESENTANTE/LOGIN';

  constructor(private http: HttpClient) {}

  listarTodos(): Site[] {
    const dados = localStorage['Usuários'];
    return dados ? JSON.parse(dados) : [];
  }

  salvar(dado: Site): void {
    const dados = this.listarTodos();
    dados.push(dado);
    localStorage['Usuários'] = JSON.stringify(dados);

  
  }

  rotaPost(dado: Site){
    return this.http.post(this.dadosUrl, dado).pipe();
  }
}
