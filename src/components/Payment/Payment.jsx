import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RazorpayButton = ({
  amount,
  orderId,
  keyId,
  companyName = "Your Company Name",
  description = "Payment for Services",
  imageUrl = "https://yourlogo.example.com/logo.png",
  customerName = "Customer Name",
  customerEmail = "customer@example.com",
  customerContact = "9999999999",
  themeColor = "#3b82f6",
  onPaymentSuccess,
  onPaymentError,
}) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const handlePayment = () => {
    if (typeof window.Razorpay === 'undefined') {
      console.error('Razorpay SDK not loaded. Please check your network or script loading.');
      return;
    }
    if (!keyId || !amount || !orderId) {
      console.error("Missing required Razorpay parameters: keyId, amount, or orderId.");
      alert("Payment details are incomplete. Please refresh the page or contact support.");
      return;
    }

    const options = {
      key: keyId,
      amount: amount,
      currency: "INR",
      name: companyName,
      description: description,
      image: imageUrl,
      order_id: orderId,
      handler: function (response) {
        alert("Payment successful. Payment ID: " + response.razorpay_payment_id);
        if (onPaymentSuccess) {
          onPaymentSuccess(response);
        }
      },
      prefill: {
        name: customerName,
        email: customerEmail,
        contact: customerContact,
      },
      notes: {
        address: "Customer Address",
      },
      theme: {
        color: themeColor,
      },
      modal: {
        ondismiss: function () {
          console.log("Payment modal dismissed");
          if (onPaymentError) {
            onPaymentError({ code: "DISMISSED", description: "Payment modal closed" });
          }
        },
      },
    };

    try {
      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.error("Error opening Razorpay checkout:", error);
      if (onPaymentError) {
        onPaymentError(error);
      }
    }
  };

  return (
    <button
      className={`px-6 py-3 rounded-md font-semibold transition duration-300 
    ${(!keyId || !amount || !orderId)
          ? 'bg-gray-400 text-white cursor-not-allowed'
          : 'bg-pink-600 hover:bg-pink-700 text-white shadow-md hover:shadow-lg'}`}
      onClick={handlePayment}
      disabled={!keyId || !amount || !orderId}
    >
      Pay Now
    </button>

  );
};

// SubscriptionPage कंपोनेंट

const SubscriptionPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.state);
  const { basePrice, keyId, orderid, schoolId } = location.state || {};

  console.log("Base Price:", basePrice);
  const YOUR_RAZORPAY_KEY_ID = keyId;

  const [paymentId, setpaymentId] = useState(null);
  const [keyid, setkeyId] = useState(null);
  const [regNumber, setregNumber] = useState(null);
  const [orderId, setorderId] = useState(null);
  const [schoolid, setschoolid] = useState(null);


  const handlePaymentSuccess = async (response) => {
    const paymentData = {
      Regno: basePrice,
      PaymentId: response.razorpay_payment_id,
      SchoolId: schoolId,
      PaymentStatus: 'Accept',
      OrderId: orderid
    };

    try {
      const apiResponse = await fetch('https://schoolapi.friensys.com:443/api/SaveOnlinePaymentWeb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(paymentData)
      });

      if (!apiResponse.ok) {
        throw new Error('Failed to save payment info');
      }

      const result = await apiResponse.json();
      toast.success("Payment successful! Redirecting to receipt...");

      setpaymentId(response.razorpay_payment_id);
      setkeyId(keyId);
      setregNumber(basePrice);
      setorderId(orderid);
      setschoolid(schoolId);

      setTimeout(() => {
        navigate("/receiving", {
          state: {
            paymentId: response.razorpay_payment_id,
            keyid: keyId,
            regNumber: basePrice,
            orderId: orderid,
            schoolid: schoolId
          }
        });
      }, 2000);

    } catch (error) {
      console.error("Error saving payment info:", error);
      toast.error("Error saving payment information. Please try again.");
    }
  };

  const handlePaymentError = (error) => {
    console.error("Payment failed or dismissed:", error);
    toast.error("Payment could not be completed. Please try again.");
  };

  const amountInSubunits = (basePrice && !isNaN(basePrice)) ? Math.round(parseFloat(basePrice) * 100) : 0;

  return (
    <div className="payment-container px-4 py-8 max-w-xl mx-auto bg-white shadow-lg rounded-xl mt-10 text-center">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-pink-700">Complete Your Registration Payment</h1>

      {basePrice ? (
        <p className="text-lg text-gray-700 mb-2">
          <span className="font-semibold">Your Registration Fee:</span> ₹{basePrice}
        </p>
      ) : (
        <p className="text-gray-500 mb-2">Loading price details...</p>
      )}

      {orderid && (
        <p className="text-lg text-gray-700 mb-4">
          <span className="font-semibold">Payment Order ID:</span> {orderid}
        </p>
      )}

      {(basePrice > 0 && orderid && YOUR_RAZORPAY_KEY_ID) ? (
        <div className="my-6">
          <RazorpayButton
            amount={amountInSubunits}
            orderId={orderid}
            keyId={YOUR_RAZORPAY_KEY_ID}
            companyName="Friensys Info Labs"
            customerName="Rajnish Singh"
            customerEmail="Rajanishkr84433@gmail.com"
            customerContact="7258064908"
            onPaymentSuccess={handlePaymentSuccess}
            onPaymentError={handlePaymentError}
          />
        </div>
      ) : (
        <p className="text-red-600 font-medium mt-4">
          Payment details are incomplete. Please ensure you have a valid price and order ID to proceed.
        </p>
      )}

      <button
        onClick={() => navigate('/')}
        className="mt-6 px-6 py-2 bg-pink-600 text-white font-medium rounded hover:bg-pink-700 transition duration-200"
      >
        Go Back to Home
      </button>
      <ToastContainer />
    </div>

  );
};

export default SubscriptionPage;