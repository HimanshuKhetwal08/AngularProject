import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'subTotal',
})
export class SubTotalPipe implements PipeTransform {
  transform(products: any[]): number {
    let subtotal = 0;
    for (const product of products) {
      subtotal += product.price * product.quantity;
    }
    return subtotal;
  }
}
