import React,{useState} from 'react';
import Addliquiditymodals from './Addliquiditymodals';
import '../../assets/css/addliquidity.css';
import Dropdown_arror from '../../assets/icons/Vector 1.png';
import BSC_logo from '../../assets/images/iconBsc.png';
import HSC_logo from '../../assets/images/iconHsc.png';


const Addliquidity = () => {
    const [to, setTo] = useState({
        name: "BSC",
        icon: BSC_logo
    });
    const [from, setFrom] = useState({
        name: "HSC",
        icon: HSC_logo
    });
    return (
        <div>
            <div className="ant-layout site-layout add-liquidity">
                <div className="ant-layout-content content">
                <div className="card_dark">
                <div className="row mb-2">
                    <div className="col-12 col-md-12">
                        <h3 className="section_heading">Add Liquidity</h3>
                    </div>
                </div>

                <div className="content-section text-left p-4">
                    <p className="tip_tag">Tip:</p>
                    <p className="mt-0 pl-1 tip_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, morbi euismod turpis at. Est dolor, id fringilla elit quam urna sagittis faucibus morbi. Sapien facilisi sit scelerisque tortor varius viverra dui sed vulputate. Tempus risus mi, neque, aliquam ut nascetur laoreet. </p>
                </div>
            </div>
                </div>
            </div>
            <div className="ant-layout site-layout add-liq-input">
                <div className="ant-layout-content content">
                    <div className="cardWrap">
                    <div className="cardIn add_form">
                            <div className="title_div_input d-flex"><div><h2>Input</h2></div>
                            </div>
                            <div className="form-div">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div>
                                        <input type="text" placeholder="0.0" className="form-control exh-form-control input" />
                                    </div>
                                    <div className="option_selector_div">
                                        <p className="bal-txt small-txt text-right">Balance: 99999.2</p>
                                        <div className='d-flex justify-content-right'>
                                            <button className='card_dark_btn_link mg-l-auto'>Max</button>
                                            <div className="d-flex align-items-center">
                                                <img className="m-logo" src={to.icon} />
                                                <span className="mx-2">{to.name}</span>
                                            </div>
                                            <div className="dropdown d-flex">
                                                <button type="button" className="btn btn-white btn-dropdown" data-toggle="dropdown">
                                                    <img src={Dropdown_arror} />
                                                </button>
                                                <div className="dropdown-menu dropdown-menu-right dropdown-menu-div">
                                                    <button onClick={(e) => setTo({ name: 'BSC', icon: BSC_logo })}>
                                                        <img src={BSC_logo} />
                                                        <span>BSC</span>
                                                    </button>
                                                    <button className="ml-0" onClick={(e) => setTo({ name: 'HSC', icon: HSC_logo })}>
                                                        <img src={HSC_logo} />
                                                        <span>HSC</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center plus_down_btn_div"><a className="plus_down_btn"><i className="fa fa-plus" aria-hidden="true"></i></a></div>
                            <div className="title_div_input d-flex"><div><h2>Input</h2></div>
                            </div>
                            <div className="form-div">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div>
                                        <input type="text" placeholder="0.0" className="form-control exh-form-control input" />
                                    </div>
                                    <div className="option_selector_div">
                                        <p className="bal-txt small-txt">Balance: 99999.2</p>
                                        <div className='d-flex justify-content-right'>
                                            <button className='card_dark_btn card_dark_btn_link mg-l-auto'>Max</button>
                                            <div className="d-flex align-items-center">
                                                <img className="m-logo" src={from.icon} />
                                                <span className="mx-2">{from.name}</span>
                                            </div>
                                            <div className="dropdown d-flex">
                                                <button type="button" className="btn btn-white btn-dropdown" data-toggle="dropdown">
                                                    <img src={Dropdown_arror} />
                                                </button>
                                                <div className="dropdown-menu dropdown-menu-right dropdown-menu-div">
                                                    <button onClick={(e) => setFrom({ name: 'BSC', icon: BSC_logo })}>
                                                        <img src={BSC_logo} />
                                                        <span>BSC</span>
                                                    </button>
                                                    <button className="ml-0" onClick={(e) => setFrom({ name: 'HSC', icon: HSC_logo })}>
                                                        <img src={HSC_logo} />
                                                        <span>HSC</span>
                                                    </button>
                                                </div>
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
                                            <p className="pri-cls">243456</p>
                                            <p className="pri-txt">TREATS per ETH </p>
                                        </div>
                                    </div>
                                    <div className="price-cont">
                                        <div className="price-no">
                                            <p className="pri-cls">0.23%</p>
                                            <p className="pri-txt">Share of Pool</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='text-center card_dark_btn_div'><div><Addliquiditymodals/></div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Addliquidity;