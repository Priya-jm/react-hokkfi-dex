import React, { useState } from 'react';
import { Modal } from 'antd';

const Withdrawmodals = () => {
    const [deposit, setDeposit] = useState(false);

    const Depositopen = () => {
        setDeposit(true);
    }
    const DepositCancel = () => {
        setDeposit(false);
    }
    const Claimwithdraw = () => {
        setDeposit(false)
    }

    return (
        <>
            <div>
               <div className='d-flex'>
                <button className='btnMain x-large-btn boxShdwNone' onClick={Depositopen}>Deposit</button>
                <button className='btnMain bglightBlue boxShdwNone x-large-btn' onClick={DepositCancel}>Withdraw</button>
                </div>
                <Modal
                    visible={deposit}
                    onCancel={DepositCancel}
                >
                    <div className='popupWrapper widra_pp'>
                    <div className='modalHeader'><h3>Withdraw</h3></div>
                    <div className='widraBx'>
                     <div className='rows whtClr'>
                      <div className='colFull'>
                        <div className='bglightBlu'>1.23456</div>
                        <h3 className='m-12'>Deposited liauidity:</h3>
                      </div>
                      <div className='colFull'>
                        <div className='bglightBlu'>0.1234</div>
                        <h3 className='m-12'>Unclaimed Treats</h3>
                      </div>
                      </div>
                      <p className='blueClr'>When you withdraw, your treats is claimed and your
                      liquidity is removed from the mining pool</p>

                      <div className='textCenter mt15'>
                        <button onClick={Claimwithdraw} className='btnMain x-large-btn widthFull'>Withdrwa & Claim</button>
                    </div>
                    </div>
                    </div>
                    
                </Modal>
            </div>
        </>
    );
};

export default Withdrawmodals;