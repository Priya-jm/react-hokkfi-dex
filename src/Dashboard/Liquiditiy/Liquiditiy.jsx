import React from 'react';
import {NavLink} from "react-router-dom";

const Liquiditiy = () => {
    return (
        <>
            <div className="right_main_section ">
                <div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card_dark pad30">
                                <div className="row mb-3 align-items-center">
                                    <div className="col-12 col-md-6">
                                        <h3 className="section_heading mb-md-0 mb-3">Your Liquidity</h3>
                                    </div>
                                    <div className="col-12 col-md-6 text-center btnWrapr d-flex text-lg-right">
                                        <NavLink to="/add_Keypair" className="card_dark_btn_link  mt-0" >Create a pair</NavLink>
                                        <NavLink to="/liquiditiy/add_liquiditiy" className="card_dark_btn_link  mt-0">Add a liquidity</NavLink>
                                    </div>
                                </div>

                                <div className="content-section">
                                    <p className='text-uppercase mb-0'>Connect to a wallet to view your liquidity.</p>
                                </div>
                            </div>

                            <div className="mt-4">
                                <h2 className="section_heading">Liquidity provider rewards</h2>
                                <p className="content-section-p">Liquidity providers earn a 0.3% fee on all trades proportional to their share of the pool. Fees are added to the pool, accrue in real time and can be claimed by withdrawing your liquidity.</p>

                                <a className="card_dark_btn_link mt-2 ml-0">Read more about providing liquidity</a>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Liquiditiy;