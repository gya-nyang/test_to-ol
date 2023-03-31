import React, {useState, useEffect} from 'react';
import Styles from './Styles.module.css';

function Exec() {

    // 제품 가격 기본값
    const price = 2900;

    // state변수
    // num(변수명), setNum(함수명)
    const [num, setNum] = useState(1);

    // 입력요소에 사용자가 직접 입력하면 데이터 변경
    const onDataChange =(e)=>{
        setNum(e.target.value);
    }

    // +버튼 누르면 함수가 호출되어 1씩 증가
    const onIncrease =()=>{
        setNum(Number(num) + 1);
        console.log(num);
    }

    // -버튼 누르면 함수가 호출되어 1씩 감소
    const onDecrease =()=>{
        if(num>1){
            setNum(Number(num) - 1);
        }
        console.log(num);
    }

    //  useEffect함수로 동기화작업한다.
    useEffect(()=>{
        console.log(num);
    }, [num]);

    return (
        <>
            <main>
                <article className={Styles.imgArea}>
                    <img src={`${process.env.PUBLIC_URL}/0327_m/bread.jpg`}/>
                </article>
                <article className={Styles.descArea}>
                    <div className={Styles.productTitle}>
                        <p>샛별배송</p>
                        <h3>[그녀의빵공장] 소금빵</h3>
                        <span>고소하고 짭조름한 소금빵</span>
                    </div>
                    <div className={Styles.priceInfo}>
                        <p>
                            <span>2,900</span>원
                        </p>
                        <p>
                            로그인 후, 적립 혜택이 제공됩니다.
                        </p>
                    </div>
                    <div className={Styles.productInfo}>
                        <dl>
                            <dt>배송</dt>
                            <dd>
                                샛별배송
                                <br />
                                <span>
                                23시 전 주문 시 내일 아침 7시 전 도착
                                <br />
                                (대구·부산·울산 샛별배송 운영시간 별도 확인)
                                </span>
                            </dd>
                        </dl>
                        <dl>
                            <dt>판매자</dt>
                            <dd>컬리</dd>
                        </dl>
                        <dl>
                            <dt>포장타입</dt>
                            <dd>
                                상온 (종이포장)
                                <br />
                                <span>
                                    택배배송은 에코 포장이 스티로폼으로 대체됩니다.
                                </span>
                            </dd>
                        </dl>
                        <dl>
                            <dt>판매단위</dt>
                            <dd>1개</dd>
                        </dl>
                        <dl>
                            <dt>중량/용량</dt>
                            <dd>75g</dd>
                        </dl>
                        <dl>
                            <dt>원산지</dt>
                            <dd>상품설명/상세정보 참조</dd>
                        </dl>
                        <dl className={Styles.alert}>
                            <dt>알레르기정보</dt>
                            <dd>
                            - 밀, 우유 포함
                            <br />
                            - 난류, 우유, 메밀, 땅콩, 대두, 밀, 토마토, 호두, 오징어 혼입 가능
                            </dd>
                        </dl>
                        <dl>
                            <dt>유통기한(또는 소비기한)정보</dt>
                            <dd>
                            수령일 포함 최소 2일 남은 제품을 보내 드립니다
                            </dd>
                        </dl>
                    </div>
                    <div className={Styles.calc}>
                        <dl>
                            <dt>상품선택</dt>
                            <dd>
                                <div className={Styles.calcBox}>
                                    <span>[그녀의빵공장] 소금빵</span>
                                    <ul>
                                        <li>
                                            <button onClick={onDecrease}>-</button>
                                            <input type="text" value={num} onChange={onDataChange} />
                                            <button onClick={onIncrease}>+</button>
                                        </li>
                                        <li>
                                            <span className={Styles.priceTxt}>{price}원</span>
                                        </li>
                                    </ul>
                                </div>
                            </dd>
                        </dl>
                        <div>
                            총 상품 금액: {price*num}원
                        </div>
                    </div>
                </article>
            </main>
        </>
    );
}

export default Exec;