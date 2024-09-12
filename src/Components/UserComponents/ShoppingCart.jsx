import { useEffect } from "react";
import CartProduct from "../UserComponents/CartProduct";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  calculateTotals,
  removeItem,
  updateQuantity,
} from "../../services/cart/cartSlice";
export default function ShoppingCartDialog({ size, handleOpen }) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);
  const totals = useSelector((state) => state.cart.totals);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [products, dispatch]);

  const handleQuantityChange = (productId, delta, size) => {
    dispatch(updateQuantity({ productId, quantity: delta, size }));
  };

  const handleDelete = (id, size) => {
    dispatch(removeItem({ productId: id, size: size }));
  };

  function handleCheckout() {
    navigate("/checkout");
    handleOpen();
  }

  return (
    <Dialog
      open={
        size === "xs" ||
        size === "sm" ||
        size === "md" ||
        size === "lg" ||
        size === "xl" ||
        size === "xxl"
      }
      size={size || "md"}
      handler={handleOpen}
    >
      <DialogHeader>
        <p className="px-4">SHOPPING CART</p>
      </DialogHeader>
      <DialogBody>
        {products.length < 1 ? (
          <div className="max-h-[50vh] px-1 md:px-4 space-y-4 md:space-y-4 overflow-y-auto">
            <p>Add Products to your cart</p>
          </div>
        ) : (
          <div className="max-h-[50vh] px-1 md:px-4 space-y-4 md:space-y-4 overflow-y-auto">
            {products.map((product) => (
              <CartProduct
                key={product.productId}
                product={product}
                quantity={product.quantity}
                onQuantityChange={handleQuantityChange}
                onDelete={handleDelete}
                size={product.size}
              />
            ))}
          </div>
        )}
      </DialogBody>
      <DialogFooter>
        <div className="w-full px-2 md:px-4">
          <div className="footer flex justify-between">
            <div>
              <p>Net Total</p>
              <p>Taxes</p>
              <p>Shipping Charges</p>
              <p>Total</p>
            </div>
            <div>
              <p>Rs. {totals.netTotal}</p>
              <p>Rs. {totals.taxes}</p>
              <p>Rs. {totals.shippingCharges}</p>
              <p>Rs. {totals.total}</p>
            </div>
          </div>
          <div className="text-right pt-4">
            <Button
              variant="text"
              color="red"
              onClick={() => handleOpen(null)}
              className="mr-1"
            >
              <span>Close Cart</span>
            </Button>
            <Button variant="gradient" color="green" onClick={handleCheckout}>
              <span>Place Order</span>
            </Button>
          </div>
        </div>
      </DialogFooter>
    </Dialog>
  );
}
