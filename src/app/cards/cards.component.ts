import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../module/services/product.service';
import { Iproducts } from '../module/services/iproducts';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule],
  providers:[ProductService],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent implements OnInit{
  constructor(private productsService:ProductService){}
  products: Iproducts[] = [];

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }
  
  buttonColor = '#ff6452';
  changeColor() {
    this.buttonColor = '#ff4500';
  }
}