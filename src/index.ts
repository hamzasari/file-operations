#!/usr/bin/env node

import inquirer from 'inquirer';
import renameFiles from './commands/renameFiles';
import { CommandValues } from './types';

async function main() {
    const { operation } = await inquirer.prompt([
        {
            type: 'list',
            name: 'operation',
            message: 'Select a file operation:',
            choices: ['Rename files', 'Exit']
        }
    ]);

    switch (operation) {
        case 'Rename files':
            const answers: CommandValues = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'path',
                    message: 'Which directory do you want to modify?',
                    default: './'
                },
                {
                    type: 'input',
                    name: 'prefix',
                    message: 'Enter a prefix (optional):'
                },
                {
                    type: 'input',
                    name: 'suffix',
                    message: 'Enter a suffix (optional):'
                }
            ]);

            renameFiles(answers.path, answers.prefix, answers.suffix);
            break;
        case 'Exit':
            process.exit(0);
    }
}

main();
