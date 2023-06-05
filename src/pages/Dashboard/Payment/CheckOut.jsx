import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import "./paymentStyles.css";

const CheckOut = ({ price, cart }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const [cardError, setCardError] = useState("");
  const [axiosSecure] = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState(false);

  useEffect(() => {
    if (price > 0) {
      axiosSecure.post(`/create-payment-intent`, { price }).then((res) => {
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [price, axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setCardError("");

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setCardError(error.message);
    }

    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      setCardError(confirmError);
    }

    setProcessing(false);

    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        price: price,
        quantity: cart.length,
        cartIds: cart.map((item) => item._id),
        foodIds: cart.map((item) => item.food._id),
        foodNames: cart.map((item) => item.food.name),
        date: new Date(),
        status: "sevice pending",
      };
      axiosSecure.post("/payments", payment).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          //
        }
      });
    }
  };

  return (
    <>
      {cardError && (
        <p className="mb-4 text-red-600 text-center font-medium">{cardError}</p>
      )}
      {transactionId && (
        <p className="mb-4 text-green-700 text-center font-medium">
          Transaction Completed with Transaction Id :{transactionId}
        </p>
      )}

      <form className="max-w-2xl mx-auto" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          type="submit"
          disabled={!stripe || !clientSecret || processing}
          className="bg-[#D1A054] text-white py-2 px-4 rounded"
        >
          Pay
        </button>
      </form>
    </>
  );
};

export default CheckOut;
