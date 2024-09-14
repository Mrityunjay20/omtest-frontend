import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate } from 'react-router';
import  {auth} from '../firebaseConfig'
import { apiString } from '../services/apicalls';
import { clearCart } from '../services/cart/cartSlice';

const CheckoutPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    country: 'India',
    streetAddress: '',
    apartment: '',
    city: '',
    state: '',
    pinCode: '',
    phone: '',
    email: '',
    orderNotes: '',
    paymentMethod: 'cashOnDelivery',
  });

  const products = useSelector((state) => state.cart.products);
  const totals = useSelector((state) => state.cart.totals);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value, name, type } = e.target;
  
    if (type === "radio") {
      setFormData({ ...formData, [name]: value });
    } else {
      setFormData({ ...formData, [id]: value });
    }
  };

  const handlePayment = async (orderData,paymentMethod) => {
    try {
      const { firebaseUid, items, OrderInfo } = orderData;
  
      // Send the order data to the backend to create the Razorpay order
      const razorpayOrderResponse = await axios.post(apiString+'/orders/createorder', {
        firebaseUid,
        items,
        OrderInfo,
      });
  
      const { razorpayOrderId, result} = razorpayOrderResponse.data;
      // const totalAmount = razorpayOrderResponse.data.result.totalAmount;
      const cashOnDeliveryCharges = import.meta.env.VITE_CASH_ON_DELIVERY_CHARGES
  
      
      const options = {
        key_id: import.meta.env.VITE_RAZORPAY_API_KEY_ID, // Use public key here
        amount: paymentMethod === "cashOnDelivery" ? parseFloat(cashOnDeliveryCharges) :result.totalAmount, // Convert amount to paise
        currency: 'INR',
        name: 'Indie Stori',
        description: 'Order Payment',
        order_id: razorpayOrderId,
        handler: async (response) => {
          await axios.post(apiString+'/orders/confirmPayment', {
            razorpayOrderId: response.razorpay_order_id,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpaySignature: response.razorpay_signature,
          });
          alert("Payment successful!");
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
        console.log(options);
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      } else {
        console.error("Razorpay script not loaded");
      }
      dispatch(clearCart());
      localStorage.removeItem("cartState");
      navigate('/product');
    } catch (error) {
      console.error("Error handling payment:", error);
    }
  };
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const requiredFields = ['firstName', 'lastName', 'streetAddress', 'city', 'state', 'pinCode', 'phone', 'email'];
    const isFormComplete = requiredFields.every(field => formData[field]);

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

    const firebaseId = auth.currentUser ? auth.currentUser.uid : "";

    const orderData = {
      firebaseUid: firebaseId,
      OrderInfo: formData,
      items: products,
      total: totals.total
    };

    if (formData.paymentMethod === "cashOnDelivery") {
      try {
        await axios.post(apiString+'/orders/createorder', orderData);
        alert("Order placed successfully!");
        dispatch(clearCart());
        navigate('/shop');
      localStorage.removeItem("cartState");
      
      } catch (error) {
        console.error("Error placing order:", error);
      }
    } else {
      handlePayment(orderData,formData.paymentMethod);
    }
  };
  
  
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <div className="flex flex-col-reverse md:flex-row md:space-x-8">
        <div className="w-full md:w-2/3">
          <div className="border p-6 mb-6">
            <h2 className="text-lg font-bold mb-4">Billing details</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1" htmlFor="firstName">First name *</label>
                  <input id="firstName" type="text" className="w-full border p-2" value={formData.firstName} onChange={handleChange} required />
                </div>
                <div>
                  <label className="block mb-1" htmlFor="lastName">Last name *</label>
                  <input id="lastName" type="text" className="w-full border p-2" value={formData.lastName} onChange={handleChange} required />
                </div>
              </div>
              <div>
                <label className="block mb-1" htmlFor="companyName">Company name (optional)</label>
                <input id="companyName" type="text" className="w-full border p-2" value={formData.companyName} onChange={handleChange} />
              </div>
              <div>
                <label className="block mb-1" htmlFor="country">Country/Region *</label>
                <input id="country" type="text" className="w-full border p-2" value={formData.country} readOnly />
              </div>
              <div>
                <label className="block mb-1" htmlFor="streetAddress">Street address *</label>
                <input id="streetAddress" type="text" className="w-full border p-2" value={formData.streetAddress} onChange={handleChange} placeholder="House number and street name" required />
                <input id="apartment" type="text" className="w-full border p-2 mt-2" value={formData.apartment} onChange={handleChange} placeholder="Apartment, suite, unit, etc. (optional)" />
              </div>
              <div>
                <label className="block mb-1" htmlFor="city">Town / City *</label>
                <input id="city" type="text" className="w-full border p-2" value={formData.city} onChange={handleChange} required />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1" htmlFor="state">State *</label>
                  <select id="state" className="w-full border p-2" value={formData.state} onChange={handleChange} required>
                    <option value="">Select an option...</option>
                    <option value="Andhra_Pradesh">Andhra Pradesh</option>
                    <option value="Arunachal_Pradesh">Arunachal Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Goa">Goa</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Himachal_Pradesh">Himachal Pradesh</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Madhya_Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Manipur">Manipur</option>
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Tamil_Nadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Tripura">Tripura</option>
                    <option value="Uttar_Pradesh">Uttar Pradesh</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="West_Bengal">West Bengal</option>
                    <option value="Andaman_and_Nicobar_Islands">Andaman and Nicobar Islands</option>
                    <option value="Chandigarh">Chandigarh</option>
                    <option value="Dadra_and_Nagar_Haveli_and_Daman_and_Diu">Dadra and Nagar Haveli and Daman and Diu</option>
                    <option value="Lakshadweep">Lakshadweep</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Puducherry">Puducherry</option>
                    {/* Add more options as needed */}
                  </select>
                </div>
                <div>
                  <label className="block mb-1" htmlFor="pinCode">PIN Code *</label>
                  <input id="pinCode" type="text" className="w-full border p-2" value={formData.pinCode} onChange={handleChange} required />
                </div>
              </div>
              <div>
                <label className="block mb-1" htmlFor="phone">Phone *</label>
                <input id="phone" type="text" className="w-full border p-2" value={formData.phone} onChange={handleChange} required />
              </div>
              <div>
                <label className="block mb-1" htmlFor="email">Email address *</label>
                <input id="email" type="email" className="w-full border p-2" value={formData.email} onChange={handleChange} required />
              </div>
              <div>
                <label className="block mb-1" htmlFor="orderNotes">Order notes (optional)</label>
                <textarea id="orderNotes" className="w-full border p-2" value={formData.orderNotes} onChange={handleChange}></textarea>
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
                  <span className='w-1/2'>{product.name} x {product.quantity}</span>
                  <span className='w-1/4 text-right'>Rs. {product.discountprice}</span>
                  <span className='w-1/4 text-right'>₹{product.discountprice * product.quantity}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-between font-bold">
              <span>Net Total</span>
              <span>Rs. {(totals.netTotal)}</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Taxes</span>
              <span>Rs. {(totals.taxes)}</span>
            </div>
            {/* <div className="flex justify-between font-bold">
              <span>Shipping Charges</span>
              <span>Rs. {(totals.shippingCharges)}</span>
            </div> */}
            <div className="flex justify-between font-bold">
              <span>Gross Total</span>
              <span>Rs. {(totals.total)}</span>
            </div>
            <div className="mt-4">
              <label className="block mb-1 font-bold" htmlFor="paymentMethod">Payment method</label>
              <div className="flex flex-col space-y-2">
                <div>
                  <input type="radio" id="cashOnDelivery" name="paymentMethod" value="cashOnDelivery" checked={formData.paymentMethod === 'cashOnDelivery'} onChange={handleChange} />
                  <label htmlFor="cashOnDelivery" className="ml-2">Cash on delivery</label>
                </div>
                <div>
                  <input type="radio" id="razorpay" name="paymentMethod" value="razorpay" checked={formData.paymentMethod === 'razorpay'} onChange={handleChange} />
                  <label htmlFor="razorpay" className="ml-2">Razorpay</label>
                </div>
              </div>
            </div>
            <button onClick={handleSubmit} className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Place order</button>
          </div>
        </div>
      </div>
      <button onClick={handleSubmit} className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Place order</button>
    </div>
  );
};

export default CheckoutPage;
