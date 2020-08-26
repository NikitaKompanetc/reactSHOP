import React, { PureComponent } from "react";
import { TreeSelect } from 'antd';
import 'antd/dist/antd.css';

class TreeSelectContainer extends PureComponent {

  state = {
    value: undefined,
    treeData: [
      {
        title: 'Mugs',
        value: '0-0',
        children: [
          {
            title: 'White Mug',
            value: '0-0-1',
          },
          {
            title: 'White Mug',
            value: '0-0-2',
          },
          {
            title: 'White Mug',
            value: '0-0-3',
          },
        ],
      },
      {
        title: 'Hoodies',
        value: '0-1',
        children: [
          {
            title: 'White Hoodies',
            value: '0-1-1',
          },
          {
            title: 'White Hoodies',
            value: '0-1-2',
          },
          {
            title: 'White Hoodies',
            value: '0-1-3',
          },
        ],
      },
      {
        title: 'Socks',
        value: '0-2',
        children: [
          {
            title: 'White Socks',
            value: '0-2-1',
          },
          {
            title: 'White Socks',
            value: '0-2-2',
          },
          {
            title: 'White Socks',
            value: '0-2-3',
          },
        ],
      },
      {
        title: 'Face Masks',
        value: '0-3',
        children: [
          {
            title: 'White Face Masks',
            value: '0-3-1',
          },
          {
            title: 'White Face Masks',
            value: '0-3-2',
          },
          {
            title: 'White Face Masks',
            value: '0-3-3',
          },
        ],
      },
      {
        title: 'Key Rings',
        value: '0-4',
        children: [
          {
            title: 'White Key Rings',
            value: '0-4-1',
          },
          {
            title: 'White Key Rings',
            value: '0-4-2',
          },
          {
            title: 'White Key Rings',
            value: '0-4-3',
          },
        ],
      },
      {
        title: 'Cards',
        value: '0-5',
        children: [
          {
            title: 'White Cards',
            value: '0-0-1',
          },
          {
            title: 'White Cards',
            value: '0-0-2',
          },
          {
            title: 'White Cards',
            value: '0-0-3',
          },
        ],
      },
    ],
  };

  onChange = value => {
    console.log(value);
    this.setState({ value });
  };

  render() {
    const { treeData } = this.state;
    return (
      <>
        <TreeSelect
          style={{ width: '100%' }}
          value={this.state.value}
          dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
          treeData={treeData}
          placeholder="Change Product"
          treeDefaultExpandAll
          onChange={this.onChange}
        />
      </>
    );
  }
}

export default TreeSelectContainer;