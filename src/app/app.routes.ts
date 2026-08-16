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
    path: 'work/inventory-app',
    loadComponent: () => import('./pages/inventory-app/inventory-app').then((m) => m.InventoryApp),
    title:
      'Workflow Automation — From spreadsheet chase to a five-day inventory count | Owen Baldwin',
  },
  {
    path: 'work/inceptal',
    loadComponent: () => import('./pages/inceptal/inceptal').then((m) => m.Inceptal),
    title: 'Inceptal — Helping artists find where they fit | Owen Baldwin',
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
  {
    path: 'writing/know-your-alternates',
    loadComponent: () =>
      import('./pages/aviation-product/aviation-product').then((m) => m.AviationProduct),
    title: 'Fly the plan. Know your alternates. | Owen Baldwin',
  },
  {
    path: 'writing/automation-creates-a-mess',
    loadComponent: () =>
      import('./pages/automation-mess/automation-mess').then((m) => m.AutomationMess),
    title: 'When automation creates a mess of its own | Owen Baldwin',
  },
  { path: '**', redirectTo: '' },
];
