import { Arguments, CommandBuilder } from "yargs";
import { handler as defaultHandler } from "../generated-commands/time-entries/update";
import { getNotesFromEditor, getRunningTimer } from "../utils/timer";

export type NoteArguments = Arguments & {
  notes?: string;
  overwrite?: boolean;
};

export const command = "note";
export const describe = "Append notes to a running time entry";

export const builder: CommandBuilder = (yargs) =>
  yargs
    .options({
      notes: {
        alias: "n",
        describe: "Notes to be associated with the time entry",
        type: "string",
      },
      overwrite: {
        alias: "o",
        describe: "Overwrite existing notes",
        type: "boolean",
      },
    })
    .version(false);

export const handler = async (args: NoteArguments): Promise<void> => {
  const timer = await getRunningTimer(
    "You have multiple timers running! Which timer do you want to update?"
  );
  if (timer) {
    let notes = args.notes || "";

    if (!notes?.length) {
      notes = await getNotesFromEditor();
    }

    if (notes?.length) {
      if (args.overwrite === true) {
        timer.notes = notes;
      } else {
        timer.notes = timer.notes?.length
          ? `${timer.notes}\n\n${notes}`
          : notes;
      }
    }

    await defaultHandler(
      Object.assign(args, {
        fields: "client.name,hours,id,notes,project.name,spent_date,task.name",
        notes: timer.notes,
        time_entry_id: timer.id,
      })
    );
  }
};
