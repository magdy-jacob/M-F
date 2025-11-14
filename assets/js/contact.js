
const scriptURL = "https://script.google.com/macros/s/AKfycbz5ZyMMnNc3konZX6peqk2I9irMpTz1NlLR1xqnWAb8O8Iww1RXoanpZU8uqmec4Oc/exec";

document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const formData = {
        namef: this.namef.value,
        namel: this.namel.value,
        phone: this.phone.value,
        email: this.email.value,
        message: this.message.value
    };

    fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res => res.json())
    .then(data => {
        document.querySelector(".ajax-response").innerHTML =
            "<p style='color: green;'>Message sent successfully!</p>";
        this.reset();
    })
    .catch(err => {
        console.error(err);
        document.querySelector(".ajax-response").innerHTML =
            "<p style='color: red;'>Something went wrong!</p>";
    });
});
