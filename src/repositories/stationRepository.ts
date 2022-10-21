import { prisma } from '../config/database';
import { StationModel } from '../dtos/models/station';

function create(station: Partial<StationModel>) {
    return prisma.station.create({
        data: station,
    });
}

function findAll() {
    return prisma.station.findMany({});
}

export const stationRepository = {
    create,
    findAll,
};
