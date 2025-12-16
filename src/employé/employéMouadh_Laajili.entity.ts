import { Entity, Column, ObjectIdColumn, BeforeInsert, AfterLoad } from 'typeorm';
import { ObjectId } from 'mongodb';
import { IsIn, IsNumber, IsString } from 'class-validator';

@Entity('employees')
export class Employe {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  @IsString()
  FullName: string;

  @Column()
  @IsNumber()
  @IsIn([1, 2, 3])
  rank: number;

  @Column()
  @IsNumber()
  salary: number;

  @BeforeInsert()
  logInsert() {
    console.log('Employé ajouté');
  }

  @AfterLoad()
  afterLoad() {
    console.log('Employé chargé');
  }
}
