import { OnInit } from 'angular-ts-decorators';
import { IHttpService, IQService } from 'angular';
import { Injectable } from 'angular-ts-decorators';

export interface IEmployee {
    id: string,
    employee_name: string,
    employee_salary: string,
    employee_age: string,
    selected?: boolean,
    editing?: boolean,
    oldName?: string,
    oldSalary?: string,
    oldAge?: string
}

@Injectable('employeesService')
export class EmployeesService  implements OnInit {
    listEmployees: IEmployee[] = [];
    isLoading: boolean = false;
    selectCount: number = 0;
    isCheckboxAll: boolean = false;

    constructor(private $http: IHttpService, private $q: IQService) { }

    ngOnInit(): void {
        this.getListEmployees().then();
    }

    async getListEmployees(): Promise<any> {
        const deferred = this.$q.defer<IEmployee[]>();
        try {
            this.isLoading = true;
            const response = await this.$http.get<any>('http://dummy.restapiexample.com/api/v1/employees');
            const res = response.data;
            res.data.forEach(item => {
                this.listEmployees.push({...item, selected: false, editing: false});
            });
            this.isLoading = false;
            deferred.resolve(response.data);
        } catch (e) {
            console.error(e.message);
            deferred.reject(e);
        }
        return deferred.promise;
    }

    addEmployee(...body): void {
        const [ employee_name, employee_salary, employee_age ] = body;
        let idx: number | 0 = this.listEmployees.length ? parseInt(this.listEmployees[this.listEmployees.length-1].id) : 0;
        idx++;
        this.listEmployees.push({ id: `${idx}`, employee_name, employee_salary, employee_age, selected: false });
    }

    deleteEmployee(employee: IEmployee): void {
        this.listEmployees = this.listEmployees.filter(h => h !== employee);
    }

    deleteSelectedEmployees(): void {
        for(let i=(this.listEmployees.length -1); i > -1; i--) {
            if(this.listEmployees[i].selected) {
                this.listEmployees.splice(i, 1);
                this.selectCount = 0;
                this.isCheckboxAll = false;
            }
        }
    }

    selectEmployee(employee: IEmployee): void {
        if (employee.selected) {
            this.selectCount++;
        } else {
            this.selectCount--;
            this.isCheckboxAll = false;
        }
    }

    checkAllCheckboxes(): void {
        if (this.listEmployees.every(employee => employee.selected)) {
            if(this.listEmployees.some(employee => employee.selected)) {
                this.listEmployees.forEach(employee => {
                    employee.selected = false;
                    this.isCheckboxAll = false;
                });
            }
            this.selectCount = 0;
        } else {
            this.listEmployees.forEach(employee => {
                if (!employee.selected) {
                    employee.selected = true;
                    this.isCheckboxAll = true;
                    this.selectCount++;
                }
            }
            );
        }
    }

    updateEmployee(employee: IEmployee): void {
        const index = this.listEmployees.findIndex(empl => empl.id === employee.id);
        if (index > -1) {
            this.listEmployees[index] = employee;
        }
        employee.editing = false;
    }

    editItem(employee: IEmployee): void {
        employee.editing = true;
        [employee.oldName, employee.oldSalary, employee.oldAge] = [employee.employee_name, employee.employee_salary, employee.employee_age];
    }

    cancelEdit(employee: IEmployee): void {
        employee.editing = false;
        [employee.employee_name, employee.employee_salary, employee.employee_age] = [employee.oldName, employee.oldSalary, employee.oldAge];
    }
}