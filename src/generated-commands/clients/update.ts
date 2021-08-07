/**
 * This file was generated by running `yarn generate` and should NOT be modified.
 */
import postmanRequestCommand, {
  Request,
} from "../../utils/postman-request-command";

export const request: Request = {
  method: "PATCH",
  url: {
    protocol: "https",
    host: ["api", "harvestapp", "com"],
    path: ["v2", "clients", ":client_id"],
    query: [
      {
        key: "name",
        value: "",
        description: "A textual description of the client.",
        disabled: true,
      },
      {
        key: "is_active",
        value: "",
        description:
          "Whether the client is active, or archived. Defaults to true.",
        disabled: true,
      },
      {
        key: "address",
        value: "",
        description:
          " A textual representation of the client’s physical address. May include new line characters.",
        disabled: true,
      },
      {
        key: "currency",
        value: "",
        description:
          "The currency used by the client. If not provided, the company’s currency will be used. See a list of supported currencies: https://help.getharvest.com/api-v2/introduction/overview/supported-currencies/",
        disabled: true,
      },
    ],
    variable: [
      {
        key: "client_id",
        value: "",
        description: "The ID of the client you're updating.",
      },
    ],
  },
};
export const { command, aliases, describe, builder, handler } =
  postmanRequestCommand({
    command: "update",
    describe:
      "Updates the specific client by setting the values of the parameters passed",
    request,
  });
