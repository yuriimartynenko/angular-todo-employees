import { Component, OnInit } from 'angular-ts-decorators';
import { EmployeesService } from '../employees.service';

@Component({
    selector: 'app-list-employees',
    template: require('./list-employees.component.html')
})
export class ListEmployeesComponent implements OnInit {

    constructor(private employeesService: EmployeesService) {}

    ngOnInit() {
        this.getEmployees();
    }

    async getEmployees(): Promise<void> {
        await this.employeesService.getListEmployees();
    }

}