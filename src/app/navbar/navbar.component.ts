import { Component } from 'angular-ts-decorators';
import { EmployeesService } from '../employees.service';

@Component({
    selector: 'app-navbar',
    template: require('./navbar.component.html')
})
export class NavbarComponent {
    title: string = 'Manage Employees';
    titleEmployee: string = 'Add New Employee';
    active: boolean = true;
    employeeName: string = '';
    employeeSalary: number;
    employeeAge: number;

    constructor(private employeesService: EmployeesService) {}

    add(): void {
        if (this.employeeName.trim() && this.employeeSalary && this.employeeAge) {
            this.employeesService.addEmployee(this.employeeName, this.employeeSalary, this.employeeAge);
        }
        this.employeeName = '';
        this.employeeSalary = this.employeeAge = undefined;
    }
}