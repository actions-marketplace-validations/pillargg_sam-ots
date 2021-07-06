# Tests

This folder is for comparison tests against the logs folder. How SAM works is that it outputs the function's JSON as the last line of the log file, which will be compared against the JSON files found in this folder with the same names. If one of the logs are just JSON, then it will just be compared against the JSON in this folder.