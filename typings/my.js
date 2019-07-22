"use strict";
exports.__esModule = true;
var __1 = require("..");
var typescript_is_1 = require("typescript-is");
typescript_is_1.assertType(__1["default"], function (object) { var path = ["$"]; function _150(object) { if (typeof object !== "object" || object === null || Array.isArray(object))
    return "validation failed at " + path.join(".") + ": expected an object"; return null; } function _153(object) { if (typeof object !== "object" || object === null || Array.isArray(object))
    return "validation failed at " + path.join(".") + ": expected an object"; {
    if ("Test" in object) {
        path.push("Test");
        var error = _150(object["Test"]);
        path.pop();
        if (error)
            return error;
    }
    else
        return "validation failed at " + path.join(".") + ": expected 'Test' in object";
} {
    if ("default" in object) {
        path.push("default");
        var error = _150(object["default"]);
        path.pop();
        if (error)
            return error;
    }
    else
        return "validation failed at " + path.join(".") + ": expected 'default' in object";
} {
    if ("t" in object) {
        path.push("t");
        var error = _150(object["t"]);
        path.pop();
        if (error)
            return error;
    }
    else
        return "validation failed at " + path.join(".") + ": expected 't' in object";
} return null; } var error = _153(object); return error; });
