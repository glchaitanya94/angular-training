import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'budget',
  standalone: true
})
export class BudgetPipe implements PipeTransform {

  transform(bud?: string):string {
    if(bud){
      bud = '$' + bud + ' millions'
      return bud
    }
    return ''
  }
}
