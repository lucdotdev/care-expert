import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    loadChildren: () =>
      import('./index/index.module').then(m => m.IndexPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  { path: 'chat', loadChildren: './pages/chat/chat.module#ChatPageModule' },
  { path: 'carelib', loadChildren: './pages/carelib/carelib.module#CarelibPageModule' },
  { path: 'expert', loadChildren: './pages/expert/expert.module#ExpertPageModule' },
  { path: 'expert-details', loadChildren: './pages/expert-details/expert-details.module#ExpertDetailsPageModule' },
  { path: 'formation', loadChildren: './pages/formation/formation.module#FormationPageModule' },
  { path: 'formation-details', loadChildren: './pages/formation-details/formation-details.module#FormationDetailsPageModule' },
  { path: 'carelib-details', loadChildren: './pages/carelib-details/carelib-details.module#CarelibDetailsPageModule' },
  { path: 'settings', loadChildren: './pages/settings/settings.module#SettingsPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

