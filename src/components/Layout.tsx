import { PropsWithChildren } from "react"
import style from './Layout.module.scss';


const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className={style.container}>
      {children}
    </div>
  )
}

export default Layout;