import React from 'react';
import btc from '../../assets/images/btc.png';
import btcMn from '../../assets/images/btcMn.png';
import iconStar from '../../assets/images/iconStar.svg'
import '../../assets/css/participatingpools.css';
import '../../assets/css/treatsethliquiditymining.css';
import DepositModals from './DepositModals';


const Treatsethliquidity = () => {
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
                  <h2 className='d-flex strongHead align-item-center whtClr iconTx fontWeightBold'><img src={btc} alt='cripto icons' /> 0.3764</h2>
                </div>
            </div>
            </div>
            <div className='colHalf'>
            <div className="cardIn">          
                <div className='textWrap'>
                  <h3 className='whtClr liteHead'>Emission Rate</h3>
                  <h2 className='d-flex strongHead align-item-center whtClr iconTx fontWeightBold'>8.108 TREATS / block</h2>
                </div>
            </div>
            </div>         
       </div>

       <div className='rows liquBox'>
          <div className='colFull'>
            <div className="cardIn blueGrade tokenWrap"> 
               <h3 className='whtClr fontWeightBold'>Your liquidity deposits</h3>
               <h2 className='whtClr d-flex fontWeightBold'>1.23456<small className='mg-l-auto'>UNI - V2 TREATS - ETH</small></h2>
               </div>
          </div>
       </div>
       <div className='rows  liquBox mt-4'>
         <div className="colFull">
         <div className='resutlWrap umclaimedDpsite'> 
         <h3 className='grayClr widthFull fontWeightBold mb-4'>
           <span>Your unclaimed deposits</span> 
         </h3>
          <h2 className='whtClr fontWeightBold iconStar'>0000</h2>
          <hr className='dividerHr' />
          <p className='d-flex iconTx grayClr font18'><img src={iconStar} alt='star icon' className='mtm4'/> When you withdraw, the contract will automagically claim TREATS on your behalf!</p>
          <div className='mt15'><DepositModals/></div>
          <p className='grayClr mt15 font16'>1.2245 UNI-V2 LP tokens availible</p>
         </div>
         </div>
       </div>
        </div>
        </div>
    );
};
export default Treatsethliquidity;
