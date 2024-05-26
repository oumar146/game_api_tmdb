import Header from '../components/Header';
import '../styles/global/main.css';
import '../styles/global/header.css';
import '../styles/global/games.css';
import '../styles/games/game-model-2.css';
import SaYears from '../components/games/SaYears';

function GamePage() {
    return (
        <div>
            <Header />
            <SaYears />
        </div>
    );
}

export default GamePage;
