import React, {useState} from 'react';
import  setting_icon from '../../assets/icons/setting-outlined.png';
import  Dropdown_arror from '../../assets/icons/Vector 1.png';
import  BSC_logo from '../../assets/images/iconBsc.png';
import  HSC_logo from '../../assets/images/iconHsc.png';

const Add_Liquidity = () => {
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
            <div className="right_main_section addLiq">
                <div>
                    <div className="row">
                        <div className="col-md-12">
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

                            <div className="card_dark mt-3 add_form">
                                <div className="title_div_input d-flex">
                                    <div>
                                        <h2>Input</h2>
                                    </div>
                                    <div className="ml-auto">
                                        <img src={setting_icon} className="setting_icon" />
                                    </div>
                                </div>
                                <div className="form-div">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div>
                                            <input type="text" placeholder="0.0" className="form-control exh-form-control input" />
                                        </div>
                                        <div className="option_selector_div">
                                            <div className="d-flex align-items-center">

                                                <img className="m-logo" src={to.icon}/>
                                                <span className="mx-2">{to.name}</span>

                                            </div>
                                            <div className="dropdown d-flex">
                                                <button type="button" className="btn btn-white btn-dropdown" data-toggle="dropdown">
                                                    <img src={Dropdown_arror}/>
                                                </button>
                                                <div className="dropdown-menu dropdown-menu-right dropdown-menu-div">
                                                    <button onClick={(e)=>setTo({ name:'BSC',icon: BSC_logo})}>
                                                        <img src={BSC_logo}/>
                                                        <span>BSC</span>
                                                    </button>
                                                    <button className="ml-0" onClick={(e)=>setTo({ name:'HSC',icon: HSC_logo})}>
                                                        <img src={HSC_logo}/>
                                                        <span>HSC</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-center plus_down_btn_div">
                                    <a className="plus_down_btn">
                                        <i className="fa fa-plus" aria-hidden="true"></i>
                                    </a>
                                </div>

                                <div className="title_div_input d-flex">
                                    <div>
                                        <h2>Input</h2>
                                    </div>
                                    <div className="ml-auto">
                                    </div>
                                </div>

                                <div className="form-div">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div>
                                            <input type="text" placeholder="0.0" className="form-control exh-form-control input" />
                                        </div>
                                        <div className="option_selector_div">
                                            <div className="d-flex align-items-center">
                                                <img className="m-logo" src={from.icon}/>
                                                <span className="mx-2">{from.name}</span>
                                            </div>
                                            <div className="dropdown d-flex">
                                                <button type="button" className="btn btn-white btn-dropdown" data-toggle="dropdown">
                                                    <img src={Dropdown_arror}/>
                                                </button>
                                                <div className="dropdown-menu dropdown-menu-right dropdown-menu-div">
                                                    <button onClick={(e)=>setFrom({ name:'BSC',icon: BSC_logo})}>
                                                        <img src={BSC_logo}/>
                                                        <span>BSC</span>
                                                    </button>
                                                    <button className="ml-0" onClick={(e)=>setFrom({ name:'HSC',icon: HSC_logo})}>
                                                        <img src={HSC_logo}/>
                                                        <span>HSC</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center card_dark_btn_div">
                                <button className="card_dark_btn card_dark_btn_link">Connect to a wallet</button>
                            </div>
                            </div>
                            

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Add_Liquidity;