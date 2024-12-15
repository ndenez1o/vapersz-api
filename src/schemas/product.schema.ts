import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Product {
  @Prop({
    required: true,
    unique: true,
    trim: true,
  })
  brand: string;

  @Prop({
    required: true,
  })
  model: string;

  @Prop({
    required: true,
    trim: true,
  })
  taste: string;

  @Prop({
    required: true,
    trim: true,
  })
  puffs: string;

  @Prop({
    trim: true,
    required: true,
    minlength: 10,
    maxlength: 1000,
    set: (v: string) => v.toLowerCase(),
  })
  description: string;

  @Prop({
    required: true,
    trim: true,
  })
  price: string;

  @Prop({
    required: true,
  })
  image: string;

  @Prop({
    required: true,
    default: true,
  })
  available: boolean;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
