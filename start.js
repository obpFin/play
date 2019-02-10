var { cinfo, cerr } = require('simple-color-print');


if (process.argv[2] === 'dev') {

    process.env.NODE_ENV = 'development';
    require('./src/server');

} else if (process.argv[2] === 'prod') {

    process.env.NODE_ENV = 'production';
    require('./build/play.bundle');

} else if (process.argv[2] === 'test') {

    process.env.NODE_ENV = 'test';

    const Jasmine = require('jasmine');
    let jasmine = new Jasmine();

    jasmine.loadConfig({
        "spec_dir": "src",
        "spec_files": [
            "./controllers/**/*.test.js"
        ],
        "stopSpecOnExpectationFailure": false,
        "random": true
    });

    jasmine.onComplete(passed => {

        if (passed) {
            cinfo('All tests have passed :)');
        } else {
            cerr('At least one test has failed :(');
        }
    });

    if (process.argv[3]) {
        let test = `./src/${process.argv[3]}.test.js`;
        jasmine.execute([test], test);
    } else {
        jasmine.execute();
    }
}