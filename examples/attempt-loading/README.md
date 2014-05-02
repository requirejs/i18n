Example of i18n bundles not specified in the master module
==========================================================

Specifying all available bundles in the master file when a product is released
may not be convenient.  If a localization is provided afterwards, the master
module has to be modified, which gets even more difficult when it is compiled
to a single output file.

This sample does not specify any locales in the master file, which makes the
i18n plugin attempt loading the bundles from the nls directory during the
execution time dynamically.

    nls/strings.js
      define({ "root": true }); // "empty" master
    nls/root/strings.js
      define({ English localization });
    nls/de/strings.js
      define({ German localization });

Otherwise the usage of bundles in the source code is the same.

Testing the example
-------------------

Make sure that you clone the [`requirejs`](https://github.com/jrburke/r.js.git)
and [`r.js`](https://github.com/jrburke/requirejs.git) directories as siblings
of the `i18n` directory where you cloned the i18n plugin. Some files are loaded
by relative parts from them (`require.js and r.js).

The debug version of this example, which loads every module separately, can
be tested by the following commands:

    open index-debug.html in the web browser

The release version of this example, which loads all modules compiled to the
single file `zoo.js`, can be compiled and tested by the following commands:

    cd build
    node ../../../../r.js/dist/r.js -o build.js
    open out/index-release.html in the web browser
