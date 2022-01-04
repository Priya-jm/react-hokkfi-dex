import React, { useState } from 'react';
import { Modal } from 'antd';
import "../../assets/css/popup.css";
import btc from '../../assets/images/btc.png';
import btcMn from '../../assets/images/btcMn.png';
import snipperLogo from '../../assets/images/snipperLogo.png';
import foxIcon from '../../assets/images/foxIcon.png';
import { useHistory } from 'react-router-dom';
import Treats from '../Farms/Treats';

const DepositModals = () => {
    const history = useHistory();
    const [Recieve, setRecieve] = useState(false);
    const [depost, setDepost] = useState(false);
    const [trans, setTrans] = useState(false);

    const recievModal = () => {
        setRecieve(true);
    }
    const recievCancel = () => {
        setRecieve(false);
    }
    const Approvfnc = () => {
        setTrans(true);
        setRecieve(false);
    }
    const Depostfnc = () => {
        setRecieve(false);
    }
    const tranSactioncancel = () => {
        history.push('/farms/treats');
    }

    return (
        <div>
            <button className='btnMain' onClick={recievModal}>Deposit UNI - V2 LP Tokens</button>
            <Modal
                visible={Recieve}
                onCancel={recievCancel}
            >
                <div className='popupWrapper'>
                <div className='modalHeader'><h3>Deposit</h3></div>
            <div className='blueBgRound  mgBoth d-block'>Impotent : The deposit fee is now 0.75% !</div>

                <div className='modal_footer textCenter depositBx'>
                    <div className='tokens textLeft bgBlack'>
                        <h3 className='whtClr'>Availible to deposit 1.3457</h3>
                        <div>
                            <h1 className='d-flex whtClr titles fontWeightBold align-item-center'>
                                <span className='d-flex align-item-center'>
                                <span>1.23456</span> <ul className='iconImg'>
                                    <img src={btcMn} alt='cripto icons' />
                                    <img src={btc} alt='cripto icons' />
                                </ul> </span>
                                <span className='mg-l-auto'>TREATS:WETH</span></h1>
                        </div>
                    </div>
                    <div className='rows mt30'>
                        <div className='cols'>
                            <button onClick={Approvfnc} className='btnMain boxShdwNone widthFull'>Approve</button>
                        </div>
                        <div className='cols'>
                            <button onClick={Depostfnc} className='btnMain widthFull boxShdwNone bgBlack'>Depost</button>
                        </div>
                    </div>
                    <div className='d-flex align-item-center justifyCenter mt30'>
                       <ul className='cirlcNmber whtClr'>
                          <li><span>1</span></li> 
                          <li><span>2</span></li>  
                       </ul>
                    </div>
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
                <div className='modal_footer textCenter depositBx cnfirmation'>
                    <h2 className='whtClr fontWeightBold'>Transaction submited</h2>
                    <h3 className='whtClr mb-3 mt-2'>View on Etherscan</h3>
                    <span className='grayClr'>view transaction in Etherscan</span>
                </div>
                </div>
            </Modal>



        </div>
    );
};
export default DepositModals;