# SAM OTS

The Serverless Application Model Output Testing Software by Pillar.

## Purpose

This software will test the output logs of a lambda ran via the SAM CLI so that we can get correct output codes from the CLI. 

## Versioning

The initial version (which will be referred to as v0) will have the only goal of testing the output to make sure that there is no errors in the logs and will not test against other files. v1 will test against regular expression JSON files to make sure the output is as expected.

## To Do

- [ ] Get an initial version up and running (Node or Python?)
- [ ] Get it working on GH Actions
- [ ] Update it so that it can be ran with JSON Files
- [ ] Make it into a GitHub Action Marketplace step