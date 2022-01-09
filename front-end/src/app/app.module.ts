import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";

import { BlockUIModule } from "ng-block-ui";
import { CarouselModule } from "ngx-bootstrap/carousel";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { NgSelectModule } from "@ng-select/ng-select";
import { TextMaskModule } from "angular2-text-mask";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { ComponentsModule } from "./components/components.module";

import { RequestInterceptor } from "./services/authentication/request.interceptor";

import { GaleriaComponent } from "./pages/galeria/galeria.component";
import { HomeComponent } from "./pages/home/home.component";
import { ListarEnderecosComponent } from "./pages/listar-enderecos/listar-enderecos.component";
import { ListarFuncionariosComponent } from "./pages/listar-funcionarios/listar-funcionarios.component";
import { ListarMeusAgendamentosComponent } from "./pages/listar-meus-agendamentos/listar-meus-agendamentos.component";
import { ListarPacientesComponent } from "./pages/listar-pacientes/listar-pacientes.component";
import { ListarTodosAgendamentosComponent } from "./pages/listar-todos-agendamentos/listar-todos-agendamentos.component";
import { LoginComponent } from "./pages/login/login.component";
import { NovoAgendamentoComponent } from "./pages/novo-agendamento/novo-agendamento.component";
import { NovoEnderecoComponent } from "./pages/novo-endereco/novo-endereco.component";
import { NovoFuncionarioComponent } from "./pages/novo-funcionario/novo-funcionario.component";
import { NovoPacienteComponent } from "./pages/novo-paciente/novo-paciente.component";

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		GaleriaComponent,
		NovoEnderecoComponent,
		NovoAgendamentoComponent,
		LoginComponent,
		NovoFuncionarioComponent,
		NovoPacienteComponent,
		ListarFuncionariosComponent,
		ListarPacientesComponent,
		ListarEnderecosComponent,
		ListarTodosAgendamentosComponent,
		ListarMeusAgendamentosComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FontAwesomeModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,
		BlockUIModule,
		NgSelectModule,
		TextMaskModule,
		ComponentsModule,
		CarouselModule.forRoot()
	],
	providers: [
		{ provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true }
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
