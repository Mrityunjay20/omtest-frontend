import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    country: "India",
    streetAddress: "",
    apartment: "",
    city: "",
    state: "",
    pinCode: "",
    phone: "",
    email: "",
    orderNotes: "",
    paymentMethod: "cashOnDelivery",
  });

  const [products, setProducts] = useState([]); // Replace with your actual product fetching logic
  const [totals, setTotals] = useState({
    netTotal: 0,
    taxes: 0,
    shippingCharges: 0,
    total: 0,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value, name, type } = e.target;

    if (type === "radio") {
      setFormData({ ...formData, [name]: value });
    } else {
      setFormData({ ...formData, [id]: value });
    }
  };

  const handlePayment = async (orderData, paymentMethod) => {
    try {
      const { firebaseUid, items, OrderInfo } = orderData;

      // Send the order data to the backend to create the Razorpay order
      const razorpayOrderResponse = await axios.post(
        "/api/orders/createorder",
        {
          firebaseUid,
          items,
          OrderInfo,
        }
      );

      const { razorpayOrderId, result } = razorpayOrderResponse.data;
      const cashOnDeliveryCharges =
        process.env.REACT_APP_CASH_ON_DELIVERY_CHARGES;

      const options = {
        key_id: process.env.REACT_APP_RAZORPAY_API_KEY_ID, // Use public key here
        amount:
          paymentMethod === "cashOnDelivery"
            ? parseFloat(cashOnDeliveryCharges) * 100
            : result.totalAmount * 100, // Convert amount to paise
        currency: "INR",
        name: "Indie Stori",
        description: "Order Payment",
        order_id: razorpayOrderId,
        handler: async (response) => {
          await axios.post("/api/orders/confirmPayment", {
            razorpayOrderId: response.razorpay_order_id,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpaySignature: response.razorpay_signature,
          });
          alert("Payment successful!");
          navigate("/shop");
        },
        prefill: {
          name: `${OrderInfo.firstName} ${OrderInfo.lastName}`,
          email: OrderInfo.email,
          contact: OrderInfo.phone,
        },
        theme: {
          color: "#3399cc",
        },
      };

      if (window.Razorpay) {
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      } else {
        console.error("Razorpay script not loaded");
      }
    } catch (error) {
      console.error("Error handling payment:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requiredFields = [
      "firstName",
      "lastName",
      "streetAddress",
      "city",
      "state",
      "pinCode",
      "phone",
      "email",
    ];
    const isFormComplete = requiredFields.every((field) => formData[field]);

    if (!isFormComplete) {
      alert("Please fill out all required fields before placing the order.");
      return;
    }

    if (products.length === 0) {
      alert("Please add products to your cart before placing the order.");
      return;
    }

    if (formData.phone.length !== 10) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    const orderData = {
      firebaseUid: "", // Replace with actual firebase ID if needed
      OrderInfo: formData,
      items: products,
      total: totals.total,
    };

    handlePayment(orderData, formData.paymentMethod);
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <div className="flex flex-col md:flex-row md:space-x-8">
        <div className="w-full md:w-2/3">
          <div className="border p-6 mb-6">
            <h2 className="text-lg font-bold mb-4">Billing details</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1" htmlFor="firstName">
                    First name *
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    className="w-full border p-2"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="block mb-1" htmlFor="lastName">
                    Last name *
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    className="w-full border p-2"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block mb-1" htmlFor="companyName">
                  Company name (optional)
                </label>
                <input
                  id="companyName"
                  type="text"
                  className="w-full border p-2"
                  value={formData.companyName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block mb-1" htmlFor="country">
                  Country/Region *
                </label>
                <input
                  id="country"
                  type="text"
                  className="w-full border p-2"
                  value={formData.country}
                  readOnly
                />
              </div>
              <div>
                <label className="block mb-1" htmlFor="streetAddress">
                  Street address *
                </label>
                <input
                  id="streetAddress"
                  type="text"
                  className="w-full border p-2"
                  value={formData.streetAddress}
                  onChange={handleChange}
                  placeholder="House number and street name"
                  required
                />
                <input
                  id="apartment"
                  type="text"
                  className="w-full border p-2 mt-2"
                  value={formData.apartment}
                  onChange={handleChange}
                  placeholder="Apartment, suite, unit, etc. (optional)"
                />
              </div>
              <div>
                <label className="block mb-1" htmlFor="city">
                  Town / City *
                </label>
                <input
                  id="city"
                  type="text"
                  className="w-full border p-2"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1" htmlFor="state">
                    State *
                  </label>
                  <select
                    id="state"
                    className="w-full border p-2"
                    value={formData.state}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select an option...</option>
                    {/* Add state options here */}
                  </select>
                </div>
                <div>
                  <label className="block mb-1" htmlFor="pinCode">
                    PIN Code *
                  </label>
                  <input
                    id="pinCode"
                    type="text"
                    className="w-full border p-2"
                    value={formData.pinCode}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block mb-1" htmlFor="phone">
                  Phone *
                </label>
                <input
                  id="phone"
                  type="text"
                  className="w-full border p-2"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block mb-1" htmlFor="email">
                  Email address *
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full border p-2"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block mb-1" htmlFor="orderNotes">
                  Order notes (optional)
                </label>
                <textarea
                  id="orderNotes"
                  className="w-full border p-2"
                  value={formData.orderNotes}
                  onChange={handleChange}
                ></textarea>
              </div>
            </form>
          </div>
        </div>
        <div className="w-full md:w-1/3">
          <div className="border p-6 mb-6">
            <h2 className="text-lg font-bold mb-4">Your order</h2>
            <ul className="mb-4">
              {products.map((product) => (
                <li key={product.productId} className="flex justify-between">
                  <span className="w-1/2">
                    {product.name} x {product.quantity}
                  </span>
                  <span className="w-1/4 text-right">
                    Rs. {product.discountprice}
                  </span>
                  <span className="w-1/4 text-right">
                    ₹{product.discountprice * product.quantity}
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>₹{totals.netTotal}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Tax</span>
              <span>₹{totals.taxes}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping</span>
              <span>₹{totals.shippingCharges}</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>₹{totals.total}</span>
            </div>
            <div className="mt-4">
              <label className="block mb-2">Payment Method</label>
              <div className="flex">
                <div className="mr-4">
                  <input
                    type="radio"
                    id="cashOnDelivery"
                    name="paymentMethod"
                    value="cashOnDelivery"
                    checked={formData.paymentMethod === "cashOnDelivery"}
                    onChange={handleChange}
                  />
                  <label htmlFor="cashOnDelivery" className="ml-2">
                    Cash on Delivery
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="razorpay"
                    name="paymentMethod"
                    value="razorpay"
                    checked={formData.paymentMethod === "razorpay"}
                    onChange={handleChange}
                  />
                  <label htmlFor="razorpay" className="ml-2">
                    Razorpay
                  </label>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="w-full mt-4 bg-blue-500 text-white py-2 px-4 rounded"
              onClick={handleSubmit}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
