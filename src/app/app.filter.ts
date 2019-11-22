import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: 'myfilter',
    pure: false,
})
export class MyFilterPipe implements PipeTransform {
  transform(items: any[], filter: number): any[] {
    if (items === undefined || filter === undefined ) {
      return items;
    }
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    return items.filter(item => item.parent === filter);
  }
}
