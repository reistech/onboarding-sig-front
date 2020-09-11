import { Routes, RouterModule } from '@angular/router';
import { EmpresaFormComponent } from './form/form.component';

export const EmpresaRouting = RouterModule.forChild([
  {
    path: 'empresa',
    data: { title: 'Empresa', headerTitle: 'Empresa' },
    children: [
      { path: '', component: EmpresaFormComponent },
      { path: 'novo', component: EmpresaFormComponent, data: { title: 'Cadastro de Empresa' } },
      { path: 'editar/:id', component: EmpresaFormComponent, data: { title: 'Edição de Empresa' } },
      {
        path: 'visualizar/:id', component: EmpresaFormComponent,
        data: { title: 'Visualização de Empresa', readonly: true }
      }
    ]
  }
]);
