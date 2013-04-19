(function ($) {
    // ... all vars and functions are in this scope only
    // still maintains access to all globals
    // see http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html

    function wireUpRowManager(itemListEl, addButtonEl, removeButtonEl, rowCountEl) {
        addButtonEl.on('click', function(e) {
            itemListEl.append('<li><input type="text" name="value"/></li>');
            updateRowCount(itemListEl, rowCountEl);
        });

        removeButtonEl.on('click', function(e) {
            itemListEl.find('li:last').remove();
            updateRowCount(itemListEl, rowCountEl);
        });
    }

    function updateRowCount(itemListEl, rowCountEl) {
        rowCountEl.text(itemListEl.find('li').length);    
    }

    // expose to the world
    window.wireUpRowManager = wireUpRowManager;

}(jQuery));