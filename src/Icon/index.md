## 图标
```tsx 
import React from 'react';
import  Icon  from 'myapp/src/Icon';
import 'myapp/src/Icon/style/index'

export default () => (
  <>
    <div
      style={{
        padding: '20px 40px',
        width: '500px',
      }}
    >
      <h4>组件演示</h4>
      <React.Fragment key=".1">
        <Icon style={{ margin: 10 }} icon="check" size="2x" color="blue"/>
        <Icon style={{ margin: 10 }} icon="times" size="2x"  color="red"/>
        <Icon style={{ margin: 10 }} icon="adjust" size="2x" />
        <Icon style={{ margin: 10 }} icon="anchor" size="2x" />
        <Icon style={{ margin: 10 }} icon="trash" size="2x" color="red" spin theme="danger" />
      </React.Fragment>
    </div>
  </>
);


```