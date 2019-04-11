import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OpenchatComponent} from "./components/openchat/openchat.component";
import {GeneralchatComponent} from "./components/generalchat/generalchat.component";
import {SecretchatComponent} from "./components/secretchat/secretchat.component";
import {AuthorizationService} from "./services/authorization.service";

const routes: Routes = [{
  path: '',
  redirectTo: 'general',
  pathMatch: 'full'
}, {
  path: 'general',
  component: GeneralchatComponent
}, {
  path: 'callback',
  component: OpenchatComponent
}, {
  path: 'secret',
  component: SecretchatComponent,
  canActivate: [AuthorizationService]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
