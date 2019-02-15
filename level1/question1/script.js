//Use RegEx to validate form
var contactForm = document.forms["contact"];

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    var formElements = contactForm.elements;
    var numberOfElements = formElements.length;

    for (var index = 0; index < numberOfElements; index++) {

        var element = formElements[index];

        if (element.pattern !== "") {

            var validationPattern = new RegExp(element.pattern);
            var elementValue = element.value;
            var validationTest = validationPattern.test(elementValue);
            var labelText = element.labels[0].innerText;

            if (element.type === "text" && elementValue === "") {
                console.log(labelText + " can't be empty");
            } else {
                if (validationTest === false) {
                    console.log(labelText + " format is invalid")
                }
            }
        }
    }
});
