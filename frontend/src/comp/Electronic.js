import { useEffect, useState } from "react";
import { Button, Card, FormControl, InputGroup } from "react-bootstrap";
import ShowDetails from "./ShowDetails";
import { TiShoppingCart } from 'react-icons/ti';
import axios from "axios";

export default function Stationery() {
  const [stationeries, setStationeries] = useState([]);
  const [filteredStationeries, setFilteredStationeries] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const fetchStationeries = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products");
        const filteredData = response.data.filter(item => item.category === "Gift");
        setStationeries(filteredData);

        // Initially, filter the stationeries
        setFilteredStationeries(filteredData);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchStationeries();
  }, []);

  // Fetch recommendations when the user selects a product
  const fetchRecommendations = async (userId, productId) => {
    try {
      const response = await axios.get(`http://localhost:5001/recommend`, {
        params: {
          userId,
          productId
        }
      });
      setRecommendations(response.data);
    } catch (error) {
      console.error("Failed to fetch recommendations:", error);
    }
  };

  // Handle quick view button click
  const handleQuickView = (item) => {
    setModalShow(true);
    setSelectedProduct(item);

    // Example of how to fetch recommendations
    fetchRecommendations("123", item._id); // You would replace "123" with the actual user ID
  };

  // Enhanced Filter Logic
  useEffect(() => {
    const filtered = stationeries.filter((item) => {
      const search = searchTerm.toLowerCase().trim();
      return (
        item.name?.toLowerCase().includes(search) ||
        item.description?.toLowerCase().includes(search) ||
        item.category?.toLowerCase().includes(search)
      );
    });
    setFilteredStationeries(filtered);
  }, [searchTerm, stationeries]);

  return (
    <>
      <center dir="ltr">
        <br /><br /><br />

        {/* Search Bar */}
        <div style={{ maxWidth: '450px', marginBottom: '30px', position: 'relative' }}>
          <InputGroup className="shadow-sm rounded" style={{ border: '1px solid #ccc' }}>
            <InputGroup.Text style={{ backgroundColor: '#F5D43E', border: 'none' }}>
              🔍
            </InputGroup.Text>
            <FormControl
              placeholder="Type to search stationery items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                borderLeft: '0',
                borderRadius: '0 8px 8px 0',
              }}
            />
          </InputGroup>
        </div>

        {/* Product Cards */}
        {filteredStationeries.length > 0 ? (
          filteredStationeries.map((item) => (
            <Card
              key={item._id}
              style={{
                width: '18rem',
                display: "inline-block",
                backgroundColor: "white",
                textAlign: "center",
                borderColor: "#F5D43E",
                margin: 5
              }}
            >
              <Card.Img variant="top" src={`Image/${item.images[0]}`} style={{ width: 100, height: 100 }} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Button
                  style={{ backgroundColor: "#F5D43E", borderColor: "#F5D43E", color: "black" }}
                  variant="primary"
                  onClick={() => handleQuickView(item)} // Trigger the quick view logic
                >
                  <TiShoppingCart /> Quick View
                </Button>
              </Card.Body>
            </Card>
          ))
        ) : (
          <p>No products found.</p>
        )}

        <br /><br /><br /><br />
      </center>

      <ShowDetails
        products={selectedProduct}
        recommendations={recommendations} // Pass recommendations to the modal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
