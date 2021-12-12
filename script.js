
 $(document).ready(function(){
    $("#date").datepicker();

    $('#myForm').validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            firstname: {
                required: true
            },
            lastname: {
                required: true
            },
                // countries: {
                // 	required: true
                // },
            date: {
                required: true
            },
                // terms: {
                // 	required: true
                // }
            people: {
                required: true
            },
            rooms: {
                required: true
            },
            roomSize: {
                required: true
            },
            nights: {
                required: true
            }
        },
        messages: {
            email: {
                email: "Please enter a Valid Email"
            },
            firstname: {
                required: "Enter your FirstName"
            },
            lastname: {
                required: "Enter your LastName"
            },
               
            date: {
                required: "Enter your Date of Birth",
                validDate: true
            },
                
            people: {
                required: "Number of people required"
            },
            rooms: {
                required: "Number of rooms required"
            },
            roomSize: {
                required: "Room size required"
            },
            nights: {
                required: "Number of nights required"
            }
        },
        success: function(label){
            label.addClass("valid").text("Ok!");
        },
        submitHandler: function(){
            $("#myForm").hide();
            $("#successMsg").html("<p>Booking Received. Your room is now reserved. We will send you a confirmation email shortly.</p>>");
        }
    });
});
