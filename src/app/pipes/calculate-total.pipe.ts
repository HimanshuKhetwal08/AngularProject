import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculateTotal',
})
export class CalculateTotalPipe implements PipeTransform {
  transform(product: any): number {
    return product.price * product.quantity;
  }
}
