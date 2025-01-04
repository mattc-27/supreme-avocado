import { GrMapLocation } from "react-icons/gr";


const SiteContent =

    [
        {
            section: 'Welcome Info',
            content: {
                id: 1,
                h1: 'Welcome to Aspen Airways',
                text: 'Experience the pinnacle of luxury and convenience with Aspen Airways. Whether for business or leisure, we offer unparalleled scheduled flights and private jet charters tailored to your needs.'
            }
        },
        {
            section: 'About Us',
            content: {
                id: 2,
                h1: 'About',
                text: ' Established in 2021, Aspen Airways has become a leader in private air travel, committed to providing exceptional service and the highest standards of safety and comfort. Our team of experienced pilots and staff ensure a seamless and enjoyable journey from start to finish.'
            }
        },
        {
            section: 'About Us',
            content: {
                id: 3,
                h1: 'Company Overview',
                text: ' At Aspen Airways, we pride ourselves on our state-of-the-art fleet, personalized services, and a commitment to excellence. Our mission is to deliver a bespoke travel experience that exceeds your expectations.'
            },
        },
        {
            section: 'Fleet',
            content: {
                id: 4,
                h1: 'Our Fleet',
                text: 'Explore our diverse fleet of modern, luxurious aircraft, each equipped with the latest amenities to ensure your comfort and safety. From light jets to heavy jets, we have the perfect aircraft for any journey.'
            }
        },
        {
            section: 'Why Choose Us',
            content: {
                id: 5,
                h1: 'Why choose Aspen Airways',
                list: [
                    {
                        id: 1,
                        title: 'Exceptional Service',
                        text: 'Personalized attention to every detail.'
                    },
                    {
                        id: 2,
                        title: 'Modern Fleet',
                        text: 'Latest aircraft with luxurious interiors.'
                    },
                    {
                        id: 3,
                        title: 'Experienced Crew',
                        text: 'Professional pilots and attentive staff.'
                    },
                    {
                        id: 4,
                        title: 'Flexible Scheduling',
                        text: 'Flights tailored to your timetable.'
                    },
                    {
                        id: 5,
                        title: 'Safety First',
                        text: 'Rigorous maintenance and safety protocols.'
                    }
                ]
            }
        },
        {
            section: 'Key data points',
            content: {
                id: 6,
                h1: 'Key statistics',
                list: [
                    {
                        id: 1,
                        text: 'Over [X] successful flights.'
                    },
                    {
                        id: 2,
                        text: '[Y] destinations worldwide.'
                    },
                    {
                        id: 3,
                        text: '[Z] years of industry experience.'
                    },
                    {
                        id: 4,
                        text: '24/7 customer support.'
                    },
                    {
                        id: 5,
                        text: '99.9% on-time performance.'
                    }
                ]
            }
        }
    ]

const DestinationInfo = [
    {
        id: 1,
        name: 'Business centers',
        locations: 'New York, Los Angeles, Chicago, Miami',
        image: 'https://images.unsplash.com/photo-1439396087961-98bc12c21176?q=80&w=3133&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 2,
        name: 'Ski destinations',
        locations: 'Vail, Telluride, Jackson Hole, Park City',
        image: 'https://images.unsplash.com/photo-1507534192483-69914c0692d7?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
]

const CustomerReviews = [
    {
        id: 1,
        date: 'March 12, 2023',
        user: 'Emily R.',
        text: `"Exceptional service from start to finish. The flight was comfortable and the crew was incredibly attentive. Highly recommend!"`
    },
    {
        id: 1,
        date: 'July 28, 2022',
        user: 'David M',
        text: "Flying with [Your Company Name] was a dream. The jet was luxurious and the scheduling was so flexible. Perfect for business trips!"
    },
    {
        id: 1,
        date: 'November 5, 2023',
        user: 'Michael S.',
        text: "Top-notch experience! The aircraft was modern and well-maintained. The team made sure all our needs were met."
    }
]


export { SiteContent, CustomerReviews }