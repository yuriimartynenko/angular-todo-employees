import { NgModule } from 'angular-ts-decorators';
import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './list-employees/list-employees.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EmployeesService } from './employees.service';

@NgModule({
    id: 'AppModule',
    declarations: [
        AppComponent,
        ListEmployeesComponent,
        NavbarComponent
    ],
    providers: [ EmployeesService ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}