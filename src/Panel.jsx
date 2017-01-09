import React, { PropTypes } from 'react';
import classNames from 'classnames';
import PanelContent from './PanelContent';
import Animate from 'rc-animate';

const CollapsePanel = React.createClass({
  propTypes: {
    className: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ]),
    children: PropTypes.any,
    openAnimation: PropTypes.object,
    prefixCls: PropTypes.string,
    header: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.node,
    ]),
    showArrow: PropTypes.bool,
    isActive: PropTypes.bool,
    onItemClick: PropTypes.func,
    style: PropTypes.object,
    notification: PropTypes.object, // AC custom
    licenseColor: PropTypes.object, // AC custom
  },

  getDefaultProps() {
    return {
      showArrow: true,
      isActive: false,
      onItemClick() {},
    };
  },

  handleItemClick() {
    this.props.onItemClick();
  },

  render() {
    // AC custom - notification added
    const { className, style, prefixCls, header,
            notification, children, licenseColor, isActive, showArrow } = this.props;
    const headerCls = `${prefixCls}-header`;
    const itemCls = classNames({
      [`${prefixCls}-item`]: true,
      [`${prefixCls}-item-active`]: isActive,
    }, className);
    return (
      <div className={itemCls} style={style} >
        <div
          className={headerCls}
          onClick={this.handleItemClick}
          role="tab"
          aria-expanded={isActive}
        >

          {showArrow && <i className="arrow" />}

          {header}

          { notification /* AC custom */ }

          { licenseColor /* AC custom */ }
        </div>

        <Animate
          showProp="isActive"
          exclusive
          component=""
          animation={this.props.openAnimation}
        >

          <PanelContent prefixCls={prefixCls} isActive={isActive} >
            {children}
          </PanelContent>
        </Animate>
      </div>
    );
  },
});

export default CollapsePanel;
