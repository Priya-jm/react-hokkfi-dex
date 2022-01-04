import React, {createRef, useEffect, useState} from 'react';
import setting_icon from '../../assets/images/setting-outlined.png';
import BSC_logo from '../../assets/images/iconBsc.png';
import HSC_logo from '../../assets/images/iconHsc.png';
import Dropdown_arror from '../../assets/images/Vector 1.png';
import '../../assets/css/exchange.css';
import Chart from 'chart.js/auto/auto';

const Exchange = () => {
    useEffect(() => {
        document.body.className = 'exchange-page';
        return () => { document.body.className = ''; }
      });
      
    useEffect(()=>{
        const chartRef = createRef();
        const ctx = document.getElementById('floatbar').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'bar',
            data:{
                labels:[1,2, 3, 4, 5, 6, 7 ,8 ,9, 10, 11],
                datasets:[
                    {
                        label:'candles sell',
                        data:[[-3, 5], [2,10],[2, 3], [4, 8], [3, 5], [7, 9], [-4, 6], [5, 9], [-6, 9], [-2, 3], [-1, 1]],
                        backgroundColor:'#FF7A68'
                    },
                    {
                        label:'candels buy',
                        data:[[-1, 2], [4,10],[3, 4], [6, 8], [2, 9], [3, 6], [-2, 5], [7, 8], [-9, 1], [-1, 2], [-5, -2]],
                        backgroundColor:'#3DBAA2'
                    }
                ]
            },
            options: {
                responsive: true,
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Chart.js Floatbar Chart'
                }
            }
        });

    },[]);


    const [to,setTo] = useState({
        name:"BSC",
        icon:BSC_logo
    });
    const [from,setFrom] = useState({
        name:"HSC",
        icon:HSC_logo
    });

    return (
        <>
            <div className="right_main_section exchangePg">
                <div>
                    <div className="row">
                        <div className="col-md-8 mb-3">
                            <div>
                                <canvas className="card_dark pt-3" style={{ 'height':'600px'}}
                                        id="floatbar"
                                    // ref={chartRef}
                                    //
                                />
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