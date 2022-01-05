import React from 'react';
import btc from '../../assets/images/btc.png';
import btcMn from '../../assets/images/btcMn.png';
import '../../assets/css/participatingpools.css';
import '../../assets/css/treatsethliquiditymining.css';

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
                  <h3 className='whtClr'>Total deposits</h3>
                  <h2 className='d-flex align-item-center whtClr iconTx fontWeightBold'><img src={btc} alt='cripto icons' /> 0.3764</h2>
                </div>
            </div>
            </div>
            <div className='colHalf'>
            <div className="cardIn">          
                <div className='textWrap'>
                  <h3 className='whtClr'>Emission Rate</h3>
                  <h2 className='d-flex align-item-center whtClr iconTx fontWeightBold'>8.108 TREATS / block</h2>
                    
                  </div>
            </div>
            </div>         
       </div>

       <div className='rows'>
          <div className='colFull'>
            <div className="cardIn blueGrade tokenWrap"> 
               <h3 className='whtClr'>Step1. Get UNI - V2 Liquidity tokens</h3>
               <h3 className='whtClr'>UNI - V2 LP tokens are required. Once you’ve added liquidity to the TREATS - ETH pool you can stake your liquidity tokens on this page</h3>
               <button className='btnMain boxShdwNone mt10'>Add TREATS - ETH liquidity</button>
               </div>
          </div>
       </div>

       <div className='rows'>
          <div className='colFull'>
            <div className="cardIn depositsWrap"> 
               <h3 className='grayClr'>Your liquidity deposits</h3>
               <div className='d-flex widthFull'> 
               <h2 className='grayClr widthFull fontWeightBold align-item-center d-flex'><span>0000</span> <small className='mg-l-auto'>Uni - V2 Treats - Eth</small></h2>
               </div>
               </div>
          </div>
       </div>

       <div className='rows'>
         <div className="colFull">
         <div className='resutlWrap'> 
         <h2 className='grayClr widthFull fontWeightBold'>
           <span>Your unclaimed deposits</span> 
         </h2>
         <h1 className='whtClr fontWeightBold'>0000</h1>
         </div>
         </div>
       </div>
        </div>
        </div>
    );
};

export default Treatsethliquiditymining;