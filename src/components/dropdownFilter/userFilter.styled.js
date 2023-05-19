import styled from 'styled-components';

export const StyledFilterBox = styled.div`
  display: flex;
  justify-content: center;

  margin: 10px 0 10px 0;
  padding: 14px 28px;

  box-shadow: rgba(0, 0, 0, 0.25) 0px 3.43693px 3.43693px;
  border-radius: 10.3108px;
  background-color: aqua;
  align-items: center;
`;
export const StyledSelect = styled.select`
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  color: #fff;
  border: 1px solid #ccc;
  border-radius: 20px;
  padding: 12px;
  margin-left: 10px;
  cursor: pointer;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;

  & option {
    background-color: #fff;
    color: #333;
  }
`;
