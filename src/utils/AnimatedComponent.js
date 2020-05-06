import React, { useContext, useState } from 'react';
import classNames from 'classnames';
import { Waypoint } from 'react-waypoint';

const AnimatedComponent = ({
  delay = 0,
  duration = 0.7,
  animations = [],
  style = {},
  children,
  className,
  topOffset,
  bottomOffset,
  ...rest
}) => {
  const [currentPosition, setCurrentPosition] = useState('below');

  const shouldAnimate = currentPosition === 'inside' || currentPosition === 'above';

  let animationStyle = {};
  animations.map(animation => {
    if (shouldAnimate) {
      animationStyle = { ...animationStyle, ...animation.to };
    } else {
      animationStyle = { ...animationStyle, ...animation.from };
    }
    return false;
  });

  animationStyle.transitionDuration = `${duration}s`;
  animationStyle.transitionDelay = `${delay}s`;

  // console.log(shouldAnimate, currentPosition, animationStyle);

  return (
    <Waypoint
      scrollableAncestor="window"
      onPositionChange={props => {
        setCurrentPosition(props.currentPosition);
      }}
      topOffset={topOffset}
      bottomOffset={bottomOffset}
    >
      <div
        style={{ ...style, ...animationStyle }}
        {...rest}
        className={classNames('t-waypoint', `t-waypoint-${currentPosition}`, className)}
      >
        {children}
      </div>
    </Waypoint>
  );
};

export default AnimatedComponent;
