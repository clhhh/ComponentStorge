## 菜单组件
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
### API

#### Menu
| 属性 | 说明     | 类型                                         | 默认值 |
| ---- | -------- | -------------------------------------------- | ------ |
| defaultIndex | 默认active的索引 | number | 0 |
| className | 组件类名 |   string   |   - |
| mode  | 菜单类型横项或者纵向 | oneOf "horizontal" | "vertical" | horizonta | 
| onSelect | 	点击菜单项触发的回掉函数 | function | false |
| defaultOpenSubMenus | 	设置子菜单的默认打开 只在纵向模式下生效 | string[默认打开的索引数组] | - |   


#### MenuItem
| 属性 | 说明     | 类型                                         | 默认值 |
| ---- | -------- | -------------------------------------------- | ------ |
| disabled| 选项是否被禁用 | boolean | false |
| className | 组件类名 |   string   |   - |
| style | css |  |  | 

#### SubMenu
| 属性 | 说明     | 类型                                         | 默认值 |
| ---- | -------- | -------------------------------------------- | ------ |
| title | 名称 | string | - |
| className | 组件类名 |   string   |   - |
| style | css |  |  | 
