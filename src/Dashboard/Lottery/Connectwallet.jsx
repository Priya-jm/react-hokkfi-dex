import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import logoFox from '../../assets/images/lottery/logoFox.png';
import logoTokenPct from '../../assets/images/lottery/logoTokenPct.png';
import logosafePal from '../../assets/images/lottery/logosafePal.png';
import logoTrustWlt from '../../assets/images/lottery/logoTrustWlt.png';
import logoWalletCnt from '../../assets/images/lottery/logoWalletCnt.png';
import logoChain from '../../assets/images/lottery/logoChain.png';

const Connectwallet = () => {
  const [isshow, setIsshow] = useState(false);
  const [iconshow, setIconshow] = useState(false);
  const Moreicon = () => {
    setIconshow(true);
  }
  const showtickets = () => {
    setIsshow(true);
  };
  const handleCancel = () => {
    setIsshow(false);
  };

  return (
    <>
      <Button onClick={showtickets} className='btnMain'>
        Connect Wallet
      </Button>
      <Modal visible={isshow} onCancel={handleCancel} >
        <div class="modalBlue modalBuy poppinsFont whtClr hndleCncel">
          <div className="headModal text-center">
            <h3 className="gradText">Connect Wallet</h3>
          </div>
          <div className="mt-3 mb-3 text-center">
            <div className="row">
              <div className='col-6'>
                <div class="logoWrap">
                  <img src={logoFox} alt='logo' />
                  <p className='mt-2 mb-0'>Metamask</p>
                </div>
              </div>

              <div className='col-6'>
                <div class="logoWrap">
                  <img src={logoWalletCnt} alt='logo' />
                  <p className='mt-2 mb-0'>WalletConnect</p>
                </div>
              </div>

              <div className='col-6'>
                <div class="logoWrap">
                  <img src={logoTrustWlt} alt='logo' />
                  <p className='mt-2 mb-0'>Trust Wallet</p>
                </div>
              </div>

              <div className='col-6'>
                <div class="logoWrap">
                  <img src={logosafePal} alt='logo' />
                  <p className='mt-2 mb-0'>SafePal</p>
                </div>
              </div>
            </div>
            {iconshow ?
              <div className="row">
                <div className='col-6'>
                  <div class="logoWrap">
                    <img src={logoTokenPct} alt='logo' />
                    <p className='mt-2 mb-0'>TokenPocket</p>
                  </div>
                </div>
                <div className='col-6'>
                  <div class="logoWrap">
                    <img src={logoChain} alt='logo' />
                    <p className='mt-2 mb-0'>Binance Chain</p>
                  </div>
                </div>
              </div>
              : ''
            }
          </div>

          <div className=' mt-3'>
            {iconshow ? '' :
              <button className='btnMore widthFull' onClick={Moreicon}>More
                <span className="dots"><i></i></span>
              </button>
            }
          </div>
          <div className="text-center mt-4">
            <p>Round # 234</p>
            <button className="x-large-btn btnMain wd100">
              Claim
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};



export default Connectwallet;