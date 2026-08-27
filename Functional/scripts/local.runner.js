#!/usr/bin/env node

var Nightwatch = require("nightwatch")
var browserstack = require("browserstack-local")
var bs_local

try {
  process.mainModule.filename = "./node_modules/.bin/nightwatch"
  console.log("\nconnecting to browserstack\n")
  Nightwatch.bs_local = bs_local = new browserstack.Local()
  bs_local.start({ key: "gLsiTsTXZdKRqeNgpcTr" }, function(error) {
    if (error) throw error
    console.log("connected to browserstack\n\ntests are now running against these browsers / devices:")
    Nightwatch.cli(function(argv) {
      Nightwatch.CliRunner(argv)
        .setup(null, function() {
          process.kill(bs_local.pid)
        })
        .runTests(function() {
          process.kill(bs_local.pid)
        })
    })
  })
} catch (ex) {
  console.log("there was an error whilst starting the test runner:\n\n")
  process.stderr.write(ex.stack + "\n")
  process.exit(2)
}
