import { useState } from 'react';

export default function UserInput() {

    const [firstTitle, setFirstTitle] = useState('titolo');
    const handleSubmit = event => {
        event.preventDefault();
        // console.log('titolo inviato è:' + firstTitle);

    }

    return (
        <>


        </>
    )
}