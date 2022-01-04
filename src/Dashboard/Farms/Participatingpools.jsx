import React from 'react';
import btc from '../../assets/images/btc.png';
import btcMn from '../../assets/images/btcMn.png';
import { NavLink } from "react-router-dom";

const Participatingpools = () => {
    return (
        <div>
            <div className="cardWrap">
                <h2 className='titleHead d-flex'>Participating <span className="mg-l-auto">2.02 ETH</span></h2>
                <div className="cardIn">
                    <div className="cardHead d-flex">
                        <div className='iconWrap d-flex'>
                            <ul className='iconImg'>
                                <img src={btcMn} alt='cripto icons' />
                                <img src={btc} alt='cripto icons' />
                            </ul>
                            <h4>Hokk-eth</h4>
                        </div>
                        <div className='mg-l-auto'>
                            <NavLink to="/farms/treatsethmining" className='btnMain'>Deposit</NavLink>
                        </div>
                    </div>
                    <div className='cardContent'>
                        <ul className='cardList d-flex'>
                            <li>APR* <span className='mg-l-auto'>3.456%</span></li>
                            <li>Total deposited <span className='mg-l-auto'>1.345464 ETH</span></li>
                            <li>Pool reward allocation <span className='mg-l-auto'>100%</span></li>
                            <li>Emission rate <span className='mg-l-auto'>8.100 TREATS / Block</span></li>
                        </ul>
                    </div>
                </div>
                <div className="cardIn">
                    <div className="cardHead d-flex">
                        <div className='iconWrap d-flex'>
                            <ul className='iconImg'>
                                <img src={btcMn} alt='cripto icons' />
                                <img src={btc} alt='cripto icons' />
                            </ul>
                            <h4>Hokk-eth</h4>
                        </div>
                        <div className='mg-l-auto'>
                            <NavLink to="/farms/treatsethmining" className='btnMain mg-l-auto'>Deposit</NavLink>
                        </div>
                    </div>
                    <div className='cardContent'>
                        <ul className='cardList d-flex'>
                            <li>APR* <span className='mg-l-auto'>3.456%</span></li>
                            <li>Total deposited <span className='mg-l-auto'>1.345464 ETH</span></li>
                            <li>Pool reward allocation <span className='mg-l-auto'>100%</span></li>
                            <li>Emission rate <span className='mg-l-auto'>8.100 TREATS / Block</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Participatingpools;
