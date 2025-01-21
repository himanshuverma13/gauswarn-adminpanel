import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  AddProductAPI,
  DeleteProductAPI,
  GetProductAPI,
  UpdateProductAPI,
} from "../APIs/api";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ProductDetailCards = () => {
  const [productDetails, setProductDetails] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [currentProductIndex, setCurrentProductIndex] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  const [currentPrdId, setcurrentPrdId] = useState();

  const { register, handleSubmit, setValue, watch, reset } = useForm();

  const fetchProducts = async () => {
    const response = await GetProductAPI();
    setProductDetails(response?.products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const openModal = () => {
    setValue("product_name", "");
    setValue("product_description", "");
    setValue("product_price", "");
    setValue("product_quantity", "");
    setValue("product_stock", "");
    setValue("product_category", "");
    setValue("product_website_name", "");
    setValue("product_image", "");
    reset();
    setIsEdit(false);
    setCurrentProductIndex(null);
    setModalOpen(true);
  };

  const SetImage = watch("product_image")

  const openEditModal = (product, index) => {
    if (product) {
      setIsEdit(true);
      setCurrentProductIndex(index);
      setValue("product_name", product?.product_name);
      setValue("product_description", product?.product_description);
      setValue("product_price", product?.product_price);
      setValue("product_quantity", product?.product_quantity);
      setValue("product_stock", product?.product_stock);
      setValue("product_category", product?.product_category);
      setValue("product_website_name", product?.product_website_name);
      setValue("product_image", product?.product_image);
    }
    setModalOpen(true);
  };

  const handleImageUpload = (event, callback) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        callback(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (data) => {
    try {
      if (isEdit) {
        const updatedProducts = [...productDetails];
        updatedProducts[currentProductIndex] = { ...data };
        setProductDetails(updatedProducts);
        const response = await UpdateProductAPI(productDetails[currentProductIndex]?.product_id, data);
        toast.success(response?.message);
        fetchProducts();
      } else {
        setProductDetails([...productDetails, data]);
        const response = await AddProductAPI(data);
        toast.success(response?.data?.message);

        fetchProducts();
      }
    } catch (error) {
      console.log("error: ", error);
    }
    setModalOpen(false);
  };

  const confirmDelete = async () => {
    try {
      const response = await DeleteProductAPI(currentPrdId);
      toast.success(response?.message)
      // setProductDetails(updatedProducts);
      setDeleteConfirm(false);
      fetchProducts();
    } catch (error) {
      console.log("error: ", error);
    }
  };

  return (
    <>
      <div>
        <div className="m-3">
          <button
            type="button"
            className="btn btn-primary py-2"
            onClick={() => openModal()}
          >
            Add Product
          </button>
          {/* <h2 className='text-uppercase text-center border-bottom py-3'>Product's</h2> */}

        </div>

        <div className="container-fluid page-body-wrapper">
          <div className="row product-item-wrapper mx-2 mt-3 w-100">
            {productDetails?.map((item, index) => (
              <div className="col-lg-4 col-md-6 product-item mb-3" key={item?.product_id}>
                <div className="card shadow" >
                  <div className="card-product-img">
                    <img
                      src={item?.product_image}
                      alt="product" class=" border-bottom" />
                  </div>
                  <div className="p-3">
                    <h4 className="card-title text-uppercase font-weight-bold">{item?.product_name}</h4>
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="font-weight-bold text-danger"> Price: {item?.product_price}</p>
                      <p className="font-weight-bold">Quantity:-  {item?.product_quantity}</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center font-weight-bold">
                      <p className="text-muted">Category: {item?.product_category}</p>
                      <p>Stock: {item?.product_stock}</p>
                    </div>
                    <hr className="my-0 mb-2" />

                    <p className="card-text text-truncate">{item?.product_description}</p>
                    <div className="d-flex my-2">
                      <button
                        className="btn btn-success px-3"
                        onClick={() => openEditModal(item, index)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-primary px-3"
                        onClick={() => {
                          setCurrentProductIndex(index);
                          setDeleteConfirm(true);
                          setcurrentPrdId(item?.product_id);
                        }}
                      >
                        Delete
                      </button>
                    </div>

                  </div>
                </div>
                {/* <div className="card shadow">
                  <div className="card-body">
                    <div className="product-img-outer">
                      <img
                        className="product_image"
                        src={item?.product_image}
                        alt="product"
                      />
                    </div>
                    <h4 className="product-title text-uppercase">{item?.product_name}</h4>
                    <p className="product-price">
                      Price: {item?.product_price}
                    </p>
                    <p className="product-actual-price font-weight-bold">
                      Quantity:-  {item?.product_quantity}
                    </p>
                    <p className="product-description text-truncate">
                      {item?.product_description}
                    </p>
                    <p className="product-category font-weight-bolder">
                      Category: {item?.product_category}
                    </p>
                    <p className="font-weight-bold">
                      Stock: {item?.product_stock}
                    </p>
                    <div className="d-flex my-2">
                      <button
                        className="btn btn-success px-3"
                        onClick={() => openEditModal(item, index)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-primary px-3"
                        onClick={() => {
                          setCurrentProductIndex(index);
                          setDeleteConfirm(true);
                          setcurrentPrdId(item?.product_id);
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div> */}
              </div>
            ))}


          </div>
        </div>

        {/* Add/Edit Modal */}
        {modalOpen && (
          <div className="modal show d-block " tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
              <div className="modal-content px-3">
                <div className="modal-header">
                  <h5 className="modal-title font-weight-bold text-uppercase">
                    {isEdit ? "Edit Product" : "Add Product"}
                  </h5>
                  <button
                    type="button"
                    className="close"
                    onClick={() => setModalOpen(false)}
                  >
                    <span>&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form className="row" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group col-lg-6">
                      <label className="font-weight-bold text-uppercase">Name</label>
                      <input
                        type="text"
                        className="form-control shadow"
                        {...register("product_name", { required: true })}
                      />
                    </div>
                    <div className="form-group col-lg-6">
                      <label className="font-weight-bold text-uppercase">Description</label>
                      <textarea
                        className="form-control"
                        {...register("product_description", { required: true })}
                      ></textarea>
                    </div>
                    <div className="form-group col-lg-6">
                      <label className="font-weight-bold text-uppercase">Price</label>
                      <input
                        type="number"
                        className="form-control shadow"
                        {...register("product_price", { required: true })}
                      />
                    </div>
                    <div className="form-group col-lg-6">
                      <label className="font-weight-bold text-uppercase">Quantity</label>
                      <input
                        type="number"
                        className="form-control"
                        {...register("product_quantity", { required: true })}
                      />
                    </div>
                    <div className="form-group col-lg-6">
                      <label className="font-weight-bold text-uppercase">Stock</label>
                      <input
                        type="number"
                        className="form-control shadow"
                        {...register("product_stock", { required: true })}
                      />
                    </div>
                    <div className="form-group col-lg-6">
                      <label className="font-weight-bold text-uppercase text-truncate">Category</label>
                      <input
                        type="text"
                        className="form-control shadow"
                        {...register("product_category", { required: true })}
                      />
                    </div>
                    <div className="col-lg-6 mb-3">
                      <label className="font-weight-bold text-uppercase">Select</label>
                      <select class="form-select form-select-lg px-5 py-2 shadow" aria-label="Default select example"
                      {...register("product_website_name", { required: true })}
                      >
                        <option selected>Select</option>
                        <option value="RajLaxmi">Raj Laxmi</option>
                        <option value="GauSwarn">GauSwarn</option>
                        <option value="Both">Both</option>
                      </select>
                    </div>
                    <div className="form-group col-lg-12">
                      {SetImage &&
                        <img src={SetImage} width={100} height={100} alt="Loading" />
                      }
                      <label className="font-weight-bold text-uppercase">Image</label>
                      <input
                        type="file"
                        className="form-control shadow"
                        accept="image/*"
                        onChange={(event) =>
                          handleImageUpload(event, (base64) =>
                            setValue("product_image", base64)
                          )
                        }
                      />
                    </div>
                    <div className="modal-footer">
                      <button type="submit" className="btn btn-primary">
                        {isEdit ? "Save Changes" : "Add Product"}
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => setModalOpen(false)}
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Delete Confirmation Modal */}
        {deleteConfirm && (
          <div className="modal show d-block" tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Delete Confirmation</h5>
                  <button
                    type="button"
                    className="close"
                    onClick={() => setDeleteConfirm(false)}
                  >
                    <span>&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <p>Are you sure you want to delete this product?</p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={confirmDelete}
                  >
                    Confirm
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setDeleteConfirm(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductDetailCards;
