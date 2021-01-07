import React from "react";

type LayoutProps = {
  children: React.ReactNode,
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div style={{backgroundColor: 'yellow'}}>
      { children }
    </div>
  )
}

export default Layout;
