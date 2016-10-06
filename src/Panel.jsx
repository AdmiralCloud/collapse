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
    notification: PropTypes.string, // AC custom
    isActive: PropTypes.bool,
    onItemClick: PropTypes.func,
  },

  getDefaultProps() {
    return {
      isActive: false,
      onItemClick() {
      },
    };
  },

  handleItemClick() {
    this.props.onItemClick();
  },

  render() {
    // AC custom - notification added
    const { className, prefixCls, header, notification, children, isActive } = this.props;
    const headerCls = `${prefixCls}-header`;
    const itemCls = classNames({
      [`${prefixCls}-item`]: true,
      [`${prefixCls}-item-active`]: isActive,
      [className]: className,
    });

    return (
      <div className={ itemCls }>
        <div
          className={headerCls}
          onClick={this.handleItemClick}
          role="tab"
          aria-expanded={isActive}
        >
          <i className="arrow"></i>
          { header }

          { notification /* AC custom */ }
        </div>

        <Animate
          showProp="isActive"
          exclusive
          component=""
          animation={this.props.openAnimation}
        >
          <PanelContent prefixCls={prefixCls} isActive={isActive}>
            {children}
          </PanelContent>
        </Animate>
      </div>
    );
  },
});

export default CollapsePanel;
