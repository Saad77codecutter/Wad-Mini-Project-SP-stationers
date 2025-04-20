import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/products.css';


const Products = () => {
  const [product, setProduct] = useState({
    name: '',
    category: '',
    brand: '',
    price: '',
    price_range: '',
    color: '',
    material: '',
    available: true,
    status: 'Available',
    stock: {
      available: true,
      quantity: ''
    },
    rating: {
      average: '',
      reviews_count: ''
    },
    dimensions: {
      height: '',
      width: '',
      depth: ''
    },
    discount: {
      active: false,
      percentage: '',
      valid_till: ''
    },
   
    supplier: {
      supplier_name: '',
      contact: '',
      location: ''
    },
  
    images: [],
    date_added: new Date().toISOString()
  });

  const [productsList, setProductsList] = useState([]);
  const [featuresText, setFeaturesText] = useState('');
  const [tagsText, setTagsText] = useState('');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/products');
      setProductsList(res.data);
    } catch (error) {
      console.error('Failed to fetch products:', error.message);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleStockChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      stock: { ...prev.stock, [name]: value }
    }));
  };

  const handleRatingChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      rating: { ...prev.rating, [name]: value }
    }));
  };

  const handleDimensionChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      dimensions: { ...prev.dimensions, [name]: value }
    }));
  };

  const handleDiscountChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      discount: { ...prev.discount, [name]: value }
    }));
  };

  const handleSupplierChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      supplier: { ...prev.supplier, [name]: value }
    }));
  };

  const handleFeaturesChange = (e) => {
    setFeaturesText(e.target.value);
  };

  const handleTagsChange = (e) => {
    setTagsText(e.target.value);
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setProduct((prev) => ({
      ...prev,
      images: [...prev.images, ...files]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Convert features and tags into arrays
      const featuresArray = featuresText.split(',').map(f => f.trim()).filter(f => f);
      const tagsArray = tagsText.split(',').map(t => t.trim()).filter(t => t);
  
      const formData = new FormData();
  
      for (const key in product) {
        if (typeof product[key] !== 'object' || Array.isArray(product[key])) {
          formData.append(key, product[key]);
        }
      }
      console.log(tagsArray)
      console.log(featuresArray)
      console.log(JSON.stringify(tagsArray))
      // Append JSON objects for structured data
      formData.append('stock', JSON.stringify(product.stock));
      formData.append('rating', JSON.stringify(product.rating));
      formData.append('dimensions', JSON.stringify(product.dimensions));
      formData.append('discount', JSON.stringify(product.discount));
      formData.append('supplier', JSON.stringify(product.supplier));
      formData.append('features', JSON.stringify(featuresArray)); // Ensure it's stringified
      formData.append('tags', JSON.stringify(tagsArray)); // Ensure it's stringified
  
      // Append image files
      product.images.forEach((img) => {
        formData.append('images', img);
      });
      for (let pair of formData.entries()) {
        console.log(`${pair[0]}:`, pair[1]);
      }
      
      
      const res = await axios.post('http://localhost:5000/api/products/', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      
      console.log("✅ Product successfully added:", res.data);
      alert('Product added!');
      setProduct((prev) => ({ ...prev, name: '', images: [] }));
      setFeaturesText('');
      setTagsText('');
      fetchProducts();
    } catch (error) {
      console.error('❌ Error adding product:', error.response?.data || error.message);
    }
  };
  
  return (
    <div className="container my-4">
      <h2 className="mb-4">All Products</h2>
      <div className="products-container">
        {productsList.map((p, i) => (
          <div key={i} className="product-card">
            <h5>{p.name}</h5>
            <p><strong>Brand:</strong> {p.brand}</p>
            <p><strong>Price:</strong> ₹{p.price}</p>
            <p><strong>Category:</strong> {p.category}</p>
             {/* Display product images */}
             {p.images && p.images.length > 0 && (
  <div className="product-images">
   {p.images && p.images.map((image, index) => {
  console.log(`Image ${index} full path: /Image/${image}`);
  return (
    <img
      key={index}
      src={`/Image/${image}`}
      alt={`${p.name} - ${index + 1}`}
      className="product-image"
    />
  );
})}

  </div>
)}

    </div>
        ))}
    </div>

      <h3 className="mt-5 mb-3">Add New Product</h3>
      <form className="product-form" onSubmit={handleSubmit}>
  <div className="form-grid">
    <input type="text" name="name" placeholder="Name" value={product.name} onChange={handleInputChange} required />

    {/* Replaced with select */}
    <select
      name="category"
      value={product.category}
      onChange={handleInputChange}
      required
    >
      <option value="">Select Category</option>
      <option value="Stationery">Stationery</option>
      <option value="Gift">Gift</option>
    </select>

    <input type="text" name="brand" placeholder="Brand" value={product.brand} onChange={handleInputChange} required />
    <input type="number" name="price" placeholder="Price" value={product.price} onChange={handleInputChange} required />

    {/* Replaced with select */}
    <select
      name="price_range"
      value={product.price_range}
      onChange={handleInputChange}
    >
      <option value="">Select Price Range</option>
      <option value="Low">Low</option>
      <option value="Medium">Medium</option>
      <option value="High">High</option>
      <option value="Very High">Very High</option>
    </select>

    <input type="text" name="color" placeholder="Color" value={product.color} onChange={handleInputChange} />
    <input type="text" name="material" placeholder="Material" value={product.material} onChange={handleInputChange} />

    <input type="number" name="quantity" placeholder="Quantity" value={product.stock.quantity} onChange={handleStockChange} />

    <input type="number" name="average" placeholder="Rating Avg" value={product.rating.average} onChange={handleRatingChange} step="0.1" />
    <input type="number" name="reviews_count" placeholder="Review Count" value={product.rating.reviews_count} onChange={handleRatingChange} />

    <input type="text" name="height" placeholder="Height" value={product.dimensions.height} onChange={handleDimensionChange} />
    <input type="text" name="width" placeholder="Width" value={product.dimensions.width} onChange={handleDimensionChange} />
    <input type="text" name="depth" placeholder="Depth" value={product.dimensions.depth} onChange={handleDimensionChange} />

    <input type="number" name="percentage" placeholder="Discount %" value={product.discount.percentage} onChange={handleDiscountChange} />
    <input type="date" name="valid_till" placeholder="Discount Valid Till" value={product.discount.valid_till} onChange={handleDiscountChange} />

    <input type="text" placeholder="Features (comma-separated)" value={featuresText} onChange={handleFeaturesChange} />
    <input type="text" placeholder="Tags (comma-separated)" value={tagsText} onChange={handleTagsChange} />

    <input type="text" name="supplier_name" placeholder="Supplier Name" value={product.supplier.supplier_name} onChange={handleSupplierChange} />
    <input type="text" name="contact" placeholder="Supplier Contact" value={product.supplier.contact} onChange={handleSupplierChange} />
    <input type="text" name="location" placeholder="Supplier Location" value={product.supplier.location} onChange={handleSupplierChange} />

    <input type="file" multiple onChange={handleImageChange} />
  </div>

  <button className="btn btn-primary mt-3" type="submit">Submit</button>
</form>

    </div>
  );
};

export default Products;
