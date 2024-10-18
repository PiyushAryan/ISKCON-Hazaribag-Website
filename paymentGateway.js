function showLoading() {
    document.getElementById("loader").style.display = "block";
}

// this will hide the loading while the lambda function api fetched
function hideLoading() {
    document.getElementById("loader").style.display = "none";
}

async function createOrder(donationAmount) {
    const response = await fetch("https://0t0nsqp0k3.execute-api.us-east-1.amazonaws.com/dev/createOrder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: donationAmount * 100 })
    });

    const orderData = await response.json();
    return orderData.id; // order ID generated by the AWS Lambda function
}


async function initiatePayment() {
    let donationAmount = document.getElementById("donation-amount").value || "5000"; // if User provide empty  then Default amount

    showLoading();

    try {
        const order_id = await createOrder(donationAmount);

        var options = {
            key: "rzp_test_f71au899PKnfY6", // Enter the Key ID generated from Razorpay Dashboard
            amount: donationAmount * 100, // Convert to smallest currency unit
            currency: "INR",
            name: "ISKCON Hazaribag",
            description: "Donation",
            image: "https://www.iskconmumbai.com/bi_theme_snippets/static/src/img/logo-black-header.png",
            order_id: order_id, // Use the order ID created by AWS Lambda API
            handler: function (response) {
                const paymentDetails = {
                    payment_id: response.razorpay_payment_id,
                    amount: donationAmount,
                    status: "Payment Successful",
                };
                const queryString = new URLSearchParams(paymentDetails).toString();
                window.location.href = `confirmation.html?${queryString}`;
            },
            prefill: {
                name: "John Doe",
                email: "email@example.com",
                contact: "999999999",
            },
            notes: {
                address: "ISKCON Hazaribag, Jharkhand",
            },
            theme: {
                color: "#3399cc",
            },
        };

        var rzp1 = new Razorpay(options);
        rzp1.open();
    }
    catch (error) {
        console.error("Error creating order:", error);
        alert("Your Payment has not being processed! try again")
    }
    finally {
        hideLoading();
    }
};

document.getElementById("rzp-button1").onclick = function (e) {

    initiatePayment();
    e.preventDefault();

    
};