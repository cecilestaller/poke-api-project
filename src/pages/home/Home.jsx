import CardList from "../../components/card_list/CardList";
import Header from "../../components/header/Header";



const Home = () => {
    return (  
        <>
        <Header />
        <main className="container">
            <CardList />
        </main>
        </>
       
    );
}
 
export default Home;