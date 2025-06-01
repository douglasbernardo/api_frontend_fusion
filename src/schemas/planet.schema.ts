import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Planet extends Document {
  @Prop()
  name: string;

  @Prop()
  climate: string;

  @Prop()
  terrain: string;

  @Prop()
  population: string;
}

export const planetSchema = SchemaFactory.createForClass(Planet);