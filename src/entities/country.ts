import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Continent } from "./continent";

@ObjectType()
@Entity()
export class Country extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ unique: true })
  name: string;

  @Field()
  @Column({ unique: true })
  code: string;

  @Field()
  @Column({ unique: true })
  emoji: string;

  @ManyToOne(() => Continent, (continent) => continent.countries, {
    eager: true,
  })
  @Field(() => Continent, { nullable: true })
  continent: Continent;
}
