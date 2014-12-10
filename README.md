gulp-carpo-logger
============
> School project

Node.JS Gulp module: Advanced Logger

Syntax
-------
Syntax
```javascript
logger(file, weeks, pattern);
```
*** file ***
default: custom.log

*** weeks ***
default: 4

*** pattern ***
default: 0 0 * * * 1

Example
-------

```javascript
var gulp = require('gulp');
var logger = require('gulp-carpo-logger');

gulp.task('default', function()
{
    logger();
});
```
- - -

[![Creative Commons Attribution 4.0 International Public License](https://i.creativecommons.org/l/by/4.0/88x31.png "Creative Commons Attribution 4.0 International Public License")](http://creativecommons.org/licenses/by/4.0/)
