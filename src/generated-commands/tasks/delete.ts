/**
 * This file was generated by running `yarn generate` and should NOT be modified.
 */
import postmanRequestCommand, {
  Request,
} from "../../utils/postman-request-command";

export const request: Request = {
  method: "DELETE",
  url: {
    protocol: "https",
    host: ["api", "harvestapp", "com"],
    path: ["v2", "tasks", ":task_id"],
    variable: [
      {
        key: "task_id",
        value: "",
        description: "The ID of the task you're deleting.",
      },
    ],
  },
};
export const { command, aliases, describe, builder, handler } =
  postmanRequestCommand({
    command: "delete",
    describe: "Delete a task",
    request,
  });
