module.exports = {
    routes: [
        {
            method: "POST",
            handler: "api::contact-form.contact-form.sendForm",
            path: "/sendForm"
        },

    ]
}
