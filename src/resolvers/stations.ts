import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { StationModel } from '../dtos/models/station';
import { stationRepository } from '../repositories/stationRepository';
import { InstallStationInput } from '../dtos/inputs/installStation';

@Resolver()
export class StationsResolvers {
    @Query(() => [StationModel])
    async stations() {
        return await stationRepository.findAll();
    }

    @Mutation(() => StationModel)
    async installStation(@Arg('data') data: InstallStationInput) {
        return await stationRepository.create(data);
    }
}
