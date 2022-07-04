import { Injectable } from '@angular/core';

import { Moeda } from '../models';

@Injectable({
  providedIn: 'root',
})
export class MoedaService {
  private moedas: Moeda[];

  constructor() {}

  private moedaObj = [
    { sigla: 'AUD', descricao: 'Dólar australiano' },
    { sigla: 'BGN', descricao: 'Lev búlgaro' },
    { sigla: 'BRL', descricao: 'Real brasileiro' },
    { sigla: 'CAD', descricao: 'Franco suíço' },
    { sigla: 'CHF', descricao: 'Yuan Chinês' },
    { sigla: 'CNY', descricao: 'Coroa República Tcheca' },
    { sigla: 'CZAK', descricao: 'Coroa dinamarquesa' },
    { sigla: 'DKK', descricao: 'Euro' },
    { sigla: 'EUR', descricao: 'Libra Esterlina' },
    { sigla: 'GBP', descricao: 'Dólar de Hong Kong' },
    { sigla: 'HKD', descricao: 'Coroa Croácia' },
    { sigla: 'HRK', descricao: 'Florim húngaro' },
    { sigla: 'HUF', descricao: 'Rupia indonésia' },
    { sigla: 'AUD', descricao: 'Iene japonês' },
    { sigla: 'AUD', descricao: 'Won sul-coreano' },
    { sigla: 'AUD', descricao: 'Peso mexicano' },
    { sigla: 'AUD', descricao: 'Malásia Ringgit' },
    { sigla: 'AUD', descricao: 'Coroa Noruega' },
    { sigla: 'AUD', descricao: 'Dólar da Nova Zelãndia' },
    { sigla: 'AUD', descricao: 'Peso filipino' },
    { sigla: 'AUD', descricao: 'Ztoty Polónio' },
    { sigla: 'AUD', descricao: 'Leu romeno' },
    { sigla: 'AUD', descricao: 'Belarus Ruble' },
    { sigla: 'AUD', descricao: 'Coroa Suécia' },
    { sigla: 'AUD', descricao: 'Dólar de Singapura' },
    { sigla: 'AUD', descricao: 'Baht Tailândia' },
    { sigla: 'AUD', descricao: 'Lira turca' },
    { sigla: 'AUD', descricao: 'Dólar dos Estados Unidos' },
    { sigla: 'AUD', descricao: 'Rand África do Sul' },
  ];

  listaTodos(): Moeda[] {
    if (this.moedas) {
      return this.moedas;
    }

    this.moedas = [];

    for (let moedaObj of this.moedaObj) {
      let moeda: Moeda = new Moeda();
      Object.assign(moeda, moedaObj);
      this.moedas.push(moeda);
    }

    return this.moedas;
  }
}
