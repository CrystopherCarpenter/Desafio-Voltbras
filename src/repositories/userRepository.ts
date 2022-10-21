import { prisma } from '../config/database';
import { UserModel } from '../dtos/models/user';

function create(user: Partial<UserModel>) {
    return prisma.user.create({
        data: user,
    });
}

function find(name: string) {
    return prisma.user.findUnique({
        where: { name },
    });
}

export const userRepository = {
    create,
    find,
};
