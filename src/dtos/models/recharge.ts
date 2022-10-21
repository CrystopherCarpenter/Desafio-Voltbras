import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class RechargeModel {
    @Field()
    id: string;

    @Field()
    stationId: string;

    @Field()
    userId: string;

    @Field()
    startAt: Date;

    @Field()
    finishAt: Date;
}
