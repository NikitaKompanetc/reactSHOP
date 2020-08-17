import React, { PureComponent } from 'react';

const Ava = `${process.env.PUBLIC_URL}/img/ava.png`;

export default class TopbarProfile extends PureComponent {
  constructor() {
    super();
  }
  render() {

    return (
      <div className="topbar__profile">
        <button className="topbar__avatar" type="button">
          <img className="topbar__avatar-img" src={Ava} alt="avatar" />
        </button>
      </div>
    );
  }
}
