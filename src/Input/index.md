## Input 按钮

通过键盘获取用户输入，基本的表单项




```tsx 
import React from 'react';
import  Input  from 'myapp/src/Input';
import 'myapp/src/Input/style/index'

export default () => (
  <div
    style={{
      padding: '20px 40px',
      width: '500px',
    }}
  >
    <h4>组件演示</h4>
    <Input onChange={function noRefCheck() {}} placeholder="基本Input" />
    <Input disabled placeholder="disabled input" />
    <Input icon="search" placeholder="input with icon" />
    <Input defaultValue="large size" size="lg" />
    <Input placeholder="small size" size="sm" />
    <Input defaultValue="hello world" perfix="https://" />
    <Input append=".com" defaultValue="chicken-design" />
  </div>
);


```

### API

| 属性 | 说明     | 类型                                         | 默认值 |
| ---- | -------- | -------------------------------------------- | ------ |
| className | 组件类名 |   string   |   - |
| size  | 大小 | 'sm' 'lg' | - | 
| disabled | 是否禁用 |boolean | false |
| prefix | 前缀 | srting | ReactNode | - |   
| append | 后缀 | srting | ReactNode | - |  

