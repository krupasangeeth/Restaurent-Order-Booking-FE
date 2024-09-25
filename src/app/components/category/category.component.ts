import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories:string[] = ['veg', 'non-veg', 'deserts'];
  selectedCategory !: string;
  constructor(private router: Router,private dbService :DbService){}

  ngOnInit(): void {
    this.dbService.getApi('items');
  }
  
  onCategorySelection(category: string) {
    this.selectedCategory=category;
  }



}
