import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body-content',
  templateUrl: './body-content.component.html',
  styleUrls: ['./body-content.component.css']
})
export class BodyContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  items =[
new Items(1,1,'Item name 1 SSSDDD','****',399,'Santosh'),
new Items(2,2,'Item name 2 SSEDDD','****',299,'Santosh'),
new Items(3,3,'Item name 3 SSGDDD','****',199,'Santosh'),
new Items(4,4,'Item name 4 SSHDDD','****',599,'Santosh'),
new Items(5,5,'Item name 5 SSSDDD','****',299,'Santosh'),
new Items(6,6,'Item name 6 SSKDDD','****',499,'Santosh'),
new Items(7,7,'Item name 7 SSSDDD','****',399,'Santosh'),
new Items(8,8,'Item name 8 SSNDDD','****',599,'Santosh'),
new Items(9,9,'Item name 9 SSSEDD','****',799,'Santosh'),
new Items(10,10,'Item name 10 SSSDDD','****',499,'Santosh'),
new Items(11,11,'Item name 11 SSGDDD','****',399,'Santosh'),
new Items(12,12,'Item name 12 SSSDDD','****',199,'Santosh'),
new Items(13,13,'Item name 13 SSTDDD','****',299,'Santosh'),
new Items(14,14,'Item name 14 SSEDDD','****',99,'Santosh'),
new Items(15,15,'Item name 15 SSSDDD','****',199,'Santosh'),
new Items(16,16,'Item name 16 SSQDDD','****',299,'Santosh'),
new Items(17,17,'Item name 17 SSSDDD','****',499,'Santosh'),
new Items(18,18,'Item name 18 SSYDDD','****',899,'Santosh'),
new Items(19,19,'Item name 19 SSSDDD','****',699,'Santosh'),
new Items(20,20,'Item name 20 SSIDDD','****',499,'Santosh'),
new Items(21,21,'Item name 21 SSSDDD','****',399,'Santosh'),
new Items(22,22,'Item name 22 SSGDDD','****',299,'Santosh'),
new Items(23,23,'Item name 23 SSSDDD','****',99,'Santosh'),
new Items(24,24,'Item name 24 SSHDDD','****',399,'Santosh'),
new Items(25,25,'Item name 25 SSSDDD','****',199,'Santosh'),
new Items(26,26,'Item name 26 SSWDDD','****',299,'Santosh'),
new Items(27,27,'Item name 27 SSSDDD','****',499,'Santosh'),
new Items(28,28,'Item name 28 SSJDDD','****',399,'Santosh'),
new Items(29,29,'Item name 29 SSSDDD','****',599,'Santosh'),
new Items(30,30,'Item name 30 SSKDDD','****',799,'Santosh')
    
];
}

class Items{
  public item_id:number;
  public item_code:number;
  public item_name:string;
  public item_ratings:string;
  public item_price:number;
  public item_seller:string;
  constructor(_item_id:number,_item_code:number,_item_name:string,_item_ratings:string,_item_price:number,_item_seller:string){
    this.item_id=_item_id;
    this.item_code=_item_code;
    this.item_name=_item_name;
    this.item_ratings=_item_ratings;
    this.item_price=_item_price;
    this.item_seller=_item_seller;
  }
}