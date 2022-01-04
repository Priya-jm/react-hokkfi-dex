import React, { useState } from 'react';
import { Modal } from 'antd';
import "../../assets/css/popup.css";
import btc from '../../assets/images/btc.png';
import btcMn from '../../assets/images/btcMn.png';
import snipperLogo from '../../assets/images/snipperLogo.png';
import foxIcon from '../../assets/images/foxIcon.png';
import { NavLink } from "react-router-dom";


const Addliquiditymodals = () => {
  const [Recieve, setRecieve] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [trans, setTrans] = useState(false);

  const recievModal = () => {
    setRecieve(true);
  }
  const recievCancel = () => {
    setRecieve(false);
  }
  const confirMation = () => {
    setConfirm(true);
    setRecieve(false);
  }
  const confirMcancel = () => {
    setConfirm(false);
  }
  const tranSaction = () => {
    setTrans(true);
    setConfirm(false)
  }
  const tranSactioncancel = () => {
    setTrans(false);
  }

  return (
    <div>
      <button className='card_dark_btn_link' onClick={recievModal}>Enter an amount</button>
      <Modal
        visible={Recieve}
        onCancel={recievCancel}
      >
        <div className='popupWrapper'>
          <div className='modal_inner'>
            <div className='modalHeader'><h3>You will recieve</h3></div>
            <div className='tokens contentTkn'>
              <h1 className='d-flex whtClr fontWeightBold align-item-center'><span>1.23456</span> <ul className='iconImg'>
                <img src={btcMn} alt='cripto icons' />
                <img src={btc} alt='cripto icons' />
              </ul></h1>
              <h3 className='whtClr'>TREATS/ETH Pool TOKENS</h3>

            </div>
            <p className='italicFont outPt'>Output is estimated. If the price changes by more than 4% your transaction will revert.</p>
          </div>
          <div className='modal_footer'>
            <div className='d-flex dottedBrd'>
              <span> TREATS Deposited</span>
              <span className='mg-l-auto iconTx'><img src={btc} alt='cripto icons' /> 1000</span>
            </div>
            <div className='d-flex dottedBrd'>
              <span>ETH Deposited</span>
              <span className='mg-l-auto iconTx'><img src={btcMn} alt='cripto icons' /> 0.34536644</span>
            </div>
            <div className='d-flex dottedBrd'>
              <span>Rates</span>
              <span className='mg-l-auto textRight'>
                <span>1 TREATS = 0.0000232322 ETH</span><br />
                <span>1 eth = 0.02322 THEATS</span>
              </span>
            </div>
            <div className='d-flex dottedBrd'>
              <span>Share of Pool:</span>
              <span className='mg-l-auto'>Share of Pool:</span>
            </div>
          </div>
          <div className='btnPoupWrap textCenter'>
            <button onClick={confirMation} className='btnMain'>Confirm Supply</button>
          </div>
        </div>
      </Modal>
      
      <Modal
        visible={confirm}
        onCancel={confirMcancel}
      >
        <div className='popupWrapper'>
          <div className='textCenter loaderLogo pb-0'>
            <div>
              <svg viewBox="0 0 120 120" version="1.1" xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink" className='loaderIcon'>

                <symbol id="s--circle">
                  <circle r="10" cx="20" cy="20"></circle>
                </symbol>

                <g class="g-circles g-circles--v1">
                  <g class="g--circle">
                    <use xlinkHref="#s--circle" class="u--circle" />
                  </g>
                  <g class="g--circle">
                    <use xlinkHref="#s--circle" class="u--circle" />
                  </g>
                  <g class="g--circle">
                    <use xlinkHref="#s--circle" class="u--circle" />
                  </g>
                  <g class="g--circle">
                    <use xlinkHref="#s--circle" class="u--circle" />
                  </g>
                  <g class="g--circle">
                    <use xlinkHref="#s--circle" class="u--circle" />
                  </g>
                  <g class="g--circle">
                    <use xlinkHref="#s--circle" class="u--circle" />
                  </g>
                  <g class="g--circle">
                    <use xlinkHref="#s--circle" class="u--circle" />
                  </g>
                  <g class="g--circle">
                    <use xlinkHref="#s--circle" class="u--circle" />
                  </g>
                  <g class="g--circle">
                    <use xlinkHref="#s--circle" class="u--circle" />
                  </g>
                  <g class="g--circle">
                    <use xlinkHref="#s--circle" class="u--circle" />
                  </g>
                  <g class="g--circle">
                    <use xlinkHref="#s--circle" class="u--circle" />
                  </g>
                  <g class="g--circle">
                    <use xlinkHref="#s--circle" class="u--circle" />
                  </g>
                </g>
              </svg>
            </div>
            <img src={snipperLogo} alt='spinner logo' />
          </div>
          <div className='modal_footer textCenter confirmationWndo'>
            <h2 className='whtClr'>Waiting for Confirmation</h2>
            <h3>Supplying 1000 TREATS and 0.0004343433 ETH</h3>
            <span className='grayClr'>Confirm this transaction in your wallet</span>
          </div>
          <div className='btnPoupWrap textCenter'>
            <button onClick={tranSaction} className='btnMain'>supply</button>
          </div>
        </div>
      </Modal>
      <Modal
        visible={trans}
        onCancel={tranSactioncancel}
      >
        <div className='popupWrapper'>
          <div className='textCenter loaderLogo'>
            <span className='checkIcon'></span>
            <div className='logoMdl'><img src={snipperLogo} alt='hokkafi Logo' /></div>
            <div className='borderIn'><span> Ad uni - v2 to Metamask <img src={foxIcon} alt='foxIcon' /></span></div>
          </div>
          <div className='modal_footer textCenter confirmationWndo'>
            <h2 className='whtClr'>Transaction submited</h2>
            <h3>View on Etherscan</h3>
          </div>
          <div className='btnPoupWrap textCenter'>
              <NavLink to="/farms/treatsliquidity" className='btnMain' onClick={tranSactioncancel}>Close</NavLink>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default Addliquiditymodals;