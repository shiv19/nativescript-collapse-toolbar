var CollapseToolbar = require("nativescript-collapse-toolbar").CollapseToolbar;
var collapseToolbar = new CollapseToolbar();

describe("greet function", function() {
    it("exists", function() {
        expect(collapseToolbar.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(collapseToolbar.greet()).toEqual("Hello, NS");
    });
});