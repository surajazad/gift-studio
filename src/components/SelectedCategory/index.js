// Libraries

import React, { useState , useEffect} from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import productsList from "../../data/productsLists.json";
import "./styles.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

// Styles

const StyleMainDiv = {
  display: "flex",
  padding: "8px",
  margin: "8px",
  borderBottom: "1px solid #e8e3df",
};

const StyleImage = { width: "100px", border: "1px solid #e8e3df" };

const StyleLabel = {
  padding: "24px",
  margin: "24px",
  textTransform: "uppercase",
};

// Public.

const SelectedCategory = ({ data }) => {
  const categoriesData = useSelector((state) => state.categoriesData.data);
  const [show, setShow] = useState(false);
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('');
  const handleClose = () => setShow(false);
  const handleShow = (key) => {
    console.log("show>>", key);
    console.log("prod", productsList[key.toLowerCase()]);
    setCategory(key)
    setProducts(productsList[key.toLowerCase()]);
    setShow(true);
  }

  useEffect(()=>{

  },[show, products]);

  const handleClick = (key) =>{
    
  }

  return (
    <>
       <div className="title">
        <h1>Add Your Products</h1>
        <p></p>
      </div>
      <div className="breadcrumbs">
        <Link to={`/categories`}>
          Back
        </Link>
      </div>
      {categoriesData.map(
        (item, index) =>
          item.isSelected && (
            <div key={index} style={StyleMainDiv} onClick={()=>{handleShow(item.label)}}>
              <img src={item.imgSrc} alt={item.label} style={StyleImage} />
              <div style={StyleLabel}>{item.label}</div>
            </div>
          )
      )}
      <Link to={`/gift_wrap`}>
        <button className="find_gift_btn">Next</button>
      </Link>
      <Modal show={show} onHide={handleClose} animation={true} fullscreen>
        <Modal.Header closeButton>
          <Modal.Title>{category}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container text-center">
        <div className="row row-cols-2 row-cols-sm-2 row-cols-md-4">
          {products?.map((item, index) => (
            <div className="col">
              <div className="card h-77">
                <img
                  src={item.imgSrc}
                  alt={item.label}
                  className="card-img-top"
                />
                <div className="card-body">
                  <span className="card-title">
                    <span>{item.label}</span>
                    {/* <span className="">Place heart Icon here
                    </span> */}
                  </span>
                </div>
                <div className="card-footer" onClick={() => { handleClick(item.key) }}>
                  {item.isSelected ?
                    <img
                      src="images/utility/check-mark.png"
                      alt="selected"
                      className="select-icon"
                    /> :
                    <small className="text-body-secondary">ADD</small>
                  }
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={handleClose}
            className="find_gift_btn"
          >
            CLOSE
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SelectedCategory;
