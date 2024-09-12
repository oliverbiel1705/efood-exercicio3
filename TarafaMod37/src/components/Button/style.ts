import { styled } from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledCardButton = styled(Link)`
  height: 24px;
  width: max-content;
  padding: 4px 6px;
  background-color: #e62929;
  color: #ffebd9;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
`

export const StyledMenuItemButton = styled.button`
  background-color: #d1b79f;
  height: 24px;

  font-size: 14px;
  font-weight: 700;
  line-height: 16px;

  display: flex;
  justify-content: center;
  align-items: center;
`
