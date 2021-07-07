const core = require('@actions/core');
const path = require('path');
const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

const file = core.getInput('file');

async function main() {
    try {
        const contents = await readFile(path.join(file), 'UTF-8');
        if (file.includes('json')) {
            const data = JSON.parse(contents);
            Object.keys(data).forEach(key => {
                if (key.includes('errorMessage') || key.includes('errorType')) {
                    console.log(data);
                    throw 'Error: ' + data.errorMessage;
                }
            });
        } else {
            const lines = contents.split('\n');
            let lastLine = '';
            while (lastLine === '') {
                lastLine = lines.pop();
            }
            console.log('Last line:' + lastLine);
            const data = JSON.parse(lastLine);
            Object.keys(data).forEach(key => {
                if (key.includes('errorMessage') || key.includes('errorType')) {
                    console.log(data);
                    throw 'Error: ' + data.errorMessage;
                }
            });
        }
    } catch (e) {
        core.setFailed(e.message);
    }
};

(async () => {
    await main();
})();