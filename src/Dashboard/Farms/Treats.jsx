import React from 'react';
import btc from '../../assets/images/btc.png';
import btcMn from '../../assets/images/btcMn.png';
import iconStar from '../../assets/images/iconStar.svg'
import '../../assets/css/participatingpools.css';
import '../../assets/css/treatsethliquiditymining.css';
import Withdrawmodals from './Withdrawmodals';

const Treats = () => {
    return (
        <div>
            <div className="cardWrap treatMining">
                <h2 className='titleHead d-flex'>TREATS - ETH Liquidity Mining
                    <ul className='iconImg mg-l-auto'>
                        <img src={btcMn} alt='cripto icons' />
                        <img src={btc} alt='cripto icons' />
                    </ul>
                </h2>
                <div className='rows'>
                    <div className='colHalf'>
                        <div className="cardIn">
                            <div className='textWrap'>
                                <h3 className='whtClr liteHead'>Total deposits</h3>
                                <h2 className='strongHead d-flex align-item-center whtClr iconTx fontWeightBold'><img src={btc} alt='cripto icons' /> 0.3764</h2>
                            </div>
                        </div>
                    </div>
                    <div className='colHalf'>
                        <div className="cardIn">
                            <div className='textWrap'>
                                <h3 className='whtClr liteHead'>Emission Rate</h3>
                                <h2 className='strongHead d-flex align-item-center whtClr iconTx fontWeightBold'>8.108 TREATS / block</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='rows liquBox'>
                    <div className='colFull'>
                        <div className="cardIn blueGrade tokenWrap">
                            <h3 className='whtClr fontWeightBold'>Your liquidity deposits</h3>
                            <h2 className='whtClr fontWeightBold d-flex align-items-center mb-0'>1.23456 <small className='mg-l-auto'>UNI - V2 TREATS - ETH</small></h2>
                        </div>
                    </div>
                </div>
                <div className='rows liquBox'>
                    <div className="colFull">
                        <div className='resutlWrap umclaimedDpsite'>
                            <h3 className='grayClr widthFull fontWeightBold d-flex align-item-center'>
                                <span>Your unclaimed deposits</span>
                                <button className='borderBtn mg-l-auto'>Claim</button>
                            </h3>
                            <h2 className='whtClr fontWeightBold iconStar'>0.1234</h2>
                            <hr className='dividerHr' />
                            <p className='d-flex iconTx grayClr font18'><img src={iconStar} alt='star icon' className='mtm4' /> When you withdraw, the contract will automagically claim TREATS on your behalf!</p>
                            <div className='withdrwBtn mt15'><Withdrawmodals/></div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Treats;