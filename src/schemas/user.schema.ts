import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Affiliation } from 'src/enums/affiliation.enums';

@Schema({ timestamps: true })
export class User extends Document {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  pass: string;

  @Prop({ enum: Affiliation })
  affiliation: Affiliation;
}

export const userSchema = SchemaFactory.createForClass(User);