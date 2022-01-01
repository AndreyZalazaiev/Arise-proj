import styled from "styled-components";

interface MarginProps {
    left?: string;
    right?: string;
    top?: string;
    bottom?: string;
    all?: string;
}

export const AlignedCenterDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const MarginWrapperDiv = styled.div<MarginProps>`
  margin-left: ${props => props.left};
  margin-right: ${props => props.right};
  margin-top: ${props => props.top};
  margin-bottom: ${props => props.bottom};
  margin: ${props => props.all};
`
export const JustifyEndDiv = styled.div`
  display: flex;
  justify-content: flex-end;
`
