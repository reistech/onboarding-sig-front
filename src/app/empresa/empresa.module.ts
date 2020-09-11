import { NgModule } from "@angular/core";
import { EmpresaFormComponent } from "./form/form.component";
import { EmpresaListarComponent } from "./list/list.component";
import { EmpresaRouting } from "./empresa.routing";

@NgModule({
    declarations: [
        EmpresaFormComponent,
        EmpresaListarComponent,
    ],
    imports: [
        EmpresaRouting
    ]
})
export class EmpresaModule {}