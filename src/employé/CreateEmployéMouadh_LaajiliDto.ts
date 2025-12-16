import { IsIn, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateEmployeDto {
  @IsNotEmpty()
  @IsString()
  FullName: string;

  @IsNotEmpty()
  @IsNumber()
  @IsIn([1, 2, 3])
  rank: number;

  @IsNotEmpty()
  @IsNumber()
  salary: number;
}
