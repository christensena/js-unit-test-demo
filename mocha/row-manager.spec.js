describe('row manager', function() {

    var itemListEl,
    addButtonEl,
    removeButtonEl,
    rowCountEl;

    before(function() {

        itemListEl = $('#item-list');
        addButtonEl = $('#add-button');
        removeButtonEl = $('#remove-button');
        rowCountEl = $('#row-count');

        wireUpRowManager(itemListEl, addButtonEl, removeButtonEl, rowCountEl);
    })

    beforeEach(function() {
        // clear the list
        itemListEl.empty();
    })

    describe('no existing rows', function() {

        describe('adding a new row', function() {

            beforeEach(function() {
                addButtonEl.click();
            })

            it('should add a row to the list', function() {
                expect(itemListEl.find('li').length).to.equal(1);
            })

            it('should update row count', function() {
                expect(rowCountEl.text()).to.equal('1');
            })
        })
    })

    describe('one existing row', function() {

        beforeEach(function() {
            itemListEl.append("<li></li>")
        })

        describe('removing a row', function() {
            beforeEach(function() {
                removeButtonEl.click();
            })

            it('there should be no rows', function() {
                expect(itemListEl.find('li').length).to.equal(0)
            })

            it('row count should be 0', function() {
                expect(rowCountEl.text()).to.equal('0')
            })
        })

    })

})