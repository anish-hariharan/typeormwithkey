import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity('user-table')
export class Users{

    @PrimaryGeneratedColumn()
    ID: number 

    @Column()
    name: string

    @Column()
    phn: string

}