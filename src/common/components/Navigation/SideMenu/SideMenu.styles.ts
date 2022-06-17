import styled from 'styled-components';
import { Menu as MenuAnt } from 'antd';
import { Colors } from '../../../UI/cssConstants';

export const Menu = styled(MenuAnt)`
  &.ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background-color: transparent;
  }
  & .ant-menu-item-selected a {
    color: ${Colors.BLACK};
    &:hover {
      color: ${Colors.PRIMARY};
    }
  }
`;
