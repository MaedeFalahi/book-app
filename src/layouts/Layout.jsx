
function Layout({ children }) {
  return (
    <>
      <header>
        <h1>book app</h1>
        <p>react.js full course</p>
      </header>
       {children}
      <footer></footer>  
    </>
  )
}

export default Layout