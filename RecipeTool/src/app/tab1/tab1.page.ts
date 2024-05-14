import { Component } from '@angular/core';
import { ConnectionService } from '../services/connection.service';
import { Receta } from '../models/Receta';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  recetas: Receta[] = []

  constructor(private connection: ConnectionService) {}

  async getRecipes(query: string) {
    this.recetas = await this.connection.getRecipes(query)
  }

}
