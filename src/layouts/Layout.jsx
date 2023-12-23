
// Style
import styles from "./Layout.module.css"

function Layout({children}) {
  return (
    <>
        <header className = {styles.header}>
            <h1>Book App</h1>
            <p>
                <a href="https://react.dev" target="_blank">Siram</a> | A beautiful and practical library
            </p>
        </header>
        {children}
        <footer className = {styles.footer}>Developed by Majid with 💖</footer>
    </>
  )
}

export default Layout