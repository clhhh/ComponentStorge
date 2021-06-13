
##  按钮组件

按钮 用于处理点击交互

### 代码演示

#### 基本用法

```tsx
import React from 'react';
import  Button  from 'myapp/src/Button';
import 'myapp/src/Button/style/index'


export default () => (
  <>
    <Button disabled btnType="danger">
      危险按钮
    </Button>
    <Button btnType="primary">基本按钮</Button>
    <Button btnType="default" >默认按钮</Button>
    <Button btnType="link" size="lg" href="https://github.com/clhhh/ComponentStorge">
      github
    </Button>{' '}
  </>
);
```
### API

| 属性 | 说明     | 类型                                         | 默认值 |
| ---- | -------- | -------------------------------------------- | ------ |
| btnType | 按钮类型 | 'info'/'positive'/'negative'/'warning'非必填 | 'info' |
| className | 组件类名 |   string   |   - |
| size  | 大小 | 'sm' 'lg' | - | 
| disabled | 是否禁用 |boolean | false |
| href | 链接 | srting | - |   
