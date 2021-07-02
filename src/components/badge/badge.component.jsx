import classnames from '@/utils/helpers/classnames.helper';
import './badge.scss';

export const Badge = ({className, children}) => (
  <span className={classnames('badge', className)}>{children}</span>
);

Badge.Container = ({children}) => <div className="badge__container">{children}</div>;
