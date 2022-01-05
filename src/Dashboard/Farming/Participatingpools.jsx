import React from 'react';
import btc from '../../assets/images/btc.png';
import btcMn from '../../assets/images/btcMn.png';

const Participatingpools = () => {
    return (
        <div> 
            <div className="cardWrap">
                <h2 className='titleHead d-flex'>Participating pools <span className="mg-l-auto">2.02 ETH</span></h2>
                <div className="cardIn">
                    <div className="cardHead d-flex">
                        <div className='iconWrap d-flex'>
                            <ul className='iconImg'>
                                <img src={btcMn} alt='cripto icons' />
                                <img src={btc} alt='cripto icons' />
                            </ul>
                            <h4>Hokk-eth</h4>
                        </div>
                        <button className='btnMain mg-l-auto'>Deposit</button>
                    </div>
                    <div className='cardContent'>
                        <ul className='cardList d-flex'>
                            <li>Apr* <span className='mg-l-auto'>3.456%</span></li>
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
                        <button className='btnMain mg-l-auto'>Deposit</button>
                    </div>
                    <div className='cardContent'>
                        <ul className='cardList d-flex'>
                            <li>Apr* <span className='mg-l-auto'>3.456%</span></li>
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
