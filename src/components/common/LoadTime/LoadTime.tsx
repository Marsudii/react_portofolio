import React from 'react';

interface Props {
  length: number;
}

const LoadTime: React.FC<Props> = ({ length }: Props) => {
  const loadTime =
    (window.performance.timing.domContentLoadedEventEnd -
      window.performance.timing.navigationStart) /
    1000;
  return (
    <p className="p1">
      {loadTime > 0
        ? `Sekitar ${length} hasil (${loadTime} detik)`
        : 'Computing load time...'}
    </p>
  );
};

export default LoadTime;
