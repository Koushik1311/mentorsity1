// import React from "react";
// import FAQ from "./component/FAQ";

// export default function App() {

//   return (
//     <>
//       <section className="max-w-xl mx-auto py-10 px-4">
//         <h1 className="text-2xl text-center uppercase tracking-widest font-bold">
//           Frequently Asked Questions
//         </h1>
//       </section>
//       <section>
//         <FAQ />
//       </section>
//     </>
//   );
// }


import React, { useEffect, useState } from 'react';

function App() {
    const [mentors, setMentors] = useState([]);

    useEffect(() => {
        // Fetch mentor data from your Express backend
        fetch('/mentors')
            .then((response) => response.json())
            .then((data) => setMentors(data))
            .catch((error) => console.error('Error fetching mentor data:', error));
    }, []);

    return (
        <div>
            <h1>Mentors</h1>
            <ul>
                {mentors.map((mentor) => (
                    <li key={mentor.id}>
                        <img src={`/public/${mentor.image_url}`} alt={mentor.name} width="100" />
                        <p>Name: {mentor.name}</p>
                        <p>Rating: {mentor.rating}</p>
                        <p>Role: {mentor.role}</p>
                        <p>Course: {mentor.course}</p>
                        <p>Experience: {mentor.experience} years</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
