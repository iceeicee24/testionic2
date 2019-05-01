import { Injectable } from '@angular/core';
import { Recipe } from './recipes.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Adobo',
      imageUrl: 'https://panlasangpinoy.com/wp-content/uploads/2018/08/sprite-pork-adobo.jpg',
      ingredients: ['pork', 'soy sauce']
    },
    {
      id: 'r2',
      title: 'Pancit',
      imageUrl: 'https://panlasangpinoy.com/wp-content/uploads/2018/09/pancit-guisado-bihon.jpg',
      ingredients: ['noodles', 'carrots']
    }
  ];

  constructor() { }

  getAllRecipes() {
    return [...this.recipes] ;
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => {
      return recipe.id === recipeId;
    })
  };
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }

}
