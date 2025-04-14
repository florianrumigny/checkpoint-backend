import { Continent } from "../entities/continent";
import { Field, InputType } from "type-graphql";

@InputType()
export class ContinentInput implements Partial<Continent> {
  @Field()
  name: string;
}
