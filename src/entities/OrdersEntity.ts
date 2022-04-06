import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: 'orders'
})
export class OrdersEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        name: "employee_id",
        nullable: true
    })
    employeeId: number;

    @Column({
        name: "order_amount",
        nullable: true
    })
    orderAmount: number;

}