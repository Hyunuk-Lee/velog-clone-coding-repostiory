import styled from "styled-components";
import {
  FiBell,
  FiSearch,
  FiTrendingUp,
  FiClock,
  FiRss,
  FiChevronDown,
  FiMoreVertical,
} from "react-icons/fi";

function Header() {
  return (
    <HeaderWrapper>
      <TopBar>
        <Left>
          <Logo>velog</Logo>
        </Left>
        <Right>
          <IconButton>
            <FiBell size={20} />
          </IconButton>
          <IconButton>
            <FiSearch size={20} />
          </IconButton>
          <LoginButton>로그인</LoginButton>
        </Right>
      </TopBar>

      <BottomBar>
        <TabMenu>
          <Tab active>
            <FiTrendingUp />
            <span>트렌딩</span>
          </Tab>
          <Tab>
            <FiClock />
            <span>최신</span>
          </Tab>
          <Tab>
            <FiRss />
            <span>피드</span>
          </Tab>
        </TabMenu>
        <TabMenu2>
          <WeekSelector>
            <span>이번 주</span>
            <FiChevronDown size={16} />
          </WeekSelector>
          <MoreButton>
            <FiMoreVertical size={18} />
          </MoreButton>
        </TabMenu2>
      </BottomBar>
    </HeaderWrapper>
  );
}


const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  padding-bottom: 12px;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  margin-top: 12px;
`;

const BottomBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  margin-top: 24px;
  margin-bottom: 18px;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 23px;
  font-weight: bold;
  color: #212529;
  cursor: pointer;
`;

const TabMenu = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const TabMenu2 = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.7rem;
`;

const Tab = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 1.2rem;
  font-weight: ${({ active }) => (active ? "700" : "500")};
  color: ${({ active }) => (active ? "#212529" : "#868e96")};
  cursor: pointer;
  border-bottom: ${({ active }) => (active ? "2px solid #212529" : "none")};
  padding-bottom: 4px;

  &:hover {
    color: #212529;
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #495057;
`;

const LoginButton = styled.button`
  padding: 0.4rem 1rem;
  background-color: #212529;
  color: white;
  border: none;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: bold;
  cursor: pointer;
  width: 80px;
  height: 32px;
`;

const WeekSelector = styled.div`
  background-color: white;
  border: 1px solid #dee2e6;
  border-radius: 2px;
  padding: 0.3rem 0.75rem;
  font-size: 0.85rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  justify-content: center;


`;

const BottomRight = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

const MoreButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #868e96;
  padding: 0.25rem;
  border-radius: 4px;

  &:hover {
    background-color: #f1f3f5;
  }
`;

export default Header;
