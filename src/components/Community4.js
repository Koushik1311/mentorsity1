import React from 'react'
import CardComponent from './CardComponent'

const styles = {
    cardContainer: {
        display: 'flex', justifyContent:'center', alignItem:'center', width: '100%'
    },
}

export default function Community4() {
    const cards = [
        {
            'price': '2000/-',
            'svg': "http://www.w3.org/2000/svg",
            'imageUrl': 'https://mentorsity.com/wp-content/uploads/2021/12/6.png',
            'title': 'Entrepreneurship',
            'description': 'Learn to think outside the box, learn how to nurture your unconventional talents and skills,create opportunities, instill confidence.Become creative, innovative & amp; collaborative.',
            'members': 416,
            'link': 'https://mentorsity.com/entrepreneurship/'
        },
        {
            'price': '2000/-',
            'svg': "http://www.w3.org/2000/svg",
            'imageUrl': 'https://mentorsity.com/wp-content/uploads/2021/12/5.png',
            'title': 'Open Mic',
            'description': 'By getting involved in open mic activities,you build skills that will prepare you and make you competitive when you are looking for a career.',
            'members': 503,
            'link': 'https://mentorsity.com/open-mic/'
        },
        {
            'price': '2000/-',
            'svg': "http://www.w3.org/2000/svg",
            'imageUrl': 'https://mentorsity.com/wp-content/uploads/2021/12/8.png',
            'title': 'Sales & BD',
            'description': "What do the best business development people do? Is this the question in your mind? Hear from the horse's mouth.",
            'members': 732,
            'link': 'https://mentorsity.com/sales-bd/'
        },
        {
            'price': '2000/-',
            'svg': "http://www.w3.org/2000/svg",
            'imageUrl': 'https://mentorsity.com/wp-content/uploads/2021/12/7.png',
            'title': 'Interview Skills',
            'description': "Do you have those elements which can make you crack any interview?",
            'members': 537,
            'link': 'https://mentorsity.com/interview-skills/'
        }

    ]

    return (
        <section>
            <div>
                <div className="row" style={styles.cardContainer}>
                    {cards.map((item) => (
                        <CardComponent {...item} />
                    ))}
                </div>
            </div>
        </section>
    )
}
