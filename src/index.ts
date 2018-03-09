import * as pri from "../../pri"

pri.commands.registerCommand(commander => {
  commander.command('deploy')
    .description('test')
    .action(async () => {
      console.log(123)
    })
});