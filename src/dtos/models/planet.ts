import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class PlanetModel {
    @Field()
    name: string;

    @Field()
    mass: number;

    @Field()
    hasStation: boolean;
}
