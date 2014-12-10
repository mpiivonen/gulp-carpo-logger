var CronJob = require('cron').CronJob;
var fs = require('fs-sync');

const PLUGIN_NAME = 'gulp-carpo-logger';
var cronPattern = '0 0 * * * 1';
var weeks = 4;
var file = 'Custom.log';

function onTick()
{
    for(var i = 0, c = weeks; i < c; i++)
    {
        var file1 = file + ((weeks - i - 1) !== 0 ? "." + (weeks - i - 1) : "");
        var file2 = file + "." + (weeks - i);
        
        if(fs.exists(file1)) fs.copy(file1, file2, {force: true});
    }
    fs.write(file, "", {encode: 'utf-8', flag: 'w'});
}

module.exports = function(f, w, p)
{
    if(w !== undefined) weeks = w;
    if(p !== undefined) cronPattern = p;
    if(f !== undefined) file = f;
    
    var job = new CronJob({
        cronTime: cronPattern,
        onTick: onTick,
        start: false
    });
    job.start();
};