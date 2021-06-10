```tsx 
import React from 'react';
import SubMenu from 'myapp/src/Menu/subMenu';
import  Menu  from 'myapp/src/Menu/menu';
import  MenuItem  from 'myapp/src/Menu/menuItem';

import 'myapp/src/Menu/style/index'

export default () => (
  <div
    style={{
      padding: '20px 40px',
      width: '500px',
    }}
  >
    <h3>组件演示</h3>
    <Menu
     
    >
      <MenuItem index="0">C++</MenuItem>
      <MenuItem index="1">Java</MenuItem>
      <MenuItem>disabled</MenuItem>
      <SubMenu title="下拉选项">
        <MenuItem>node.js</MenuItem>
        <MenuItem>deno.js</MenuItem>
      </SubMenu>
    </Menu>
  </div>
);


```