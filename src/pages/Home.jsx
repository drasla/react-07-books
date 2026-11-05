import { useState } from "react";
import { useNavigate } from "react-router";
import styles from "./Home.module.css";

function Home() {
    const navigate = useNavigate();
    const [keyword, setKeyword] = useState("");

    const onChangeHandler = event => setKeyword(event.target.value);

    const onSubmitHandler = event => {
        event.preventDefault();
        const k = keyword.trim();
        if (!k) return;

        navigate(`/search?keyword=${encodeURIComponent(k)}`);
    };

    return (
        <div className={styles.container}>
            <span className={styles.title}>Google Books 검색</span>
            <form className={styles.form} onSubmit={onSubmitHandler}>
                <input className={styles.input} onChange={onChangeHandler} value={keyword} />
                <button className={styles.button} type={"submit"}>
                    검색
                </button>
            </form>
        </div>
    );
}

export default Home;
