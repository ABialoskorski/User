import styled from 'styled-components';
import { Menu as MenuAnt } from 'antd';
import { Colors } from '../../../UI/cssVariables';

export const Menu = styled(MenuAnt)`
  &.ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background-color: transparent;
  }
  & .ant-menu-item-selected a {
    color: ${Colors.black};
    &:hover {
      color: ${Colors.primary};
    }
  }
`;
