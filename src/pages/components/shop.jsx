import React, { useEffect, useState } from 'react';
import '../tea.css';
import avocadoYog from '../../images/avocado-yog.png';

export default function Shop(props) {
    const { shopList, setShopList } = props;
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(() => {
        let total = 0;
        shopList.length > 0 &&
            shopList.map((item, index) => {
                total += item.price * item.count;
            });
        setTotalPrice(total.toFixed(1));
    }, [shopList]);

    const add = (shop) => {
        let data = [...shopList];
        data.length > 0 &&
            data.map((item, index) => {
                if (item.name === shop.name) {
                    item.count++;
                }
            });
        setShopList(data);
    };

    const reduce = (shop) => {
        let data = [...shopList];
        data.length > 0 &&
            data.map((item, index) => {
                if (item.name === shop.name) {
                    if (item.count > 1) {
                        item.count--;
                    } else {
                        data.splice(index, 1);
                    }
                }
            });
        setShopList(data);
    };
    return (
        <div className="shop">
            <div className="count">
                <p>Total Price:</p>
                <p>{totalPrice}$</p>
            </div>
            <div className="shopList">
                {shopList.map((item, index) => {
                    return (
                        <div className="shopItem">
                            <img src={item.img} alt="" />
                            <div className="shopTxt">
                                <h2>{item.name}</h2>
                                <p>{item.price}$</p>
                            </div>
                            <div className="numBox">
                                <div
                                    onClick={() => add(item)}
                                    className="numAdd"
                                >
                                    +
                                </div>
                                <p>{item.count}</p>
                                <div
                                    onClick={() => reduce(item)}
                                    className="numReduce"
                                >
                                    -
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
