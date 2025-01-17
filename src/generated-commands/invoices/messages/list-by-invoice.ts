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
    path: ["v2", "invoices", ":invoice_id", "messages"],
    query: [
      {
        key: "updated_since",
        value: "",
        description:
          "Only return invoice messages that have been updated since the given date and time.",
        disabled: true,
      },
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
    variable: [
      {
        key: "invoice_id",
        value: "",
        description:
          "The ID of the invoice that contains the messages you are listing.",
      },
    ],
  },
};
export const { command, aliases, describe, builder, handler } =
  postmanRequestCommand({
    command: "list-by-invoice",
    describe: "Returns a list of messages associated with a given invoice",
    request,
  });
