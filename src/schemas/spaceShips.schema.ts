import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class spaceShip extends Document {
  @Prop()
  name: string;

  @Prop()
  modelType: string;

  @Prop()
  fabricator: string;

 @Prop()
  capacityPassenger: string;
}

export const spaceShipSchema = SchemaFactory.createForClass(spaceShip);