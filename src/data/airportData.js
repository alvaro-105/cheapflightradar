// ==================== AIRPORT DATA ====================
// Major US departure airports + popular international arrival airports
// Updated April 2026

const airportData = [

  // ─── Dallas / Fort Worth ──────────────────────────────────────
  {
    iata: 'DFW',
    slug: 'dfw',
    name: 'Dallas/Fort Worth International Airport',
    city: 'Dallas/Fort Worth',
    state: 'TX',
    type: 'us',
    heroImage: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=80',
    metaTitle: 'DFW Airport International Travel Guide 2026',
    metaDesc: 'Flying internationally from DFW? Full guide to terminals, lounges, cheap parking, and the best international routes from Dallas/Fort Worth.',
    website: 'https://www.dfwairport.com',
    terminals: ['A (American domestic)', 'B (American international)', 'C (American + American Eagle)', 'D (international hub — best terminal)', 'E (budget airlines: Spirit, Frontier)'],
    internationalTerminal: 'Terminal D — largest and best equipped. Has Global Entry kiosks and the best international gate experience.',
    airlines: {
      primary: ['American Airlines (hub)', 'Frontier', 'Spirit'],
      international: ['British Airways', 'Aeromexico', 'Lufthansa', 'Air France', 'Japan Airlines', 'Korean Air', 'Qatar Airways'],
    },
    topRoutes: [
      { dest: 'Cancún (CUN)', flight: '2h 40m', avgPrice: '$220 RT', direct: true },
      { dest: 'Mexico City (MEX)', flight: '2h 50m', avgPrice: '$245 RT', direct: true },
      { dest: 'London Heathrow (LHR)', flight: '9h 45m', avgPrice: '$680 RT', direct: true },
      { dest: 'Tokyo Narita (NRT)', flight: '13h 30m', avgPrice: '$900 RT', direct: true },
      { dest: 'Costa Rica (SJO)', flight: '3h 30m', avgPrice: '$340 RT', direct: true },
      { dest: 'Paris CDG', flight: '10h (1 stop)', avgPrice: '$730 RT', direct: false },
    ],
    transport: {
      rail: { desc: 'DART Orange Line to downtown Dallas and Cityplace/Uptown', cost: '$2.50', time: '45–60 min to downtown' },
      taxi: { desc: 'Uber/Lyft to Dallas hotels', cost: '$25–40', time: '20–40 min' },
      parking: {
        terminal: '$25–30/day',
        remote: '$10–15/day',
        tip: 'Book remote parking on SpotHero or ParkWhiz for $6–10/day — much cheaper than airport rates.',
      },
    },
    lounges: [
      { name: 'Admirals Club (American)', terminals: ['A', 'B', 'C', 'D', 'E'], access: 'AA status, Priority Pass (some), or day pass ($59)' },
      { name: 'Centurion Lounge (Amex)', terminal: 'D', access: 'Amex Platinum or Centurion — excellent food and drinks' },
      { name: 'British Airways Lounge', terminal: 'D', access: 'BA business class or oneworld sapphire+' },
      { name: 'The Club (Priority Pass)', terminal: 'D', access: 'Priority Pass members' },
    ],
    tips: [
      'Terminal D is the international terminal — check in early for customs/immigration processing on return.',
      'TSA PreCheck lanes at DFW move extremely fast — worth the $78/5-year enrollment.',
      'The SkyLink train connects all terminals in under 10 minutes — no shuttle needed.',
      'DART Orange Line to downtown is $2.50 — the most underused money-saver at this airport.',
      'Global Entry kiosks in Terminal D speed up US return processing dramatically.',
    ],
    bestFor: 'One of the best US airports for international travel — most routes, most airlines, best lounge access, and direct flights to Europe/Asia.',
  },

  // ─── Houston (Intercontinental) ───────────────────────────────
  {
    iata: 'IAH',
    slug: 'iah',
    name: 'George Bush Intercontinental Airport',
    city: 'Houston',
    state: 'TX',
    type: 'us',
    heroImage: 'https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=1200&q=80',
    metaTitle: 'IAH Airport International Travel Guide 2026',
    metaDesc: 'Flying from Houston Intercontinental (IAH)? Guide to terminals, United hub connections, and the best international routes from Houston.',
    website: 'https://www.fly2houston.com/iah',
    terminals: ['A (United)', 'B (United international)', 'C (United international)', 'D (international gates)', 'E (international: Delta, Air France, Lufthansa)'],
    internationalTerminal: 'Terminal E for most international departures (except United which uses B/C).',
    airlines: {
      primary: ['United Airlines (hub)', 'Spirit', 'Frontier'],
      international: ['Air France', 'Lufthansa', 'Copa Airlines', 'Avianca', 'Aeromexico', 'KLM', 'British Airways'],
    },
    topRoutes: [
      { dest: 'Cancún (CUN)', flight: '2h 30m', avgPrice: '$230 RT', direct: true },
      { dest: 'Bogotá (BOG)', flight: '4h 50m', avgPrice: '$370 RT', direct: true },
      { dest: 'Mexico City (MEX)', flight: '2h 40m', avgPrice: '$240 RT', direct: true },
      { dest: 'Costa Rica (SJO)', flight: '3h 30m', avgPrice: '$320 RT', direct: true },
      { dest: 'Paris CDG', flight: '10h (direct Air France)', avgPrice: '$720 RT', direct: true },
      { dest: 'Lima (LIM)', flight: '7h (1 stop)', avgPrice: '$550 RT', direct: false },
    ],
    transport: {
      taxi: { desc: 'Uber/Lyft to Downtown Houston', cost: '$35–50', time: '30–45 min' },
      shuttle: { desc: 'GO Airporter shuttle to Hobby (HOU)', cost: '$15', time: '45 min' },
      parking: {
        terminal: '$27–35/day',
        remote: '$12–18/day',
        tip: 'Economy lot C or D is $12/day and served by frequent shuttles. Book on SpotHero for $8–10.',
      },
    },
    lounges: [
      { name: 'United Club', terminals: ['B', 'C', 'E'], access: 'United status, Priority Pass (limited), or day pass' },
      { name: 'Polaris Lounge (United business)', terminal: 'E', access: 'United Polaris business class — outstanding food and showers' },
      { name: 'Air France Lounge', terminal: 'E', access: 'Air France/KLM business class or Flying Blue Platinum' },
    ],
    tips: [
      'IAH is United\'s hub — superb connectivity to South America (Copa, Avianca) and transatlantic routes.',
      'The Polaris Lounge in Terminal E is one of the best in North America.',
      'Hobby (HOU) is Houston\'s other airport — always check both for Southwest and cheaper fares.',
      'Terminal connections may require re-clearing security — allow 90+ min for domestic→international.',
    ],
    bestFor: 'Best for South America routes (especially Colombia, Peru) and United hub connections.',
  },

  // ─── Houston (Hobby) ──────────────────────────────────────────
  {
    iata: 'HOU',
    slug: 'hou',
    name: 'William P. Hobby Airport',
    city: 'Houston',
    state: 'TX',
    type: 'us',
    heroImage: 'https://images.unsplash.com/photo-1571769267292-e24dfadebbdc?w=1200&q=80',
    metaTitle: 'Houston Hobby Airport (HOU) International Guide 2026',
    metaDesc: 'Houston Hobby Airport (HOU) for Southwest flights to Mexico and the Caribbean. Tips for HOU travelers flying internationally.',
    website: 'https://www.fly2houston.com/hou',
    terminals: ['Main Terminal (single consolidated terminal)'],
    internationalTerminal: 'International Terminal added by Southwest for Mexico/Caribbean routes.',
    airlines: {
      primary: ['Southwest Airlines (main hub)', 'JetBlue', 'Aeromexico'],
      international: ['Southwest (Cancún, Mexico City, Cabo, Puerto Vallarta)', 'Aeromexico'],
    },
    topRoutes: [
      { dest: 'Cancún (CUN)', flight: '2h 25m', avgPrice: '$210 RT', direct: true },
      { dest: 'Mexico City (MEX)', flight: '2h 40m', avgPrice: '$235 RT', direct: true },
      { dest: 'Los Cabos (SJD)', flight: '3h', avgPrice: '$250 RT', direct: true },
      { dest: 'Puerto Vallarta (PVR)', flight: '3h', avgPrice: '$240 RT', direct: true },
    ],
    transport: {
      rail: { desc: 'METRORail Red Line to downtown Houston', cost: '$1.25', time: '45 min to Theater District' },
      taxi: { desc: 'Uber/Lyft to downtown', cost: '$20–30', time: '20–30 min' },
      parking: {
        terminal: '$20–25/day',
        remote: '$8–12/day',
        tip: 'HOU parking is cheaper than IAH and the airport is smaller — terminal garage is easy.',
      },
    },
    lounges: [],
    tips: [
      'Southwest\'s hub at HOU means often the cheapest Mexico prices around — always check southwest.com.',
      'Southwest fares don\'t appear on Google Flights or Kayak — their website only.',
      'HOU is smaller and less stressful than IAH — faster security and easier navigation.',
    ],
    bestFor: 'Best Southwest hub for Mexico deals. Often cheapest for Cancún, Mexico City, and Cabo.',
  },

  // ─── Austin ───────────────────────────────────────────────────
  {
    iata: 'AUS',
    slug: 'aus',
    name: 'Austin-Bergstrom International Airport',
    city: 'Austin',
    state: 'TX',
    type: 'us',
    heroImage: 'https://images.unsplash.com/photo-1484318571209-661cf29a69c3?w=1200&q=80',
    metaTitle: 'AUS Airport International Travel Guide 2026',
    metaDesc: 'Austin-Bergstrom International Airport is expanding rapidly. Direct flights to London, Cancún, and Mexico. Guide for Austin international travelers.',
    website: 'https://www.austintexas.gov/airport',
    terminals: ['Barbara Jordan Terminal (main)', 'South Terminal (Spirit/Frontier budget)'],
    internationalTerminal: 'Barbara Jordan Terminal — all international departures.',
    airlines: {
      primary: ['Southwest', 'American', 'United', 'Delta'],
      international: ['British Airways (direct London)', 'Aeromexico', 'Volaris', 'Frontier', 'Spirit'],
    },
    topRoutes: [
      { dest: 'Cancún (CUN)', flight: '2h 45m', avgPrice: '$250 RT', direct: true },
      { dest: 'Mexico City (MEX)', flight: '3h', avgPrice: '$270 RT', direct: true },
      { dest: 'London Heathrow (LHR)', flight: '9h 30m', avgPrice: '$720 RT', direct: true },
      { dest: 'Costa Rica (SJO)', flight: '4h (1 stop)', avgPrice: '$360 RT', direct: false },
    ],
    transport: {
      bus: { desc: 'CapMetro Airport Flyer (Route 100) to downtown Austin', cost: '$1.25', time: '35–45 min' },
      taxi: { desc: 'Uber/Lyft to downtown Austin', cost: '$20–30', time: '15–25 min' },
      parking: {
        terminal: '$22–28/day',
        remote: '$9–12/day',
        tip: 'Park at Austin Park & Ride on Airport Blvd — $7–9/day with free shuttle.',
      },
    },
    lounges: [
      { name: 'The Club Austin (Priority Pass)', terminal: 'Barbara Jordan', access: 'Priority Pass, day pass available' },
      { name: 'American Admirals Club', terminal: 'Barbara Jordan', access: 'AA status or day pass' },
    ],
    tips: [
      'AUS is growing fast — check for new international routes being added regularly.',
      'British Airways direct to London was a game-changer for Austin travelers.',
      'CapMetro Route 100 to downtown is $1.25 and runs every 30 minutes.',
    ],
    bestFor: 'Great for Austin residents. Direct London route is excellent. Growing international selection.',
  },

  // ─── San Antonio ──────────────────────────────────────────────
  {
    iata: 'SAT',
    slug: 'sat',
    name: 'San Antonio International Airport',
    city: 'San Antonio',
    state: 'TX',
    type: 'us',
    heroImage: 'https://images.unsplash.com/photo-1529074963764-98f45c47344b?w=1200&q=80',
    metaTitle: 'SAT Airport International Travel Guide 2026',
    metaDesc: 'San Antonio International Airport guide for international travel. Direct flights to Mexico, connections to the world. Tips for SA travelers.',
    website: 'https://www.sanantonio.gov/aviation',
    terminals: ['Terminal A', 'Terminal B'],
    internationalTerminal: 'Terminal A — Aeromexico and international departures.',
    airlines: {
      primary: ['American', 'Southwest', 'United', 'Delta'],
      international: ['Aeromexico', 'Volaris'],
    },
    topRoutes: [
      { dest: 'Cancún (CUN)', flight: '2h 30m', avgPrice: '$250 RT', direct: true },
      { dest: 'Mexico City (MEX)', flight: '2h 45m', avgPrice: '$265 RT', direct: true },
      { dest: 'Dallas (DFW)', flight: '45m', avgPrice: '$80 RT', direct: true },
    ],
    transport: {
      bus: { desc: 'VIA bus routes connect airport to downtown', cost: '$1.30', time: '30–40 min' },
      taxi: { desc: 'Uber/Lyft to downtown SA', cost: '$15–25', time: '12–20 min' },
      parking: {
        terminal: '$18–24/day',
        remote: '$8–12/day',
        tip: 'SAT parking is cheaper than most major hub airports.',
      },
    },
    lounges: [],
    tips: [
      'SAT has fewer international options than DFW/IAH — worth comparing prices at nearby airports.',
      'San Antonio to Austin or Houston by car is 1–1.5 hours, expanding your airport options.',
    ],
    bestFor: 'Convenient for San Antonio residents for Mexico routes. Easy, low-stress airport.',
  },

  // ─── New York (JFK) ───────────────────────────────────────────
  {
    iata: 'JFK',
    slug: 'jfk',
    name: 'John F. Kennedy International Airport',
    city: 'New York City',
    state: 'NY',
    type: 'us',
    heroImage: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1200&q=80',
    metaTitle: 'JFK Airport International Travel Guide 2026',
    metaDesc: 'Flying internationally from JFK? Guide to terminals, AirTrain, lounges, and the best routes from New York Kennedy.',
    website: 'https://www.jfkairport.com',
    terminals: ['Terminal 1 (Air France, Lufthansa, Korean Air)', 'Terminal 4 (Delta international + many others)', 'Terminal 5 (JetBlue)', 'Terminal 7 (British Airways)', 'Terminal 8 (American Airlines)'],
    internationalTerminal: 'Terminal 4 is the main international terminal for most carriers. Terminal 8 for American international.',
    airlines: {
      primary: ['JetBlue (hub)', 'American', 'Delta'],
      international: ['British Airways', 'Air France', 'Lufthansa', 'Emirates', 'Cathay Pacific', 'Korean Air', 'Japan Airlines', 'Virgin Atlantic', 'Aer Lingus'],
    },
    topRoutes: [
      { dest: 'London Heathrow (LHR)', flight: '7h', avgPrice: '$550 RT', direct: true },
      { dest: 'Paris CDG', flight: '7h 30m', avgPrice: '$580 RT', direct: true },
      { dest: 'Cancún (CUN)', flight: '4h', avgPrice: '$320 RT', direct: true },
      { dest: 'Tokyo Narita (NRT)', flight: '14h', avgPrice: '$850 RT', direct: true },
      { dest: 'Bogotá (BOG)', flight: '6h', avgPrice: '$450 RT', direct: true },
      { dest: 'Dublin (DUB)', flight: '6h 45m', avgPrice: '$500 RT', direct: true },
    ],
    transport: {
      rail: { desc: 'AirTrain JFK + LIRR or Subway (A/J/Z) to Manhattan', cost: '$10–16', time: '45–60 min to Midtown' },
      taxi: { desc: 'Yellow cab flat rate to Manhattan', cost: '$70 flat + tolls', time: '45–75 min' },
      parking: {
        terminal: '$45–55/day',
        remote: '$20–30/day',
        tip: 'JFK parking is very expensive. Use off-airport lots on SpotHero or take the AirTrain instead.',
      },
    },
    lounges: [
      { name: 'Centurion Lounge (Amex)', terminal: 'T8', access: 'Amex Platinum or Centurion card' },
      { name: 'Airspace Lounge (Priority Pass)', terminal: 'T5', access: 'Priority Pass members' },
      { name: 'British Airways Lounge', terminal: 'T7', access: 'BA business/first or oneworld sapphire+' },
    ],
    tips: [
      'AirTrain costs $8 — connect to LIRR at Jamaica ($3–7 more) for fastest Manhattan access.',
      'Uber/Lyft during peak hours can run $60–100. AirTrain + subway is $16 and often faster.',
      'Terminal 4 is the most modern and has the best dining and lounge options.',
      'JFK is being massively redeveloped — expect some construction disruption through 2027.',
      'Global Entry at JFK is essential — customs lines for international arrivals can be very long.',
    ],
    bestFor: 'New York\'s main international gateway. Best selection of transatlantic routes and premium international carriers.',
  },

  // ─── New York (Newark) ────────────────────────────────────────
  {
    iata: 'EWR',
    slug: 'ewr',
    name: 'Newark Liberty International Airport',
    city: 'Newark (NYC area)',
    state: 'NJ',
    type: 'us',
    heroImage: 'https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?w=1200&q=80',
    metaTitle: 'Newark Airport (EWR) International Travel Guide 2026',
    metaDesc: 'Newark Liberty is United\'s biggest hub and a gateway to Europe. Guide to terminals, AirTrain, and top routes from EWR.',
    website: 'https://www.newarkairport.com',
    terminals: ['Terminal A (domestic + some international)', 'Terminal B (United)', 'Terminal C (United international hub)'],
    internationalTerminal: 'Terminal C — United\'s international hub with excellent connections worldwide.',
    airlines: {
      primary: ['United Airlines (hub)', 'Spirit', 'Frontier'],
      international: ['Lufthansa', 'TAP Portugal', 'LOT Polish', 'Swiss', 'Air Canada', 'Austrian', 'Brussels Airlines'],
    },
    topRoutes: [
      { dest: 'London Heathrow (LHR)', flight: '7h 10m', avgPrice: '$560 RT', direct: true },
      { dest: 'Cancún (CUN)', flight: '4h 10m', avgPrice: '$330 RT', direct: true },
      { dest: 'Lisbon (LIS)', flight: '7h', avgPrice: '$520 RT', direct: true },
      { dest: 'Paris CDG', flight: '7h 40m', avgPrice: '$590 RT', direct: true },
      { dest: 'Mexico City (MEX)', flight: '5h 30m', avgPrice: '$380 RT', direct: true },
    ],
    transport: {
      rail: { desc: 'AirTrain EWR + NJ Transit to NYC Penn Station', cost: '$18–24', time: '30–45 min to Midtown' },
      taxi: { desc: 'Uber/Lyft to Midtown Manhattan', cost: '$55–85', time: '30–60 min' },
      parking: {
        terminal: '$40–50/day',
        remote: '$18–25/day',
        tip: 'AirTrain + NJ Transit is $18–24 and usually faster than driving in traffic.',
      },
    },
    lounges: [
      { name: 'United Club', terminal: 'C', access: 'United status, Priority Pass, or day pass' },
      { name: 'Polaris Lounge (United)', terminal: 'C', access: 'United Polaris business class — one of the best in the US' },
    ],
    tips: [
      'EWR is United\'s biggest hub — excellent connections to Europe, especially Central and Eastern Europe.',
      'TAP Portugal and LOT Polish offer some of the cheapest transatlantic fares from EWR.',
      'Terminal C is the international hub and by far the best terminal for lounges and dining.',
      'AirTrain + NJ Transit to Penn Station: 30–45 min, $18–24 — faster than driving.',
    ],
    bestFor: 'United\'s main international hub. Best for Europe connections — especially UK, Portugal, and Eastern Europe.',
  },

  // ─── Los Angeles ──────────────────────────────────────────────
  {
    iata: 'LAX',
    slug: 'lax',
    name: 'Los Angeles International Airport',
    city: 'Los Angeles',
    state: 'CA',
    type: 'us',
    heroImage: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=1200&q=80',
    metaTitle: 'LAX Airport International Travel Guide 2026',
    metaDesc: 'Flying internationally from LAX? Guide to terminals, LAX-it rideshare lot, lounges, and the best routes from Los Angeles.',
    website: 'https://www.flylax.com',
    terminals: ['T1 (Southwest)', 'T2 (Delta, United)', 'T3 (Delta)', 'T4 (American)', 'T5 (Delta)', 'T6 (American)', 'T7 (United hub)', 'Tom Bradley International Terminal (TBIT)'],
    internationalTerminal: 'Tom Bradley International Terminal (TBIT) — connected to T4 and T7 via the terminal connector.',
    airlines: {
      primary: ['American', 'United', 'Delta', 'Southwest'],
      international: ['Qantas', 'Air New Zealand', 'Korean Air', 'ANA', 'Cathay Pacific', 'British Airways', 'Air France', 'Aeromexico', 'LATAM'],
    },
    topRoutes: [
      { dest: 'Tokyo Narita (NRT)', flight: '11h', avgPrice: '$750 RT', direct: true },
      { dest: 'London Heathrow (LHR)', flight: '10h 30m', avgPrice: '$620 RT', direct: true },
      { dest: 'Sydney (SYD)', flight: '15h 30m', avgPrice: '$1,100 RT', direct: true },
      { dest: 'Cancún (CUN)', flight: '4h 30m', avgPrice: '$340 RT', direct: true },
      { dest: 'Mexico City (MEX)', flight: '3h 30m', avgPrice: '$290 RT', direct: true },
      { dest: 'Seoul (ICN)', flight: '12h', avgPrice: '$780 RT', direct: true },
    ],
    transport: {
      metro: { desc: 'LAX/Metro Connector to Crenshaw/LAX Line — then connect to downtown', cost: '$2.50', time: '55–70 min to Downtown LA' },
      bus: { desc: 'FlyAway bus to Union Station or Westwood', cost: '$9.75', time: '35–50 min to Union Station' },
      taxi: { desc: 'Uber/Lyft from LAX-it lot', cost: '$35–60 to Hollywood/Downtown', time: '25–50 min' },
      parking: {
        terminal: '$40–50/day',
        remote: '$15–25/day',
        tip: 'Use Economy Lot E or F — free shuttle to terminals, $15–20/day. Book early online.',
      },
    },
    lounges: [
      { name: 'Centurion Lounge (Amex)', terminal: 'TBIT', access: 'Amex Platinum or Centurion' },
      { name: 'Star Alliance Business Lounge', terminal: 'TBIT', access: 'Star Alliance gold/business' },
      { name: 'American Admirals Club', terminals: ['T4', 'T5'], access: 'AA status or day pass' },
      { name: 'United Club', terminal: 'T7', access: 'United status or Priority Pass' },
    ],
    tips: [
      'LAX-it is the designated rideshare pickup lot — Uber/Lyft no longer pick up at terminals.',
      'Traffic around LAX is brutal. Budget extra time, especially on Friday afternoons.',
      'TBIT (Tom Bradley) is the main international terminal — connected to T4/T7 via the terminal connector.',
      'The Metro A Line from LAX opened in 2023 — great for reaching Santa Monica or Downtown.',
      'Global Entry is especially worth it at LAX — international arrivals lines can be very long.',
    ],
    bestFor: 'US gateway to Asia, Australia, and the Pacific. Best selection of Pacific routes from any US airport.',
  },

  // ─── Chicago O'Hare ───────────────────────────────────────────
  {
    iata: 'ORD',
    slug: 'ord',
    name: "O'Hare International Airport",
    city: 'Chicago',
    state: 'IL',
    type: 'us',
    heroImage: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&q=80',
    metaTitle: "O'Hare Airport (ORD) International Travel Guide 2026",
    metaDesc: "Chicago O'Hare is a dual United/American hub with outstanding international connections. Guide to terminals, Blue Line access, and top routes.",
    website: 'https://www.flychicago.com/ohare',
    terminals: ['Terminal 1 (United)', 'Terminal 2 (United + domestic)', 'Terminal 3 (American)', 'Terminal 5 (international — most foreign carriers)'],
    internationalTerminal: 'Terminal 5 — dedicated international terminal for most foreign carriers.',
    airlines: {
      primary: ['United Airlines (hub)', 'American Airlines (hub)'],
      international: ['Lufthansa', 'British Airways', 'Air France', 'Cathay Pacific', 'Aeromexico', 'Turkish Airlines', 'JAL', 'ANA'],
    },
    topRoutes: [
      { dest: 'London Heathrow (LHR)', flight: '8h 30m', avgPrice: '$590 RT', direct: true },
      { dest: 'Tokyo Narita (NRT)', flight: '13h', avgPrice: '$820 RT', direct: true },
      { dest: 'Cancún (CUN)', flight: '3h 30m', avgPrice: '$300 RT', direct: true },
      { dest: 'Paris CDG', flight: '8h 45m', avgPrice: '$610 RT', direct: true },
      { dest: 'Mexico City (MEX)', flight: '4h', avgPrice: '$290 RT', direct: true },
      { dest: 'Frankfurt (FRA)', flight: '8h 30m', avgPrice: '$640 RT', direct: true },
    ],
    transport: {
      rail: { desc: 'CTA Blue Line to downtown Chicago (The Loop)', cost: '$5', time: '45 min to The Loop' },
      taxi: { desc: 'Uber/Lyft to downtown Chicago', cost: '$35–55', time: '25–50 min depending on traffic' },
      parking: {
        terminal: '$38–45/day',
        remote: '$15–22/day',
        tip: 'CTA Blue Line from ORD is $5 and runs 24/7 — usually faster than a cab in traffic.',
      },
    },
    lounges: [
      { name: 'United Club', terminals: ['T1', 'T2'], access: 'United status, Priority Pass (limited), or day pass' },
      { name: 'United Polaris Lounge', terminal: 'T1', access: 'United Polaris business class — outstanding' },
      { name: 'American Admirals Club', terminal: 'T3', access: 'AA status or day pass ($59)' },
      { name: 'Centurion Lounge (Amex)', terminal: 'T3', access: 'Amex Platinum or Centurion' },
    ],
    tips: [
      'CTA Blue Line from ORD to The Loop is $5 and takes 45 minutes — runs 24 hours a day.',
      'ORD is a dual-hub (United + American) — always compare both airlines for international routes.',
      'Terminal 5 for international arrivals can have long customs lines — Global Entry is essential here.',
      'ORD weather delays are common November–March. Build buffer time for winter connections.',
    ],
    bestFor: 'Central US international hub. Dual United + American hub means exceptional route coverage to everywhere.',
  },

  // ─── Atlanta ──────────────────────────────────────────────────
  {
    iata: 'ATL',
    slug: 'atl',
    name: 'Hartsfield-Jackson Atlanta International Airport',
    city: 'Atlanta',
    state: 'GA',
    type: 'us',
    heroImage: 'https://images.unsplash.com/photo-1570783765660-de073c7e67f0?w=1200&q=80',
    metaTitle: 'Atlanta Airport (ATL) International Travel Guide 2026',
    metaDesc: 'ATL is the world\'s busiest airport and Delta\'s massive hub. Guide to concourses, MARTA train, and international routes from Atlanta.',
    website: 'https://www.atl.com',
    terminals: ['Domestic Terminal (North + South)', 'International Terminal', 'Concourses A–F (connected by underground Plane Train)'],
    internationalTerminal: 'International Terminal — all international departures from ATL.',
    airlines: {
      primary: ['Delta Airlines (massive hub)', 'Southwest', 'American', 'United'],
      international: ['Air France (SkyTeam)', 'KLM', 'Virgin Atlantic', 'Aeromexico', 'Copa Airlines', 'LATAM', 'British Airways'],
    },
    topRoutes: [
      { dest: 'Cancún (CUN)', flight: '2h 40m', avgPrice: '$280 RT', direct: true },
      { dest: 'London Heathrow (LHR)', flight: '8h 30m', avgPrice: '$570 RT', direct: true },
      { dest: 'Paris CDG', flight: '9h', avgPrice: '$590 RT', direct: true },
      { dest: 'Mexico City (MEX)', flight: '3h 30m', avgPrice: '$270 RT', direct: true },
      { dest: 'Amsterdam (AMS)', flight: '9h 15m', avgPrice: '$580 RT', direct: true },
      { dest: 'Bogotá (BOG)', flight: '4h 30m', avgPrice: '$380 RT', direct: true },
    ],
    transport: {
      rail: { desc: 'MARTA Red/Gold Line to downtown Atlanta or Buckhead', cost: '$2.50', time: '20–30 min to downtown' },
      taxi: { desc: 'Uber/Lyft to Midtown/Downtown Atlanta', cost: '$25–40', time: '20–35 min' },
      parking: {
        terminal: '$30–40/day',
        remote: '$12–18/day',
        tip: 'MARTA at $2.50 is the best value — runs every 10 minutes and connects directly to the domestic terminal.',
      },
    },
    lounges: [
      { name: 'Delta Sky Club', terminals: ['Domestic B', 'Domestic C', 'International'], access: 'Delta status, Priority Pass (limited), Amex Platinum, or day pass' },
      { name: 'Centurion Lounge (Amex)', terminal: 'International Terminal', access: 'Amex Platinum or Centurion' },
    ],
    tips: [
      'ATL has an underground Plane Train connecting all concourses — very fast for connections.',
      'MARTA to downtown Atlanta costs $2.50 and takes 20–30 minutes — best airport transit in the Southeast.',
      'Delta has so many flights from ATL you can connect to almost anywhere in the world with one stop.',
      'World\'s busiest airport means strong competition and often lower fares on popular routes.',
    ],
    bestFor: 'Delta\'s main hub. Unmatched domestic connectivity. Good Latin America and Europe coverage.',
  },

  // ─── Miami ────────────────────────────────────────────────────
  {
    iata: 'MIA',
    slug: 'mia',
    name: 'Miami International Airport',
    city: 'Miami',
    state: 'FL',
    type: 'us',
    heroImage: 'https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=1200&q=80',
    metaTitle: 'Miami Airport (MIA) International Travel Guide 2026',
    metaDesc: 'Miami International is the gateway to Latin America. Guide to MIA terminals, Metrorail access, and direct routes throughout the Americas.',
    website: 'https://www.miami-airport.com',
    terminals: ['North Terminal (Concourses D–H)', 'Central Terminal (Concourse J)', 'South Terminal'],
    internationalTerminal: 'Concourses D and E handle most international departures — American hub.',
    airlines: {
      primary: ['American Airlines (hub)', 'Copa Airlines', 'Avianca'],
      international: ['LATAM', 'Air France', 'British Airways', 'Iberia', 'Aeromexico', 'Caribbean Airlines', 'Copa'],
    },
    topRoutes: [
      { dest: 'Bogotá (BOG)', flight: '4h', avgPrice: '$340 RT', direct: true },
      { dest: 'Mexico City (MEX)', flight: '3h 30m', avgPrice: '$260 RT', direct: true },
      { dest: 'Lima (LIM)', flight: '6h 30m', avgPrice: '$480 RT', direct: true },
      { dest: 'London Heathrow (LHR)', flight: '9h', avgPrice: '$560 RT', direct: true },
      { dest: 'Madrid (MAD)', flight: '8h 30m', avgPrice: '$540 RT', direct: true },
      { dest: 'Buenos Aires (EZE)', flight: '8h', avgPrice: '$620 RT', direct: true },
    ],
    transport: {
      rail: { desc: 'MIA Mover + Metrorail to Brickell/Downtown Miami', cost: '$2.25', time: '30–40 min' },
      taxi: { desc: 'Uber/Lyft to Miami Beach or downtown', cost: '$25–45', time: '20–35 min' },
      parking: {
        terminal: '$35–45/day',
        remote: '$12–20/day',
        tip: 'Metrorail from MIA to Brickell ($2.25) is excellent — skips traffic entirely.',
      },
    },
    lounges: [
      { name: 'American Admirals Club', terminals: ['D', 'E'], access: 'AA status, Priority Pass (limited), or day pass' },
      { name: 'American Flagship Lounge', terminal: 'D', access: 'AA Flagship First/Business class — exceptional' },
      { name: 'LATAM Lounge', terminal: 'E', access: 'LATAM business class or status' },
    ],
    tips: [
      'MIA is the best US airport for South America — more direct Latin America routes than any other airport.',
      'The Metrorail from MIA to Brickell is 20 minutes for $2.25 — use it instead of Uber.',
      'Arrive 3 hours early for international departures — MIA can be chaotic.',
      'Try the Cuban coffee in the D/E concourse food court — about $1.50 and worth it.',
    ],
    bestFor: 'Gateway to Latin America and the Caribbean. Most direct South America routes from any US airport.',
  },

  // ─── San Francisco ────────────────────────────────────────────
  {
    iata: 'SFO',
    slug: 'sfo',
    name: 'San Francisco International Airport',
    city: 'San Francisco',
    state: 'CA',
    type: 'us',
    heroImage: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&q=80',
    metaTitle: 'SFO Airport International Travel Guide 2026',
    metaDesc: 'San Francisco International is a major Pacific hub. Guide to SFO terminals, BART access, and top international routes from the Bay Area.',
    website: 'https://www.flysfo.com',
    terminals: ['Terminal 1 (American, Southwest)', 'Terminal 2 (American, Delta)', 'Terminal 3 (United domestic)', 'International Terminal G (United international + most foreign carriers)'],
    internationalTerminal: 'International Terminal G — United international and most foreign carriers including Singapore, Cathay Pacific, Air China.',
    airlines: {
      primary: ['United Airlines (hub)', 'American', 'Delta', 'Southwest'],
      international: ['Singapore Airlines', 'Cathay Pacific', 'China Airlines', 'Air China', 'Japan Airlines', 'Korean Air', 'British Airways', 'Air France'],
    },
    topRoutes: [
      { dest: 'Tokyo Narita (NRT)', flight: '10h 30m', avgPrice: '$720 RT', direct: true },
      { dest: 'London Heathrow (LHR)', flight: '10h 30m', avgPrice: '$610 RT', direct: true },
      { dest: 'Singapore (SIN)', flight: '17h 30m', avgPrice: '$950 RT', direct: true },
      { dest: 'Cancún (CUN)', flight: '4h 45m', avgPrice: '$360 RT', direct: true },
      { dest: 'Paris CDG', flight: '11h', avgPrice: '$650 RT', direct: true },
      { dest: 'Mexico City (MEX)', flight: '3h 45m', avgPrice: '$295 RT', direct: true },
    ],
    transport: {
      rail: { desc: 'BART SFO Airport station to downtown San Francisco', cost: '$10.65', time: '30 min to Powell St' },
      taxi: { desc: 'Uber/Lyft to downtown SF or SoMa', cost: '$35–55', time: '25–45 min' },
      parking: {
        terminal: '$40–50/day',
        remote: '$18–28/day',
        tip: 'BART station is inside the International Terminal — $10.65 to downtown, best West Coast airport transit.',
      },
    },
    lounges: [
      { name: 'United Club', terminal: 'International Terminal', access: 'United status, Priority Pass, or day pass' },
      { name: 'Chase Sapphire Lounge', terminal: 'Terminal 3', access: 'Chase Sapphire Reserve card — excellent food and drinks' },
      { name: 'Air France Lounge', terminal: 'International Terminal', access: 'Air France/KLM business or Flying Blue platinum' },
    ],
    tips: [
      'BART connects directly inside the International Terminal — best value airport transit on the West Coast.',
      'SFO has one of the best airport museum collections in the world — free exhibits throughout the terminals.',
      'Fog causes frequent morning delays — build in buffer time for early connections.',
      'Singapore Airlines direct to Singapore is one of the world\'s great premium flight experiences.',
    ],
    bestFor: 'Bay Area\'s main international hub. Best US gateway to Asia. Premium Asian carriers and Singapore Airlines.',
  },

  // ─── Seattle ──────────────────────────────────────────────────
  {
    iata: 'SEA',
    slug: 'sea',
    name: 'Seattle-Tacoma International Airport',
    city: 'Seattle',
    state: 'WA',
    type: 'us',
    heroImage: 'https://images.unsplash.com/photo-1502175353174-a7a70e73b362?w=1200&q=80',
    metaTitle: 'Seattle-Tacoma Airport (SEA) International Travel Guide 2026',
    metaDesc: 'Seattle-Tacoma (SEA) is Alaska Airlines\' hub and a growing international gateway. Guide to terminals, Link Light Rail, and top routes.',
    website: 'https://www.portseattle.org/sea-tac',
    terminals: ['Main Terminal (all airlines)', 'Satellite Concourses A, B, C (connected via underground tunnel)'],
    internationalTerminal: 'Main Terminal — international departures via Concourses B and C.',
    airlines: {
      primary: ['Alaska Airlines (hub)', 'Delta', 'Southwest', 'United', 'American'],
      international: ['British Airways', 'Icelandair', 'Air Canada', 'ANA', 'Korean Air', 'Japan Airlines', 'Aeromexico', 'Condor'],
    },
    topRoutes: [
      { dest: 'Tokyo Narita (NRT)', flight: '10h', avgPrice: '$710 RT', direct: true },
      { dest: 'Cancún (CUN)', flight: '5h', avgPrice: '$380 RT', direct: true },
      { dest: 'London Heathrow (LHR)', flight: '9h 30m', avgPrice: '$640 RT', direct: true },
      { dest: 'Mexico City (MEX)', flight: '4h 30m', avgPrice: '$330 RT', direct: true },
      { dest: 'Reykjavík (KEF)', flight: '8h', avgPrice: '$510 RT', direct: true },
    ],
    transport: {
      rail: { desc: 'Link Light Rail to downtown Seattle', cost: '$3.25', time: '38 min to Westlake Center' },
      taxi: { desc: 'Uber/Lyft to downtown Seattle', cost: '$30–45', time: '20–35 min' },
      parking: {
        terminal: '$35–45/day',
        remote: '$15–20/day',
        tip: 'Link Light Rail at $3.25 is the best option — station is inside the main terminal.',
      },
    },
    lounges: [
      { name: 'Alaska Lounge', terminals: ['C', 'N'], access: 'Alaska MVP Gold/75K, Priority Pass' },
      { name: 'United Club', terminal: 'B', access: 'United status or Priority Pass' },
      { name: 'The Club at SEA (Priority Pass)', terminal: 'C', access: 'Priority Pass members' },
    ],
    tips: [
      'Link Light Rail from SEA to downtown is 38 minutes for $3.25 — best deal in the Northwest.',
      'Alaska Airlines has excellent Alaska and Hawaii routes from SEA.',
      'Icelandair flies direct to Reykjavík — add Iceland as a free stopover on a Europe trip.',
      'SEA food court has local Seattle favorites — Pike Place Chowder is a highlight.',
    ],
    bestFor: 'Pacific Northwest gateway. Alaska Airlines hub. Great for Japan and Pacific destinations.',
  },

  // ─── Boston ───────────────────────────────────────────────────
  {
    iata: 'BOS',
    slug: 'bos',
    name: 'Boston Logan International Airport',
    city: 'Boston',
    state: 'MA',
    type: 'us',
    heroImage: 'https://images.unsplash.com/photo-1569569970363-df7b6160d111?w=1200&q=80',
    metaTitle: 'Boston Logan Airport (BOS) International Travel Guide 2026',
    metaDesc: 'Boston Logan is compact, efficient, and one of the closest US airports to Europe. Guide to terminals, Silver Line (free!), and best international routes.',
    website: 'https://www.massport.com/logan-airport',
    terminals: ['Terminal A (United, Spirit)', 'Terminal B (American)', 'Terminal C (JetBlue)', 'Terminal E (international — most foreign carriers + Delta international)'],
    internationalTerminal: 'Terminal E — all international departures from Logan.',
    airlines: {
      primary: ['JetBlue (focus city)', 'American', 'Delta', 'United'],
      international: ['Aer Lingus', 'British Airways', 'Lufthansa', 'Air France', 'Aeromexico', 'ITA Airways'],
    },
    topRoutes: [
      { dest: 'London Heathrow (LHR)', flight: '6h 45m', avgPrice: '$510 RT', direct: true },
      { dest: 'Dublin (DUB)', flight: '6h 30m', avgPrice: '$490 RT', direct: true },
      { dest: 'Cancún (CUN)', flight: '4h', avgPrice: '$310 RT', direct: true },
      { dest: 'Paris CDG', flight: '7h 30m', avgPrice: '$570 RT', direct: true },
      { dest: 'Lisbon (LIS)', flight: '7h', avgPrice: '$500 RT', direct: true },
    ],
    transport: {
      bus: { desc: 'Silver Line SL1 Bus Rapid Transit — FREE from Terminal E to South Station', cost: 'Free outbound / $1.70 return', time: '20–30 min to South Station' },
      taxi: { desc: 'Uber/Lyft to downtown Boston', cost: '$25–40', time: '15–25 min' },
      parking: {
        terminal: '$35–42/day',
        remote: '$15–22/day',
        tip: 'Silver Line is FREE from the airport — one of the great hidden transit deals in the US.',
      },
    },
    lounges: [
      { name: 'American Admirals Club', terminal: 'B', access: 'AA status or day pass' },
      { name: 'Delta Sky Club', terminal: 'A', access: 'Delta status, Amex Platinum, or day pass' },
    ],
    tips: [
      'Silver Line SL1 bus is FREE from Terminal E to South Station — best free airport transit in the US.',
      'Aer Lingus offers US pre-clearance at Dublin — you arrive as a domestic passenger.',
      'BOS is one of the closest US airports to Europe — shortest transatlantic flights, often lowest fares.',
      'Terminal E is compact and easy to navigate — straightforward for international travel.',
    ],
    bestFor: 'Northeast gateway. Closest US airport to Europe. Excellent Ireland and UK direct connections.',
  },

  // ─── Denver ───────────────────────────────────────────────────
  {
    iata: 'DEN',
    slug: 'den',
    name: 'Denver International Airport',
    city: 'Denver',
    state: 'CO',
    type: 'us',
    heroImage: 'https://images.unsplash.com/photo-1619468129361-605ebea04b44?w=1200&q=80',
    metaTitle: 'Denver International Airport (DEN) Travel Guide 2026',
    metaDesc: 'Denver International is a United hub and Southwest stronghold. Guide to DEN terminals, A-Train access, and international routes from the Rockies.',
    website: 'https://www.flydenver.com',
    terminals: ['Jeppesen Terminal (main)', 'Concourse A (United international)', 'Concourse B (United domestic)', 'Concourse C (Southwest + others)'],
    internationalTerminal: 'Concourse A — all international departures from DEN.',
    airlines: {
      primary: ['United Airlines (hub)', 'Southwest (major presence)', 'Frontier (hub)'],
      international: ['British Airways', 'Lufthansa', 'Air Canada', 'Aeromexico', 'Icelandair'],
    },
    topRoutes: [
      { dest: 'Cancún (CUN)', flight: '3h 30m', avgPrice: '$300 RT', direct: true },
      { dest: 'Mexico City (MEX)', flight: '3h 45m', avgPrice: '$310 RT', direct: true },
      { dest: 'London Heathrow (LHR)', flight: '9h 30m', avgPrice: '$640 RT', direct: true },
      { dest: 'Reykjavík (KEF)', flight: '8h', avgPrice: '$520 RT', direct: true },
    ],
    transport: {
      rail: { desc: 'University of Colorado A-Line commuter rail to Union Station', cost: '$10.50', time: '37 min to Denver Union Station' },
      taxi: { desc: 'Uber/Lyft to downtown Denver', cost: '$30–45', time: '30–45 min' },
      parking: {
        terminal: '$30–40/day',
        remote: '$12–18/day',
        tip: 'The A-Line to Union Station is $10.50 and runs every 15 minutes — easy and reliable.',
      },
    },
    lounges: [
      { name: 'United Club', terminal: 'B', access: 'United status, Priority Pass (limited), or day pass' },
      { name: 'The Club at DEN (Priority Pass)', terminal: 'B', access: 'Priority Pass members' },
    ],
    tips: [
      'DEN is 25 miles from downtown — the A-Line train ($10.50) to Union Station runs every 15 minutes.',
      'Frontier Airlines has its hub here — cheap fares with bag fees, but often much cheaper than United.',
      'DEN sits at 5,431 ft elevation — planes may have slightly longer takeoff rolls, but not an issue.',
      'Icelandair and British Airways give DEN solid transatlantic options.',
    ],
    bestFor: 'Mountain West hub. United + Southwest combine for great coverage. Growing international connections.',
  },

  // ─── Orlando ──────────────────────────────────────────────────
  {
    iata: 'MCO',
    slug: 'mco',
    name: 'Orlando International Airport',
    city: 'Orlando',
    state: 'FL',
    type: 'us',
    heroImage: 'https://images.unsplash.com/photo-1575816444084-672b7b0b6b2b?w=1200&q=80',
    metaTitle: 'Orlando Airport (MCO) International Travel Guide 2026',
    metaDesc: 'Orlando International is one of the busiest airports in the US. Guide to MCO terminals and international routes from central Florida.',
    website: 'https://www.orlandoairports.net',
    terminals: ['Terminal A (Gates 1–59)', 'Terminal B (Gates 60–129)', 'Terminal C (new — opened 2022)'],
    internationalTerminal: 'Terminals A and B both handle international — most UK, Irish, and Latin America flights.',
    airlines: {
      primary: ['Southwest (major presence)', 'JetBlue', 'American', 'Delta', 'United'],
      international: ['Virgin Atlantic', 'Aer Lingus', 'British Airways', 'Aeromexico', 'WestJet'],
    },
    topRoutes: [
      { dest: 'London Heathrow (LHR)', flight: '8h 30m', avgPrice: '$530 RT', direct: true },
      { dest: 'Cancún (CUN)', flight: '2h 40m', avgPrice: '$270 RT', direct: true },
      { dest: 'Dublin (DUB)', flight: '8h', avgPrice: '$510 RT', direct: true },
      { dest: 'Mexico City (MEX)', flight: '3h', avgPrice: '$280 RT', direct: true },
    ],
    transport: {
      bus: { desc: 'Lynx bus + SunRail (limited) to International Drive and downtown', cost: '$2–4', time: '30–60 min' },
      taxi: { desc: 'Uber/Lyft to Walt Disney World / International Drive', cost: '$25–40', time: '20–35 min' },
      parking: {
        terminal: '$25–35/day',
        remote: '$12–18/day',
        tip: 'MCO parking is reasonably priced compared to other major airports. Book online for discounts.',
      },
    },
    lounges: [
      { name: 'American Admirals Club', terminal: 'A', access: 'AA status or day pass' },
      { name: 'Delta Sky Club', terminal: 'B', access: 'Delta status, Amex Platinum, or day pass' },
    ],
    tips: [
      'MCO is massive — allow extra time to navigate between terminals and gate areas.',
      'Virgin Atlantic has excellent service to London from MCO — popular with UK visitors to Disney.',
      'Book early for Disney-area travel — MCO fares spike around school holidays.',
      'Rental car facility is off-site — free shuttle from Level 1 of Terminal B.',
    ],
    bestFor: 'Florida tourist hub. Good London and UK connections. Convenient for Disney World and Universal.',
  },

  // ─── Charlotte ────────────────────────────────────────────────
  {
    iata: 'CLT',
    slug: 'clt',
    name: 'Charlotte Douglas International Airport',
    city: 'Charlotte',
    state: 'NC',
    type: 'us',
    heroImage: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1200&q=80',
    metaTitle: 'Charlotte Airport (CLT) International Travel Guide 2026',
    metaDesc: 'Charlotte Douglas is American Airlines\' second-largest hub. Guide to CLT terminals and international routes from the Southeast.',
    website: 'https://www.cltairport.com',
    terminals: ['Main Terminal (all gates)', 'Concourses A–E (connected airside)'],
    internationalTerminal: 'Concourse E — all international departures from CLT.',
    airlines: {
      primary: ['American Airlines (hub)'],
      international: ['British Airways', 'Lufthansa', 'Air Canada', 'Aeromexico'],
    },
    topRoutes: [
      { dest: 'London Heathrow (LHR)', flight: '8h 30m', avgPrice: '$570 RT', direct: true },
      { dest: 'Cancún (CUN)', flight: '3h 30m', avgPrice: '$295 RT', direct: true },
      { dest: 'Mexico City (MEX)', flight: '4h', avgPrice: '$305 RT', direct: true },
      { dest: 'Frankfurt (FRA)', flight: '9h', avgPrice: '$640 RT', direct: true },
    ],
    transport: {
      bus: { desc: 'CATS bus routes to uptown Charlotte', cost: '$2.20', time: '20–30 min to Uptown' },
      taxi: { desc: 'Uber/Lyft to downtown Charlotte', cost: '$20–30', time: '15–20 min' },
      parking: {
        terminal: '$22–30/day',
        remote: '$10–15/day',
        tip: 'CLT parking is cheaper than most major hubs. Economy lot is $10–12/day with free shuttle.',
      },
    },
    lounges: [
      { name: 'American Admirals Club', terminals: ['B', 'E'], access: 'AA status, Priority Pass (select), or day pass' },
      { name: 'American Flagship Lounge', terminal: 'E', access: 'AA Flagship First/Business class — excellent' },
    ],
    tips: [
      'CLT is one of the most efficient major US airports — compact terminals and short connection times.',
      'American\'s Flagship Lounge in Concourse E is outstanding for business class international passengers.',
      'Parking at CLT is cheaper than most comparable hubs.',
      'American\'s hub means excellent connectivity to Europe and Latin America via one airline.',
    ],
    bestFor: 'Southeast gateway. American hub with solid Europe connections and excellent domestic coverage.',
  },

  // ─── Phoenix ──────────────────────────────────────────────────
  {
    iata: 'PHX',
    slug: 'phx',
    name: 'Phoenix Sky Harbor International Airport',
    city: 'Phoenix',
    state: 'AZ',
    type: 'us',
    heroImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
    metaTitle: 'Phoenix Sky Harbor Airport (PHX) Travel Guide 2026',
    metaDesc: 'Phoenix Sky Harbor is an American hub and Southwest stronghold. Guide to PHX terminals, Valley Metro Rail, and routes from the Southwest.',
    website: 'https://www.skyharbor.com',
    terminals: ['Terminal 3 (Southwest, Alaska)', 'Terminal 4 (American, Delta, United, international)'],
    internationalTerminal: 'Terminal 4 — all international departures from PHX.',
    airlines: {
      primary: ['American Airlines (hub)', 'Southwest (major presence)', 'Delta', 'United'],
      international: ['British Airways', 'Aeromexico', 'Air Canada', 'WestJet'],
    },
    topRoutes: [
      { dest: 'Cancún (CUN)', flight: '3h 30m', avgPrice: '$290 RT', direct: true },
      { dest: 'Los Cabos (SJD)', flight: '2h', avgPrice: '$240 RT', direct: true },
      { dest: 'Mexico City (MEX)', flight: '3h 15m', avgPrice: '$280 RT', direct: true },
      { dest: 'London Heathrow (LHR)', flight: '10h 30m', avgPrice: '$670 RT', direct: true },
    ],
    transport: {
      rail: { desc: 'PHX Sky Train to 44th St station, then Valley Metro Light Rail to downtown', cost: '$2', time: '30–40 min to downtown Phoenix' },
      taxi: { desc: 'Uber/Lyft to downtown Phoenix or Scottsdale', cost: '$15–30', time: '15–35 min' },
      parking: {
        terminal: '$25–35/day',
        remote: '$10–16/day',
        tip: 'Economy parking at PHX is reasonable at $10–16/day with free shuttle service.',
      },
    },
    lounges: [
      { name: 'American Admirals Club', terminal: 'T4', access: 'AA status, Priority Pass (select), or day pass' },
      { name: 'The Club PHX (Priority Pass)', terminal: 'T3', access: 'Priority Pass members' },
    ],
    tips: [
      'PHX is extremely hot June–August — dress in layers, the terminal A/C runs cold.',
      'Great for Mexico resort routes — Los Cabos and Puerto Vallarta fares are often very low from PHX.',
      'British Airways direct to London is an underrated option from Phoenix.',
      'Valley Metro Light Rail connects to Terminal 4 via the free Sky Train — cheap and easy to downtown.',
    ],
    bestFor: 'Southwest US hub. Great for Mexico resort routes. American + Southwest combine for excellent coverage.',
  },

  // ─── Minneapolis ──────────────────────────────────────────────
  {
    iata: 'MSP',
    slug: 'msp',
    name: 'Minneapolis-Saint Paul International Airport',
    city: 'Minneapolis',
    state: 'MN',
    type: 'us',
    heroImage: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=1200&q=80',
    metaTitle: 'Minneapolis Airport (MSP) International Travel Guide 2026',
    metaDesc: 'MSP is Delta\'s Midwest hub with strong Europe connections. Guide to terminals, Blue Line Light Rail, and international routes from Minneapolis.',
    website: 'https://www.mspairport.com',
    terminals: ['Terminal 1 — Lindbergh (Delta hub)', 'Terminal 2 — Humphrey (Southwest, Sun Country)'],
    internationalTerminal: 'Terminal 1 (Lindbergh) — all international departures from MSP.',
    airlines: {
      primary: ['Delta Airlines (hub)', 'Sun Country (hub)', 'Southwest'],
      international: ['KLM', 'Icelandair', 'Air France', 'British Airways', 'Aeromexico'],
    },
    topRoutes: [
      { dest: 'Cancún (CUN)', flight: '4h', avgPrice: '$310 RT', direct: true },
      { dest: 'Amsterdam (AMS)', flight: '8h 30m', avgPrice: '$570 RT', direct: true },
      { dest: 'London Heathrow (LHR)', flight: '8h', avgPrice: '$560 RT', direct: true },
      { dest: 'Reykjavík (KEF)', flight: '7h 30m', avgPrice: '$490 RT', direct: true },
      { dest: 'Mexico City (MEX)', flight: '4h 30m', avgPrice: '$310 RT', direct: true },
    ],
    transport: {
      rail: { desc: 'Metro Blue Line Light Rail to downtown Minneapolis or Mall of America', cost: '$2.50', time: '25–30 min to downtown' },
      taxi: { desc: 'Uber/Lyft to downtown Minneapolis', cost: '$25–40', time: '15–30 min' },
      parking: {
        terminal: '$28–38/day',
        remote: '$12–18/day',
        tip: 'Blue Line Light Rail at $2.50 runs every 10–15 minutes and connects directly to Terminal 1.',
      },
    },
    lounges: [
      { name: 'Delta Sky Club', terminal: 'T1', access: 'Delta status, Amex Platinum, or day pass' },
    ],
    tips: [
      'MSP is Delta\'s Midwest hub — great connections through Atlanta and Detroit for worldwide travel.',
      'KLM direct to Amsterdam is an underrated deal — often very competitive pricing.',
      'Blue Line Light Rail connects directly to Terminal 1 — $2.50 to downtown.',
      'Sun Country has excellent Caribbean and Mexico leisure routes at budget prices.',
    ],
    bestFor: 'Midwest gateway. Delta hub with strong Amsterdam and Europe connections. Icelandair for Nordic routes.',
  },

  // ─── Las Vegas ────────────────────────────────────────────────
  {
    iata: 'LAS',
    slug: 'las',
    name: 'Harry Reid International Airport',
    city: 'Las Vegas',
    state: 'NV',
    type: 'us',
    heroImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=80',
    metaTitle: 'Las Vegas Airport (LAS) International Travel Guide 2026',
    metaDesc: 'Harry Reid International Airport has some of the most competitive airfares in the US. Guide to LAS terminals and international routes.',
    website: 'https://www.harryreidairport.com',
    terminals: ['Terminal 1 (Southwest, American, Delta, United)', 'Terminal 3 (international + Spirit)'],
    internationalTerminal: 'Terminal 3 — international departures.',
    airlines: {
      primary: ['Southwest (huge presence)', 'Spirit', 'Frontier', 'American', 'Delta', 'United'],
      international: ['British Airways', 'WestJet', 'Air Canada', 'Condor', 'Aeromexico'],
    },
    topRoutes: [
      { dest: 'Cancún (CUN)', flight: '4h', avgPrice: '$320 RT', direct: true },
      { dest: 'Mexico City (MEX)', flight: '3h 30m', avgPrice: '$300 RT', direct: true },
      { dest: 'Los Cabos (SJD)', flight: '2h 30m', avgPrice: '$250 RT', direct: true },
      { dest: 'London Heathrow (LHR)', flight: '10h 30m', avgPrice: '$650 RT', direct: true },
    ],
    transport: {
      bus: { desc: 'RTC Deuce Bus on The Strip', cost: '$6 for 2-hour pass', time: '20–30 min to Center Strip' },
      taxi: { desc: 'Uber/Lyft to The Strip hotels', cost: '$15–25', time: '10–20 min' },
      parking: {
        terminal: '$20–30/day',
        remote: '$10–15/day',
        tip: 'LAS parking is cheap by major airport standards.',
      },
    },
    lounges: [
      { name: 'American Admirals Club', terminal: 'T1', access: 'AA status or day pass' },
      { name: 'Delta Sky Club', terminal: 'T1', access: 'Delta status, Amex Platinum, or day pass' },
      { name: 'The Club LAS (Priority Pass)', terminal: 'T1', access: 'Priority Pass members' },
    ],
    tips: [
      'LAS has some of the most competitive airfares in the US — airlines fight hard for Vegas traffic.',
      'The Strip is just 10–20 minutes from the airport by Uber.',
      'British Airways direct to London is popular — check for sale fares.',
      'All major US carriers fly here — always compare across airlines for best price.',
    ],
    bestFor: 'One of the most competitive airfare markets in the US. Good Mexico resort connections.',
  },

  // ─── Popular International Arrival Airports ───────────────────
  {
    iata: 'CUN',
    slug: 'cun',
    name: 'Cancún International Airport',
    city: 'Cancún',
    country: 'Mexico',
    type: 'international',
    heroImage: 'https://images.unsplash.com/photo-1510097467424-192d713fd8b2?w=1200&q=80',
    metaTitle: 'Cancún Airport (CUN) Guide 2026 — Arrive, Get to Your Hotel',
    metaDesc: 'Complete Cancún airport guide: how to get from CUN to your hotel, avoid taxi scams, get pesos, and breeze through customs.',
    transport: [
      { type: 'ADO Bus', dest: 'Cancún City', cost: '$4', time: '30 min', note: 'Most reliable budget option' },
      { type: 'ADO Bus', dest: 'Playa del Carmen', cost: '$12', time: '70 min', note: 'Excellent value vs. taxis' },
      { type: 'ADO Bus', dest: 'Tulum', cost: '$16', time: '100 min', note: 'Direct from airport' },
      { type: 'Official Taxi', dest: 'Hotel Zone (Zona Hotelera)', cost: '$25 fixed rate', time: '20 min', note: 'Buy ticket inside from official desk — NOT outside hustlers' },
    ],
    tips: [
      'ADO bus counter is inside the terminal, right after customs — ignore everyone outside.',
      'Get pesos at the HSBC or Banorte ATM inside — not outside the building.',
      'ADO bus from CUN to Playa del Carmen ($12) is the smartest move. A/C, comfortable, on time.',
      'TSA PreCheck doesn\'t apply returning from Mexico — budget extra time for US customs.',
    ],
    terminals: ['Terminal 2 (most US airlines)', 'Terminal 3 (international, newer)', 'Terminal 4 (charter/budget)'],
    customs: 'Push the traffic light button on exit — red means bag inspection, green means you\'re free. Randomized.',
  },

  {
    iata: 'MEX',
    slug: 'mex',
    name: 'Mexico City International Airport (Benito Juárez)',
    city: 'Mexico City',
    country: 'Mexico',
    type: 'international',
    heroImage: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?w=1200&q=80',
    metaTitle: 'Mexico City Airport (MEX) Guide 2026 — Getting In and Around CDMX',
    metaDesc: 'Mexico City airport guide: MEX vs AIFA, how to get to your hotel safely, avoid scams, and navigate one of the world\'s busiest airports.',
    transport: [
      { type: 'Authorized Taxi', dest: 'Roma/Condesa/Polanco', cost: '$15–22', time: '20–40 min', note: 'Buy ticket inside from official desks — NOT street taxis' },
      { type: 'Uber', dest: 'Anywhere in CDMX', cost: '$8–15', time: '20–40 min', note: 'Most reliable — download before you land' },
      { type: 'Metrobús Line 4', dest: 'Downtown', cost: '$0.50', time: '30–50 min', note: 'Requires a rechargeable Metrobús card' },
    ],
    tips: [
      'Uber from MEX is the safest and most transparent transport option.',
      'AIFA (newer airport) is 50km north of the city — check which airport your flight uses.',
      'Terminal 1 and Terminal 2 are NOT connected inside — check your terminal carefully.',
    ],
    terminals: ['Terminal 1 (domestic + some international)', 'Terminal 2 (Aeromexico hub + Skyteam partners)'],
    customs: 'Traffic light system. US citizens clear in separate line. Global Entry eligible.',
  },

  {
    iata: 'MDE',
    slug: 'mde',
    name: 'José María Córdova International Airport (Medellín)',
    city: 'Medellín',
    country: 'Colombia',
    type: 'international',
    heroImage: 'https://images.unsplash.com/photo-1582972236019-ea4af5ffe587?w=1200&q=80',
    metaTitle: 'Medellín Airport (MDE) Guide 2026 — Getting to El Poblado',
    metaDesc: 'Medellín airport (MDE) is 45km from El Poblado. How to get to Medellín cheaply and safely from José María Córdova airport.',
    transport: [
      { type: 'Uber/InDriver', dest: 'El Poblado', cost: '$14–20', time: '50–70 min', note: 'Most recommended — transparent pricing, safe' },
      { type: 'Metered Taxi', dest: 'El Poblado', cost: '$20–28', time: '50–70 min', note: 'Use metered taxis from official stand' },
    ],
    tips: [
      'MDE is in Rionegro, 45km from El Poblado — budget 50–70 minutes to your hotel.',
      'Uber works well from MDE. Book in arrivals, driver meets you outside.',
    ],
    terminals: ['Main Terminal (single terminal)'],
    customs: 'Efficient. Colombia gives US citizens 90 days on arrival. Declare cash over $10,000 USD.',
  },
];

export default airportData;

export const findAirportByIata = (iata) =>
  airportData.find((a) => a.iata === iata.toUpperCase());

export const findAirportBySlug = (slug) =>
  airportData.find((a) => a.slug === slug);

export const usAirports = airportData.filter((a) => a.type === 'us');
export const internationalAirports = airportData.filter((a) => a.type === 'international');

// backward compat alias
export const texasAirports = usAirports;
