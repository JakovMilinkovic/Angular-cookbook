import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  constructor(private RecipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.RecipeService.recipesChanged.subscribe((recipes: Recipe[]) => {
      this.recipes = recipes;});
    this.recipes = this.RecipeService.getRecipes()
  }

  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
