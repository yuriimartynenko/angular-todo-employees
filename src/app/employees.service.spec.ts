import { TestBed } from 'angularjs-testbed';
import { EmployeesService, IEmployee } from './employees.service';

describe('EmployeesService', () => {
    let service: EmployeesService;
    const employee: IEmployee = { id: '1', employee_name: 'Mr. Nice', employee_salary: '55000', employee_age: '36' };
    const employees: IEmployee[] = [
        { id: '1', employee_name: 'Mr. Nice', employee_salary: '55000', employee_age: '36' },
        { id: '2', employee_name: 'Donald Trump', employee_salary: '150000', employee_age: '70' },
        { id: '3', employee_name: 'Homer Simpson', employee_salary: '22000', employee_age: '39' }
    ];

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [EmployeesService]
        });
        service = TestBed.get(EmployeesService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should return promise resolve', () => {
        spyOn(service, 'getListEmployees').and.returnValue(Promise.resolve(employees));
        service.getListEmployees();
        expect(service.getListEmployees).toHaveBeenCalled();
    });

    it('should call method deleteEmployee with 1 argument on the service', () => {
        spyOn(service , 'deleteEmployee').and.callThrough();
        service.deleteEmployee(employee);
        expect(service.deleteEmployee).toHaveBeenCalled();
    });

    it('should call method deleteSelectedEmployees on the service', () => {
        spyOn(service , 'deleteSelectedEmployees').and.callThrough();
        service.deleteSelectedEmployees();
        expect(service.deleteSelectedEmployees).toHaveBeenCalled();
    });

    it('should call method selectEmployee with 1 argument on the service', () => {
        spyOn(service , 'selectEmployee').and.callThrough();
        service.selectEmployee(employee);
        expect(service.selectEmployee).toHaveBeenCalled();
    });

    it('should call method checkAllCheckboxes on the service', () => {
        spyOn(service , 'checkAllCheckboxes').and.callThrough();
        service.checkAllCheckboxes();
        expect(service.checkAllCheckboxes).toHaveBeenCalled();
    });

    it('should call method updateEmployee with 1 argument on the service', () => {
        spyOn(service , 'updateEmployee').and.callThrough();
        service.updateEmployee(employee);
        expect(service.updateEmployee).toHaveBeenCalled();
    });

});