import React, { useState, useEffect } from 'react';
import logohokkfi from '../../assets/images/hokkafiLogo.svg';
import logomobilehokkfi from '../../assets/images/logohokkfi.png';
import btc from '../../assets/images/btc.png';
import btcMn from '../../assets/images/btcMn.png';
import { MoreOutlined, MenuOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { Select } from 'antd';
import { DropdownButton, Dropdown } from 'react-bootstrap';


const { Option } = Select;
const Header = () => {
  // adding class on header scroll
  const [scroll, setScroll] = useState(false);
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 2);
    });
  }, []);
  // adding class on header scroll

  // Mobile screen opensidebar
  const openSidebar = () => {
    document.getElementById('mobile_side_bar').classList.remove('CloseMobileScreen');
    document.getElementById('mobile_side_bar').classList.add('OpenMobileScreen');
  }
  // Mobile screen opensidebar

  return (
    <>
      <div className={scroll ? "header header_scroll" : "header"}>
        <div className='wrapper d-flex'>
          <div className='mainLogo'>
            <a href="/">
              <img src={logohokkfi} alt='logo' className='d-none d-md-block' />
              <img src={logomobilehokkfi} alt='mobileLogo' className='d-md-none' />
            </a>
          </div>
          <div className='dropMenu mg-l-auto d-flex'>
            {/* mobile closemenuicon */}
            <MenuOutlined className='mob_menu_icon' onClick={openSidebar} />
            {/* mobile closemenuicon */}
            <div className='dropdown headDpdn'>
              <Select defaultValue={btc} onChange={handleChange}>
                <Option value={btcMn}><img src={btcMn} alt='cripto icons' /></Option>
                <Option value={btc}><img src={btc} alt='cripto icons' /></Option>
              </Select>
            </div>
            <button className='connectwallet'>Connect to a wallet</button>
            <DropdownButton id="dropdown-basic-button" className='headedrop'>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;