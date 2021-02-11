import React from 'react';
import PropTypes from 'prop-types';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);

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
      console.log('ticket', this.props.options);
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
          {this.props.ticket.type.name}
        </div>

        {this.state.displayMenu ? (
          <div>
            {this.props.options.map((item) => (
              <span className="ticket-status ticket-new drop-ls-tkt">
                <span className="pad-tkt">{item.name}</span>
              </span>
            ))}
          </div>
        ) : null}
      </div>
    );
  }
}

Dropdown.propTypes = {
  ticket: PropTypes.string.isRequired,
  options: PropTypes.string.isRequired,
};

export default Dropdown;
