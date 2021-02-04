import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AuthRoutingModule } from './auth/auth.routing';
import { PagesRoutingModule } from './pages/pages.routing';

import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';

const routes: Routes =  [

  
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: '**', component: PagenotfoundComponent},

]

@NgModule({
  declarations: [],
  imports: [ 
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule,
   ],
  exports: [ RouterModule]
})

export class AppRoutingModule { }
