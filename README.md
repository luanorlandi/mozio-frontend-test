# How to run

Run the following commands:

```
npm install
npm start
```

It should open the app in http://localhost:3000/

# Decisions and Technology choices

- CRA: used for a simple app and because the size is small. For a larger app, next or remix would be better
- Pure CSS: same reasons as before, for simplicity and scope
- No UI/CSS framework: there was a bonus but I ended for the basic to better demonstrate my frontend skills
- react-query: for network state management, the hook provides the loading, error and cache as per requirement specs
- useDebounce: for quick debounce of the user input
- Autocomplete component: created as to be generic as possible, as it would happen in a real production app

# The Task

You are tasked with creating a React, TypeScript application for searching travel destinations. Users should be able to search for destinations and view details about them. Additionally, you will implement an algorithm to suggest nearby destinations based on the selected destination.

**Requirements:**

1. User Interface (UI):
   - Create a React application with two main parts:
   - Destination Search: Allow users to search for travel destinations by name (the data is provided).
   - Destination Details: Display detailed information about the selected destination, including its name, description, and top 5 nearby destinations.
   - Implement an asynchronous combobox for the destination search that fetches and displays matching destination names from a fake API.
   - The fake API must only return the destination based on the user query, which means you cannot fetch all destinations at once.
   - You can create a file called fake-api.ts and export the async functions as fake APIs. Please console.log the arguments of all fake API functions.
   - Clicking on the nearby destinations should show the details of the selected destination and its nearby destinations.
2. User Experience (UX):
   - Implement error handling for API requests. When the user enters ‘fail’, the front end should mimic a backend error case and show an error message near Combobox.
   - Add loading indicators during data fetching.
   - The Combobox should be keyboard-accessible.
3. Optional Bonus:
   - Implement client-side caching.
   - Debounce user input.
   - Make use of modern accessible UI libraries.
   - Deep link to the current state.

**Submission Guidelines:**

- Deploy the application and share the link.
- Make your repository publicly accessible and share the link.
- Include a README.md file that explains the design decisions and technology choices.
  Evaluation Criteria:

Candidates will be evaluated based on the following:

- Code quality and organization.
- TypeScript usage and type safety.
- React component structure and state management.
- Error handling and user experience.
- API integration and data modeling.
- Algorithm implementation (destination recommendation).
- Complex component implementation (async combobox).
- Bonus features (if implemented).

