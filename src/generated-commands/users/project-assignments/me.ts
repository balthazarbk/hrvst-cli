/**
 * This file was generated by running `npm run generate` and should NOT be modified.
 */
import postmanRequestCommand, {
  Request,
} from "../../../utils/postman-request-command";

export const request: Request = {
  method: "GET",
  url: {
    protocol: "https",
    host: ["api", "harvestapp", "com"],
    path: ["v2", "users", "me", "project_assignments"],
    query: [
      {
        key: "page",
        value: "",
        description:
          "The page number to use in pagination. Use `all` to retrieve all pages.",
        disabled: true,
      },
      {
        key: "per_page",
        value: "",
        description:
          "The number of records to return per page. Can range between 1 and 100.",
        disabled: true,
      },
    ],
  },
};
export const { command, aliases, describe, builder, handler } =
  postmanRequestCommand({
    command: "me",
    describe:
      "Returns a list of your active project assignments for the currently authenticated user",
    request,
  });
