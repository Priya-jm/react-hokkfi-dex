import React from 'react';
import {NavLink} from "react-router-dom";
import ic_Share from '../../assets/icons/ic_Share.png';


const Governance = () => {
    return (
        <>
            <div className="right_main_section">
                <div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card_dark">
                                <div className="title_div d-flex">
                                    <div className="d-flex align-items-center mb-4 widthFull">
                                        <h2 className='mb-0 top_heading'>Proposals</h2>
                                        <NavLink to="/governance/add_governance" className="card_dark_btn_link_add mg-right m-2 mt-0 liteBlue create_btn">Create Proposal</NavLink>
                                    </div>
                                </div>

                                <div>
                                    <div className="proposals-list-div d-flex flex-column">
                                        <div className="proposals-list-div-border order-2 order-md-1">
                                            <div className="w-100 w-md-75 pr-2">
                                                <h2 className="heading_h2">
                                                    <NavLink to="/governance_view">Consensus check - Should Uniswap incentivize liquidity on Optimism and Arbitrum?</NavLink>
                                                </h2>
                                                <p className="proposals_main_p">Dear Uniswap community, Two weeks ago I submitted a proposal for Uniswap to incentivize liquidity on L2's to make its deployment on L2's a...</p>
                                            </div>
                                            <div className="text-center d-none d-md-block">
                                                <span className="proposals-list-mth">APR</span>
                                                <h3 className="proposals-list-date">27</h3>
                                            </div>
                                        </div>

                                        <div className="proposals-list-div-bottom order-1 order-md-2">
                                            <div className="d-none d-md-block">
                                                <p><span>0.2</span> 1: 0x1F98431c8aD98523631AE4a59f267346ea31F984.enableFeeAmount(100, 1)</p>
                                            </div>

                                            <div className="">
                                                <button className="btn-execute">EXECUTED</button>
                                                <button className="btn-share">
                                                    <img src={ic_Share}/>
                                                </button>
                                            </div>
                                            <div className="d-md-none mbl_div">
                                                <span className="proposals-list-mth">APR</span>
                                                <h3 className="proposals-list-date">27</h3>
                                            </div>
                                        </div>
                                        <div className="order-2 proposals-list-div-bottom d-block d-md-none text-white">
                                            <p><span>0.2 </span> .1: <br/>
                                                <div className="text-m ml-3">0x1F98431c8aD98523631AE4a59f267346ea31F984.enableFeeAmount(100, 1)</div>
                                            </p>
                                        </div>
                                    </div>


                                    <div className="proposals-list-div d-flex flex-column">
                                        <div className="proposals-list-div-border order-2 order-md-1">
                                            <div className="w-100 w-md-75 pr-2">
                                                <h2 className="heading_h2">
                                                    <NavLink to="/governance_view">Consensus check - Should Uniswap incentivize liquidity on Optimism and Arbitrum?</NavLink>
                                                </h2>
                                                <p className="proposals_main_p">Dear Uniswap community, Two weeks ago I submitted a proposal for Uniswap to incentivize liquidity on L2's to make its deployment on L2's a...</p>
                                            </div>
                                            <div className="text-center d-none d-md-block">
                                                <span className="proposals-list-mth">APR</span>
                                                <h3 className="proposals-list-date">27</h3>
                                            </div>
                                        </div>

                                        <div className="proposals-list-div-bottom order-1 order-md-2">
                                            <div className="d-none d-md-block">
                                                <p><span>0.2</span> 1: 0x1F98431c8aD98523631AE4a59f267346ea31F984.enableFeeAmount(100, 1)</p>
                                            </div>

                                            <div className="">
                                                <button className="btn-defeated">DEFEATED</button>
                                                <button className="btn-share">
                                                    <img src={ic_Share}/>
                                                </button>
                                            </div>
                                            <div className="d-md-none mbl_div">
                                                <span className="proposals-list-mth">APR</span>
                                                <h3 className="proposals-list-date">27</h3>
                                            </div>
                                        </div>
                                        <div className="order-2 proposals-list-div-bottom d-block d-md-none text-white">
                                            <p><span>0.2 </span> .1: <br/>
                                                <div className="text-m ml-3">0x1F98431c8aD98523631AE4a59f267346ea31F984.enableFeeAmount(100, 1)</div>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="proposals-list-div d-flex flex-column">
                                        <div className="proposals-list-div-border order-2 order-md-1">
                                            <div className="w-100 w-md-75 pr-2">
                                                <h2 className="heading_h2">
                                                    <NavLink to="/governance_view">Consensus check - Should Uniswap incentivize liquidity on Optimism and Arbitrum?</NavLink>
                                                </h2>
                                                <p className="proposals_main_p">Dear Uniswap community, Two weeks ago I submitted a proposal for Uniswap to incentivize liquidity on L2's to make its deployment on L2's a...</p>
                                            </div>
                                            <div className="text-center d-none d-md-block">
                                                <span className="proposals-list-mth">APR</span>
                                                <h3 className="proposals-list-date">27</h3>
                                            </div>
                                        </div>

                                        <div className="proposals-list-div-bottom order-1 order-md-2">
                                            <div className="d-none d-md-block">
                                                <p><span>0.2</span> 1: 0x1F98431c8aD98523631AE4a59f267346ea31F984.enableFeeAmount(100, 1)</p>
                                            </div>

                                            <div className="">
                                                <button className="btn-defeated">DEFEATED</button>
                                                <button className="btn-share">
                                                    <img src={ic_Share}/>
                                                </button>
                                            </div>
                                            <div className="d-md-none mbl_div">
                                                <span className="proposals-list-mth">APR</span>
                                                <h3 className="proposals-list-date">27</h3>
                                            </div>
                                        </div>
                                        <div className="order-2 proposals-list-div-bottom d-block d-md-none text-white">
                                            <p><span>0.2 </span> .1: <br/>
                                                <div className="text-m ml-3">0x1F98431c8aD98523631AE4a59f267346ea31F984.enableFeeAmount(100, 1)</div>
                                            </p>
                                        </div>
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
export default Governance;