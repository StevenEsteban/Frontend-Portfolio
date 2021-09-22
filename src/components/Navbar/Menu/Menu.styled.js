import styled from 'styled-components';

export const StyledMenu = styled.nav `
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.primaryLight};
  height: 100vh;
  text-align: left;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 100;
  
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }



  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};

  a {
    margin-top: -53px;
    margin-bottom: 78px;
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.4rem;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    

`