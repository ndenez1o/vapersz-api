import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateProductDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  brand: string;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  model: string;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  taste: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  puffs: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  image: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsNotEmpty()
  @IsBoolean()
  @IsOptional()
  available: boolean;
}
