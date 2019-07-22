"use strict";
exports.__esModule = true;
var typescript_is_1 = require("typescript-is");
var wildString = 123;
//   const wildString: any =
//   "a string, but nobody knows at compile time, because it is cast to `any`";
if (typescript_is_1.is(wildString, function (object) { var path = ["$"]; function _string(object) { if (typeof object !== "string")
    return "validation failed at " + path.join(".") + ": expected a string";
else
    return null; } var error = _string(object); return error; })) {
    console.log(wildString);
}
else {
    console.log("impossibru");
}
var q = {
    qwer: "vzxvc"
};
typescript_is_1.assertType(q, function (object) { var path = ["$"]; function _string(object) { if (typeof object !== "string")
    return "validation failed at " + path.join(".") + ": expected a string";
else
    return null; } function _82(object) { if (typeof object !== "object" || object === null || Array.isArray(object))
    return "validation failed at " + path.join(".") + ": expected an object"; {
    if ("qwer" in object) {
        path.push("qwer");
        var error = _string(object["qwer"]);
        path.pop();
        if (error)
            return error;
    }
    else
        return "validation failed at " + path.join(".") + ": expected 'qwer' in object";
} return null; } var error = _82(object); return error; });
typescript_is_1.assertType(q, function (object) { var path = ["$"]; function _string(object) { if (typeof object !== "string")
    return "validation failed at " + path.join(".") + ": expected a string";
else
    return null; } function _82(object) { if (typeof object !== "object" || object === null || Array.isArray(object))
    return "validation failed at " + path.join(".") + ": expected an object"; {
    if ("qwer" in object) {
        path.push("qwer");
        var error = _string(object["qwer"]);
        path.pop();
        if (error)
            return error;
    }
    else
        return "validation failed at " + path.join(".") + ": expected 'qwer' in object";
} return null; } var error = _82(object); return error; });
