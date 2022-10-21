import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { GraphQLError } from 'graphql';
import { CreateUserInput } from '../dtos/inputs/createUser';
import { userRepository } from '../repositories/userRepository';
import { UserModel } from '../dtos/models/user';

@Resolver()
export class UsersResolvers {
    @Query(() => UserModel)
    async user(@Arg('name') name: string) {
        const user = await userRepository.find(name);

        if (!user) throw new GraphQLError('User not found');

        return user;
    }

    @Mutation(() => UserModel)
    async createUser(@Arg('data') data: CreateUserInput) {
        return await userRepository.create(data);
    }
}
