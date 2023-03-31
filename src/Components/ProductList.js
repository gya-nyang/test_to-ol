import React, {useState, useRef} from 'react';
// import {Swiper, SwiperSlide} from 'swiper/react'; // swiper 필수 설치
// import {Pagination, Navigation, Scrollbar, Autoplay} from 'swiper';

// import 'swiper/css'; // swiper 필수 설치
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

import Create from './Create';
import Product from './Product';
import BeerList from './BeerList.json';


function ProductList() {

    const [products, setProducts] = useState(BeerList);

    const nextId = useRef(6);

    // 입력상자에서 사용할 값을 state로 관리한다.
    const [inputs, setInputs] = useState({
        imgName:'',
        productName:'',
        price:'',
        desc:''
    });
    // json 테스트
    // const [inputs, setInputs] = useState(
    //     BeerList.Beer['imgName']='',
    //     BeerList.Beer['productName']='',
    //     BeerList.Beer['price']='',
    // );
    
    // 비구조화할당 방식으로 state값을 각각 변수에 담아주기
    const {imgName, productName, price, desc} = inputs;
    
    // onDataChange 함수 작성하기
    const onDataChange =(e)=>{
        const {name, value} = e.target;

        // state값 변경
        setInputs({
            ...inputs, //변경되는 것 외에 나머지 속성값을 의미하는 나머지 패턴
            [name]:value // 내부에서 밖의 변수를 속성명으로 사용시 [변수명]
        });
    };

    // 추가버튼 클릭시 기존배열 뒤에 새로운 배열데이터를 추가하는 함수
    const onCreate =()=>{
        // if(imgName !== '' && productName !=='' && price !== ''){
            const product={
                id:'p0'+nextId.current,
                imgName,
                productName,
                price,
                desc
            }
            
            const items = Object.values(product).filter(item => item === "");

            if(items.length !== 0){
                alert('YOU EMPTY!!! NO!!!!');
                // return false;
            }else{
                setProducts([...products, product]);

                setInputs({
                    imgName:'',
                    productName:'',
                    price:'',
                    desc:''
                });
                nextId.current+=1;
            }
        // }else{
        //     alert('공란은 안됨');
        // }

    }

    // 삭제하기
    const onRemove =(id)=>{
        setProducts(products.filter(product=>product.id!==id))
    }

    /*
        부모 product콤포넌트에서 onRemove 함수 추가
        자식 product콤포넌트에 함수값을 넘긴다.
        자식 product콤포넌트가 함수를 넘겨 받아서 버튼에 함수명을 추가한다.(id값 포함)
    */

    return (
        <>
            <main>

                {/* <Swiper 
                    style={styles}
                    modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={3}
                    autoplay={{delay:2000}}
                    navigation
                    pagination={{clickable:true}}
                    scrollbar={{draggable:true}}>
                    <SwiperSlide>공지사항1</SwiperSlide>
                    <SwiperSlide>공지사항2</SwiperSlide>
                    <SwiperSlide>공지사항3</SwiperSlide>
                    <SwiperSlide>공지사항4</SwiperSlide>
                    <SwiperSlide>공지사항5</SwiperSlide>
                </Swiper> */}

                <Create onDataChange={onDataChange} imgName={imgName} productName={productName} price={price} onCreate={onCreate}/>
                <ul>
                    {products.map(product=><Product product={product} key={product.id} onRemove={onRemove} />)}
                </ul>
            </main>
        </>
    );
}

export default ProductList;