import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import modalFox from '../../assets/images/lottery/modalFox.png';
import giftIcon from '../../assets/images/lottery/giftIcon.png';

const Connectwinnings = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };
    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <Button onClick={showModal} className="btnMain widthFull">
                Connect Wallet
            </Button>
            <Modal visible={isModalVisible} onCancel={handleCancel}>
                <div className="modalBlue modalBuy poppinsFont whtClr">
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

export default Connectwinnings;