import React, { useEffect, useState } from 'react';
import './tea.css';
import avocadoYog from '../images/avocado-yog.png';
import mochiUbec from '../images/mochi-ube.png';
import mochiOreo from '../images/mochi-oreo.png';
import mochiChestnut from '../images/mochi-chestnut.png';
import whitePeach from '../images/white-peach.png';
import avomango from '../images/avomango.png';
import cheeseStrawberry from '../images/cheese-strawberry.png';
import lemonExplosion from '../images/lemon-explosion.png';
import mangoSweet from '../images/mango-sweet-dew.png';
import superOrange from '../images/super-orange.png';
import cheeseRoasted from '../images/cheese-roasted-milk-tea.png';
import soybean from '../images/soybean-milk-tea.png';
import Shop from './components/shop';
import Filter from './components/filter';

const dataArr = [
    {
        name: 'Avocado yoghurt smoothiee',
        img: avocadoYog,
        price: 5.95,
        ice: 1,
        gluten: 1,
    },
    {
        name: 'mochi ubec',
        img: mochiUbec,
        price: 6.35,
        ice: 0,
        gluten: 0,
    },
    {
        name: 'mochi oreo',
        img: mochiOreo,
        price: 6.25,
        ice: 0,
        gluten: 0,
    },
    {
        name: 'mochi chestnute',
        img: mochiChestnut,
        price: 6.25,
        ice: 0,
        gluten: 0,
    },
    {
        name: 'white peach oolong tea w.moussee',
        img: whitePeach,
        price: 5.5,
        ice: 1,
        gluten: 0,
    },
    {
        name: 'avomango sweet dew',
        img: avomango,
        price: 6.5,
        ice: 1,
        gluten: 1,
    },
    {
        name: 'cheese strawberry',
        img: cheeseStrawberry,
        price: 6.5,
        ice: 1,
        gluten: 0,
    },
    {
        name: 'lemon explosione',
        img: lemonExplosion,
        price: 5.5,
        ice: 1,
        gluten: 1,
    },
    {
        name: 'mango sweet dew',
        img: mangoSweet,
        price: 5.6,
        ice: 1,
        gluten: 1,
    },
    {
        name: 'super orange',
        img: superOrange,
        price: 5.95,
        ice: 0,
        gluten: 1,
    },
    {
        name: 'cheese roasted milk tea',
        img: cheeseRoasted,
        price: 6.1,
        ice: 0,
        gluten: 0,
    },
    {
        name: 'soybean milk tea',
        img: soybean,
        price: 5.75,
        ice: 0,
        gluten: 0,
    },
];
const defaultFilter = () => ({
    gluten: 2,
    ice: 2,
    sort: false,
});
export default function Tea() {
    const [teaData, setTeaData] = useState(dataArr);
    const [shopList, setShopList] = useState([]);
    const [filterState, setFilterState] = useState(defaultFilter());
    useEffect(() => {
        filterState.sort && sortPrice();
    }, [filterState.sort]);

    useEffect(() => {
        setFilterState({ ...filterState, sort: false });

        if (filterState.ice !== 2 || filterState.gluten !== 2) {
            const data = [...dataArr];
            let newData = [];
            if (filterState.ice === 2) {
                data.map((item, index) => {
                    if (item.gluten === filterState.gluten) {
                        newData.push(item);
                    }
                });
            } else if (filterState.gluten === 2) {
                data.map((item, index) => {
                    if (item.ice === filterState.ice) {
                        newData.push(item);
                    }
                });
            } else {
                data.map((item, index) => {
                    if (
                        item.ice === filterState.ice &&
                        item.gluten === filterState.gluten
                    ) {
                        newData.push(item);
                    }
                });
            }
            setTeaData(newData);
        } else {
            setTeaData(dataArr);
        }
    }, [filterState.ice, filterState.gluten]);


    const sortPrice = () => {
        const data = [...teaData];
        function createComprisonFunction(propertyName) {
            return function (object1, object2) {
                var value1 = object1[propertyName];
                var value2 = object2[propertyName];
                if (value1 < value2) {
                    return -1;
                } else if (value1 > value2) {
                    return 1;
                } else {
                    return 0;
                }
            };
        }
        data.sort(createComprisonFunction('price'));
        setTeaData(data);
    };

    const addShop = (shop) => {
        let data = [...shopList];
        let shopData = { ...shop, count: 1 };
        let lock = true;
        data.length > 0 &&
            data.map((item, index) => {
                if (item.name === shopData.name) {
                    item.count++;
                    lock = false;
                }
            });
        lock && data.push(shopData);
        console.log('aaaa', data);
        setShopList(data);
    };

    const reset = () => {
        setTeaData(dataArr);
        setFilterState(defaultFilter());
    };

    return (
        <div className="box">
            <div className="head">
                <h1>TT Tea</h1>
            </div>
            <Filter
                setFilterState={setFilterState}
                filterState={filterState}
                reset={reset}
            />
            <div className="main">
                <div className="content">
                    {teaData.map((item, index) => {
                        return (
                            <div className="teaItem">
                                <img src={item.img} alt="" />
                                <b>{item.name}</b>
                                <p>price:{item.price}$</p>
                                <span>iced-only:{item.ice ? 'Yes' : 'No'}</span>
                                <span>
                                    gluten-free:{item.gluten ? 'Yes' : 'No'}
                                </span>
                                <div
                                    onClick={() => addShop(item)}
                                    className="addShop"
                                >
                                    Add to shopping
                                </div>
                            </div>
                        );
                    })}
                </div>
                <Shop shopList={shopList} setShopList={setShopList} />
            </div>
            <div className="footer">
                <h1>TT Tea</h1>
            </div>
        </div>
    );
}
