import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  books: {};
  bookList:any;
 

  constructor() { }

  ngOnInit() {

    console.log('asdasasdsdasdsdsdasdsdasdsd');
     this.books =[{ 
      "url": "../../assets/book-images/book1.jpeg", "bookName": "Life is What You Make it", "author": "English, Paperback, Shenoy Preeti", "price": "₹98 ₹150 34% off"
    }, {
      "url": "../../assets/book-images/book2.jpeg", "bookName": "Life is What You Make it", "author": "English, Paperback, Shenoy Preeti", "price": "₹98 ₹150 34% off"
    }, {
      "url": "../../assets/book-images/book1.jpeg", "bookName": "Life is What You Make it", "author": "English, Paperback, Shenoy Preeti", "price": "₹98 ₹150 34% off"
    }, {
      "url": "../../assets/book-images/book2.jpeg", "bookName": "Life is What You Make it", "author": "English, Paperback, Shenoy Preeti", "price": "₹98 ₹150 34% off"
    }, {
      "url": "../../assets/book-images/book1.jpeg", "bookName": "Life is What You Make it", "author": "English, Paperback, Shenoy Preeti", "price": "₹98 ₹150 34% off"
    }]
  

  console.log('asdasasdsdasdsdsdasdsdasdsd',this.books);
  }

  

}
