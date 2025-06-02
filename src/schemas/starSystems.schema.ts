import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class starSystem extends Document {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  planetList: Array<string>;
}

export const starSystemSchema = SchemaFactory.createForClass(starSystem);