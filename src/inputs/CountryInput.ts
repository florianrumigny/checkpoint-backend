import { Country } from "../entities/country";
import { Field, InputType } from "type-graphql";

@InputType()
export class CountryInput implements Partial<Country> {
  @Field()
  name: string;

  @Field()
  code: string;

  @Field()
  emoji: string;
}
