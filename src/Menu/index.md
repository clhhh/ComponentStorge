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
  defaultIndex="0"
  defaultOpenSubMenus={[
    '2','3'
  ]}
  mode="vertical"
  onSelect={function noRefCheck(){}}
>
  <MenuItem>
    JS
  </MenuItem>
  <MenuItem>
    TS
  </MenuItem>
  <SubMenu title="默认展开下拉选项">
    <MenuItem>
      二叉树
    </MenuItem>
    <MenuItem>
      平衡二叉树
    </MenuItem>
    </SubMenu>
    <SubMenu title="默认展开下拉选项">
    <MenuItem>
      红黑树
    </MenuItem>
    <MenuItem>
      二叉搜索树
    </MenuItem>
    </SubMenu>
  
</Menu>
    
  </div>
);
```