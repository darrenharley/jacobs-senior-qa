const { Client } = require('ssh2');
const conn = new Client();
var longFileNamePrdArray;
var longFileNameStgArray;
var todaysMonth;
var todaysDay;
var date;

module.exports = {
    '@tags': ['acceptanceDesktopTest'],
    before: function(browser, done) {
        conn.on('ready', function() {
            console.log('Client :: ready');
            conn.sftp(function(err, sftp) {
                if (err) throw err;
                sftp.readdir('parkersreviewcontent/', function (err, list) {
                    if (err) throw err;
                    list.map(a => a.longname);
                    longFileNamePrdArray = list[1].longname;
                    longFileNameStgArray = list[2].longname;
                    conn.end();
                    done();
                });
            });
        })
        .connect({
            host: 'xfer.publishing.bauerxcel.tech',
            port: 22,
            user: 'parkers-zenith-int',
            password: 'HZ379RE8Xr5VpxGmcDF9',
        });
    },
    'Test Zen Reviews production file is listed': async function () {
        if (longFileNamePrdArray.includes('production')) {
        } else {
            throw new Error();
        }
    },
    'Test Zen Reviews staging file is listed': async function () {
        if (longFileNameStgArray.includes('staging')) {
        } else {
            throw new Error();
        }
    },
    'Test Zen Reviews production file has correct date': async function ()  {
        date = new Date();
        todaysDay = date.getDate();
        todaysMonth = date.toLocaleString('default', {
            month: 'short'
        });
        if (longFileNamePrdArray.includes(todaysMonth)) {
        } else {
            throw new Error();
        }
        if (longFileNamePrdArray.includes(todaysDay)) {
        } else {
            throw new Error();
        }
    },
    'Test Zen Reviews staging file has correct date': async function ()  {
        if (longFileNameStgArray.includes(todaysMonth)) {
        } else {
            throw new Error();
        }
        if (longFileNameStgArray.includes(todaysDay)) {
        } else {
            throw new Error();
        }
    },
};
