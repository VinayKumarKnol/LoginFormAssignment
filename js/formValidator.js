$().ready(function () {

        $("#signUpForm").validate(
            {
                rules: {
                    firstName: {
                        required: true,
                        minlength: 2
                    },
                    userEmail: {
                        required: true,
                        email: true
                    },
                    emailVerify: {
                        required: true,
                        equalTo: "#userEmail"
                    },
                    phone: {
                        minlength: 10
                    }

                },
                messages: {
                    firstName: {
                        required: "Please enter your first name",
                        minlength: "Name requires at least 2 chars."
                    },
                    userEmail: {
                        required: "Mandatory in order to contact you",
                        email: "Requires a email address to contact you"
                    },
                    emailVerify: {
                        required: "Re-enter your email address.",
                        equalTo: "This email is different. Please Re-enter."
                    },
                    phone: {
                        minlength: "Invalid Phone number."
                    }
                }
            }
        )
    }
);

