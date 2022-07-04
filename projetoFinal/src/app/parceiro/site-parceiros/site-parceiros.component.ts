import { Component, OnInit, ViewChild } from '@angular/core';
import { ParceiroService, Site } from '../shared';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-site-parceiros',
  templateUrl: './site-parceiros.component.html',
  styleUrls: ['./site-parceiros.component.css'],
})
export class SiteParceirosComponent implements OnInit {
  @ViewChild('frm', { static: true }) frm!: NgForm;
  dado!: Site;

  constructor(private parceiroService: ParceiroService) {}

  ngOnInit(): void {

    this.dado = new Site();

  }

  validarLogin(): void {
    const autenticar = prompt('Quanto é 4x2');
    if (autenticar === '8') {
      return alert('Login Autenticado!'), this.parceiroService.salvar(this.dado), this.parceiroService.rotaPost(this.frm.value).subscribe() ,this.frm.reset();
    } else {
      return alert('Tente Novamente!');
    }
  }






  /*criar(frm: FormGroup) {
    this.parceiroService.criar(this.dado).subscribe((resposta) => {
      this.dados!.push(resposta);

      frm.reset();
    });
  }*/
}
