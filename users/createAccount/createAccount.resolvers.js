import client from "../../client";
import bcrypt from "bcrypt";

export default {
  Mutation: {
    createAccount: async (
      _,
      { firstName, lastName, username, email, password }
    ) => {
      try {
        // check if username or email are already on DB,
        const existingUser = await client.user.findFirst({
          where: {
            OR: [
              {
                username: username,
              },
              {
                email: email,
              },
            ],
          },
        });
        if (existingUser) {
          throw new Error("This username/password is already taken.");
        }
        const uglyPassword = await bcrypt.hash(password, 10);
        await client.user.create({
          data: {
            username,
            email,
            firstName,
            lastName,
            password: uglyPassword,
          },
        });

        return {
          ok: true,
        };
      } catch (e) {
        return {
          ok: false,
          error: "Could not create account.",
        };
      }
    },
  },
};
