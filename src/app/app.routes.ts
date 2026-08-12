import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
    title: 'Owen Baldwin — AI Product, Solutions & Creative Technology',
  },
  {
    path: 'work/lvfx',
    loadComponent: () => import('./pages/lvfx/lvfx').then((m) => m.Lvfx),
    title: 'LVFX — From screenplay to production data | Owen Baldwin',
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about').then((m) => m.About),
    title: 'About — Owen Baldwin',
  },
  {
    path: 'writing',
    loadComponent: () => import('./pages/writing/writing').then((m) => m.Writing),
    title: 'Notes — Owen Baldwin',
  },
  { path: '**', redirectTo: '' },
];
