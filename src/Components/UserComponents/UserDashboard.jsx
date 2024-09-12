import { useEffect, useState } from "react";
// import { img1, img2, img3 } from "../../constants";
import Sidebar from "../UserComponents/Sidebar";
import LastOrder from "../UserComponents/LastOrder";

import PopularProducts from "../UserComponents/PopularProducts";
import AccountSection from "../UserComponents/AccountSection";
import Address from "../UserComponents/Address";
import OrderProduct from "../UserComponents/OrderProduct";
import { useNavigate } from "react-router";
import { auth } from "../../firebaseConfig";
import { apiString } from "../../services/apicalls";

export default function UserDashboard() {
  const [selectedSection, setSelectedSection] = useState("dashboard");
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.currentUser) {
      return navigate("/login");
    }
    const fetchOrders = async () => {
      try {
        const response = await fetch(apiString + "/orders/fetchorders", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firebaseUid: auth.currentUser.uid,
          }),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setOrders(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchOrders();
  }, [auth]);

  const renderSection = () => {
    switch (selectedSection) {
      case "dashboard":
        return (
          <div className="w-full flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 px-2 sm:px-4">
              <LastOrder orders={orders} />
            </div>
            <div className="w-full">
              <PopularProducts />
            </div>
          </div>
        );
      case "account":
        return (
          <div className="w-full">
            <AccountSection />
          </div>
        );
      case "orders":
        return (
          <div className="w-full">
            <div className=" px-2 space-y-2 md:space-y-4 overflow-y-auto">
              {orders.map((order) => (
                <OrderProduct key={order.id} order={order} />
              ))}
            </div>
          </div>
        );
      case "addresses":
        return (
          <div className="w-full">
            <Address />
          </div>
        );
      case "logout":
        return <div className="w-full">Logout Section</div>;
      default:
        return null;
    }
  };

  return (
    <div className="sm:flex">
      <Sidebar onSelectSection={setSelectedSection} />
      {renderSection()}
    </div>
  );
}
