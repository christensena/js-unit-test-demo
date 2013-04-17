(function ($) {
    // ... all vars and functions are in this scope only
    // still maintains access to all globals
    // see http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html

    function wireUpMultiplier(leftEl, rightEl, resultEl, triggerButtonEl) {
        triggerButtonEl.on('click', function(e) {

            var result = leftEl.val() * rightEl.val();

            $(resultEl).text(result);
        });
    }

    // expose to the world
    window.wireUpMultiplier = wireUpMultiplier;
}(jQuery));