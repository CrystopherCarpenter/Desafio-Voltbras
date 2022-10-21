import { GraphQLError } from 'graphql';
import { Arg, Mutation, Resolver } from 'type-graphql';
import { StartRechargeInput } from '../dtos/inputs/startRecharge';
import { RechargeModel } from '../dtos/models/recharge';
import { rechargeRepository } from '../repositories/rechargeRepository';

@Resolver()
export class RechargesResolvers {
    @Mutation(() => RechargeModel)
    async recharge(@Arg('data') data: StartRechargeInput) {
        if (new Date() >= data.finishAt)
            throw new GraphQLError('Invalid input value');

        const recharges = await rechargeRepository.findAll();

        const activeRecharge = recharges.find(
            ({ userId, stationId, finishAt }: Partial<RechargeModel>) => {
                const user = userId == data.userId;
                const station = stationId == data.stationId;
                const hasFinished = new Date() < finishAt;

                if ((user && hasFinished) || (station && hasFinished))
                    return true;
                return false;
            }
        );

        if (activeRecharge) throw new GraphQLError('Recharge in progress');

        return await rechargeRepository.create(data);
    }
}