```
[
  {
    "id": 1,
    "name": "Paris, France",
    "description": "The City of Light, known for its iconic Eiffel Tower and world-class cuisine.",
    "country": "France",
    "climate": "Mild",
    "currency": "Euro",
    "latitude": 48.8566,
    "longitude": 2.3522
  },
  {
    "id": 2,
    "name": "Rome, Italy",
    "description": "The Eternal City, home to ancient ruins like the Colosseum and Roman Forum.",
    "country": "Italy",
    "climate": "Mediterranean",
    "currency": "Euro",
    "latitude": 41.9028,
    "longitude": 12.4964
  },
  {
    "id": 3,
    "name": "Barcelona, Spain",
    "description": "A vibrant city famous for its unique architecture, including the Sagrada Familia.",
    "country": "Spain",
    "climate": "Mediterranean",
    "currency": "Euro",
    "latitude": 41.3851,
    "longitude": 2.1734
  },
  {
    "id": 4,
    "name": "Amsterdam, Netherlands",
    "description": "Known for its picturesque canals, historic houses, and vibrant art scene.",
    "country": "Netherlands",
    "climate": "Maritime",
    "currency": "Euro",
    "latitude": 52.3702,
    "longitude": 4.8952
  },
  {
    "id": 5,
    "name": "Prague, Czech Republic",
    "description": "The City of a Hundred Spires, famous for its medieval Old Town and Prague Castle.",
    "country": "Czech Republic",
    "climate": "Temperate",
    "currency": "Czech Crown",
    "latitude": 50.0755,
    "longitude": 14.4378
  },
  {
    "id": 6,
    "name": "Athens, Greece",
    "description": "The birthplace of democracy, with ancient landmarks like the Acropolis and Parthenon.",
    "country": "Greece",
    "climate": "Mediterranean",
    "currency": "Euro",
    "latitude": 37.9838,
    "longitude": 23.7275
  },
  {
    "id": 7,
    "name": "Budapest, Hungary",
    "description": "A city of thermal baths, stunning architecture, and the Danube River.",
    "country": "Hungary",
    "climate": "Continental",
    "currency": "Hungarian Forint",
    "latitude": 47.4979,
    "longitude": 19.0402
  },
  {
    "id": 8,
    "name": "Dubrovnik, Croatia",
    "description": "A coastal gem known for its well-preserved medieval walls and stunning Adriatic Sea views.",
    "country": "Croatia",
    "climate": "Mediterranean",
    "currency": "Croatian Kuna",
    "latitude": 42.6507,
    "longitude": 18.0944
  },
  {
    "id": 9,
    "name": "Vienna, Austria",
    "description": "A city of imperial palaces, classical music, and rich cultural heritage.",
    "country": "Austria",
    "climate": "Continental",
    "currency": "Euro",
    "latitude": 48.2082,
    "longitude": 16.3738
  },
  {
    "id": 10,
    "name": "Edinburgh, Scotland",
    "description": "The capital of Scotland, known for its historic and cultural attractions.",
    "country": "United Kingdom",
    "climate": "Maritime",
    "currency": "Pound Sterling",
    "latitude": 55.9533,
    "longitude": 3.1883
  },
  {
    "id": 11,
    "name": "Berlin, Germany",
    "description": "A vibrant city with a rich history, known for its art, music, and nightlife.",
    "country": "Germany",
    "climate": "Temperate",
    "currency": "Euro",
    "latitude": 52.52,
    "longitude": 13.405
  },
  {
    "id": 12,
    "name": "Lisbon, Portugal",
    "description": "A coastal city known for its stunning views, historic neighborhoods, and seafood.",
    "country": "Portugal",
    "climate": "Mediterranean",
    "currency": "Euro",
    "latitude": 38.7223,
    "longitude": 9.1393
  },
  {
    "id": 13,
    "name": "Stockholm, Sweden",
    "description": "A city spread across 14 islands, known for its modern design and historic sites.",
    "country": "Sweden",
    "climate": "Maritime",
    "currency": "Swedish Krona",
    "latitude": 59.3293,
    "longitude": 18.0686
  },
  {
    "id": 14,
    "name": "Krakow, Poland",
    "description": "A historic city with a well-preserved medieval core and vibrant cultural scene.",
    "country": "Poland",
    "climate": "Temperate",
    "currency": "Polish Złoty",
    "latitude": 50.0647,
    "longitude": 19.945
  },
  {
    "id": 15,
    "name": "Reykjavik, Iceland",
    "description": "The capital of Iceland, known for its geothermal pools, glaciers, and volcanoes.",
    "country": "Iceland",
    "climate": "Maritime",
    "currency": "Icelandic Króna",
    "latitude": 64.1466,
    "longitude": -21.9426
  },
  {
    "id": 16,
    "name": "Florence, Italy",
    "description": "A city famous for its Renaissance art, architecture, and historic landmarks.",
    "country": "Italy",
    "climate": "Mediterranean",
    "currency": "Euro",
    "latitude": 43.7696,
    "longitude": 11.2558
  },
  {
    "id": 17,
    "name": "Dublin, Ireland",
    "description": "The capital of Ireland, known for its rich literary and cultural heritage.",
    "country": "Ireland",
    "climate": "Maritime",
    "currency": "Euro",
    "latitude": 53.3498,
    "longitude": -6.2603
  },
  {
    "id": 18,
    "name": "Oslo, Norway",
    "description": "The capital of Norway, known for its scenic fjords, museums, and vibrant culture.",
    "country": "Norway",
    "climate": "Maritime",
    "currency": "Norwegian Krone",
    "latitude": 59.9139,
    "longitude": 10.7522
  },
  {
    "id": 19,
    "name": "Helsinki, Finland",
    "description": "The capital of Finland, known for its design, architecture, and lakeside charm.",
    "country": "Finland",
    "climate": "Temperate",
    "currency": "Euro",
    "latitude": 60.1699,
    "longitude": 24.9384
  },
  {
    "id": 20,
    "name": "Madrid, Spain",
    "description": "The capital of Spain, known for its art, culture, and vibrant nightlife.",
    "country": "Spain",
    "climate": "Mediterranean",
    "currency": "Euro",
    "latitude": 40.4168,
    "longitude": -3.7038
  }
]

```

You can find a sample of the requested app attached.
