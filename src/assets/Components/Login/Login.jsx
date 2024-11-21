import { FaUser , FaLock } from "react-icons/fa";
import { useState } from "react";
import "./Login.css";

function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Enviando os dados:" + username + " " + password);
    };

    return (
        <div className="container">

            <form onSubmit={handleSubmit}>
                <h1>ESTUDO DIRIGIDO ÚNICA   SLG </h1>
                <h2>LOGIN DE USUÁRIO</h2>
                <div className="input-field">
                    <input
                        type="email"
                        placeholder="E-mail"
                        onChange={(e) => setUsername(e.target.value)} />
                    <FaUser className="icon"/>
                </div>

                <div className="input-field">
                    <input
                        type="password"
                        placeholder="Senha"
                        onChange={(e) => setPassword(e.target.value)} />
                    <FaLock className="icon"/>
                </div>

                <div className="recall-forget">
                    <label>
                        <input type="checkbox"/>
                        Lembrar
                    </label>
                    <a href="a">Esqueceu sua senha</a>
                </div>

                <button>Entrar</button>

                <div className="signup-link">
                    <p>Não possui usuario!
                        <a href="a">Registrar</a>
                    </p>
                </div>
            </form>
        </div>
    );
}

export default Login;
