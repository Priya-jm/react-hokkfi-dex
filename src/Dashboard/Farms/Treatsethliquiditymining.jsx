import React from 'react';
import btc from '../../assets/images/btc.png';
import btcMn from '../../assets/images/btcMn.png';
import '../../assets/css/participatingpools.css';
import '../../assets/css/treatsethliquiditymining.css';
import { NavLink } from "react-router-dom";

const Treatsethliquiditymining = () => {
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
                <h2 className='d-flex align-item-center whtClr strongHead iconTx'><img src={btc} alt='cripto icons' /> 0.3764</h2>
              </div>
            </div>
          </div>
          <div className='colHalf'>
            <div className="cardIn">
              <div className='textWrap'>
                <h3 className='whtClr liteHead'>Emission Rate</h3>
                <h2 className='d-flex align-item-center whtClr iconTx strongHead'>8.108 TREATS / block</h2>
              </div>
            </div>
          </div>
        </div>

        <div className='rows'>
          <div className='colFull'>
            <div className="cardIn blueGrade tokenWrap textLg">
              <p className='whtClr'>Step1. Get UNI - V2 Liquidity tokens</p>
              <p className='whtClr'>UNI - V2 LP tokens are required. Once you’ve added liquidity to the TREATS - ETH pool you can stake your liquidity tokens on this page</p>
             
              <div className='boxShdwNone'>
                <NavLink to="/farms/addliquidity" className='btnMain boxShdwNone'>Add TREATS - ETH liquidity</NavLink>
              </div>
            </div>
          </div>
        </div>

        <div className='rows liquBox'>
          <div className='colFull'>
            <div className="cardIn depositsWrap">
              <h3 className='grayClr fontWeightBold'>Your liquidity deposits</h3>
              <div className='d-flex widthFull'>
                <h2 className='grayClr widthFull fontWeightBold align-item-center d-flex'><span>0000</span> <small className='mg-l-auto'>Uni - V2 Treats - Eth</small></h2>
              </div>
            </div>
          </div>
        </div>

        <div className='rows liquBox'>
          <div className="colFull">
            <div className='resutlWrap'>
              <h3 className='grayClr widthFull fontWeightBold'>
                <span>Your unclaimed deposits</span>
              </h3>
              <h2 className='whtClr fontWeightBold'>0000</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Treatsethliquiditymining;