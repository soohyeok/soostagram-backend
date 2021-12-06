import { protectedResolver } from "../../users/users.utils";

export default {
  Mutation: {
    uploadPhoto: protectedResolver(
      async (_, { file, caption }, { loggedInUser }) => {
        if (caption) {
          //parse caption
          //create Hashtags / get Hashtags
        }
        // save the photo with the parsed hashtags
        // add photo to the hashtags
      }
    ),
  },
};
