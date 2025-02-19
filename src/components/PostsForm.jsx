import { useState } from 'react';

const posts = [
    {
        id: 1,
        titolo: "Il futuro dell'intelligenza artificiale",
        autore: "Mario Rossi",
        contenuto: "L'intelligenza artificiale sta rivoluzionando il mondo, dall'automazione al machine learning...",
        categoria: "Tecnologia"
    },
    {
        id: 2,
        titolo: "10 consigli per una vita più sana",
        autore: "Giulia Bianchi",
        contenuto: "Mantenere uno stile di vita sano è fondamentale per il benessere. Ecco 10 consigli pratici...",
        categoria: "Salute"
    },
    {
        id: 3,
        titolo: "Guida ai migliori libri del 2025",
        autore: "Luca Verdi",
        contenuto: "Abbiamo selezionato i migliori libri dell'anno per ogni genere letterario...",
        categoria: "Letteratura"
    },
    {
        id: 4,
        titolo: "Come avviare una startup di successo",
        autore: "Anna Neri",
        contenuto: "Lanciare una startup richiede strategia, innovazione e un solido piano di business...",
        categoria: "Business"
    },
    {
        id: 5,
        titolo: "Viaggiare low-cost: trucchi e segreti",
        autore: "Paolo Gialli",
        contenuto: "Scopri come viaggiare in giro per il mondo spendendo il meno possibile...",
        categoria: "Viaggi"
    }
];

const initialFormData = {
    titolo: "",
    autore: "",
    contenuto: "",
    categoria: "",
};


const PostsForm = () => {

    const [postsState, setPostsState] = useState(posts);
    const [formData, setFormData] = useState(initialFormData);

    function handleFormData(e) {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;

        setFormData((currentFormData) => ({
            ...currentFormData, [e.target.name]: value,

        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        setPostsState((currentPosts) => [...currentPosts, { id: currentPosts[currentPosts.length - 1].id + 1, ...formData }])

        //resetto il form dopo l'invio
        setFormData(initialFormData);
    }


    return (
        <>
            <h1>form dei posts</h1>

            <form id='formpost' action="#" onSubmit={handleSubmit} >
                <input
                    type="text"
                    name="titolo"
                    onChange={handleFormData}
                    value={formData.titolo}
                    placeholder='Nome post'
                />

                <input
                    type="text"
                    name="autore"
                    onChange={handleFormData}
                    value={formData.autore}
                    placeholder='autore post'
                />

                <textarea
                    type="text"
                    name="contenuto"
                    onChange={handleFormData}
                    value={formData.contenuto}
                    placeholder='contenuto post'
                ></textarea>

                <input
                    type="text"
                    name="categoria"
                    onChange={handleFormData}
                    value={formData.categoria}
                    placeholder='categoria post'
                />
                <button>Aggiungi post</button>
            </form>
            {
                postsState.map((post) => (
                    <div key={post.id}>
                        <h2>{post.titolo}</h2>
                        <h3>{post.autore}</h3>
                        <p>{post.contenuto}</p>
                        <div>{post.categoria}</div>

                    </div>
                ))

            }
        </>

    )
}

export default PostsForm