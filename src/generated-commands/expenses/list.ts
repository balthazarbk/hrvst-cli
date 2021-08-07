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
    path: ["v2", "expenses"],
    query: [
      {
        key: "user_id",
        value: "",
        description:
          "Only return expenses belonging to the user with the given ID.\n",
        disabled: true,
      },
      {
        key: "client_id",
        value: "",
        description:
          "Only return expenses belonging to the client with the given ID.\n",
        disabled: true,
      },
      {
        key: "project_id",
        value: "",
        description:
          "Only return expenses belonging to the project with the given ID.",
        disabled: true,
      },
      {
        key: "is_billed",
        value: "",
        description:
          "Pass true to only return expenses that have been invoiced and false to return expenses that have not been invoiced.",
        disabled: true,
      },
      {
        key: "updated_since",
        value: "",
        description:
          "Only return expenses that have been updated since the given date and time.",
        disabled: true,
      },
      {
        key: "from",
        value: "",
        description:
          "Only return expenses with a spent_date on or after the given date.",
        disabled: true,
      },
      {
        key: "to",
        value: "",
        description:
          "Only return expenses with a spent_date on or before the given date.",
        disabled: true,
      },
      {
        key: "page",
        value: "",
        description:
          "The page number to use in pagination. For instance, if you make a list request and receive 100 records, your subsequent call can include page=2 to retrieve the next page of the list.",
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
    command: "list",
    describe: "Returns a list of your expenses",
    request,
  });
