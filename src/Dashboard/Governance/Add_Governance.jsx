import  Dropdown_arror from '../../assets/icons/Vector 1.png';
import  BSC_logo from '../../assets/images/iconBsc.png';
import  HSC_logo from '../../assets/images/iconHsc.png';
import {useState} from "react";


const Add_Governance=()=>{

    const [token,setToken] = useState({
        name:"BSC",
        icon:BSC_logo
    });

    const [type,setType] = useState({
        name:"BSC",
        icon:BSC_logo
    });

    return(
        <>
            <div className="right_main_section proposal_div">
                <div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card_dark">
                                <div className="row mb-2">
                                    <div className="col-12 col-md-12">
                                        <h3 className="section_heading">Create Proposal</h3>
                                    </div>
                                </div>

                                <div className="content-section text-left p-4">
                                    <p className="mt-0 tip_text_proposal">
                                        Tip: Select an action and describe your proposal for the community. The proposal cannot be modified after submission, so please verify all information before submitting. The voting period will begin immediately and last for 7 days. To propose a custom action, read the docs.
                                    </p>
                                </div>

                                <div className="row">
                                    <div className="col-md-12">
                                        <h3 className="sub-heading">Proposed Action</h3>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="content-section text-left p-4 fixPad">
                                            <div className="option_selector_div">
                                                <div className="d-flex align-items-center">
                                                    <span className="mx-2 token_title_text">Transfer Token</span>

                                                </div>
                                                <div className="dropdown d-flex ml-auto">
                                                    <button type="button" className="btn btn-white btn-dropdown pl-4 pr-4 " data-toggle="dropdown">
                                                        <img src={Dropdown_arror}/>
                                                    </button>
                                                    <div className="dropdown-menu dropdown-menu-right dropdown-menu-div ">
                                                        <button>
                                                            <img src={BSC_logo}/>
                                                            <span>BSC</span>
                                                        </button>
                                                        <button className="ml-0">
                                                            <img src={HSC_logo}/>
                                                            <span>HSC</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-12 mt-3">
                                        <div className="content-section text-left p-4 fixPad">
                                            <div className="option_form_div">
                                                <div className="">
                                                    <span className="mx-2 token_title_text">To : </span>
                                                    <input type="text" className="input-form" placeholder="Wallet Address or ENS name"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-12 mt-3">
                                        <div className="content-section fixPad">
                                            <div className="d-flex align-items-center">
                                                <div className="option_selector_div">
                                                    <div className="d-flex align-items-center">
                                                        <span className="mx-2"><span>
                                                            <img src={type.icon} />
                                                        </span>{type.name}</span>
                                                    </div>
                                                    <div className="dropdown d-flex">
                                                        <button type="button" className="btn btn-white btn-dropdown pl-4 pr-4" data-toggle="dropdown">
                                                            <img src={Dropdown_arror}/>
                                                        </button>
                                                        <div className="dropdown-menu dropdown-menu-right dropdown-menu-div">
                                                            <button onClick={(e)=>setType({name:'BSC', icon: BSC_logo})}>
                                                                <span>BSC</span>
                                                            </button>
                                                            <button className="ml-0" onClick={(e)=>setType({name:'HSC', icon: HSC_logo})}>
                                                                <span>HSC</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="ml-auto">
                                                    <input type="text" placeholder="0.0" dir="rtl" className="form-control text-right exh-form-control input mt-0" />
                                                </div>

                                            </div>
                                        </div>
                                    </div>


                                </div>

                                <div className="row">
                                    <div className="col-md-12">
                                        <hr className="dash-border"/>
                                        <h3 className="sub-heading">Proposal</h3>
                                        <h3 className="sub-heading-tags">## Proposal Title</h3>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="content-section text-left p-4">
                                            <textarea className="form-control textarea-form" rows="8" placeholder="Insert your summary here"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <button className="btn btn-primary btn-submit">Submit</button>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Add_Governance;