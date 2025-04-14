import { Continent } from "../entities/continent";
import { ContinentInput } from "../inputs/ContinentInput";
import { Arg, Mutation, Query, Resolver } from "type-graphql";

@Resolver(Continent)
class ContinentResoler {
  @Query(() => [Continent])
  async getAllContinents() {
    try {
      const continents = await Continent.find();
      return continents;
    } catch (error) {
      console.error("This is the error", error);
      throw new Error("Error fetching continents");
    }
  }

  @Query(() => [Continent])
  async getAllCountryByContinent(@Arg("id") id: number) {
    try {
      const continent = await Continent.findOneOrFail({
        where: { id },
        relations: ["countries"],
      });
      if (!continent) {
        throw new Error("Continent not found");
      }
      return continent.countries;
    } catch (error) {
      console.error("This is the error", error);
      throw new Error("Error fetching countries");
    }
  }

  @Mutation(() => Continent)
  async createNewContinent(@Arg("data") newContinentData: ContinentInput) {
    try {
      const continentToSave = Continent.create({ ...newContinentData });
      const result = await continentToSave.save();
      return result;
    } catch (error) {
      console.error("This is the error", error);
      throw new Error("Error creating continent");
    }
  }
}

export default ContinentResoler;
