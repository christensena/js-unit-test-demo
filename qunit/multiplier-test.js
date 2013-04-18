 
wireUpMultiplier($('#left'), $('#right'), $('#result'), $('#calculate'));

test("result set to 4 when Calculate clicked with 2, 2", function() {

    // Arrange
    $("#left").val(2);
    $("#right").val(2);

    // Act
    $("#calculate").click();

    // Assert
    equal($("#result").text(), '4');
}); 