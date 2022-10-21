import { Field, InputType } from 'type-graphql';

@InputType()
export class StartRechargeInput {
    @Field()
    stationId: string;

    @Field()
    userId: string;

    @Field()
    finishAt: Date;
}
