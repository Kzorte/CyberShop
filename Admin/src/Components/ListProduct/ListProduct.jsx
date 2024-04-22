import React, { useEffect, useState } from 'react';
import './ListProduct.css';
import cross_icon from '../../assets/cross_icon.png';

const ListProduct = () => {
  const [allproducts, setAllProducts] = useState([]);
  const [editingProductId, setEditingProductId] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    category: "",
    old_price: "",
  });

  const fetchInfo = async () => {
    try {
      const response = await fetch("http://127.0.0.1:3000/allproducts");
      const data = await response.json();
      setAllProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const remove_product = async (id) => {
    try {
      await fetch("http://127.0.0.1:3000/removeproduct", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: id }),
      });
      await fetchInfo();
    } catch (error) {
      console.error("Error removing product:", error);
    }
  };


  // Client-side code
const edit_product = (product) => {
  console.log("Editing Product ID:", product.id);
  setEditingProductId(product.id);
  setFormData({
    name: product.name,
    image: product.image,
    category: product.category,
    old_price: product.old_price,
  });
};


  const cancelEdit = () => {
    setEditingProductId(null);
    setFormData({
      name: "",
      image: "",
      category: "",
      old_price: "",
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setFormData({ ...formData, image: reader.result });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://127.0.0.1:3000/editproduct/${editingProductId}`,
        {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      console.log(data);
      await fetchInfo();
      cancelEdit();
    } catch (error) {
      console.error("Error editing product:", error);
    }
  };

return (
  <div className="list-product">
    <h1>Daftar Semua Produk</h1>
    <div className="listproduct-format-main">
      <p>Produk</p>
      <p>Judul</p>
      <p>Harga</p>
      <p>Kategori</p>
      <p>Edit</p>
      <p>Hapus</p>
    </div>
    <div className="listproduct-allproducts">
      <hr />
      {allproducts.map((product, index) => (
        <div key={index} className="listproduct-format-main listproduct-format">
          <img
            src={product.image}
            alt=""
            className="listproduct-product-icon"
          />
          <p>{product.name}</p>
          <p>Rp{product.old_price}</p>
          <p>{product.category}</p>
          <button
            onClick={() => edit_product(product)}
            className="listproduct-edit-button"
          >
            Edit
          </button>
          <button
            onClick={() => remove_product(product.id)}
            className="listproduct-remove-button"
          >
            <b>Hapus</b>
          </button>
        </div>
      ))}
    </div>
    {editingProductId && (
      <div className="edit-form-container">
        <div className="edit-form-overlay" onClick={cancelEdit}></div>
        <div className="edit-form">
          <h2>Edit Produk</h2>
          <div className="edit-form-itemfield input">
            <form onSubmit={handleSubmit}>
              <p>Nama Produk</p>
              <input
                type="text"
                name="name"
                placeholder="Nama Produk"
                value={formData.name}
                onChange={handleChange}
              />
              <p>Kategori</p>
              <select
                className="edit-form-selector"
                name="category"
                placeholder="Kategori Produk"
                value={formData.category}
                onChange={handleChange}
              >
                <option value="SmartPhone">SmartPhone</option>
                <option value="NoteBook">Laptop</option>
                <option value="SmartWacth">SmartWacth</option>
              </select>
              <p>Harga</p>
              <input
                type="text"
                name="old_price"
                placeholder="Harga Lama Produk"
                value={formData.old_price}
                onChange={handleChange}
              />
              <p>Foto Produk</p>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
              />
              <div className="edit-form-image-preview">
                {formData.image && <img src={formData.image} alt="Preview" />}
              </div>
              <br />
              <div className="edit-form-buttons">
                <button type="submit">Simpan</button>
                <button type="button" onClick={cancelEdit}>
                  Batal
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )}
  </div>
);

}

export default ListProduct;
