$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/Feature/OxfordAcademy.Feature");
formatter.feature({
  "line": 2,
  "name": "Oxford Academy Website",
  "description": "",
  "id": "oxford-academy-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Oxford_Academy_feature"
    }
  ]
});
formatter.scenarioOutline({
  "line": 13,
  "name": "Logging into Oxford Academy",
  "description": "",
  "id": "oxford-academy-website;logging-into-oxford-academy",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@tc02_Oxford_Academy_login"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "the user launch chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "the user opens website",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "The user login using \"\u003cemailId\u003e\" and \"\u003cpassword\u003e\" with vaild and invaild deatils",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "the user closes the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "oxford-academy-website;logging-into-oxford-academy;",
  "rows": [
    {
      "cells": [
        "emailId",
        "password"
      ],
      "line": 22,
      "id": "oxford-academy-website;logging-into-oxford-academy;;1"
    },
    {
      "cells": [
        "abcd@gmail.com",
        "kg188754"
      ],
      "line": 23,
      "id": "oxford-academy-website;logging-into-oxford-academy;;2"
    },
    {
      "cells": [
        "kg@gmail.com",
        "gowtham895"
      ],
      "line": 24,
      "id": "oxford-academy-website;logging-into-oxford-academy;;3"
    },
    {
      "cells": [
        "gowtham19980303@gmail.com",
        "Gowtham@98"
      ],
      "line": 25,
      "id": "oxford-academy-website;logging-into-oxford-academy;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 23,
  "name": "Logging into Oxford Academy",
  "description": "",
  "id": "oxford-academy-website;logging-into-oxford-academy;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Oxford_Academy_feature"
    },
    {
      "line": 12,
      "name": "@tc02_Oxford_Academy_login"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "the user launch chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "the user opens website",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "The user login using \"abcd@gmail.com\" and \"kg188754\" with vaild and invaild deatils",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "the user closes the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.the_user_launch_chrome()"
});
formatter.result({
  "duration": 11332600800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_user_opens_website()"
});
formatter.result({
  "duration": 8453306100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd@gmail.com",
      "offset": 22
    },
    {
      "val": "kg188754",
      "offset": 43
    }
  ],
  "location": "LoginSteps.the_user_login_using_and_with_vaild_and_invaild_deatils(String,String)"
});
formatter.result({
  "duration": 4754271100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_user_closes_the_browser()"
});
formatter.result({
  "duration": 7155769800,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Logging into Oxford Academy",
  "description": "",
  "id": "oxford-academy-website;logging-into-oxford-academy;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Oxford_Academy_feature"
    },
    {
      "line": 12,
      "name": "@tc02_Oxford_Academy_login"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "the user launch chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "the user opens website",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "The user login using \"kg@gmail.com\" and \"gowtham895\" with vaild and invaild deatils",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "the user closes the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.the_user_launch_chrome()"
});
formatter.result({
  "duration": 9827893100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_user_opens_website()"
});
formatter.result({
  "duration": 7937850000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kg@gmail.com",
      "offset": 22
    },
    {
      "val": "gowtham895",
      "offset": 41
    }
  ],
  "location": "LoginSteps.the_user_login_using_and_with_vaild_and_invaild_deatils(String,String)"
});
formatter.result({
  "duration": 5772757700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_user_closes_the_browser()"
});
formatter.result({
  "duration": 7088925600,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Logging into Oxford Academy",
  "description": "",
  "id": "oxford-academy-website;logging-into-oxford-academy;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Oxford_Academy_feature"
    },
    {
      "line": 12,
      "name": "@tc02_Oxford_Academy_login"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "the user launch chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "the user opens website",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "The user login using \"gowtham19980303@gmail.com\" and \"Gowtham@98\" with vaild and invaild deatils",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "the user closes the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.the_user_launch_chrome()"
});
formatter.result({
  "duration": 9768536400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_user_opens_website()"
});
formatter.result({
  "duration": 5999451400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gowtham19980303@gmail.com",
      "offset": 22
    },
    {
      "val": "Gowtham@98",
      "offset": 54
    }
  ],
  "location": "LoginSteps.the_user_login_using_and_with_vaild_and_invaild_deatils(String,String)"
});
formatter.result({
  "duration": 4824466100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_user_closes_the_browser()"
});
formatter.result({
  "duration": 7096674000,
  "status": "passed"
});
});