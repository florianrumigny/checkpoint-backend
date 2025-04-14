import { CountryInput } from "../inputs/CountryInput";
import { Country } from "../entities/country";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Continent } from "../entities/continent";

@Resolver(Country)
class CountryResolver {
  @Query(() => [Country])
  async getAllCountries() {
    try {
      const countries = await Country.find();

      return countries;
    } catch (error) {
      console.error("This is the error", error);
      throw new Error("Error fetching countries");
    }
  }

  @Query(() => Country)
  async getCountryByCode(@Arg("code") code: string) {
    try {
      const country = await Country.findOneByOrFail({ code });
      if (!country) {
        throw new Error("Country not found");
      }
      return country;
    } catch (error) {
      console.error("This is the error", error);
      throw new Error("Error fetching country");
    }
  }

  @Mutation(() => Country)
  async createNewCountry(@Arg("data") newCountryData: CountryInput) {
    try {
      const continentId = parseInt(newCountryData.continentId);

      const continent = await Continent.findOneByOrFail({
        id: continentId,
      });

      const countryToSave = Country.create({ ...newCountryData, continent });

      const result = await countryToSave.save();

      return result;
    } catch (error) {
      console.error("This is the error", error);
      throw new Error("Error creating country");
    }
  }

  @Mutation(() => String)
  async deleteCountry(@Arg("id") id: number) {
    try {
      const country = await Country.findOneByOrFail({ id });

      if (!country) {
        throw new Error("Country not found");
      }

      await Country.delete({ id });

      return "Country deleted successfully";
    } catch (error) {
      console.error("This is the error", error);
      throw new Error("Error deleting country");
    }
  }
}

export default CountryResolver;
