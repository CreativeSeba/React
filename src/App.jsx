import Intro from './Intro/Intro.jsx';
import Card from './Card/Card.jsx'
import Styles from "./Styles/Buttons.jsx";
import Student from "./Props/Student.jsx";

function App() {
    return (
        <>
            <Intro/>
            <Card/>
            <Styles/>
            <Student name="Spongebob" age={30} isStudent={true}/>
        </>
    );
}

export default App
