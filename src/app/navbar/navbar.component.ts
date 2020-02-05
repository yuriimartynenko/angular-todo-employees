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

    add(employeeName: string, employeeSalary: number, employeeAge: number): void {
        if (employeeName.trim() && employeeSalary && employeeAge) {
            this.employeesService.addEmployee(employeeName, employeeSalary, employeeAge);
        }
        this.employeeName = '';
        this.employeeSalary = this.employeeAge = undefined;
    }
}