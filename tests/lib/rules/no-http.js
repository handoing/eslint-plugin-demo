/**
 * @fileoverview demo
 * @author demo
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-http"),

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
ruleTester.run("no-http", rule, {

    valid: [
        "const img = 'https' + '://xxx.jpg';"
    ],

    invalid: [

    ]
});
