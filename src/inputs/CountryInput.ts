import { Country } from "../entities/country";
import { Field, ID, InputType } from "type-graphql";

@InputType()
export class CountryInput implements Partial<Country> {
  @Field()
  name: string;

  @Field()
  code: string;

  @Field()
  emoji: string;

  @Field(() => ID)
  continentId: string;
}
