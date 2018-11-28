import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Name', 'Sample Description', 'https://cdn.pixabay.com/photo/2016/12/08/19/34/chinese-food-1892947_1280.jpg'),
    new Recipe('Test Name', 'Sample Description', 'https://cdn.pixabay.com/photo/2016/12/08/19/34/chinese-food-1892947_1280.jpg')
    ];
     
  constructor() { }

  ngOnInit() {
  }

}
