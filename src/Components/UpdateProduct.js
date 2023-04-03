import React from 'react';
import styles from './Css/ProductUpdate.module.css';




// 뱌욜 대아토룰 슈종허가 위한 콤포넌트
function UpdateProduct({product, onDataChange, onCompleteClick, setCnt}) {

    const onCntChange=()=>{ // 변경입력양식이 화면이 보이지 않게 함.
        setCnt(0); //상태값을 0으로 설정하여 변경양식을 화면에서 숨김
    }

    return (
        <>
            <div className={styles.ProductUpdate}>
            {/* <form className={styles.ProductInput}> */}
                <dl>
                    <dt>
                        <label htmlFor="productImgName">Product Img Name</label>
                    </dt>
                    <dd>
                        <input type="text" id="productImgName" placeholder="file name" name="imgName" onChange={onDataChange} />
                        {/* 각각 입력양식에 onChange이벤트로 onDataChange함수를 호출하여 배열데이터를 수정할 수 있도록 한다. */}
                    </dd>
                    <dt>
                        <label htmlFor="productName">Product Name</label>
                    </dt>
                    <dd>
                        <input type="text" id="productName" placeholder="product name" name="productName" onChange={onDataChange} />
                    </dd>
                    <dt>
                        <label htmlFor="productPrice">Product Price</label>
                    </dt>
                    <dd>
                        <input type="text" id="productPrice" placeholder="product price" name="price" onChange={onDataChange} />
                    </dd>
                    <dt>
                        <label htmlFor="productDescription">Product Description</label>
                    </dt>
                    <dd>
                        <input type="text" id="productDescription" placeholder="product description" name="desc" onChange={onDataChange} />
                    </dd>
                </dl>
                
                <button onClick={()=>{
                    onCompleteClick(product.id); //해당 아이디만 변경요청을 하고
                    onCntChange(); //콤포넌트는 숨김
                }}>Data Update</button>
                <div className={styles.close}>
                    <button onClick={()=>{onCntChange(0)}}>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            {/* </form> */}
            </div>
        </>
    );
}

export default UpdateProduct;