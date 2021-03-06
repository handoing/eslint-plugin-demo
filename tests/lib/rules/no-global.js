/**
 * @fileoverview demo
 * @author demo
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-global"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester({
  parserOptions: {
    "ecmaVersion": 6,
    "sourceType": "module"
  }
});
ruleTester.run("no-global", rule, {

    valid: [
        "var name = 'test';"
    ],

    invalid: [

    ]
});
