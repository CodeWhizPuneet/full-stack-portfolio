function ProductCard({ name, price, inStock }) {
  return (
    <div style={cardStyle}>
      <h3>{name}</h3>
      <p><strong>Price:</strong> ${price}</p>
      <span style={inStock ? stockBadge : outOfStockBadge}>
        {inStock ? "In Stock" : "Out of Stock"}
      </span>
    </div>
  );
}

const cardStyle = {
  background: "white",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 6px 15px rgba(0,0,0,0.08)",
  marginTop: "20px",
};

const stockBadge = {
  background: "#16a34a",
  color: "white",
  padding: "6px 10px",
  borderRadius: "6px",
  fontSize: "12px",
};

const outOfStockBadge = {
  background: "#dc2626",
  color: "white",
  padding: "6px 10px",
  borderRadius: "6px",
  fontSize: "12px",
};

export default ProductCard;