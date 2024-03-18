import NavBar from './components/NavBar'
import Hero from './components/Hero';
import Business from './components/Business'
import AddressLink from './components/AddressLink';
import styles from "./Style";
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <NavBar />
        </div>
      </div>

      <Hero />
      <Business />
      <AddressLink />
      <Footer />
  </div>
  )
}