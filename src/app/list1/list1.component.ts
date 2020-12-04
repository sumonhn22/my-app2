import { Component, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-list1',
  templateUrl: './list1.component.html',
  styleUrls: ['./list1.component.scss']
})


export class List1Component {
  products = products;

  share(): void {
    window.alert('The product has been shared!');
  }

    onNotify(): void {
    window.alert('You will be notified when the product goes on sale');
  }

}

