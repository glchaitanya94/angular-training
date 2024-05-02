import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
  standalone: true
})
export class DurationPipe implements PipeTransform {

  transform(duration?: string):string {
      var hours = 0;
      var minutes = 0;
      var d = Number(duration)
      if(d>=60){
        hours = Math.trunc(d/60);
        minutes = d%60;

        return ''+hours + 'h ' + minutes + "mins"
      }
      else{
        minutes = d;
        return '' + minutes + "mins"
      }
  }

}
