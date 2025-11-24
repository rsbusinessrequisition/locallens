export const LOCATIONS = [
    {
        id: 1,
        name: "Bandra Kurla Complex",
        city: "Mumbai",
        image: "https://images.unsplash.com/photo-1570129477492-45f003f2ddfa?auto=format&fit=crop&q=80&w=1000",
        price: "₹45,000/sqft",
        communityScore: 92,
        coordinates: [19.0600, 72.8633],
        scores: {
            safety: 95,
            education: 88,
            healthcare: 94,
            transport: 90,
            lifestyle: 96,
            utilities: 89,
            pollution: 85, // Higher is better (cleaner)
            crimeRate: 92, // Higher is better (lower crime)
            parking: 75,
            streetAnimals: 80, // Higher is better (fewer strays)
        },
        services: {
            houseHelp: "High Availability",
            technicians: "Instant (Urban Company Hub)",
        },
        amenities: {
            hospitals: [
                { name: "Asian Heart Institute", lat: 19.0610, lng: 72.8640 },
                { name: "Lilavati Hospital", lat: 19.0500, lng: 72.8290 }
            ],
            schools: [
                { name: "Dhirubhai Ambani School", lat: 19.0620, lng: 72.8650 },
                { name: "American School of Bombay", lat: 19.0630, lng: 72.8660 }
            ],
            police: [
                { name: "BKC Police Station", lat: 19.0590, lng: 72.8620 }
            ],
            malls: [
                { name: "Jio World Drive", lat: 19.0550, lng: 72.8550 },
                { name: "Phoenix Market City", lat: 19.0860, lng: 72.8890 }
            ]
        },
        tags: ["Business Hub", "Luxury", "High Connectivity"],
        description: "Mumbai's premier business district with world-class infrastructure and high-end residential options."
    },
    {
        id: 2,
        name: "Koramangala",
        city: "Bangalore",
        image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&q=80&w=1000",
        price: "₹12,000/sqft",
        communityScore: 88,
        coordinates: [12.9352, 77.6245],
        scores: {
            safety: 85,
            education: 92,
            healthcare: 88,
            transport: 82,
            lifestyle: 98,
            utilities: 85,
            pollution: 70,
            crimeRate: 80,
            parking: 60,
            streetAnimals: 65,
        },
        services: {
            houseHelp: "Moderate Availability",
            technicians: "Available (2-4 hrs)",
        },
        amenities: {
            hospitals: [
                { name: "St. John's Hospital", lat: 12.9300, lng: 77.6200 }
            ],
            schools: [
                { name: "Bethany High", lat: 12.9360, lng: 77.6250 }
            ],
            police: [
                { name: "Koramangala Police Station", lat: 12.9340, lng: 77.6230 }
            ],
            malls: [
                { name: "Forum Mall", lat: 12.9345, lng: 77.6110 }
            ]
        },
        tags: ["Nightlife", "Startups", "Greenery"],
        description: "A vibrant neighborhood known for its tree-lined avenues, startup culture, and diverse dining scene."
    },
    {
        id: 3,
        name: "Cyber Hub",
        city: "Gurgaon",
        image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=1000",
        price: "₹18,000/sqft",
        communityScore: 85,
        coordinates: [28.4950, 77.0895],
        scores: {
            safety: 82,
            education: 85,
            healthcare: 80,
            transport: 95,
            lifestyle: 94,
            utilities: 88,
            pollution: 50,
            crimeRate: 85,
            parking: 90,
            streetAnimals: 75,
        },
        services: {
            houseHelp: "High Availability",
            technicians: "Instant",
        },
        amenities: {
            hospitals: [
                { name: "Medanta", lat: 28.4200, lng: 77.0400 }
            ],
            schools: [
                { name: "The Shri Ram School", lat: 28.4800, lng: 77.0900 }
            ],
            police: [
                { name: "DLF Phase 2 Station", lat: 28.4900, lng: 77.0800 }
            ],
            malls: [
                { name: "Ambience Mall", lat: 28.5000, lng: 77.0950 }
            ]
        },
        tags: ["Corporate", "Modern", "Metro"],
        description: "The futuristic face of NCR, featuring high-rise offices, premium residences, and excellent metro connectivity."
    }
];

export const USER_PROFILES = [
    { id: 'family', name: 'Family Homebuyer', icon: 'Home', description: 'Prioritizes safety, schools, and parks.' },
    { id: 'investor', name: 'Property Investor', icon: 'TrendingUp', description: 'Focuses on ROI, rental yield, and growth.' },
    { id: 'business', name: 'Business Owner', icon: 'Store', description: 'Needs footfall data, demographics, and competition.' },
];
