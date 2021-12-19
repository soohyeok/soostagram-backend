import client from "../../client";

export default {
  Query: {
    seePhotoComments: (_, { id }) =>
      client.comment.findMany({
        where: {
          photoId: id,
        }, // skip take or cursor
        orderBy: {
          createdAt: "desc",
        },
      }),
  },
};
