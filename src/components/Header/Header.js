import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { FAMILIES, QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <DesktopActionGroup>
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
        </DesktopActionGroup>
        <Logo />
        <LoginGroup>
          <Button>
            subscribe
          </Button>
          <LoginLink>Already a subscriber?</LoginLink>
        </LoginGroup>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  @media ${QUERIES.desktopAndUp} {
    display: none;
  }

  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;
  
  @media ${QUERIES.desktopAndUp} {
    justify-content: space-between;
  }
`;

const DesktopActionGroup = styled(ActionGroup)`
  display: none;
  
  @media ${QUERIES.desktopAndUp} {
    display: flex;
  }
`;

const LoginGroup = styled.div`
  display: none;
  align-self: flex-end;
  
  flex-direction: column;
  align-items: center;
  
  @media ${QUERIES.desktopAndUp} {
    display: flex;
  }
`;

const LoginLink = styled.a`
  font-family: ${FAMILIES.serif};
  font-style: italic;
  text-decoration: underline;
`;

export default Header;
