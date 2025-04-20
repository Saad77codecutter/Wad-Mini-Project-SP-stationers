import { useState, useEffect } from "react";
import { Button, Table, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { deleteFromCart } from "../redux/action/cartActions";
import { decreaseQty, increaseQty,addQty } from "../redux/action/productActions";

export default function CartDetails() {
   const cartProduct = useSelector((state) => state.cartReducer);
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const [total, setTotal] = useState(0);
   const [showModal, setShowModal] = useState(false);
   const [customer, setCustomer] = useState({
      name: "",
      email: "",
      phone: "",
      address: ""
   });

   useEffect(() => {
      let cartTotal = 0;
      cartProduct.forEach(item => {
         cartTotal += item.price * item.qty;
      });
      setTotal(cartTotal);
   }, [cartProduct]);

   useEffect(() => {
      const fetchCustomerData = async () => {
         const customerId = localStorage.getItem("customerId");
         console.log(customerId)
         if (!customerId) return;

         try {
            const res = await axios.get(`http://localhost:5000/api/auth/customers/${customerId}`);
            setCustomer(res.data);
         } catch (err) {
            console.error("Failed to fetch customer details", err);
         }
      };

      fetchCustomerData();
   }, []);

   const handleDecrease = (item, index) => {
      if (item.qty > 1) {
         dispatch(decreaseQty(item.qty, index));
      }
   };
   
   const handleIncrease = (item, index) => {
      dispatch(addQty(item.qty, index));
   };
   
   const handleCheckout = async () => {
      const customerId = localStorage.getItem("customerId");
      if (!customerId) {
         alert("Please login before placing an order.");
         navigate("/cls");
         return;
      }
   
      const orderData = {
         products: cartProduct.map(item => ({
            product: item._id,
            quantity: item.qty
         })),
         customer,
         total_price: total
      };
   
      try {
         const res = await axios.post("http://localhost:5000/api/orders/", orderData);
         alert("Order placed successfully!");
         navigate("/");
      } catch (err) {
         console.error(err);
         alert("Failed to place order. Please try again.");
      }
   };
   

   return (
      <center>
         <br />
         <h1>Shopping Cart</h1><br />
         {cartProduct.length > 0 ? (
            <>
               <Table striped bordered hover style={{ width: '50%', margin: '0 auto' }}>
                  <thead>
                     <tr>
                        <th></th>
                        <th style={{ textAlign: "center" }}>Price(Rs)</th>
                        <th style={{ textAlign: "center" }}>Quantity</th>
                        <th style={{ textAlign: "center" }}>Image</th>
                        <th style={{ textAlign: "center" }}>Product Name</th>
                     </tr>
                  </thead>
                  <tbody>
                     {cartProduct.map((item,index) => (
                        <tr key={item.code}>
                           <td style={{ textAlign: "center" }}>
                              <Button
                                 style={{ backgroundColor: "#F5D43E", color: "black", borderColor: "white" }}
                                 onClick={() => dispatch(deleteFromCart(item))}
                              > X </Button>
                           </td>
                           <td style={{ textAlign: "center" }}>{item.price * item.qty} </td>
                           <td style={{ textAlign: "center" }}>
                              <Button
                                 style={{ backgroundColor: "#F5D43E", borderColor: "#F5D43E", color: "black" }}
                                 onClick={() => handleDecrease(item,index)}
                              >-</Button>{" "}
                              {item.qty}{" "}
                              <Button
                                 style={{ backgroundColor: "#F5D43E", borderColor: "#F5D43E", color: "black" }}
                                 onClick={() => handleIncrease(item,index)}
                              >+</Button>
                           </td>
                           <td style={{ textAlign: "center" }}>
                              <img src={`Image/${item.images[0]}`}
                                 style={{ width: 75, height: 75 }} alt={item.name} />
                           </td>
                           <td style={{ textAlign: "center" }}>{item.name}</td>
                        </tr>
                     ))}
                  </tbody>
               </Table>

               <br /><br />
               <h3>Total: {total}</h3>

              

               <br /><br />

               <Button
                  variant="success"
                  onClick={() => setShowModal(true)}
               >
                  Checkout
               </Button>

               <Modal show={showModal} onHide={() => setShowModal(false)}>
                  <Modal.Header closeButton>
                     <Modal.Title>Confirm Order</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                     <p><strong>Name:</strong> {customer.name}</p>
                     <p><strong>Email:</strong> {customer.email}</p>
                     <p><strong>Phone:</strong> {customer.phone}</p>
                     <p><strong>Address:</strong> {customer.address}</p>
                     <p><strong>Total:</strong> ₪{total}</p>
                  </Modal.Body>
                  <Modal.Footer>
                     <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Cancel
                     </Button>
                     <Button variant="primary" onClick={handleCheckout}>
                        Place Order
                     </Button>
                  </Modal.Footer>
               </Modal>
            </>
         ) : (
            <h1 style={{ color: "gray" }}>Your cart is empty :</h1>
         )}
         <br /><br /><br /><br />
      </center>
   );
}
