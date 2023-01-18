/**
 * @title UserSelect
 */
import { SelectProps } from '@arco-design/web-react';

/**
 * @title UserSelect
 */
export interface UserSelectProps {
  /**
   * @zh 尺寸
   * @en Size of Button
   * @version 2.0.0
   * @defaultValue 'small'
   */
  size?: 'large' | 'small' | 'mini';
  /**
   * @zh Select 属性
   * @en Props of Arco Select
   */
  selectProps?: Partial<SelectProps>;
}
