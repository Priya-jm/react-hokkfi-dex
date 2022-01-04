import React, { useState } from 'react';
import buyTcketBtn from '../../assets/images/lottery/buyTcketBtn.png';
import { Modal, Button } from 'antd';
import modalFox from '../../assets/images/lottery/modalFox.png';
import giftIcon from '../../assets/images/lottery/giftIcon.png';

const Buyticketsmodal = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
   
    const showModal = () => {
        setIsModalVisible(true);
    };
    const handleCancel = () => {
        setIsModalVisible(false);
    };

    // connectwiningmodal
    const [isconwin,setIsconwin] = useState(false);

    const showconwin=()=>{
        setIsconwin(true);
        setIsModalVisible(false);
    }
    const Cancelconwin=()=>{
        setIsconwin(false);
    }
    return (
        <>
            <img src={buyTcketBtn} alt='lottry' onClick={showModal} />
            <Modal visible={isModalVisible} onCancel={handleCancel} >
                <div class="modalBlue modalBuy poppinsFont whtClr byTckt">
                    <div class="headModal text-center">
                        <h3 class="gradText">Buy Tickets</h3>
                    </div>
                    <div class="titletckt d-flex">
                        <span className='popinsBold'>Buy:</span><span class="mg-l-auto">Tickets</span>
                    </div>
                    <div class="bgltBlack ticktwrap text-right">
                        <h5 class="mb-3">0</h5>
                        <h5 mb-0 pb-0>~0.00 CAKE</h5>
                    </div>

                    <div class="d-flex purchList">
                        <span>Cost (CAKE)</span><span class="mg-l-auto">0 CAKE</span>
                    </div>
                    <div class="d-flex purchList">
                        <span>0%
                            Bulk discount</span><span class="mg-l-auto">~0 CAKE</span>
                    </div>
                    <div class="dottedBrd"></div>
                    <div class="d-flex purchresut">
                        <h4 class="mt-0 mb-0 popinsBold"><strong>You pay</strong></h4>
                        <h4 class="mg-l-auto popinsBold"><span >~0 CAKE</span></h4>
                    </div>
                    <div class="btnBox mt-4 mb-2 text-center">
                        <div>
                            <Button onClick={showconwin} className="btnMain widthFull">
                                Connect Wallet
                            </Button>
                        </div>
                    </div>
                    <p class="smText">"Buy Instantly" chooses random numbers, with no duplicates among your tickets. Prices are set before each round starts, equal to $5 at that time. Purchases are final.</p>
                </div>
            </Modal>

            {/* connect winnings */}
            <Modal visible={isconwin} onCancel={Cancelconwin}>
                <div className="modalBlue modalBuy poppinsFont whtClr cncleCwin">
                    <img src={modalFox} alt="modalFoxn" className="topUp" />
                    <div className="headModal text-center">
                        <h3 className="gradText">Collect Winnings</h3>
                    </div>
                    <div className="mt-3 mb-3">
                        <p className="mb-3">You won</p>
                        <div className="d-flex row align-items-center">
                            <div className="col-8">
                                <h1>4.567 HOKK!</h1>
                                <span>-45.643 usd</span>
                            </div>
                            <div class="col-4">
                                <img src={giftIcon} alt='gifticon' />
                            </div>
                        </div>
                        <div class="text-center mt-4">
                            <p>Round # 234</p>
                            <button className="x-large-btn btnMain wd100">
                                Claim
                            </button>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default Buyticketsmodal;