import React, {createRef, useEffect, useState} from 'react';
import setting_icon from '../../assets/images/setting-outlined.png';
import BSC_logo from '../../assets/images/iconBsc.png';
import HSC_logo from '../../assets/images/iconHsc.png';
import Dropdown_arror from '../../assets/images/Vector 1.png';
import '../../assets/css/exchange.css';

import Timeclock from './img/time-clock.png';
import Ranking from './img/ranking.png';
import TopRight from './img/frame-s-top-right.png';

import TradeViewChart from "react-crypto-chart";


import './chart.css';


const Exchange = () => {

    useEffect(() => {
        document.body.className = 'exchange-page';
        return () => { document.body.className = ''; }
      });

    const [to,setTo] = useState({
        name:"BSC",
        icon:BSC_logo
    });
    const [from,setFrom] = useState({
        name:"HSC",
        icon:HSC_logo
    });



    // ChartSetting;
    let candleStickConfigUpdate={
        upColor: "#3dbaa2",
        downColor: "#ff7a68",
        borderDownColor: "#ff7a68",
        borderUpColor: "#3dbaa2",
        wickDownColor: "#25645d",
        wickUpColor: "#25645d",
    }
    let layoutUpdate = {
        layout: {
            backgroundColor: "#0b0d11",
            textColor: "white",
        },
        grid: {
            vertLines: {
                color: "#0b0d11",
            },
            horzLines: {
                color: "#0b0d11",
            },
        },
        priceScale: {
            borderColor: "black",
        },
        timeScale: {
            borderColor: "black",
            timeVisible: true,
            secondsVisible: true,
        },
    }
    // ChartSetting;

    return (
        <>
            <div className="right_main_section exchangePg">
                <div>
                    <div className="row">
                        <div className="col-md-8 mb-3">
                            <div>
                                <div className="main_graph_div">
                                    <div>
                                        <div className="top_nav_div">
                                            <div className="row mt-4">
                                                <div className="col-md-6 col-lg-12 col-xl-6">
                                                    <ul className="top_nav_bar_list">
                                                        <li>
                                                            <a className="active">
                                                                Price Chart
                                                            </a>
                                                        </li>

                                                        <li>
                                                            <a>
                                                                Deep Chart
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-6 col-lg-12 col-xl-6">
                                                    <ul className="nav_icon_list">
                                                        <li>
                                                            <img src={Timeclock} />
                                                            <span>30m</span>
                                                        </li>

                                                        <li>
                                                            <img src={Ranking} />
                                                            <span>Indicator</span>
                                                        </li>

                                                        <li className="text-right top_right-btn">
                                                            <img className="open_image_btn" src={TopRight} />
                                                        </li>
                                                    </ul>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="top_bar_list">
                                            <ul className="num_list_data">
                                                <li>
                                                    <a>BTC/USDT</a>
                                                </li>

                                                <li>
                                                    <a>
                                                        O
                                                        <span>18432.3204898</span>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a>
                                                        H
                                                        <span>18432.3204898</span>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a>
                                                        L
                                                        <span>18432.3204898</span>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a>
                                                        C
                                                        <span>18432.3204898</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>

                                        <div></div>
                                        <div>
                                            <div className="">
                                                <TradeViewChart  candleStickConfig={candleStickConfigUpdate} chartLayout={layoutUpdate} pair="BTCBUSD" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card_dark card_div">
                                <div className="title_div d-flex">
                                    <div>
                                        <h2 className="title_div_heading">Swap</h2>
                                    </div>
                                    <div className="ml-auto">
                                        <img src={setting_icon} className="setting_icon" alt='settingicon'/>
                                    </div>
                                </div>

                                <div className="form-div">
                                    <div className="d-flex align-items-center wallet">
                                        <div className="form_to">
                                            <label className="label">From</label>
                                            <input type="text" placeholder="0.0"
                                                   className="form-control exh-form-control input"/>
                                        </div>
                                        <div className="option_selector_div justify-content-end">
                                            <div className="d-flex align-items-center selected">
                                                <img className="m-logo" src={to.icon} alt='BSClogo'/>
                                                <span className="mx-2">{to.name}</span>
                                            </div>
                                            <div className="dropdown d-flex">
                                                <button type="button" className="btn btn-white btn-dropdown"
                                                        data-toggle="dropdown">
                                                    <img src={Dropdown_arror} alt='Dropdownarror'/>
                                                </button>
                                                <div className="dropdown-menu dropdown-menu-right dropdown-menu-div">
                                                    <button onClick={(e) => setTo({name: 'BSC', icon: BSC_logo})}>
                                                        <img src={BSC_logo} alt='BSClogo'/>
                                                        <span>BSC</span>
                                                    </button>
                                                    <button className="ml-0"
                                                            onClick={(e) => setTo({name: 'HSC', icon: HSC_logo})}>
                                                        <img src={HSC_logo} alt='HSClogo'/>
                                                        <span>HSC</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center arror_down_bx">
                                    <a className="arror_down_btn">
                                        <i className="fa fa-long-arrow-up" aria-hidden="true"></i>
                                    </a>
                                </div>
                                <div className="form-div">
                                    <div className="d-flex align-items-center wallet">
                                        <div className="form_to">
                                            <label className="label">To</label>
                                            <input type="text" placeholder="0.0"
                                                   className="form-control exh-form-control input"/>
                                        </div>
                                        <div className="option_selector_div justify-content-end">
                                            <div className="d-flex align-items-center selected">
                                                <img className="m-logo" src={from.icon} alt='HSClogo'/>
                                                <span className="mx-2">{from.name}</span>
                                            </div>
                                            <div className="dropdown d-flex">
                                                <button type="button" className="btn btn-white btn-dropdown"
                                                        data-toggle="dropdown">
                                                    <img src={Dropdown_arror} alt='Dropdownarror'/>
                                                </button>
                                                <div className="dropdown-menu dropdown-menu-right dropdown-menu-div">
                                                    <button onClick={(e) => setFrom({name: 'BSC', icon: BSC_logo})}>
                                                        <img src={BSC_logo} alt='BSClogo'/>
                                                        <span>BSC</span>
                                                    </button>
                                                    <button className="ml-0"
                                                            onClick={(e) => setFrom({name: 'HSC', icon: HSC_logo})}>
                                                        <img src={HSC_logo} alt='HSClogo'/>
                                                        <span>HSC</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center card_dark_btn_div  ">
                                <button className="card_dark_btn card_dark_btn_link">Connect to a wallet</button>
                            </div>
                            </div>
                            
                            <div className="price_main_div">
                                <h3>Recommended Gas Prices in Gwei</h3>
                                <div className="row mt-4">
                                    <div className="col">
                                        <h2 className="mt-2 mb-2">62</h2>
                                        <p>STANDARD  <span>  &nbsp;&lt;&nbsp;   15.9M</span></p>
                                    </div>
                                    <div className="col">
                                        <h2 className="mt-2 mb-2">97</h2>
                                        <p>FAST  <span>  &nbsp;&lt;&nbsp;   0.5M</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Exchange;