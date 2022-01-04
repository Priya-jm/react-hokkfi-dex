import React, { useState ,useEffect} from 'react';
import "../../assets/css/lottery.css";
import Icondraw from '../../assets/images/lottery/Icondraw.png';
import Iconsprize from '../../assets/images/lottery/Iconsprize.png';
import iconTickets from '../../assets/images/lottery/iconTickets.png';
import NumberBall1 from '../../assets/images/lottery/NumberBall1.png';
import wallet from '../../assets/images/lottery/wallet.png';
import IconPrice from '../../assets/images/lottery/IconPrice.svg';
import graphCircle from '../../assets/images/lottery/graphCircle.svg';
import winingCretraMob from '../../assets/images/lottery/winingCretraMob.png';
import more_btn from '../../assets/images/lottery/more_btn.svg';
import App_Store from '../../assets/images/lottery/App_Store.png';
import play_Store from '../../assets/images/lottery/play_Store.png';
import logo_foot from '../../assets/images/lottery/logo_foot.png';
import fundIcon from '../../assets/images/lottery/fundIcon.png';
import Group from '../../assets/images/lottery/Group.png';
import rocketIcon from '../../assets/images/lottery/rocketIcon.png';
import iconBall1 from '../../assets/images/lottery/IconBall1.png';
import iconBall3 from '../../assets/images/lottery/iconBall3.png';
import iconBall4 from '../../assets/images/lottery/iconBall4.png';
import iconBall5 from '../../assets/images/lottery/iconBall5.png';
import iconBall6 from '../../assets/images/lottery/iconBall6.png';
import iconBall7 from '../../assets/images/lottery/iconBall7.png';
import iconMony from '../../assets/images/lottery/iconMony.png';
import lottry_frombg from '../../assets/images/lottery/lottry_frombg.png';
import topbg from '../../assets/images/lottery/top-bg.png';
import halfStart from '../../assets/images/lottery/halfStart.png';
import rightIconLottryTop from '../../assets/images/lottery/rightIconLottryTop.png';
import rightIconLottry from '../../assets/images/lottery/rightIconLottry.png';
import Specular from '../../assets/images/lottery/Specular.png';
import lotteryimg from '../../assets/images/lottery/lottery_img.png';
import Carousel from 'react-bootstrap/Carousel';
import SlideToggle from "react-slide-toggle";
import Buyticketsmodal from '../Lottery/Buyticketsmodal';
import Buytickets from './Buytickets';
import Connectwallet from './Connectwallet';


