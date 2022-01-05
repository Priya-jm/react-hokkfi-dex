import React, { useState } from 'react';
import { Modal } from 'antd';
import btc from '../../assets/images/btc.png';

const Addliquiditymodals = () => {
    const [Recieve, setRecieve] = useState(false);
    const [confirm, setConfirm] = useState(false);
    const [trans, setTrans] = useState(false);

    const recievModal = () => {
        setRecieve(true);
    }
    const recievCancel=()=>{
        setRecieve(false); 
    }
    const confirMation = () => {
        setConfirm(true);
        setRecieve(false);
    }
    const confirMcancel=()=>{
        setConfirm(false); 
    }
    const tranSaction = () => {
        setTrans(true);
        setConfirm(false)
    }
    const tranSactioncancel=()=>{
        setTrans(false); 
    }

    return (
        <div>
            <button className='btnMain' onClick={recievModal}>Enter an amount</button>
            <Modal
                visible={Recieve}
                title="You will recieve"
                onCancel={recievCancel} 
            >
                <div className='modal_inner'>
                    <div className='tokens'>
                        <span>1.23456
                            <img src={btc} alt="btc" />
                            <div>TREATS/ETH Pool TOKENS</div>
                        </span>
                    </div>
                    <p>Output is estimated. If the price changes by more than 4% your transaction will revert.</p>
                </div>
                <div className='modal_footer'>
                    <div>
                        <span>Treats Deposited</span>
                        <span>1000</span>
                    </div>
                    <div>
                        <span>ETH Deposited</span>
                        <span>0.34536644</span>
                    </div>
                    <div>
                        <span>Rates</span>
                        <div>
                            <span>1 TREATS = 0.0000232322 ETH</span>
                            <span>1 eth = 0.02322 theats</span>
                        </div>
                    </div>
                    <div>
                        <span>Share of Pool:</span>
                        <span>Share of Pool:</span>
                    </div>
                </div>
                <button onClick={confirMation}>Confirm Supply</button>
            </Modal>
            <Modal
                visible={confirm}
                title="waiting for confirmation"
                onCancel={confirMcancel}
            >
                <p>Supplying 1000 TREATS and 0.0004343433 ETH</p>
                <span>Confirm this transaction in your wallet</span>
                <button onClick={tranSaction}>supply</button>
            </Modal>
            <Modal
                visible={trans}
                title="Ad uni - v2 to Metamask"
            >
                <p>Transaction submited</p>
                <span>View on Etherscan</span>
                <button onClick={tranSactioncancel}>Close</button>
            </Modal>
        </div>
    );
};
export default Addliquiditymodals;