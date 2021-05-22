import {container, title} from './styles'

import Logo from '@components/logo'

const Header = () => (
    <header css={container}>
        <Logo />
        <h1 css={title}>Welcome and join our chat space</h1>
        <p>just create your chat space and invite yours friends</p>
    </header>
)

export default Header