import { prisma } from '../config/database';
import { RechargeModel } from '../dtos/models/recharge';

function create(recharge: Partial<RechargeModel>) {
    return prisma.recharge.create({
        data: recharge,
    });
}

function findAll() {
    return prisma.recharge.findMany({});
}

export const rechargeRepository = {
    create,
    findAll,
};
