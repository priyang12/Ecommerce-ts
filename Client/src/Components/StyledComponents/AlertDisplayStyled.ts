import styled from "styled-components";

export const Alert = styled.div`
  background-color: ${(props) => props.theme.bg}; /* background-color */
  color: ${(props) => props.theme.alertTextColor}; /* text color */
  border-radius: ${(props) =>
    props.theme.radius ? props.theme.radius : "5px"}; /* border radius */
  font-size: 1.6rem;
  width: 100%;
  font-weight: bold;
  padding: 1em;
  text-align: center;
`;

export const AlertContainer = styled.div`
  position: ${(props) => props.theme.position}; /* text color */
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease-in-out;
  transform: ${(props) =>
    props.theme.show ? "translateY(0)" : "translateY(-100vh)"};
`;
