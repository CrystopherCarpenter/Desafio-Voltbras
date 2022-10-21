import { Query, Resolver } from 'type-graphql';
import axios from 'axios';
import { PlanetModel } from '../dtos/models/planet';
import { stationRepository } from '../repositories/stationRepository';

@Resolver()
export class PlanetsResolvers {
    @Query(() => [PlanetModel])
    async suitablePlanets() {
        const url =
            'https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=select+pl_name+,+pl_bmassj+from+ps+where+pl_bmassj+>+10&format=json';

        const { data } = await axios.get(url);

        const stations = await stationRepository.findAll();

        const planets = data.map(({ pl_name, pl_bmassj }) => {
            const hasStation = stations.find(
                (station: { name: string; planetName: string }) =>
                    station.planetName == pl_name
            );

            return {
                name: pl_name,
                mass: pl_bmassj,
                hasStation: Boolean(hasStation),
            };
        });

        return planets;
    }
}
