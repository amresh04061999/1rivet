import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(items: any, searchText: string): any {
    if (!items) return [];
    if (!searchText) return items;

    searchText = searchText.toLowerCase();

    // filters the items based on the 'name' and 'company' properties
    // Thus searching for records who's name or company match the 'searchText' string
    return items.filter(
      (item: any) =>
        item.firstname.toLowerCase().includes(searchText) ||
        item.lastname.toLowerCase().includes(searchText) ||
        item.email.toLowerCase().includes(searchText)
    );
  }
  // transform(value: any, args?: any): any {
  //   if (!args) {
  //     return value;
  //   }
  //   return value.filter((val: any) => {
  //     let rVal =
  //       val.id.toLocaleLowerCase().includes(args) ||
  //       val.email.toLocaleLowerCase().includes(args);
  //     return rVal;
  //   });
  // }
}
