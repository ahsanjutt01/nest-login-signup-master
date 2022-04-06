import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: 'employees_info'
})
export class EmployeesInfoEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        name: 'employee_name'
    })
    employeeName: string;

}