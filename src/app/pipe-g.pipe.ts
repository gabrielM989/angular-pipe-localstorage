import { LiteralPrimitive } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ /* decorat */
  name: 'pipeG'
})
export class PipeGPipe implements PipeTransform {

  transform(value: number[], limit: number | undefined = undefined): number { /* ...args -- quer dizer que pode receber padrões infinitos */
    /* return value.reduce((x, y) => x + y); */ /* reduce -- pega os valores do Array e os transforma em uma coisa só */

    let sum: number = 0

    if (limit != undefined && limit > 0 && limit <=value.length){ /* estamos delimitando o limite de número que quer somar */
      for (let i = 0; i < limit; i++){
        sum += value[i]
      }
    }else{
      sum = value.reduce((x, y) => x + y)
    }

    return sum

  }

}
