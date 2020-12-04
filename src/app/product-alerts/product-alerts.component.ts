import { Component, OnInit, Input } from '@angular/core';

import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.scss']
})

export class ProductAlertsComponent  {
 
 @Input() product: any;
 @Output() notify = new EventEmitter();

}