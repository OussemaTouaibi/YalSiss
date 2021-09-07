import React, { Fragment, useState, useEffect } from 'react'

import Layout from'../../../userInterface/components/shared/layout'
import Sidebar from '../sideBar/sideBar'
import MetaData from '../../../userInterface/components/shared/metaData'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { updateProduct, getProductDetails, clearErrors } from '../../../actions/productActions'
import { allCategories, getCategorySubs } from '../../../actions/categoryActions'
import { UPDATE_PRODUCT_RESET } from '../../../constants/productConstants'
import './productList.scss'

import { Select } from "antd";
const { Option } = Select;

const UpdateProduct = ({ match, history }) => {


    const { categories } = useSelector(state => state.allCategories);

    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [categoriess, setCategoriess] = useState([]);

    const [stock, setStock] = useState(0);
    const [seller, setSeller] = useState('');
    const [oldImages, setOldImages] = useState([]);
    const [images, setImages] = useState([]);
    const [imagesPreview, setImagesPreview] = useState([]);

    const initialState = {
        colors: ["Black", "Brown" ,"White", "Blue", "red", "pink", "yellow"],
        size: ["S", "M" ,"L", "XL", "XXL", "XXXL", "36","37","38","39","40","41","42","43","44","45"],
        sub: [],   
      };
      
    const [values, setValues] = useState(initialState);
        const {
           colors,
           size, 
           sub
        } = values; 
  


   
    const alert = useAlert();
    const dispatch = useDispatch();

    const { error, product } = useSelector(state => state.productDetails)
    const { loading, error: updateError, isUpdated } = useSelector(state => state.product);

    const productId = match.params.id;

    useEffect(() => {
        dispatch(allCategories());
        if (product && product._id !== productId) {
            dispatch(getProductDetails(productId));
        } else {
            setName(product.name);
            setPrice(product.price);
            setDescription(product.description);
            setCategory(product.category);
            setSeller(product.seller);
            setStock(product.stock);
            setOldImages(product.images);
           setValues({ ...values, size  });
           setValues({ ...values, colors  });
           setValues({ ...values, sub  });
        }

        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }

        if (updateError) {
            alert.error(updateError);
            dispatch(clearErrors())
        }


        if (isUpdated) {
            history.push('/admin/products');
            alert.success('Product updated successfully');
            dispatch({ type: UPDATE_PRODUCT_RESET })
        }

    }, [dispatch, alert, error, isUpdated, history, updateError, product, productId])


    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set('name', name);
        formData.set('price', price);
        formData.set('description', description);
        formData.set('category', category);
        formData.set('values', values);
        formData.set('stock', stock);
        formData.set('seller', seller);

        images.forEach(image => {
            formData.append('images', image)
        })

        dispatch(updateProduct(product._id, formData))
    }

    const onChange = e => {

        const files = Array.from(e.target.files)

        setImagesPreview([]);
        setImages([])
        setOldImages([])

        files.forEach(file => {
            const reader = new FileReader();

            reader.onload = () => {
                if (reader.readyState === 2) {
                    setImagesPreview(oldArray => [...oldArray, reader.result])
                    setImages(oldArray => [...oldArray, reader.result])
                }
            }

            reader.readAsDataURL(file)
        })
    }


    const [subOptions, setSubOptions] = useState([]);

    const [showSub, setShowSub] = useState(false);

    const handleCategoryChange = (e) => {
        
        e.preventDefault();
        console.log('CLICKED CATEGORY', e.target.value);
        setCategoriess({sub:[], category: e.target.value });
        setCategory(e.target.value);
        getCategorySubs(e.target.value).then(res => {
            setSubOptions(res.data);
            
            console.log('SUBS OPTIONS ON  CATEGORY CLICK ', res);
        });
        setShowSub(true);

    }

    return (
        <Layout>
        <Fragment>
            <MetaData title={'Update Product'} />
            <div className="row">
                <div className="col-12 col-md-2">
                    <Sidebar />
                </div>

                <div className="col-12 col-md-10">
                    <Fragment>
                        <div className="wrapper my-5">
                            <form className="shadow-lg" onSubmit={submitHandler} encType='multipart/form-data'>
                                <h1 className="mb-4">Update Product</h1>

                                <div className="form-group">
                                    <label htmlFor="name_field">Name</label>
                                    <input
                                        type="text"
                                        id="name_field"
                                        className="form-control"
                                        style={{width:'100%'}}
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="price_field">Price</label>
                                    <input
                                        type="text"
                                        id="price_field"
                                        className="form-control"
                                        style={{width:'100%'}}
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="description_field">Description</label>
                                    <textarea className="form-control" id="description_field" rows="8" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                                </div>
                                <div>
                             <label> Colors </label>
                        <Select
                        mode="multiple"
                        style={{width: '100%'}}
                        placeholder="Please select"
                        value={colors}
                        onChange={(value) => setValues({ ...values, colors : value })}
                        >
                            {
                            
                            colors.map((r) => (<Option key={r} value={r}>{r}</Option> ))
                            
                            };
                        
                                   </Select>
                             </div> 
                       


                         <div >
                             <label> Size </label>
                        <Select
                        mode="multiple"
                        style={{width: '100%'}}
                        placeholder="Please select"
                        value={size}
                        onChange={(value) => setValues({ ...values, size : value })}
                        >
                            {
                            
                            size.map((b) => (<Option key={b} value={b}>{b}</Option> ))
                            
                            };
                        
                                   </Select>
                             </div> 
                             <div className="form-group">
                                    <label htmlFor="category_field">Category</label>
                                    <select
              name="category"
              className="form-control"
              onChange={handleCategoryChange}
              suboption={subOptions}
              showSub={showSub}
            >
              <option>Please select</option>
              {categories.length > 0 &&
                categories.map((e) => (
                  <option key={e._id} value={e._id}>
                    {e.name}
                  </option>
                ))}
           
            </select>
           
                                </div>



                             
                           { showSub && ( <div >
                             <label> Sub Category</label>
                        <Select
                        mode="multiple"
                        style={{width: '100%'}}
                        placeholder="Please select"
                        value={sub}
                        onChange={(value) => setValues({ ...values, sub : value })}
                        >
                            {subOptions.length &&
                            
                            subOptions.map((s) => (<Option key={s._id} value={s._id}>{s.name}</Option> ))
                            
                            };
                        
                                   </Select>
                             </div> )}

                                <div className="form-group">
                                    <label htmlFor="stock_field">Stock</label>
                                    <input
                                        type="number"
                                        id="stock_field"
                                        className="form-control"
                                        value={stock}
                                        onChange={(e) => setStock(e.target.value)}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="seller_field">Seller Name</label>
                                    <input
                                        type="text"
                                        id="seller_field"
                                        className="form-control"
                                        value={seller}
                                        style={{width:'100%'}}
                                        onChange={(e) => setSeller(e.target.value)}
                                    />
                                </div>

                                <div className='form-group'>
                                    <label>Images</label>

                                    <div className='custom-file'>
                                        <input
                                            type='file'
                                            name='product_images'
                                            className='custom-file-input'
                                            id='customFile'
                                            onChange={onChange}
                                            multiple
                                        />
                                        <label className='custom-file-label' htmlFor='customFile'>
                                            Choose Images
                                 </label>
                                    </div>

                                    {oldImages && oldImages.map(img => (
                                        <img key={img} src={img.url} alt={img.url} className="mt-3 mr-2" width="55" height="52" />
                                    ))}

                                    {imagesPreview.map(img => (
                                        <img src={img} key={img} alt="Images Preview" className="mt-3 mr-2" width="55" height="52" />
                                    ))}

                                </div>


                                <button
                                    id="login_button"
                                    type="submit"
                                    className="nomad-btn"
                                    disabled={loading ? true : false}
                                >
                                    UPDATE
                            </button>

                            </form>
                        </div>
                    </Fragment>
                </div>
            </div>

        </Fragment>
        </Layout>
    )
}

export default UpdateProduct