import { CountryInput } from "../inputs/CountryInput";
import { Country } from "../entities/country";
import { Arg, Mutation, Query, Resolver } from "type-graphql";

@Resolver(Country)
class CountryResolver {
  //TODO: create a query to get all countries
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

  // TODO: create a mutation to create a country
  @Mutation(() => Country)
  async createNewCountry(@Arg("data") newCountryData: CountryInput) {
    try {
      const countryToSave = Country.create({ ...newCountryData });

      const result = await countryToSave.save();

      return result;
    } catch (error) {
      console.error("This is the error", error);
      throw new Error("Error creating country");
    }
  }
}

export default CountryResolver;
