import { styled } from 'styled-components'

const StyledHeaderWithCart = styled.header`
  height: 186px;
  background-color: #b58151;
  padding-top: 64px;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      font-weight: 900;
      font-size: 18px;
      line-height: 21.09px;
      text-align: center;
      cursor: pointer;
    }
  }
`
export default StyledHeaderWithCart
