/**
 * This file was generated by running `yarn generate` and should NOT be modified.
 */
import postmanRequestCommand, {
  Request,
} from "../../utils/postman-request-command";

export const request: Request = {
  method: "GET",
  url: {
    protocol: "https",
    host: ["api", "harvestapp", "com"],
    path: ["v2", "users", ":user_id"],
    variable: [
      {
        key: "user_id",
        value: "",
        description: "The ID of the user you're retrieving.",
      },
    ],
  },
};
export const { command, aliases, describe, builder, handler } =
  postmanRequestCommand({
    command: "get",
    describe: "Retrieves the user with the given ID",
    request,
  });
