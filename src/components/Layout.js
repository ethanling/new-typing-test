import styled from 'styled-components'
import Nav from './Nav'

const StyledWrapper = styled.div`
    min-height: 100vh;
    width: 100vw;
    max-width: 100vw;
    background: #24272D;
    color: #f2f2f2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const StyledContent = styled.div`
   flex: 1; 
`

const Layout = ({ children }) => (
    <StyledWrapper>
        <Nav />
        <StyledContent>
            {children}
        </StyledContent>
    </StyledWrapper>
)

export default Layout
