import React, { useState } from 'react';
import { Modal, Button } from 'antd';
// import Editnumbers from '../Lottery/Editnumbers';


const Buytickets = () => {
  const [isshow, setIsshow] = useState(false);
  const showtickets = () => {
    setIsshow(true);
  };
  const handleCancel = () => {
    setIsshow(false);
  };
  // EditNumber
  const [isview, setIsview] = useState(false);
  const showview = () => {
    setIsview(true);
    setIsshow(false);
  };
  const viewCancel = () => {
    setIsview(false);
  };
  // Round 
  const [isround, setIsround] = useState(false);
  const showround = () => {
    setIsround(true);
  };
  const roundcancel = () => {
    setIsround(false);
    setIsview(false);
  };
 
  return (
    <>
      <Button onClick={showtickets} className='btnMain mt-l-10'>
        Buy Tickets
      </Button>
      <Modal visible={isshow} onCancel={handleCancel} >
        <div class="modalBlue modalBuy poppinsFont whtClr">
          <div class="headModal text-center">
            <h3 class="gradText">Buy Tickets</h3>
          </div>
          <div class="titletckt d-flex">
            <span>Buy:</span><span class="mg-l-auto">Tickets</span>
          </div>
          <div class="bgltBlack ticktwrap text-right">
            <h5 class="mb-3">0</h5>
            <h5 mb-0 pb-0>~0.00 CAKE</h5>
          </div>
          <p className='text-right text-danger mb-1'>Insifficient CAKE balance</p>
          <p className='text-right'>CAKE balance: 0.432</p>

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
              <button className='btnMain widthFull bgblue boxShdwNone mb-3'>Buy Instantly</button>
              <button className='btnMain widthFull borderBtn boxShdwNone grayBrd' onClick={showview}>View/Edit Numbers</button>
            </div>
          </div>
          <p class="smText">"Buy Instantly" chooses random numbers, with no duplicates among your tickets. Prices are set before each round starts, equal to $5 at that time. Purchases are final.</p>
        </div>
      </Modal>
      {/* EditNumber Modals */}
      {/* <button className='btnMain' onClick={showview}>View/Edit Numbers</button> */}
      <Modal title="Edit numbers" visible={isview} onCancel={viewCancel}>
        <div class="modalBlue modalBuy poppinsFont whtClr">
          <div class="headModal text-center">
            <h3 class="gradText">Edit numbers</h3>
          </div>
          <div className='modalBody'>
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
            <button onClick={showround} type="primary" className='btnMain widthFull mt-3'>
              Confirm and buy
            </button>
            <div className='text-center mt-4'>
              <a href="#" className='text-center backBtn'>
                <i class="fa fa-angle-left" aria-hidden="true"></i>Go back</a>
            </div>
          </div>
        </div>
      </Modal>
      {/* Round Modal */}

      <Modal title="Round 328" visible={isround} onCancel={roundcancel}>
        <div class="modalBlue modalBuy poppinsFont whtClr">
          <div class="headModal text-center">
            <h3 class="gradText">Round 328</h3>
          </div>
          <div className='modalBody'>
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
export default Buytickets;