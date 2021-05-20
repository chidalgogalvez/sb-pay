import { User } from "./models/User";

export const resolvers = {
  Query: {
    users: () => User.find(),
  },
  Mutation: {
    createUser: async (_, { name, lastName, address, phone, country }) => {
      const dataUser = new User({ name, lastName, address, phone, country });
      await dataUser.save();
      return dataUser;
    },
  },
};
