'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _PanelContent = require('./PanelContent');

var _PanelContent2 = _interopRequireDefault(_PanelContent);

var _rcAnimate = require('rc-animate');

var _rcAnimate2 = _interopRequireDefault(_rcAnimate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var CollapsePanel = function (_Component) {
  (0, _inherits3['default'])(CollapsePanel, _Component);

  function CollapsePanel() {
    (0, _classCallCheck3['default'])(this, CollapsePanel);
    return (0, _possibleConstructorReturn3['default'])(this, (CollapsePanel.__proto__ || Object.getPrototypeOf(CollapsePanel)).apply(this, arguments));
  }

  (0, _createClass3['default'])(CollapsePanel, [{
    key: 'handleItemClick',
    value: function handleItemClick() {
      if (this.props.onItemClick) {
        this.props.onItemClick();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames2;

      var _props = this.props,
          className = _props.className,
          id = _props.id,
          style = _props.style,
          prefixCls = _props.prefixCls,
          header = _props.header,
          headerClass = _props.headerClass,
          children = _props.children,
          isActive = _props.isActive,
          showArrow = _props.showArrow,
          destroyInactivePanel = _props.destroyInactivePanel,
          disabled = _props.disabled,
          notification = _props.notification,
          licenseColor = _props.licenseColor;

      var headerCls = (0, _classnames2['default'])(prefixCls + '-header', (0, _defineProperty3['default'])({}, headerClass, headerClass));
      var itemCls = (0, _classnames2['default'])((_classNames2 = {}, (0, _defineProperty3['default'])(_classNames2, prefixCls + '-item', true), (0, _defineProperty3['default'])(_classNames2, prefixCls + '-item-active', isActive), (0, _defineProperty3['default'])(_classNames2, prefixCls + '-item-disabled', disabled), _classNames2), className);
      return _react2['default'].createElement(
        'div',
        { className: itemCls, style: style, id: id },
        _react2['default'].createElement(
          'div',
          {
            className: headerCls,
            onClick: this.handleItemClick.bind(this),
            role: 'tab',
            'aria-expanded': isActive
          },
          showArrow && _react2['default'].createElement('i', { className: 'arrow' }),
          header,
          notification /* AC custom */,
          licenseColor /* AC custom */
        ),
        _react2['default'].createElement(
          _rcAnimate2['default'],
          {
            showProp: 'isActive',
            exclusive: true,
            component: '',
            animation: this.props.openAnimation
          },
          _react2['default'].createElement(
            _PanelContent2['default'],
            {
              prefixCls: prefixCls,
              isActive: isActive,
              destroyInactivePanel: destroyInactivePanel
            },
            children
          )
        )
      );
    }
  }]);
  return CollapsePanel;
}(_react.Component);

CollapsePanel.propTypes = {
  className: _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].object]),
  id: _propTypes2['default'].string,
  children: _propTypes2['default'].any,
  openAnimation: _propTypes2['default'].object,
  prefixCls: _propTypes2['default'].string,
  header: _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].number, _propTypes2['default'].node]),
  headerClass: _propTypes2['default'].string,
  showArrow: _propTypes2['default'].bool,
  isActive: _propTypes2['default'].bool,
  onItemClick: _propTypes2['default'].func,
  style: _propTypes2['default'].object,
  destroyInactivePanel: _propTypes2['default'].bool,
  disabled: _propTypes2['default'].bool,
  notification: _propTypes2['default'].object, // AC custom
  licenseColor: _propTypes2['default'].object // AC custom
};

CollapsePanel.defaultProps = {
  showArrow: true,
  isActive: false,
  destroyInactivePanel: false,
  onItemClick: function onItemClick() {},

  headerClass: ''
  // notification: {}, // AC custom
  // licenseColor: {}, // AC custom
};

exports['default'] = CollapsePanel;
module.exports = exports['default'];