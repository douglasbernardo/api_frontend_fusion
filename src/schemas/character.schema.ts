import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Character extends Document {
  @Prop()
  name: string;

  @Prop()
  race: string;

  @Prop()
  afiliation: string;

  @Prop()
  homePlanet: string;
}

export const characterSchema = SchemaFactory.createForClass(Character);