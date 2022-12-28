import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if(arg === '' || arg.length < 3 ) return value;
    const resultadoPosts =[];
    for(const paciente of value){
      if(paciente.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultadoPosts.push(paciente)
      };
    };
    return resultadoPosts;
  }

}
