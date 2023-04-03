import React, {useState} from 'react';
import styles from './Css/productItem.module.css';

import UpdateProduct from './UpdateProduct';

function Product({product, onRemove, onDataChange, onCompleteClick}) {

    // 상태관리 값을 0으로 초기화
    // 0일때 updateProduct가 안보이게 하기 위함

    // 변경버튼 누르면 state값에 1을 넣어서 updateProduct가 보이게 함
    let [cnt, setCnt] = useState(0); 

    const onUpdateClick =()=>{
        if(cnt === 0) setCnt(1);
    }

    return (
        <>
            <li key={product.id} className={styles.item}>
                <img src={`${process.env.PUBLIC_URL}/images/${product.imgName}`} alt={product.productName}/>
                <div>
                    <h4>{product.productName}</h4>
                    <p>{product.price}</p>
                    <span>{product.desc}</span>
                    <br></br>
                    <button onClick={onUpdateClick}>Data Update</button>
                    {cnt===1 && <UpdateProduct 
                        product={product}
                        onDataChange={onDataChange}
                        onCompleteClick={onCompleteClick}
                        setCnt={setCnt}
                    />}
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