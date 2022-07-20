class Forca {
  constructor(palavra1) {
    this._palavra1 = Array.from(palavra1);
    this.palavra = this._palavra1.map(letter => {
      return '-';
    });
    this.letrasChutadas = []
    this.vidas = 6;
  }

  chutar(letra) {
    if (letra.length === 1) {
      for(let i = 0; i <= this._palavra1.length-1; i++) {
        if (this._palavra1[i] === letra) {
          this.palavra[i] = letra;
        }
      };
   } else {
    console.log('Insira apenas uma letra!')
   }
   if (!this.palavra.includes(letra) && !this.letrasChutadas.includes(letra)) {
      this.vidas --;
   }
   this.letrasChutadas.push(letra);
  }

  buscarEstado() {
    if (this.vidas > 0 && this.palavra.includes('-')) {
      return 'aguardando chute'
    } else if (this.vidas === 0 && this.palavra.includes('-')) {
      return 'perdeu'
    } else if (this.vidas === 0 && !this.palavra.includes('-')) {
      return 'ganhou'
    } else if (this.vidas > 0 && !this.palavra.includes('-')) {
      return 'ganhou'
    } 

  }

  buscarDadosDoJogo() {
    return {
      letrasChutadas: this.letrasChutadas,
      vidas: this.vidas,
      palavra: this.palavra
    };
  }
}



module.exports = Forca;
