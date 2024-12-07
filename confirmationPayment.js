function getQueryParams() {
    const params = {};
    const queryString = window.location.search.substring(1);
    const pairs = queryString.split("&");
    for (const pair of pairs) {
        const [key, value] = pair.split("=");
        params[decodeURIComponent(key)] = decodeURIComponent(value);
    }
    return params;
}


const paymentDetails = getQueryParams();



document.getElementById("paymentId").textContent = paymentDetails.payment_id;
document.getElementById("amount").textContent = paymentDetails.amount;
document.getElementById("status").textContent = paymentDetails.status;