import React from 'react';

class MinMenu extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    const p4 = {
      padding: '4px',
    };
    return (
      <div className={this.props.active ? 'menu-active' : 'tickets-menu-items'}>
        <a href={this.props.href}>
          <div>
            <i class="material-icons fa-sub-icon">{this.props.icon}</i>
          </div>
          <div className={'align-text-icons'}>
            <span>{this.props.title}</span>
          </div>
        </a>
      </div>
    );
  }
}
export default MinMenu;
