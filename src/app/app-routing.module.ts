import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingPageComponent} from "./components/landing-page/landing-page.component";
import {LoginComponent} from "./components/login/login.component";
import {ImpressumComponent} from "./components/impressum/impressum.component";
import {DatenschutzComponent} from "./components/datenschutz/datenschutz.component";
import {TodoListComponent} from "./components/todo-list/todo-list.component";
import {FormComponent} from "./components/form/form.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'todos',
    component: TodoListComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'impressum',
    component: ImpressumComponent
  },
  {
    path: 'datenschutz',
    component: DatenschutzComponent
  },
  {
    path: 'form',
    component: FormComponent
  },
  {
    path: '**',
    component: NotFoundComponent

  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
