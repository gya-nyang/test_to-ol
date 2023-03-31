import React from 'react';
import styles from './Css/ProductCreate.module.css';

function Create({imgName, productName, price, desc, onDataChange, onCreate}) {
    return (
        <>
            <div className={styles.ProductInput}>
            {/* <form className={styles.ProductInput}> */}
                <dl>
                    <dt>
                        <label htmlFor="productImgName">Product Img Name</label>
                    </dt>
                    <dd>
                        <input type="text" id="productImgName" placeholder="file name" name="imgName" value={imgName} onChange={onDataChange}/>
                    </dd>
                    <dt>
                        <label htmlFor="productName">Product Name</label>
                    </dt>
                    <dd>
                        <input type="text" id="productName" placeholder="product name" name="productName" value={productName} onChange={onDataChange}/>
                    </dd>
                    <dt>
                        <label htmlFor="productPrice">Product Price</label>
                    </dt>
                    <dd>
                        <input type="text" id="productPrice" placeholder="product price" name="price" value={price} onChange={onDataChange}/>
                    </dd>
                    <dt>
                        <label htmlFor="productDescription">Product Description</label>
                    </dt>
                    <dd>
                        <input type="text" id="productDescription" placeholder="product description" name="desc" value={desc} onChange={onDataChange}/>
                    </dd>
                </dl>
                
                <button onClick={onCreate}>Data Input</button>
            {/* </form> */}
            </div>
        </>
    );
}

export default Create;