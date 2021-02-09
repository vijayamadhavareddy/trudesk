import React from 'react';

class Dropdown extends React.Component {
  constructor() {
    super();

    this.state = {
      displayMenu: false,
      items: [
        { name: 'issue', className: 'ticket-status ticket-new drop-ls-tkt' },
        { name: 'task', className: 'ticket-status ticket-open drop-ls-tkt' },
      ],
    };

    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
  }

  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });
  }

  render() {
    return (
      <div className="dropdown-ld">
        <div className="button-ld" onClick={this.showDropdownMenu}>
          {' '}
          issue{' '}
        </div>

        {this.state.displayMenu ? (
          <div>
            {this.state.items.map((item) => (
              <span className={item.className}>
                <span>{item.name}</span>
              </span>
            ))}
          </div>
        ) : null}
      </div>
    );
  }
}

export default Dropdown;
