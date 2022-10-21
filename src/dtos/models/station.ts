import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class StationModel {
    @Field()
    id: string;

    @Field()
    name: string;

    @Field()
    planetName: string;
}
