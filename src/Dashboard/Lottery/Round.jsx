import React, { useState } from 'react';
import { Modal, Button } from 'antd';

const Round = () => {
    const [isview, setIsview] = useState(false);
    const showview = () => {
        setIsview(true);
    };
    const viewCancel = () => {
        setIsview(false);
    };
    return (
        <>
            <Button onClick={showview} type="primary" className='btnMain mt-l-10'>
                Confirm and Buy
            </Button>
            <Modal title="Round 328" visible={isview} onCancel={viewCancel}>
                <div class="modalBlue modalBuy poppinsFont whtClr">
                    <div class="headModal text-center">
                        <h3 class="gradText">Round 328</h3>
                    </div>
                    <div className='modalBody editNmber'>
                        <h5 className='d-flex mb-2'>
                            <span>Total cost:</span>
                            <span className='mg-l-auto'>~2.3457 CAKE</span>
                        </h5>
                        <p>Numbers are randomized, with no duplicates among your tickets. Tap a number to edit it. Availible: 0 - 9</p>
                        <button className=' borderBtn widthFull clrSmBlue mt-2'>Randomize</button>
                        <h5 className='mt-4'>Your tickets</h5>
                        <div className='ticketNmberWrap'>
                            <div className='ticketNmber'>
                                <h6 className='clrWht'>#1</h6>
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
                                <h6 className='clrWht'>#2</h6>
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
                                <h6 className='clrWht'>#3</h6>
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
                                <h6 className='clrWht'>#4</h6>
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
                                <h6 className='clrWht'>#5</h6>
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
                                <h6 className='clrWht'>#6</h6>
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
                                <h6 className='clrWht'>#7</h6>
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
                        <button className="btnMain widthFull mt-3">Buy tickets</button>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default Round;