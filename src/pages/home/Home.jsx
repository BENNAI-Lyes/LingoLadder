import './home.scss';

import Contact from '../../components/contact/Contact';
import Footer from '../../components/footer/Footer';
import Hero from '../../components/hero/Hero';
import AnyWhere from '../../components/anyWhere/AnyWhere';
import Categories from '../../components/categories/Categories';
import Navbar from '../../components/navbar/Navbar';
import Container from '../../components/container/Container';

const Home = () => {
	return (
		<>
			<div className="home">
				<Container>
					<Navbar />
					<Hero />
					<AnyWhere />
					<Categories />
					<Contact />
					<Footer />
				</Container>
			</div>
		</>
	);
};

export default Home;
