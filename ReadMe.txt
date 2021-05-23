--------------------------- General information ---------------------------
For running all autotests please change the "specs" to './test/specs/**/*.js' in the "wdio.conf.js" file.
For running a specific autotest (e.g. request) please change the "specs" to './test/specs/**/request.js' in the "wdio.conf.js" file.
To run the specs please enter the following command to the terminal: npx wdio wdio.conf.js

---------------------------- Change browser/OS ----------------------------
To change the browser for tests execution (e.g. firefox) please change the "capabilities" to "browserName: 'firefox'" in the "wdio.conf.js" file.
To change the OS platform for tests execution (e.g. Linux) please change the "capabilities" to "platformName: 'Linux'" in the "wdio.conf.js" file.

---------------------------------- Allure ---------------------------------
The allure is configured as a reporter in the "package.json" file.
Results are saved to the "allure-results" folder.