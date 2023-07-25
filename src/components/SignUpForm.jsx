import { useState } from 'react'

export default function SignUpForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    
    async function handleSubmit(e) {
        e.preventDefault();
        console.log("hello");
        try {
            const response = await fetch('https://fsa-jwt-practice.herokuapp.com/signup.', {
                method: "POST",
                body: JSON.stringify({ username, password }),
            });
            
            const result = await response.json();
            // console.log(result);
        } catch (error) {
            // console.error(error)
            setError(error.message);
        }
        setUsername("");
        setPassword("");
    }
    return (
        <div>
            <h2>Sign Up</h2>
            {error && <p>{error}</p>}
            <form method="POST" onSubmit={handleSubmit}>
                <label>
                    Username:{""} <input value={username} onChange={(e) => setUsername(e.target.value)}/>
                </label>
                <label>
                    Password:{""} <input value={password} onChange={(e) => setPassword(e.target.value)}/>
                </label>
                <button >Submit</button>
            </form>
            </div>
    )
}
