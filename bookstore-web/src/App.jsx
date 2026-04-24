import { useEffect } from 'react';
function App() {

    const listBooks = async() => {
        const response = await fetch('http://localhost:5000/api/books');

        const data = await response.json();

        console.log(data);
    }

    useEffect(() => {
        listBooks();
    }, [])
    return (
        <div>
            <h1>Book Store Website</h1>
        </div>
    )
}

export default App;