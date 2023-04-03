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
    const [inputs1, setInputs1] = useState({
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
    const {imgName, productName, price, desc} = inputs1;
    
    // onDataChange 함수 작성하기
    const onDataChange1 =(e)=>{
        const {name, value} = e.target;

        // state값 변경
        setInputs1({
            ...inputs1, //변경되는 것 외에 나머지 속성값을 의미하는 나머지 패턴
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

                setInputs1({
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


    // 배열데이터 변경을 위한 state값 관리
    const [inputs2, setInputs2] = useState({
        imgName:'',
        productName:'',
        price:'',
        desc:''
    });

    //  데이터 변경을 위한 변경함수
    const onDataChange2=(e)=>{
        const{name, value} = e.target;

        setInputs2({
            ...inputs2, // 변경되는 것 외의 나머지 속성값을 의미하는 나머지 패턴을 의미함.
            [name]:value // 내부에서 밖의 변수를 속성명으로 사용시 [변수명]
        });
    }

    // 변경관련 state함수
    // updateProduct콤포넌트에서 [변경완료]를 누르면 처리될 클릭이벤트에 줄 함수

    const onCompleteClick=(id)=>{ // 함수의 매개변수로 id를 담아줌. key값을 식별하기 위함
        const product={ // product라는 배역객체를 만들어서 폼에서 입력한 데이터를 저장
            id:id,
            imgName:inputs2.imgName,
            productName: inputs2.productName,
            price: inputs2.price,
            desc: inputs2.desc
        }

        setProducts( // 위에서 입력한 배열데이터를 변경하기 위함
            products
            .filter((product)=>product.id!==id) // 기존 아이디와 같은 배열 데이터는 삭제
            .concat(product) // 새롭게 연결하고자 하는 데이터 product에 붙여줌
            .sort((a,b)=>{ // id순서대로 들어가야 하기 때문에 순서에 맞게 정렬해줌.
                if(a.id > b.id) return 1;
                if(a.id < b.id) return -1;
                return 0;
            })
        );

        setInputs2({ // 위에서 배열데이터값이 입력이 끝나면 상대값은 모두 초기화한다.
            imgName:'',
            productName:'',
            price:'',
            desc:''
        });
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

                <Create onDataChange={onDataChange1} imgName={imgName} productName={productName} price={price} onCreate={onCreate}/>
                <ul>
                    {products.map(product=><Product product={product} key={product.id} onRemove={onRemove} onDataChange={onDataChange2} onCompleteClick={onCompleteClick}/>)}
                </ul>
            </main>
        </>
    );
}

export default ProductList;



/*

1. product 콤포넌트
- useState 선언
- 부모로부터 전달받은 product, onRemove, onDataChange, onCompleteClick

- useState(0)을 주어 updateproduct 콤포넌트가 안보이도록 한다.

-onUpdateClick함수를 만들어서 setCnt값을 1을 주어 화면에 updateProduct 콤포넌트가 보이도록 한다.

- 삭제버튼 아래 조건식을 사용하여 cnt가 1일 경우에만 화면에 표시되도록 한다.

*/