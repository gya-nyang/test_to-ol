import React from 'react';
import styles from './Css/productItem.module.css'

function Product({product, onRemove}) {
    return (
        <>
            <li key={product.id} className={styles.item}>
                <img src={`${process.env.PUBLIC_URL}/images/${product.imgName}`} alt={product.productName}/>
                <div>
                    <h4>{product.productName}</h4>
                    <p>{product.price}</p>
                    <span>{product.desc}</span>
                    <div className={styles.close}>
                        <button onClick={()=>onRemove(product.id)}>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </li>
        </>
    );
}

export default Product;