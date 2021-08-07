/**
 * This file was generated by running `yarn generate` and should NOT be modified.
 */
import postmanRequestCommand, {
  Request,
} from "../../../utils/postman-request-command";

export const request: Request = {
  method: "GET",
  url: {
    protocol: "https",
    host: ["api", "harvestapp", "com"],
    path: ["v2", "expense_categories", ":expense_category_id"],
    variable: [
      {
        key: "expense_category_id",
        value: "",
        description: "The ID of the expense category you're retrieving.",
      },
    ],
  },
};
export const { command, aliases, describe, builder, handler } =
  postmanRequestCommand({
    command: "get",
    describe: "Retrieves the company for the currently authenticated user",
    request,
  });
