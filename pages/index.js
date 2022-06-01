// importar components
import NavBar from '../src/components/navBar'
import styles from '../styles/Home.module.css'
//bootstrap style
import 'bootstrap/dist/css/bootstrap.min.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <NavBar/>
        <section className={styles.body}>
          <h2 style={{color: "white"}}>Welcome to </h2>
          <h1 style={{color: "white"}}>Rush Royale Wiki</h1>
        </section>

    </div>
  )
}
