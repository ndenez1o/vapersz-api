import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  brand: string;

  @IsNotEmpty()
  @IsString()
  model: string;

  @IsNotEmpty()
  @IsString()
  taste: string;

  @IsString()
  @IsNotEmpty()
  puffs: string;

  @IsString()
  @IsNotEmpty()
  image: string;

  @IsNotEmpty()
  @IsString()
  price: string;

  @IsString()
  description: string;

  @IsNotEmpty()
  @IsBoolean()
  available: boolean;
}
