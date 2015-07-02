app.filter("maxSymbols", function() {
    return function(input, maxLength) {
        if (input.length > maxLength) {
            input = input.slice(0, maxLength) + "...";
        }
        return input;
    };
});
