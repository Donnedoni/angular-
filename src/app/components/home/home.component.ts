import { Router } from '@angular/router';
import { Component,OnInit } from '@angular/core';
import { FakestoreService } from 'src/app/services/fakestore.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  
  constructor(private fakestore:FakestoreService,private router:Router){}

  //declare a variable to hold the data
  products:any[]=[];

  ngOnInit():void{

    this.fakestore.getProduct().subscribe((products:any)=>{
      console.table(products);
      this.products=products;
    });

    this.fakestore.deleteProduct().subscribe();

  }

  
    goToCreate(){
      this.router.navigate(['/create']);
    }

}
