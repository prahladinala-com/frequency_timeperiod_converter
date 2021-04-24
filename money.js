function myFunction() {
// console.log(rupees)
    var rupees = document.getElementById("jack").value;
    if (rupees != null) {
        var dollars = rupees/71.947715
        document.write(`<h3>Here is your money ${dollars} in dollars</h3>`)
        let euros = rupees/78.919112
        document.write(`<h3>Here is your money ${euros} in euros</h3>`)
    }
  }

