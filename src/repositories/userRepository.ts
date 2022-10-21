import { prisma } from '../config/database';
import { UserModel } from '../dtos/models/user';

async function create(user: Partial<UserModel>) {
    await prisma.user.create({
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
