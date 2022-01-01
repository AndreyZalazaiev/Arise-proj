import styled from "styled-components";
import {Button, Card} from "react-bootstrap";

export const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10px;
`;
export const ProductWrapper = styled.div`
  flex: 1 1 160px;
`
export const CardWrapper = styled(Card)`
  display: flex;
  flex-direction: column;
`
export const BuyButtonWrapper = styled(Button)`
  margin-top: auto;
`
