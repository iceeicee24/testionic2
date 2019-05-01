import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipes.model';
import { load } from '@angular/core/src/render3';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {

  loadedRecipe: Recipe;
  constructor(
    private activatedRoute: ActivatedRoute,
    private recipesService: RecipesService,
    private router: Router,
    private alertCtrl: AlertController
    ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(parmaMap => {
      if (!parmaMap.has('recipeId')) {
        //redirect
        return;
      }

      const recipeId = parmaMap.get('recipeId');

      this.loadedRecipe = this.recipesService.getRecipe(recipeId);
    });
  }

  onDelete() {
    this.alertCtrl.create({
      header: 'Are you sure?',
      message: 'Do you really want to delete.',
      buttons: [{
        text: 'Cancel',
        role: 'cancel'
      },
      {
        text: 'Delete',
        handler: () => {
          this.recipesService.deleteRecipe(this.loadedRecipe.id);
          this.router.navigate(['/recipes']);
        }
      }]
    }).then(alertEl => {
      alertEl.present();
    });
  }

}