const Lottery = () => {
  useEffect(() => {
    document.body.className = 'lottery-page';
    return () => { document.body.className = ''; }
  });
  return (
    <>
      <div class="lottrySec">
        <div class="container  whtClr poppinsFont">
          <div class="section1Lotry padSec">
            <div class="topSec">
              <div class="textWrap text-center">
                <h3 class='whtClr'>The lottery</h3>
                <h1 class='gradText '>$154.555</h1>
                <h3 className="whtClr">in prizes !</h3>
                <a href="#" class="mt-4"><Buyticketsmodal /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <></>
      <div className="whtClr poppinsFont">
        <div className="decoArrow">
          <div className="borderLine padSec  container" >
            <img src={iconMony} alt="star icon" className="iconCOin" />
            <div className="NexDraw">
              <div className='headTitle d-flex'>
                <h3>Next draw <span className='timeDt mg-l-auto'>#303 | Draw: Dec 1, 2021, 5:00 PM</span></h3>
              </div>
              <div className="cntntWrp text-center">
                <h4>Prize Pot</h4>
                <h2 className='gradText'>~$237,451</h2>
                <div className='d-flex justify-content-center align-items-center'>
                  <span className='display4'>Your tickets</span>
                  <Buytickets />
                </div>
                <SlideToggle
                  duration={800}
                  render={({ onToggle, setCollapsibleElement, progress }) => (
                    <div className="my-collapsible">
                      <div className={progress ? "my-collapsible__content" : "active_tab"} ref={setCollapsibleElement} >
                        <div
                          className="my-collapsible__content-inner"
                          style={{
                            transform: `translateY(${Math.round(20 * (-1 + progress))}px)`
                          }}
                        >
                          <div className="radiusBx bglightBlue">
                            <h4 className='whtClr text-center'>Match the winning number in the same order to share prizes. Current prizes up for grabs:</h4>
                            <div className='row toggleBx'>
                              <div className='col-lg-4 col-md-6'>
                                <div className='tabBox bgBlack d-flex'>
                                  <div className='titlesm d-flex'>
                                    <img src={IconPrice} alt="price" />
                                    <h3>Match first 1 <small>325 CAKE</small></h3>
                                  </div>
                                  <span className='mg-l-auto priceSm'>~$4,641</span>
                                </div>
                              </div>
                              <div className='col-lg-4 col-md-6'>
                                <div className='tabBox bgBlack d-flex'>
                                  <div className='titlesm d-flex'>
                                    <img src={IconPrice} alt="price" />
                                    <h3>Match first 1 <small>325 CAKE</small></h3>
                                  </div>
                                  <span className='mg-l-auto priceSm'>~$4,641</span>
                                </div>
                              </div>
                              <div className='col-lg-4 col-md-6'>
                                <div className='tabBox bgBlack d-flex'>
                                  <div className='titlesm d-flex'>
                                    <img src={IconPrice} alt="price" />
                                    <h3>Match first 1 <small>325 CAKE</small></h3>
                                  </div>
                                  <span className='mg-l-auto priceSm'>~$4,641</span>
                                </div>
                              </div>
                              <div className='col-lg-4 col-md-6'>
                                <div className='tabBox bgBlack d-flex'>
                                  <div className='titlesm d-flex'>
                                    <img src={IconPrice} alt="price" />
                                    <h3>Match first 1 <small>325 CAKE</small></h3>
                                  </div>
                                  <span className='mg-l-auto priceSm'>~$4,641</span>
                                </div>
                              </div>
                              <div className='col-lg-4 col-md-6'>
                                <div className='tabBox bgBlack d-flex'>
                                  <div className='titlesm d-flex'>
                                    <img src={IconPrice} alt="price" />
                                    <h3>Match first 1 <small>325 CAKE</small></h3>
                                  </div>
                                  <span className='mg-l-auto priceSm'>~$4,641</span>
                                </div>
                              </div>
                              <div className='col-lg-4 col-md-6'>
                                <div className='tabBox bgBlack d-flex'>
                                  <div className='titlesm d-flex'>
                                    <img src={IconPrice} alt="price" />
                                    <h3>Match first 1 <small>325 CAKE</small></h3>
                                  </div>
                                  <span className='mg-l-auto priceSm'>~$4,641</span>
                                </div>
                              </div>
                              <div className='col-lg-4 col-md-6'>
                                <div className='tabBox bgBlack d-flex'>
                                  <div className='titlesm d-flex'>
                                    <img src={IconPrice} alt="price" />
                                    <h3>Match first 1 <small>325 CAKE</small></h3>
                                  </div>
                                  <span className='mg-l-auto priceSm'>~$4,641</span>
                                </div>
                              </div>
                              <div className='col-lg-4 col-md-6'>
                                <div className='tabBox bgBlack d-flex'>
                                  <div className='titlesm d-flex'>
                                    <img src={IconPrice} alt="price" />
                                    <h3>Match first 1 <small>325 CAKE</small></h3>
                                  </div>
                                  <span className='mg-l-auto priceSm'>~$4,641</span>
                                </div>
                              </div>
                              <div className='col-lg-4 col-md-6'>
                                <div className='tabBox bgBlack d-flex'>
                                  <div className='titlesm d-flex'>
                                    <img src={IconPrice} alt="price" />
                                    <h3>Match first 1 <small>325 CAKE</small></h3>
                                  </div>
                                  <span className='mg-l-auto priceSm'>~$4,641</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='textCenter mt-4'>
                        <span className='HideRow' onClick={onToggle}>{progress ? 'HIDE' : 'SHOW'}</span>
                      </div>
                    </div>
                  )}
                />
              </div>
            </div>
          </div>
        </div>
        <div className='connectWalet padSec'>
          <div className='textCenter container'>
            <h3 className='gradText'>Connect your wallet
              to check if you've won</h3>
            <div className="mt-4 mb-4 lotryImg">
              <img src={wallet} alt='wallet' />
            </div>
            <div><Connectwallet /></div>
          </div>
        </div>
        <div className='finshRound'>
          <div className="borderLine padSec container">
            <div className="NexDraw">
              <div className="row text-center justify-content-center">
                <div className="col-lg-5 col-md-9">
                  <h2 className="gradText mb-4">Finished Rounds</h2>
                  <div className="row mb-4">
                    <div className="col">
                      <button className="btnMain wd100 smBtn ">All history</button>
                    </div>
                    <div className="col">
                      <button className="btnMain smBtn wd100 gradbg">Your history</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='relativeBx'>
              <div className="headTitle mg15_0">
                <Carousel className='slideCnt'>
                  <Carousel.Item>
                    <p><span className='font25'>Round</span> <span className="hgltBg">302</span></p>
                    <p><span className="ltFont">Drawn Dec 1, 2021, 5:00 AM</span></p>
                  </Carousel.Item>
                  <Carousel.Item>
                    <p><span className='font25'>Round</span> <span class="hgltBg">302</span></p>
                    <p><span class="ltFont">Drawn Dec 1, 2021, 5:00 AM</span></p>
                  </Carousel.Item>
                </Carousel>
              </div>
              <div className="winNu mt-4">
                <div className="d-flex align-items-center">
                  <h3>Winning Number</h3>
                  <div className="nmberwrap d-flex mg-l-auto">
                    <span className="nmberIn"><img src={NumberBall1} alt="numbers" /></span>
                    <span className="nmberIn"><img src={iconBall1} alt="numbers" /></span>
                    <span className="nmberIn"><img src={iconBall3} alt="numbers" /></span>
                    <span className="nmberIn"><img src={iconBall4} alt="numbers" /></span>
                    <span className="nmberIn"><img src={iconBall5} alt="numbers" /></span>
                    <span className="nmberIn"><img src={iconBall6} alt="numbers" /></span>
                    <span className="nmberIn"><img src={iconBall7} alt="numbers" /></span>
                  </div>
                </div>
              </div>
              </div>

              <div className="mt-4 bgBlack radiusBx">
                <div className="row align-items-stretch">
                  <div className="col-lg-3 text-center text-lg-left flexBx">
                    <div className="textwrp">
                      <h3 className="mt-1">Prize pot</h3>
                      <h2 className="gradText">~$237,451</h2>
                      <span className="smText">13,009 CAKE</span>
                    </div>
                    <div className="footWrp align-self-end d-flex mb-3">
                      <span>Total players this round: <span className='font25'>1315</span></span>
                    </div>
                  </div>
                  <div className="col-lg-9">
                    <h4 className="text-center mb-4">Match the winning number in the same order to share prizes. Current prizes up for grabs:</h4>
                    <div className="row gridSm">
                      <div className="col-lg-4 col-md-6">
                        <div className="tabBox bglightBlue d-flex">
                          <div className="titlesm d-flex">
                            <img src={IconPrice} alt="price" />
                            <h3>Match first 1 <small>325 CAKE</small>

                              <span className="priceSm">~$3,648<br />
                                0.41 CAKE each<br />
                                631 Winners</span>
                            </h3>
                          </div>

                        </div>
                      </div>

                      <div className="col-lg-4 col-md-6">
                        <div className="tabBox bglightBlue d-flex">
                          <div className="titlesm d-flex">
                            <img src={IconPrice} alt="price" />  <h3>Match first 1 <small>325 CAKE</small>

                              <span className="priceSm">~$3,648<br />
                                0.41 CAKE each<br />
                                631 Winners</span>
                            </h3>
                          </div>

                        </div>
                      </div>

                      <div className="col-lg-4 col-md-6">
                        <div className="tabBox bglightBlue d-flex">
                          <div className="titlesm d-flex">
                            <img src={IconPrice} alt="price" />
                            <h3>Match first 1 <small>325 CAKE</small>

                              <span className="priceSm">~$3,648<br />
                                0.41 CAKE each<br />
                                631 Winners</span>
                            </h3>
                          </div>

                        </div>
                      </div>

                      <div className="col-lg-4 col-md-6">
                        <div className="tabBox bglightBlue d-flex">
                          <div className="titlesm d-flex">
                            <img src={IconPrice} alt="price" />  <h3>Match first 1 <small>325 CAKE</small>

                              <span className="priceSm">~$3,648<br />
                                0.41 CAKE each<br />
                                631 Winners</span>
                            </h3>
                          </div>

                        </div>
                      </div>

                      <div className="col-lg-4 col-md-6">
                        <div className="tabBox bglightBlue d-flex">
                          <div className="titlesm d-flex">
                            <img src={IconPrice} alt="price" />  <h3>Match first 1 <small>325 CAKE</small>

                              <span className="priceSm">~$3,648<br />
                                0.41 CAKE each<br />
                                631 Winners</span>
                            </h3>
                          </div>

                        </div>
                      </div>

                      <div className="col-lg-4 col-md-6">
                        <div className="tabBox bglightBlue d-flex">
                          <div className="titlesm d-flex">
                            <img src={IconPrice} alt="price" />  <h3>Match first 1 <small>325 CAKE</small>

                              <span className="priceSm">~$3,648<br />
                                0.41 CAKE each<br />
                                631 Winners</span>
                            </h3>
                          </div>

                        </div>
                      </div>

                      <div className="col-lg-4 col-md-6">
                        <div className="tabBox bglightBlue d-flex">
                          <div className="titlesm d-flex">
                            <img src={IconPrice} alt="price" />  <h3>Match first 1 <small>325 CAKE</small>

                              <span className="priceSm">~$3,648<br />
                                0.41 CAKE each<br />
                                631 Winners</span>
                            </h3>
                          </div>

                        </div>
                      </div>

                      <div className="col-lg-4 col-md-6">
                        <div className="tabBox bglightBlue d-flex">
                          <div className="titlesm d-flex">
                            <img src={IconPrice} alt="price" />  <h3>Match first 1 <small>325 CAKE</small>

                              <span className="priceSm">~$3,648<br />
                                0.41 CAKE each<br />
                                631 Winners</span>
                            </h3>
                          </div>

                        </div>
                      </div>

                      <div className="col-lg-4 col-md-6">
                        <div className="tabBox bglightBlue d-flex">
                          <div className="titlesm d-flex">
                            <img src={IconPrice} alt="price" />  <h3>Match first 1 <small>325 CAKE</small>

                              <span className="priceSm">~$3,648<br />
                                0.41 CAKE each<br />
                                631 Winners</span>
                            </h3>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='how2Play padSec text-center'>
          <div className='container'>
            <div className="row justify-content-center">
              <div className="col-lg-7">
                <h2 className="gradText">How to Play</h2>
                <p>If the digits on your tickets match the winning numbers in the correct order, you win a portion of the prize pool.
                  Simple!</p>
              </div>
            </div>
            <div className="row mt-4 justify-content-center align-items-stretch">
              <div className="col-lg-4 col-md-5">
                <div className="playBx bgBlack">
                  <span className="iconCr">
                    <img src={iconTickets} alt='iconTickets' /></span>
                  <h3>Buy Tickets</h3>
                  <p>Prices are set when the round starts, equal to 5 USD in CAKE per ticket.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-5">
                <div className="playBx bgBlack">
                  <span className="iconCr">
                    <img src={Icondraw} alt='Icondraw' /></span>
                  <h3>Wait for the Draw</h3>
                  <p>There are two draws every day: one every 12 hours.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-5">
                <div className="playBx bgBlack">
                  <span className="iconCr">
                    <img src={Iconsprize} alt='Iconsprize' /></span>
                  <h3>Check for Prizes</h3>
                  <p>Once the round’s over, come back to the page and check to see if you’ve won!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="padSec winngCrtra container">
        <h2 className="gradText text-center mb-5 pb-3">Winning Criteria</h2>
        <div className="row align-items-center">

          <div className="col-lg-6 ">
            <div className="skyBleClr textCritera">
              <h3>The digits on your ticket must match in the correct order to win.</h3>
              <p className="mb-4">Here’s an example lottery draw, with two tickets, A and B.</p>
              <p><span className="whtClr">Ticket A:</span> The first 3 digits and the last 2 digits match, but the 4th digit is wrong, so this ticket only wins a “Match first 3” prize.</p>
              <p><span className="whtClr">Ticket B:</span> Even though the last 5 digits match, the first digit is wrong, so this ticket doesn’t win a prize.</p>
              <p className="mt-4">Prize brackets don’t ‘stack’: if you match the first 3 digits in order, you’ll only win prizes from the ‘Match 3’ bracket, and not from ‘Match 1’ and ‘Match 2’.</p>
            </div>
          </div>

          <div className="col-lg-6 text-center text-lg-right mt-4 mt-lg-0">
            <img src={lotteryimg} alt="lottery image" className="d-none d-md-block" />
            <img src={winingCretraMob} alt="winning createria" className="d-sm-none" />
          </div>

        </div>
      </div>


      <div className="prizeFnds padSec bgBlack whtClr poppinsFont">
        <div className="container">
          <h2 className="gradText text-center mb-5">Prize Funds</h2>
          <h3 className="mb-3">The prizes for each lottery round come from three sources:</h3>
          <div className="row">
            <div className="col-lg-7">
              <div className="radiusBox mb-2">
                <h3 className="skyBleClr">Ticket Purchases</h3>
                <p>100% of the CAKE paid by people buying tickets that round goes back into the prize pools.</p>
              </div>
              <div className="radiusBox mb-2">
                <h3 className="skyBleClr">Rollover Prizes</h3>
                <p>After every round, if nobody wins in one of the prize brackets, the unclaimed CAKE for that bracket rolls over into the next round and are redistributed among the prize pools.</p>
              </div>
              <div className="radiusBox">
                <h3 className="skyBleClr">CAKE Injections</h3>
                <p>An average total of 35,000 CAKE from the treasury is added to lottery rounds over the course of a week. This CAKE is of course also included in rollovers! Read more in our guide to CAKE Tokenomics</p>
              </div>
            </div>

            <div className="col-lg-5 mt-sm-3 mt-2 mt-lg-0">
              <div className="chartBx">
                <div className="d-flex headTop align-items-center">
                  <h4 className="mb-0 mt-0 clrWht">Chart</h4>
                  <span className="mg-l-auto"><img src={more_btn} alt="menu bar" /></span>
                </div>

                <div className="circleBx mt-4 mb-5 text-center">
                  <span>
                    <img src={graphCircle} alt="graph circle" />
                    <i>42 age 21.9%</i>
                  </span>
                </div>

                <ul className="graphDtlList">
                  <li className="d-flex blueCrle"><span>Matches first 1</span><span className="mg-l-auto">2%</span></li>
                  <li className="d-flex darkskyblCrle"><span>Matches first 1</span><span className="mg-l-auto">2%</span></li>
                  <li className="d-flex liteskyblCrle"><span>Matches first 1</span><span className="mg-l-auto">2%</span></li>
                  <li className="d-flex bCrle"><span>Matches first 1</span><span className="mg-l-auto">2%</span></li>
                  <li className="d-flex pinkCrle"><span>Matches first 1</span><span className="mg-l-auto">2%</span></li>
                  <li className="d-flex greenCrle"><span>Matches first 1</span><span className="mg-l-auto">2%</span></li>
                  <li className="d-flex tanCrle"><span>Matches first 1</span><span className="mg-l-auto">2%</span></li>
                  <li className="d-flex ltYwlCrle"><span>Matches first 1</span><span className="mg-l-auto">2%</span></li>

                </ul>


              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer poppinsFont">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12 mb-lg-0 mb-4 text-md-left">
              <img src={logo_foot} alt="logo" className="mb-4" />
              <p>There are many variations of passages of Lorem the Ipsum available but it is the majority of suffered that a alteration in that some dummy text.</p>
              <ol className="socailLinks d-flex mb-4 mb-md-0">
                <li><a href="#" target="blank" className="fa fa-instagram"></a></li>
                <li><a href="#" target="blank" className="fa fa-linkedin"></a></li>
                <li><a href="#" target="blank" className="fa fa-facebook"></a></li>
                <li><a href="#" target="blank" className="fa fa-twitter"></a></li>
              </ol>
            </div>
            <div className="col-lg-8">
              <div className="row">
                <div className="col-lg-4 col-md-4 mb-md-0 mb-3">
                  <h4 className="mb-4">Services</h4>
                  <ul className="linkList">
                    <li><a href="#">Incident Responder</a></li>
                    <li><a href="#">Secure Managed IT</a></li>
                    <li><a href="#">Check website Url</a></li>
                    <li><a href="#">Locker Security</a></li>
                  </ul>
                </div>

                <div className="col-lg-4 col-md-4 mb-md-0 mb-3">
                  <h4 className="mb-4">About Us</h4>
                  <ul className="linkList">
                    <li><a href="#">Payment Plans</a></li>
                    <li><a href="#">Make saving More</a></li>
                    <li><a href="#">Tax Calculator</a></li>
                    <li><a href="#">Talk To Us</a></li>
                  </ul>
                </div>
                <div className="col-lg-4 mb-md-0 mb-3">
                  <h4 className="mb-4">Our Support  Download</h4>
                  <p>455 West Orchard Street Kings Mountain, NC 28086
                    Phone: +8 (123) 985 789
                    Email: metax@gamil.com</p>
                  <div className="row mt-4 lessPad">
                    <div className="col"><a href="#" target="blank"><img src={App_Store} alt="app link" /></a></div>
                    <div className="col"><a href="#" target="blank"><img src={play_Store} alt="app link" /></a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footBottom text-center pb-2">
            <small> © 2021 Company All Rights Reserved.</small>
          </div>
        </div>
      </div>


    </>
  );
};
export default Lottery;