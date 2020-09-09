import { Routes, RouterModule } from '@angular/router';


export const EmpresaRouting = RouterModule.forChild([
    {
      path: 'empresa',
      data: { title: 'Empresa', headerTitle: 'Empresa' },
      children: [

      ]
    }
  ]);
