import {Component, OnInit} from 'angular2/core';
import {GetProducts} from './get-products.service';
import {HTTP_PROVIDERS} from 'angular2/http';

@Component({
	selector: 'header',
	template: `
		<header class="hero">
		hello
      	<div class="hero-div">
      		<div class="hero-img"><img src=""></div>
      		<div class="hero-body">
      			<div class="hero-title"></div>
      			<ul>
      				<li></li>
      			</ul>
      		</div>
      		<div class="hero-right">
      			<div class="hero-price"></div>
      			<button class="hero-add-to-cart">ADD TO CART</button>
      		</div>
      	</div>
      </header>

	`,
	providers: [GetProducts, HTTP_PROVIDERS]
})

export class HeaderComponent implements OnInit{

	constructor(private getProducts: GetProducts){

	}

	ngOnInit(){
		this.getProducts.getList()
							.subscribe((x) => console.log(x));
	}
}