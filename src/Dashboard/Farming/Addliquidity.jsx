import React from 'react';
import settings from '../../assets/images/settings.png'
import Addliquiditymodals from './Addliquiditymodals';
import '../../assets/css/addliquidity.css';
import btc from '../../assets/images/btc.png';
import btcMn from '../../assets/images/btcMn.png';
import iconBsc from '../../assets/images/iconBsc.png';
import iconHsc from '../../assets/images/iconHsc.png';

import { Select } from 'antd';

const { Option } = Select;
const Addliquidity = () => {
    function handleChange(value) {
        console.log(`selected ${value}`);
    }
    return (
        <div>
            <div className="ant-layout site-layout add-liquidity">
                <div className="ant-layout-content content">
                    <div className="cardWrap">
                        <h2 className='titleHead d-flex'>Add Liquidity
                            <span className="mg-l-auto">
                                <img src={settings} alt='cripto icons' />
                            </span>
                        </h2>
                        <div className="cardIn">
                            <div className="cardHead">
                                <p>Tip:</p>
                            </div>
                            <div className='cardContent'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, morbi euismod turpis at. Est dolor, id fringilla elit quam urna sagittis faucibus morbi. Sapien facilisi sit scelerisque tortor varius viverra dui sed vulputate. Tempus risus mi, neque, aliquam ut nascetur laoreet.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ant-layout site-layout add-liq-input">
                <div className="ant-layout-content content">
                    <div className="cardWrap">
                        <div className="cardIn">
                            <div className="cardHead">
                                <h4>Input</h4>
                            </div>
                            <div className='cardContent'>
                                <div className="input-inner d-flex">
                                    <div className="input-no">
                                        <p>0.0</p>
                                    </div>
                                    <div className="input-content mg-l-auto">
                                        <p className="bal-txt small-txt">Balance: 99999.2</p>
                                        <div className="input-content-inner d-flex">
                                            <button className='btnMain mg-l-auto'>Max</button>
                                            <div className='dropdown' id='inptDsgn'>
                                                <Select defaultValue={btc} onChange={handleChange}>
                                                    <Option value={btcMn}>
                                                    <img src={iconBsc} alt='cripto icons' />
                                                    <span className="cmp-name upr-txt">BSC</span>
                                                    </Option>
                                                    <Option value={btc}>
                                                    <img src={iconHsc} alt='cripto icons' />
                                                    <span className="cmp-name upr-txt">BSC</span>
                                                    </Option>
                                                     
                                                </Select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cardIn">
                            <div className="cardHead">
                                <h4>Input</h4>
                            </div>
                            <div className='cardContent'>
                                <div className="input-inner d-flex">
                                    <div className="input-no">
                                        <p>0.0</p>
                                    </div>
                                    <div className="input-content mg-l-auto">
                                        <p className="bal-txt small-txt">Balance: 99999.2</p>
                                        <div className="input-content-inner d-flex">
                                            <button className='btnMain mg-l-auto'>Max</button>
                                            <div className='dropdown' id='inptDsgn'>
                                            <Select defaultValue={btc} onChange={handleChange}>
                                                <Option value={btcMn}>
                                                <img src={iconBsc} alt='cripto icons' />
                                                <span className="cmp-name upr-txt">BSC</span>
                                                </Option>
                                                <Option value={btc}>
                                                <img src={iconHsc} alt='cripto icons' />
                                                <span className="cmp-name upr-txt">BSC</span>
                                                </Option>
                                             
                                        </Select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cardIn">
                            <div className="price-sec">
                                <div className="price-name">
                                    <p>Prices and post share</p>
                                </div>
                                <div className="price-cont-outer d-flex">
                                    <div className="price-cont">
                                        <div className="price-no">
                                            <p className="pri-cls">0.9999934354354</p>
                                            <p className="pri-txt">ETH per TREATS</p>
                                        </div>
                                    </div>
                                    <div className="price-cont">
                                        <div className="price-no">
                                            <p className="pri-cls">0.9999934354354</p>
                                            <p className="pri-txt">ETH per TREATS</p>
                                        </div>
                                    </div>
                                    <div className="price-cont">
                                        <div className="price-no">
                                            <p className="pri-cls">0.9999934354354</p>
                                            <p className="pri-txt">ETH per TREATS</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='btnWrapfoot'><button className='btnMain btn-abs'><Addliquiditymodals /></button></div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Addliquidity;