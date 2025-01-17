/**
 * This file was generated by running `npm run generate` and should NOT be modified.
 */
import { CommandBuilder } from "yargs";
export const command = "expenses <command>";
export const description = `Information pertaining to retrieving, creating, editing, and deleting expenses.`;
export const builder: CommandBuilder = (yargs) =>
  yargs
    .commandDir("expenses")
    .demandCommand()
    .recommendCommands()
    .strictCommands()
    .version(false);
