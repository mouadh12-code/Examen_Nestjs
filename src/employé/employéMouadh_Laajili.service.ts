import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { Employe } from './employéMouadh_Laajili.entity';
import { CreateEmployeDto } from './CreateEmployéMouadh_LaajiliDto';
import { ObjectId } from 'mongodb';
import { EmployeGateway } from './employéMouadh_Laajili.gateway';


@Injectable()
export class EmployeService {
  constructor(
    @InjectRepository(Employe)
    private readonly repo: MongoRepository<Employe>,
    private readonly gateway: EmployeGateway,
  ) {}

  async createEmploye(data: CreateEmployeDto) {
    const employe = this.repo.create(data);
    return this.repo.save(employe);
  }

  async findAll(): Promise<Employe[]> {
    return this.repo.find();
  }

  async findById(id: ObjectId): Promise<Employe | null> {
    return this.repo.findOneBy({ _id: id });
  }

  async deleteEmploye(id: ObjectId): Promise<string> {
    await this.repo.delete({ _id: id });
    return `Employé supprimé avec succès`;
  }

  async updateEmploye(
    id: ObjectId,
    data: Partial<CreateEmployeDto>,
  ): Promise<Employe | null> {
    await this.repo.update({ _id: id }, data);
    return this.findById(id);
  }

  async findByName(FullName: string): Promise<Employe[]> {
    return this.repo.find({ where: { FullName } });
  }

  async findByRank(rank: number): Promise<Employe[]> {
    return this.repo.find({
      where: { rank: { $gte: rank } },
    });
  }

  async findAboveAverageSalary(): Promise<Employe[]> {
    const employees = await this.repo.find();
    const avg =
      employees.reduce((sum, e) => sum + e.salary, 0) / employees.length;

    return employees.filter((e) => e.salary > avg);
  }

  async increaseSalary(
  id: ObjectId,
  percentage: number,
): Promise<Employe | null> {
  const employe = await this.findById(id);
  if (!employe) return null;

  employe.salary += (employe.salary * percentage) / 100;
  await this.repo.save(employe);

  // SOCKET ALERT
  if (employe.salary > 4000) {
    this.gateway.sendSalaryAlert(employe);
  }

  return employe;
}

}
