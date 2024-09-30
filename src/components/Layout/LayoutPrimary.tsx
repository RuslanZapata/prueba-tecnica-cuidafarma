import { ReactNode, FC } from 'react'
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

type Props = { children: ReactNode }

const LayoutPrimary:FC<Props> = ({children}) => {
  return (
    <>
    <Header />
    {children}
    <Footer />
    </>
  )
}

export default LayoutPrimary