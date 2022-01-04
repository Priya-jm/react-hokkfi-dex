import React, { useState,useEffect } from 'react';
import logohokkfi from '../../assets/images/logohokkfi.png';
import icontransfer from '../../assets/images/icon_transfer.png';
import iconmoney from '../../assets/images/icon_money.png';
import icongrowth from '../../assets/images/icon_growth.png';
import iconsidney from '../../assets/images/iconsidney.png';
import icongambling from '../../assets/images/icon_gambling.png';
import iconmaintenance from '../../assets/images/icon_maintenance.png';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Button, Layout, Menu } from 'antd';
import { ImportOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import collapseLogo from '../../assets/images/collapseLogo.png';
import { Select } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
import btc from '../../assets/images/btc.png'
import btcMn from '../../assets/images/btcMn.png';
import Exchange from '../Exchange/Exchange';
import Liquiditiy from '../Liquiditiy/Liquiditiy';
import Addliquidity from '../Farms/Addliquidity';
import Participatingpools from '../Farms/Participatingpools';
import Treats from '../Farms/Treats';
import Treatsethliquidity from '../Farms/Treatsethliquidity';
import Treatsethliquiditymining from '../Farms/Treatsethliquiditymining';
import Bridge from '../Bridge/Bridge';
import Lottery from '../Lottery/Lottery';
import Governance from '../Governance/Governance';
import Add_Liquidity from "../Liquiditiy/Add_Liquidity";
import Add_Governance from "../Governance/Add_Governance";
import Governance2 from "../Governance/Governance2";
import Add_Keypair from "../Liquiditiy/Add_Keypair";


const { Content, Sider } = Layout;
const { Option } = Select;
const Sidemenu = () => {
    const mobile_side_bar = false;
    const [, setCollapsed] = useState(false);
    const [isActive, setActive] = useState("false");
    // sidebar collapsed
    function onCollapse(collapsed) {
        setCollapsed(collapsed);
    };
    function handleChange(value) {
        console.log(`selected ${value}`);
    }

    // mobilesidebar close icon
    const toggleClass = () => {
        setActive(!isActive);
    };
    const [lottery, setlottery] = useState(false);
    const Lotterymenu = () => {
        setlottery(true);
    }
    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 620;
    useEffect(() => {
        window.addEventListener("resize", () => {
            setWidth(window.innerWidth)
        });
    }, []);

    return (
        <>
            {width > breakpoint && lottery ? <Lottery /> :
                <div className="wrapper" id="dashboardPg" >
                    <Router>
                        <Layout style={{ minHeight: '100vh' }}>
                            {/* mobilesidebar close icon */}
                            <Sider collapsible onCollapse={onCollapse} id="mobile_side_bar" className={isActive ? 'CloseMobileScreen  ' : 'CloseMobileScreen'}>
                                <CloseCircleOutlined className='close_menu_icon' onClick={toggleClass} />
                                <div className="logo">
                                    <img src={logohokkfi} alt="logohokkfi" />
                                    <img src={collapseLogo} alt="collapseLogo" className='collsLogo' />
                                </div>
                                <div className='dropdown'>
                                    <Select defaultValue={btc} onChange={handleChange}>
                                        <Option value={btcMn}><img src={btcMn} alt='cripto icons' /></Option>
                                        <Option value={btc}><img src={btc} alt='cripto icons' /></Option>
                                    </Select>
                                </div>
                                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                                    <Menu.Item key="1" icon={<img src={icontransfer} alt="icontransfer" />}>
                                        <Link to="/exchange"><span>Exchange</span></Link>
                                    </Menu.Item>
                                    <Menu.Item key="2" icon={<img src={iconmoney} alt="iconmoney" />}>
                                        <Link to="/liquiditiy"><span>Liquidity</span></Link>
                                    </Menu.Item>
                                    <Menu.Item key="3" icon={<img src={icongrowth} alt="icongrowth" />}>
                                        <Link to="/farms"><span>Farms</span></Link>
                                    </Menu.Item>
                                    <Menu.Item key="4" icon={<img src={iconsidney} alt="iconsidney" />}>
                                        <Link to="/bridge"><span>Bridge</span></Link>
                                    </Menu.Item>
                                    <Menu.Item key="5" icon={<img src={icongambling} alt="icongambling" />}>
                                        <Link to="/lottery" onClick={Lotterymenu}><span>Lottery</span></Link>
                                    </Menu.Item>
                                    <Menu.Item key="6" icon={<img src={iconmaintenance} alt="iconmaintenance" />}>
                                        <Link to="/governance"><span>Governance</span></Link>
                                    </Menu.Item>
                                    <div className='logoutWrap'>
                                        <div>
                                            <Button className='logoutBtn'>
                                                <ImportOutlined />
                                                Logout
                                            </Button>
                                            <span className='langn'>Language</span>
                                        </div>
                                    </div>
                                </Menu>
                            </Sider>
                            <Layout className="site-layout">
                                <Content className="content">
                                    <div>
                                        <Switch>
                                            <Route exact path="/" component={Exchange} />
                                            <Route exact path="/exchange" component={Exchange} />
                                            <Route exact path="/liquiditiy" component={Liquiditiy} />
                                            {/* farms and subcomponents */}
                                            <Route exact path="/farms/addliquidity" component={Addliquidity} />
                                            <Route exact path="/farms" component={Participatingpools} />
                                            <Route exact path="/farms/treats" component={Treats} />
                                            <Route exact path="/farms/treatsliquidity" component={Treatsethliquidity} />
                                            <Route exact path="/farms/treatsethmining" component={Treatsethliquiditymining} />
                                            {/* farms and subcomponents */}
                                            {/*New Page Route*/}
                                            <Route exact path="/liquiditiy/add_liquiditiy" component={Add_Liquidity} />
                                            <Route exact path="/governance/add_governance" component={Add_Governance} />
                                            <Route exact path="/governance_view" component={Governance2} />
                                            <Route exact path="/add_Keypair" component={Add_Keypair} />
                                            {/*New Page Route*/}
                                            <Route exact path="/bridge" component={Bridge} />
                                            <Route exact path="/lottery" component={Lottery} />
                                            <Route exact path="/governance" component={Governance} />
                                        </Switch>
                                    </div>
                                </Content>
                            </Layout>
                        </Layout>
                    </Router>
                </div>
            }
        </>
    );
};
export default Sidemenu;