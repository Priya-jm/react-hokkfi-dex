import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import Round from '../Lottery/Round';

const Editnumbers = () => {
    const [isview, setIsview] = useState(false);
    const showview = () => {
        setIsview(true);
    };
    const viewCancel = () => {
        setIsview(false);
    };

    return (
        <>
            <Button onClick={showview} className='btnMain widthFull borderBtn boxShdwNone grayBrd'>
                View/Edit Numbers
            </Button>
            <Modal title="Edit numbers" visible={isview} onCancel={viewCancel}>
                <div class="modalBlue modalBuy poppinsFont whtClr">
                    <div class="headModal text-center">
                        <h3 class="gradText">Edit numbers</h3>
                    </div>
                    <div className='modalBody editNmber'>
                        <h5 className='d-flex mb-2'>
                            <span>Total cost:</span>
                            <span className='mg-l-auto'>~2.3457 CAKE</span>
                        </h5>
                        <p>Numbers are randomized, with no duplicates among your tickets. Tap a number to edit it. Availible: 0 - 9</p>
                        <button className=' borderBtn widthFull clrSmBlue mt-2'>Randomize</button>
                        <div className='ticketNmberWrap mt-4'>
                            <div className='ticketNmber'>
                                <h6 className='clrWht'>#002</h6>
                                <div className='row d-flex gradBg'>
                                    <span className='col'>1</span>
                                    <span className='col'>2</span>
                                    <span className='col'>3</span>
                                    <span className='col'>4</span>
                                    <span className='col'>5</span>
                                    <span className='col'>6</span>
                                    <span className='col'>7</span>
                                    <span className='col'>8</span>
                                    <span className='col'>9</span>
                                </div>
                            </div>

                            <div className='ticketNmber'>
                                <h6 className='clrWht'>#002</h6>
                                <div className='row d-flex gradBg'>
                                    <span className='col'>1</span>
                                    <span className='col'>2</span>
                                    <span className='col'>3</span>
                                    <span className='col'>4</span>
                                    <span className='col'>5</span>
                                    <span className='col'>6</span>
                                    <span className='col'>7</span>
                                    <span className='col'>8</span>
                                    <span className='col'>9</span>
                                </div>
                            </div>
                        </div>
                        <div ><Round /></div>
                        <div className='text-center mt-4'>
                            <a href="#" className='text-center backBtn'>
                                <i class="fa fa-angle-left" aria-hidden="true"></i>Go back</a>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default Editnumbers;