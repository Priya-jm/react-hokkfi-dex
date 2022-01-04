import {NavLink} from "react-router-dom";
import dribbble from '../../assets/icons/dribbble copy.svg';
import React from "react";

const Governance2=()=>{

    return(
        <>
            <div className="right_main_section">
                <div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card_dark">
                                <div className="title_div d-flex">
                                <div className="d-none d-md-block">
                                    <div className="d-flex align-items-center mb-4 widthFull">
                                        <h2 className='mb-0 top_heading'>Proposals</h2>
                                        <NavLink to="/governance/add_governance" className="card_dark_btn_link_add mg-right m-2 mt-0 liteBlue create_btn">Create Proposal</NavLink>
                                    </div>
                                    </div>
                                    <div className="d-md-none">
                                    <div className="d-flex align-items-center mb-4 widthFull ">
                                        <h2 className='mb-0 top_heading'>Add Liquidity</h2>
                                    </div>   
                                    </div>
                                </div>

                                <div>
                                    <div className="proposals-list-div">
                                        <div className="proposals-list-div-border flex-column flex-md-row border-0 align-items-start align-items-md-center">
                                            <div className="w-100 order-2 order-md-1 w-md-75 pr-2">
                                                <h2 className="heading_h2">Add 1 Basis Point Fee Tier</h2>
                                                <p className="proposals_main_p">Voting begin November 12, 2021, 7:12 AM GMT+5 | Voting ended November 12, 2021, 7:12 AM GMT+5</p>
                                            </div>
                                            <div className="order-1 order-md-2">
                                                <button className="btn-execute">EXECUTED</button>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6 progress-bar-div">
                                                <div className="media">
                                                    <div className="media-left p-2">
                                                        <img className="progress-img" src={dribbble}/>
                                                    </div>
                                                    <div className="media-body p-2 mt-2">
                                                        <div className="d-flex align-items-center">
                                                            <p className="text-white title_text">For</p>
                                                            <p className="span_green  ml-auto">
                                                                71 369 769
                                                            </p>
                                                        </div>
                                                        <div className="d-flex">
                                                            <div className="progress-div">
                                                                <div className="progress">
                                                                    <div className="progress-bar" style={{ 'width':'85%'}}></div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <p className="progress-div-span">85%</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="col-md-6 progress-bar-div">
                                                <div className="media">
                                                    <div className="media-left p-2">
                                                        <img className="progress-img" src={dribbble}/>
                                                    </div>
                                                    <div className="media-body p-2 mt-2">
                                                        <div className="d-flex align-items-center">
                                                            <p className="text-white title_text">Against</p>
                                                            <p className="span_red  ml-auto">
                                                                Not Enough
                                                            </p>
                                                        </div>
                                                        <div className="d-flex">
                                                            <div className="progress-div">
                                                                <div className="progress">
                                                                    <div className="progress-bar" style={{ 'width':'20%'}}></div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <p className="progress-div-span">20%</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>


                                        <div className="order-2 proposals-list-div-bottom d-block d-md-none text-white">
                                            <p className="text-span"><span>0.2</span> 1: 0x1F98431c8aD98523631AE4a59f267346ea31F984.enableFeeAmount(100, 1)</p>
                                        </div>
                                    </div>


                                </div>

                                <div className="div-content ">
                                 <div className="sepratBx">
                                    <h3 className="sub-heading">Details</h3>
                                    <p className="text-span mb-0"><span>1:</span> <span className="p-blue">0x1F98431c8aD98523631AE4a59f267346ea31F984</span> <span>.enableFeeAmount(100, 1)</span></p>
                                </div>
                                <div className="sepratBx">
                                    <h3 className="sub-heading">Description</h3>
                                    <p className="p-blue point_text">Add 1 Basis Point Fee Tier</p>
                                    <p className="text-span-heading">TLDR: Uniswap should add a 1bps fee tier with 1 tick spacing. This change is straightforward from a technical perspective and would help Uniswap compete in stablecoin  stablecoin pairs, where the majority of the market share is taken by Curve and DODO.
                                        Background on pool fees Uniswap v3 allows for the creation of new pools via calls to the factory contract. In order to keep liquidity for pairs consolidated, only a few fee options are allowed–currently, 5, 30, and 100 basis points are supported (10, 60, 200 tick spacing).</p>
                                </div>
                                <div className="sepratBx">
                                    <h3 className="sub-heading">Proposer</h3>
                                    <p className="p-blue token-heading">0x9B68c14e936104e9a7a24c712BEecdc220002984</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
export default Governance2;