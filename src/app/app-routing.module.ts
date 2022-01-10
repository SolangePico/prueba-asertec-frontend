import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HealthComponent} from "./pages/health/health.component";
import {NotfoundComponent} from "./pages/notfound/notfound.component";

const routes: Routes = [
  {
    path: "health",
    component: HealthComponent
  },
  {
    path: "**",
    component: NotfoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
