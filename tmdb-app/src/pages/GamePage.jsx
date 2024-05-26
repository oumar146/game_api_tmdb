import Header from '../components/Header';
import SaYears from '../components/games/SaYears';
import SaRatings from '../components/games/SaRatings';
import { useParams } from 'react-router-dom';
import '../styles/global/main.css';
import '../styles/global/header.css';
import '../styles/global/games.css';
import '../styles/games/game-model-2.css';

function GamePage() {

    const { name } = useParams();

    return (
        <div>
            <Header />
            {name === 'SaYears' && <SaYears />}
            {name === 'SaRatings' && <SaRatings />}

        </div>
    );
}

export default GamePage;
