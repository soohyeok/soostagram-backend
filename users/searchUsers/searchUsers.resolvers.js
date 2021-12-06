import client from "../../client";

export default {
  Query: {
    searchUsers: async (_, { keyword, cursor }) =>
      await client.user.findMany({
        where: {
          username: {
            contains: keyword.toLowerCase(),
          },
        },
        take: 5,
        skip: cursor ? 1 : 0,
        ...(cursor && { cursor: { id: cursor } }),
      }),
  },
};
