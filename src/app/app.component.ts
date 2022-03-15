import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aula28-pipe';

  username: string = 'GABRIELMARQUES'
  username2: string = 'gabriel_almeidinha'

  nums: number[] = [10, 23,52, 55, 70, 89, 7, 8, 9, 10]

  obj = {
    username: 'GabrielM',
    idade: 40,
    isAdmin: true
  }

  hoje: Date = new Date() /* criação de data, através do método "Date" */

  /* Local Storage */

  dadoLocalStorage: string[] | null = []

  ngOnInit(): void {
    this.recuperarDadosDoLocalStorage()
  }

  salvarNoLocalStorage(valor: string): void {
    this.dadoLocalStorage?.push(valor)
    let arrStr = JSON.stringify(this.dadoLocalStorage)
    localStorage.setItem('dado', arrStr)
    this.recuperarDadosDoLocalStorage()

   /*  localStorage.setItem('dado', valor)
    this.dadoLocalStorage = valor */

  }

  recuperarDadosDoLocalStorage(): void{
    let storage = localStorage.getItem('dado')
    let arr = JSON.parse(storage || '[]')
    this.dadoLocalStorage = arr

    /* this.dadoLocalStorage = localStorage.getItem('dado') */
  }

  deletarDoLocalStorage(index: number): void{
    this.dadoLocalStorage?.splice(index, 1)
    let arrStr = JSON.stringify(this.dadoLocalStorage)
    localStorage.setItem('dado', arrStr)
    this.recuperarDadosDoLocalStorage()

  }

}
