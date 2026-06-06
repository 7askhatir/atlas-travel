/******************************************
 * Lang — Multilingual Engine (EN / FR)
 ******************************************/
(function () {
  'use strict';

  const KEY = 'atlas_lang';

  const dict = {

    /* ====== NAVBAR ====== */
    'nav.brand': { en: 'ATLAS TRAVEL', fr: 'ATLAS TRAVEL' },
    'nav.brand.transport': { en: 'TOREST', fr: 'TOREST' },
    'nav.home': { en: 'Home', fr: 'Accueil' },
    'nav.transport': { en: 'Transport', fr: 'Transport' },
    'nav.destinations': { en: 'Destinations', fr: 'Destinations' },
    'nav.reviews': { en: 'Reviews', fr: 'Avis' },
    'nav.faq': { en: 'FAQ', fr: 'FAQ' },
    'nav.contact': { en: 'Contact', fr: 'Contact' },
    'nav.book': { en: 'Book Now', fr: 'Réserver' },
    'nav.lang': { en: 'Language', fr: 'Langue' },
    'nav.toggle': { en: 'Toggle menu', fr: 'Menu' },

    /* ====== HERO (index) ====== */
    'hero.badge': { en: 'Your Morocco, Perfectly Planned', fr: 'Votre Maroc, Parfaitement Planifié' },
    'hero.title': { en: 'Discover Morocco<br>in <span>Style & Comfort</span>', fr: 'Découvrez le Maroc<br>avec <span>Style & Confort</span>' },
    'hero.text': { en: 'Private transfers, desert adventures & cultural experiences — all in one place. Professional drivers, fixed prices, 24/7 support.', fr: 'Transferts privés, aventures dans le désert et expériences culturelles — tout en un seul endroit. Chauffeurs professionnels, prix fixes, support 24/7.' },
    'hero.cta': { en: 'Book Transport', fr: 'Réserver Transport' },
    'hero.stat.travelers': { en: 'Happy Travelers', fr: 'Voyageurs Heureux' },
    'hero.stat.support': { en: 'Support', fr: 'Support' },
    'hero.stat.rating': { en: 'Average Rating', fr: 'Note Moyenne' },

    /* ====== HERO (transport) ====== */
    'hero.transport.badge': { en: 'Since 2018 — Premium Transport Service', fr: 'Depuis 2018 — Service de Transport Premium' },
    'hero.transport.title': { en: 'Private Transport<br>in <span>Morocco</span>', fr: 'Transport Privé<br>au <span>Maroc</span>' },
    'hero.transport.text': { en: 'Experience comfort, safety, and reliability with our 24/7 private transport service. Professional drivers, premium vehicles, and tailor-made journeys across Morocco.', fr: 'Découvrez confort, sécurité et fiabilité avec notre service de transport privé 24/7. Chauffeurs professionnels, véhicules premium et voyages sur mesure à travers le Maroc.' },
    'hero.transport.cta': { en: 'Book a Ride', fr: 'Réserver un Trajet' },
    'hero.transport.whatsapp': { en: 'WhatsApp', fr: 'WhatsApp' },
    'hero.transport.clients': { en: 'Happy Clients', fr: 'Clients Satisfaits' },
    'hero.transport.ontime': { en: 'On Time', fr: 'À l\'Heure' },

    /* ====== SEARCH BAR ====== */
    'search.tab.transport': { en: 'Transport', fr: 'Transport' },
    'search.from': { en: 'From', fr: 'De' },
    'search.to': { en: 'To', fr: 'À' },
    'search.date': { en: 'Date', fr: 'Date' },
    'search.passengers': { en: 'Passengers', fr: 'Passagers' },
    'search.btn': { en: 'Search', fr: 'Rechercher' },
    'search.placeholder.pickup': { en: 'Airport, hotel...', fr: 'Aéroport, hôtel...' },
    'search.placeholder.dest': { en: 'City or landmark', fr: 'Ville ou lieu' },

    /* ====== BOOKING FLOW CTA ====== */
    'flowcta.title': { en: 'Book Your Morocco Trip', fr: 'Réservez Votre Voyage au Maroc' },
    'flowcta.text': { en: 'Private transfers, desert adventures & cultural experiences — book everything in one place.', fr: 'Transferts privés, aventures dans le désert et expériences culturelles — réservez tout au même endroit.' },
    'flowcta.btn': { en: 'Start Booking', fr: 'Commencer la Réservation' },

    /* ====== TRANSPORT SECTION ====== */
    'transport.label': { en: 'Private Transport', fr: 'Transport Privé' },
    'transport.title': { en: 'Travel Morocco in Comfort', fr: 'Voyagez au Maroc en Confort' },
    'transport.subtitle': { en: 'Professional drivers. Fixed prices. Zero stress. From airport pickup to cross-country journeys.', fr: 'Chauffeurs professionnels. Prix fixes. Zéro stress. De la prise en charge aéroport aux voyages inter-villes.' },

    /* ====== FEATURES ====== */
    'feature.meet': { en: 'Meet & Greet', fr: 'Accueil Personnalisé' },
    'feature.wait': { en: '45 min Free Wait', fr: '45 min d\'Attente Gratuite' },
    'feature.flight': { en: 'Flight Tracking', fr: 'Suivi de Vol' },
    'feature.seats': { en: 'Child Seats Free', fr: 'Sièges Enfants Gratuits' },
    'feature.wifi': { en: 'Free WiFi', fr: 'WiFi Gratuit' },
    'feature.prices': { en: 'Fixed Prices', fr: 'Prix Fixes' },

    /* ====== VEHICLE CARDS (index) ====== */
    'vehicle.economy.badge': { en: 'Best Value', fr: 'Meilleur Rapport' },
    'vehicle.economy.name': { en: 'Economy Sedan', fr: 'Berline Économique' },
    'vehicle.economy.class': { en: 'Comfort Class', fr: 'Classe Confort' },
    'vehicle.economy.desc': { en: 'Perfect for solo travelers or couples. Air-conditioned, clean, and reliable.', fr: 'Parfait pour voyageurs seuls ou couples. Climatisé, propre et fiable.' },
    'vehicle.economy.features': { en: '1–3 pax • 2 bags • WiFi • A/C', fr: '1–3 pers • 2 bagages • WiFi • Clim' },
    'vehicle.premium.badge': { en: '⭐ Most Popular', fr: '⭐ Le Plus Populaire' },
    'vehicle.premium.name': { en: 'Premium Sedan', fr: 'Berline Premium' },
    'vehicle.premium.class': { en: 'Business Class', fr: 'Classe Affaires' },
    'vehicle.premium.desc': { en: 'Extra legroom, premium interior, and enhanced comfort for long journeys.', fr: 'Espace pour les jambes supplémentaire, intérieur premium et confort accru pour les longs trajets.' },
    'vehicle.premium.features': { en: '1–4 pax • 3 bags • 5G WiFi • A/C', fr: '1–4 pers • 3 bagages • 5G WiFi • Clim' },
    'vehicle.suv.name': { en: 'SUV / 4x4', fr: 'SUV / 4x4' },
    'vehicle.suv.class': { en: 'Off-Road Ready', fr: 'Prêt pour le Tout-Terrain' },
    'vehicle.suv.desc': { en: 'Rugged and spacious. Ideal for mountain roads, desert terrain, and group travel.', fr: 'Robuste et spacieux. Idéal pour les routes de montagne, le désert et les voyages en groupe.' },
    'vehicle.suv.features': { en: '1–5 pax • 4 bags • WiFi • A/C', fr: '1–5 pers • 4 bagages • WiFi • Clim' },
    'vehicle.minivan.badge': { en: 'Group', fr: 'Groupe' },
    'vehicle.minivan.name': { en: 'Minivan', fr: 'Minivan' },
    'vehicle.minivan.class': { en: 'Family & Group', fr: 'Famille & Groupe' },
    'vehicle.minivan.desc': { en: 'Spacious 8-seater with generous luggage room. Perfect for families and groups.', fr: 'Spacieux 8 places avec généreux espace bagages. Parfait pour les familles et les groupes.' },
    'vehicle.minivan.features': { en: '1–8 pax • 6 bags • WiFi • A/C', fr: '1–8 pers • 6 bagages • WiFi • Clim' },
    'vehicle.luxury.badge': { en: 'VIP', fr: 'VIP' },
    'vehicle.luxury.name': { en: 'Luxury Mercedes', fr: 'Mercedes de Luxe' },
    'vehicle.luxury.class': { en: 'VIP Experience', fr: 'Expérience VIP' },
    'vehicle.luxury.desc': { en: 'Top-of-the-line luxury sedan with leather interior, privacy glass, and premium refreshments.', fr: 'Berline de luxe haut de gamme avec intérieur cuir, vitres teintées et rafraîchissements premium.' },
    'vehicle.luxury.features': { en: '1–4 pax • 3 bags • 5G WiFi • Refreshments', fr: '1–4 pers • 3 bagages • 5G WiFi • Rafraîchissements' },
    'vehicle.price.suffix': { en: '/ trip', fr: '/ trajet' },
    'vehicle.book': { en: 'Book', fr: 'Réserver' },

    /* ====== VEHICLE CARDS (transport page) ====== */
    'vehicle.transport.standard.badge': { en: 'Most Popular', fr: 'Le Plus Populaire' },
    'vehicle.transport.standard.name': { en: 'Standard Car', fr: 'Voiture Standard' },
    'vehicle.transport.suv.name': { en: 'SUV / 4x4', fr: 'SUV / 4x4' },
    'vehicle.transport.minivan.name': { en: 'Minivan', fr: 'Minivan' },
    'vehicle.transport.luxury.name': { en: 'Luxury Car', fr: 'Voiture de Luxe' },
    'vehicle.transport.standard.desc': { en: 'Comfortable sedan ideal for city transfers and short trips. Air-conditioned with ample luggage space.', fr: 'Berline confortable idéale pour les transferts en ville et les courts trajets. Climatisée avec grand coffre.' },
    'vehicle.transport.standard.features': { en: 'Up to 3 • 2 bags • WiFi • A/C', fr: 'Jusqu\'à 3 • 2 bagages • WiFi • Clim' },
    'vehicle.transport.suv.badge': { en: 'Popular', fr: 'Populaire' },
    'vehicle.transport.suv.desc': { en: 'Powerful 4x4 perfect for mountain roads and desert terrain. Extra ground clearance and rugged reliability.', fr: '4x4 puissant parfait pour les routes de montagne et le désert. Garde au sol supplémentaire et fiabilité robuste.' },
    'vehicle.transport.suv.features': { en: 'Up to 5 • 4 bags • WiFi • A/C', fr: 'Jusqu\'à 5 • 4 bagages • WiFi • Clim' },
    'vehicle.transport.minivan.features': { en: 'Up to 7 • 6 bags • WiFi • A/C', fr: 'Jusqu\'à 7 • 6 bagages • WiFi • Clim' },
    'vehicle.transport.minivan.desc': { en: 'Spacious minivan for groups and families. Maximum comfort with generous seating and cargo capacity.', fr: 'Minivan spacieux pour groupes et familles. Confort maximal avec sièges généreux et capacité de chargement.' },
    'vehicle.transport.luxury.badge': { en: 'Premium', fr: 'Premium' },
    'vehicle.transport.luxury.desc': { en: 'Top-of-the-line luxury sedan for VIP experiences. Leather interior, premium sound, and privacy glass.', fr: 'Berline de luxe haut de gamme pour expériences VIP. Intérieur cuir, son premium et vitres teintées.' },
    'vehicle.transport.luxury.features': { en: 'Up to 3 • 2 bags • 5G WiFi • Refreshments', fr: 'Jusqu\'à 3 • 2 bagages • 5G WiFi • Rafraîchissements' },

    /* ====== VEHICLE FLEET SECTION (transport page) ====== */
    'fleet.label': { en: 'Our Fleet', fr: 'Notre Flotte' },
    'fleet.title': { en: 'Choose Your Perfect Ride', fr: 'Choisissez Votre Véhicule Idéal' },
    'fleet.subtitle': { en: 'From comfortable sedans to luxurious VIP vehicles — every journey deserves the right car.', fr: 'Des berlines confortables aux véhicules VIP de luxe — chaque voyage mérite la bonne voiture.' },

    /* ====== FLOW (transport page) ====== */
    'flow.title': { en: 'Book Your Journey', fr: 'Réservez Votre Trajet' },
    'flow.step1': { en: 'Details', fr: 'Détails' },
    'flow.step2': { en: 'Summary', fr: 'Récapitulatif' },
    'flow.step3': { en: 'Confirm', fr: 'Confirmer' },
    'flow.step1.text': { en: 'Enter your details and trip info.', fr: 'Entrez vos coordonnées et les informations du voyage.' },
    'flow.step2.text': { en: 'Review your booking details before confirming.', fr: 'Vérifiez les détails de votre réservation avant de confirmer.' },
    'flow.step3.text': { en: 'Almost done! Choose how you\'d like to confirm your booking.', fr: 'Presque terminé ! Choisissez comment confirmer votre réservation.' },
    'flow.back': { en: 'Back', fr: 'Retour' },
    'flow.next': { en: 'Next Step', fr: 'Étape Suivante' },
    'flow.confirm': { en: 'Confirm Booking', fr: 'Confirmer la Réservation' },
    'flow.whatsapp.card.title': { en: 'Book via WhatsApp', fr: 'Réserver via WhatsApp' },
    'flow.whatsapp.card.desc': { en: 'Quickest way — get instant confirmation', fr: 'Le plus rapide — confirmation instantanée' },
    'flow.callback.card.title': { en: 'Request a Callback', fr: 'Demander un Rappel' },
    'flow.callback.card.desc': { en: 'We\'ll call you within 5 minutes', fr: 'Nous vous rappelons sous 5 minutes' },
    'flow.whatsapp.btn': { en: 'Confirm via WhatsApp', fr: 'Confirmer via WhatsApp' },

    /* ====== FLOW FORM LABELS ====== */
    'flow.label.name': { en: 'Full Name', fr: 'Nom Complet' },
    'flow.label.phone': { en: 'Phone Number', fr: 'Numéro de Téléphone' },
    'flow.label.email': { en: 'Email', fr: 'Email' },
    'flow.label.pickup': { en: 'Pickup Location', fr: 'Lieu de Prise en Charge' },
    'flow.label.dest': { en: 'Destination', fr: 'Destination' },
    'flow.label.date': { en: 'Date', fr: 'Date' },
    'flow.label.time': { en: 'Time', fr: 'Heure' },
    'flow.label.passengers': { en: 'Passengers', fr: 'Passagers' },
    'flow.label.vehicle': { en: 'Vehicle Type', fr: 'Type de Véhicule' },
    'flow.submit': { en: 'Book Now', fr: 'Réserver Maintenant' },
    'flow.pickup': { en: 'Pickup Location', fr: 'Lieu de Prise en Charge' },
    'flow.destination': { en: 'Destination', fr: 'Destination' },
    'flow.datetime': { en: 'Date & Time', fr: 'Date & Heure' },
    'flow.passengers': { en: 'Passengers', fr: 'Passagers' },
    'flow.vehicle': { en: 'Vehicle Type', fr: 'Type de Véhicule' },

    /* ====== FLOW PLACEHOLDERS ====== */
    'flow.placeholder.name': { en: 'Your full name', fr: 'Votre nom complet' },
    'flow.placeholder.pickup': { en: 'Airport, hotel, or address', fr: 'Aéroport, hôtel ou adresse' },
    'flow.placeholder.dest': { en: 'City or landmark', fr: 'Ville ou lieu' },

    /* ====== FLOW VEHICLE OPTIONS ====== */
    'flow.vehicle.standard': { en: 'Standard', fr: 'Standard' },
    'flow.vehicle.suv': { en: 'SUV / 4x4', fr: 'SUV / 4x4' },
    'flow.vehicle.minivan': { en: 'Minivan', fr: 'Minivan' },
    'flow.vehicle.luxury': { en: 'Luxury', fr: 'Luxe' },
    'flow.vehicle.price.from': { en: 'from €', fr: 'à partir de €' },

    /* ====== FLOW SUMMARY LABELS ====== */
    'flow.summary.name': { en: 'Name', fr: 'Nom' },
    'flow.summary.phone': { en: 'Phone', fr: 'Téléphone' },
    'flow.summary.email': { en: 'Email', fr: 'Email' },
    'flow.summary.pickup': { en: 'Pickup', fr: 'Prise en Charge' },
    'flow.summary.dest': { en: 'Destination', fr: 'Destination' },
    'flow.summary.date': { en: 'Date', fr: 'Date' },
    'flow.summary.time': { en: 'Time', fr: 'Heure' },
    'flow.summary.passengers': { en: 'Passengers', fr: 'Passagers' },
    'flow.summary.vehicle': { en: 'Vehicle', fr: 'Véhicule' },
    'flow.summary.total': { en: 'Estimated Total', fr: 'Total Estimé' },

    /* ====== POPULAR ROUTES ====== */
    'routes.title': { en: 'Popular Routes', fr: 'Itinéraires Populaires' },
    'route.airport.city': { en: 'Marrakech Airport → City Center', fr: 'Aéroport Marrakech → Centre-Ville' },
    'route.marrakech.essaouira': { en: 'Marrakech → Essaouira', fr: 'Marrakech → Essaouira' },
    'route.marrakech.agadir': { en: 'Marrakech → Agadir', fr: 'Marrakech → Agadir' },
    'route.marrakech.merzouga': { en: 'Marrakech → Merzouga', fr: 'Marrakech → Merzouga' },
    'route.marrakech.casablanca': { en: 'Marrakech → Casablanca', fr: 'Marrakech → Casablanca' },
    'route.marrakech.atlas': { en: 'Marrakech → Atlas Mtns (Imlil)', fr: 'Marrakech → Monts Atlas (Imlil)' },
    'route.marrakech.fes': { en: 'Marrakech → Fes', fr: 'Marrakech → Fès' },
    'route.marrakech.chefchaouen': { en: 'Marrakech → Chefchaouen', fr: 'Marrakech → Chefchaouen' },
    'route.meta.airport.city': { en: '30 min • 15 km', fr: '30 min • 15 km' },
    'route.meta.marrakech.essaouira': { en: '2.5h • 175 km', fr: '2.5h • 175 km' },
    'route.meta.marrakech.agadir': { en: '3h • 250 km', fr: '3h • 250 km' },
    'route.meta.marrakech.merzouga': { en: '8h • 560 km', fr: '8h • 560 km' },
    'route.meta.marrakech.casablanca': { en: '3.5h • 240 km', fr: '3.5h • 240 km' },
    'route.meta.marrakech.atlas': { en: '1.5h • 65 km', fr: '1.5h • 65 km' },
    'route.meta.marrakech.fes': { en: '6h • 530 km', fr: '6h • 530 km' },
    'route.meta.marrakech.chefchaouen': { en: '5h • 420 km', fr: '5h • 420 km' },
    'route.airportCity': { en: 'Marrakech Airport → City Center', fr: 'Aéroport Marrakech → Centre-Ville' },
    'route.marrakechEssaouira': { en: 'Marrakech → Essaouira', fr: 'Marrakech → Essaouira' },
    'route.marrakechAgadir': { en: 'Marrakech → Agadir', fr: 'Marrakech → Agadir' },
    'route.marrakechMerzouga': { en: 'Marrakech → Merzouga', fr: 'Marrakech → Merzouga' },
    'route.marrakechCasablanca': { en: 'Marrakech → Casablanca', fr: 'Marrakech → Casablanca' },
    'route.marrakechAtlas': { en: 'Marrakech → Atlas Mtns (Imlil)', fr: 'Marrakech → Monts Atlas (Imlil)' },
    'route.marrakechFes': { en: 'Marrakech → Fes', fr: 'Marrakech → Fès' },
    'route.marrakechChefchaouen': { en: 'Marrakech → Chefchaouen', fr: 'Marrakech → Chefchaouen' },
    'route.meta.airportCity': { en: '30 min • 15 km', fr: '30 min • 15 km' },
    'route.meta.essaouira': { en: '2.5h • 175 km', fr: '2.5h • 175 km' },
    'route.meta.agadir': { en: '3h • 250 km', fr: '3h • 250 km' },
    'route.meta.merzouga': { en: '8h • 560 km', fr: '8h • 560 km' },
    'route.meta.casablanca': { en: '3.5h • 240 km', fr: '3.5h • 240 km' },
    'route.meta.atlas': { en: '1.5h • 65 km', fr: '1.5h • 65 km' },
    'route.meta.fes': { en: '6h • 530 km', fr: '6h • 530 km' },
    'route.meta.chefchaouen': { en: '5h • 420 km', fr: '5h • 420 km' },

    /* ====== DESTINATIONS ====== */
    'dest.label': { en: 'Where to Go', fr: 'Où Aller' },
    'dest.title': { en: 'Explore Morocco\'s Finest Destinations', fr: 'Découvrez les Plus Belles Destinations du Maroc' },
    'dest.subtitle': { en: 'From vibrant medinas to the silent Sahara — discover the places that make Morocco unforgettable.', fr: 'Des médinas animées au Sahara silencieux — découvrez les lieux qui rendent le Maroc inoubliable.' },

    /* Dest cards (index) */
    'dest.marrakech': { en: 'Marrakech', fr: 'Marrakech' },
    'dest.marrakech.desc': { en: 'The Red City — labyrinthine souks, palace gardens, and the legendary Djemaa el-Fna square.', fr: 'La Ville Rouge — souks labyrinthiques, jardins de palais et l\'emblématique place Jemaa el-Fna.' },
    'dest.essaouira': { en: 'Essaouira', fr: 'Essaouira' },
    'dest.essaouira.desc': { en: 'UNESCO-listed coastal gem with blue-white streets, Portuguese ramparts, and world-class windsurfing.', fr: 'Joyau côtier classé à l\'UNESCO avec ruelles bleues et blanches, remparts portugais et planche à voile de classe mondiale.' },
    'dest.atlas': { en: 'Atlas Mountains', fr: 'Montagnes de l\'Atlas' },
    'dest.atlas.desc': { en: 'Berber villages, ancient kasbahs, and North Africa\'s highest peak at 4,167m.', fr: 'Villages berbères, kasbahs anciennes et le plus haut sommet d\'Afrique du Nord à 4 167 m.' },
    'dest.merzouga': { en: 'Merzouga & Sahara', fr: 'Merzouga & Sahara' },
    'dest.merzouga.desc': { en: 'Sea of golden dunes at Erg Chebbi. Ride camels, sleep under stars in luxury desert camps.', fr: 'Mer de dunes dorées à Erg Chebbi. Balade à chameau, nuit sous les étoiles dans des camps de luxe.' },
    'dest.agadir': { en: 'Agadir', fr: 'Agadir' },
    'dest.agadir.desc': { en: '300 days of sunshine, golden beaches, fresh seafood, and a vibrant promenade.', fr: '300 jours de soleil, plages dorées, fruits de mer frais et une promenade animée.' },
    'dest.fes': { en: 'Fes', fr: 'Fès' },
    'dest.fes.desc': { en: 'The spiritual heart of Morocco — ancient tanneries, maze-like medina, and the world\'s oldest university.', fr: 'Le cœur spirituel du Maroc — tanneries anciennes, médina labyrinthique et la plus ancienne université du monde.' },
    'dest.chefchaouen': { en: 'Chefchaouen', fr: 'Chefchaouen' },
    'dest.chefchaouen.desc': { en: 'The Blue Pearl — cascading blue-washed streets in the Rif Mountains, Morocco\'s most photogenic town.', fr: 'La Perle Bleue — ruelles bleues en cascade dans les montagnes du Rif, la ville la plus photogénique du Maroc.' },
    'dest.ouarzazate': { en: 'Ouarzazate', fr: 'Ouarzazate' },
    'dest.ouarzazate.desc': { en: 'The Hollywood of Africa — desert kasbahs, film studios, and the gateway to the Draa Valley.', fr: 'Le Hollywood de l\'Afrique — kasbahs désertiques, studios de cinéma et porte d\'entrée de la vallée du Draa.' },
    'dest.marrakech.name': { en: 'Marrakech', fr: 'Marrakech' },
    'dest.essaouira.name': { en: 'Essaouira', fr: 'Essaouira' },
    'dest.atlas.name': { en: 'Atlas Mountains', fr: 'Montagnes de l\'Atlas' },
    'dest.merzouga.name': { en: 'Merzouga & Sahara', fr: 'Merzouga & Sahara' },
    'dest.agadir.name': { en: 'Agadir', fr: 'Agadir' },
    'dest.fes.name': { en: 'Fes', fr: 'Fès' },
    'dest.chefchaouen.name': { en: 'Chefchaouen', fr: 'Chefchaouen' },
    'dest.ouarzazate.name': { en: 'Ouarzazate', fr: 'Ouarzazate' },
    'dest.tag.city': { en: 'City Tours', fr: 'Visites de Ville' },
    'dest.tag.food': { en: 'Food Tours', fr: 'Visites Gastronomiques' },
    'dest.tag.transfers': { en: 'Transfers', fr: 'Transferts' },
    'dest.tag.daytrips': { en: 'Day Trips', fr: 'Excursions d\'un Jour' },
    'dest.tag.coastal': { en: 'Coastal Walks', fr: 'Promenades Côtières' },
    'dest.tag.trekking': { en: 'Trekking', fr: 'Randonnée' },
    'dest.tag.mule': { en: 'Mule Tours', fr: 'Randonnées à Mulet' },
    'dest.tag.desert': { en: 'Desert Safari', fr: 'Safari dans le Désert' },
    'dest.tag.camp': { en: 'Overnight Camp', fr: 'Campement Nocturne' },
    'dest.tag.4x4': { en: '4x4 Tours', fr: 'Tours en 4x4' },
    'dest.tag.beach': { en: 'Beach Trips', fr: 'Voyages à la Plage' },
    'dest.tag.sports': { en: 'Water Sports', fr: 'Sports Nautiques' },
    'dest.tag.cultural': { en: 'Cultural Walks', fr: 'Promenades Culturelles' },
    'dest.tag.photo': { en: 'Photography', fr: 'Photographie' },
    'dest.tag.film': { en: 'Film Tours', fr: 'Tours Cinématographiques' },
    'dest.tag.deserttrips': { en: 'Desert Trips', fr: 'Voyages dans le Désert' },
    'dest.tag.kasbah': { en: 'Kasbah Visits', fr: 'Visites de Kasbah' },
    'dest.tag.walking': { en: 'Walking Tours', fr: 'Visites à Pied' },

    /* Per-city tags */
    'dest.marrakech.tag.city-tours': { en: 'City Tours', fr: 'Visites de Ville' },
    'dest.marrakech.tag.food-tours': { en: 'Food Tours', fr: 'Visites Gastronomiques' },
    'dest.marrakech.tag.transfers': { en: 'Transfers', fr: 'Transferts' },
    'dest.essaouira.tag.day-trips': { en: 'Day Trips', fr: 'Excursions d\'un Jour' },
    'dest.essaouira.tag.transfers': { en: 'Transfers', fr: 'Transferts' },
    'dest.essaouira.tag.coastal-walks': { en: 'Coastal Walks', fr: 'Promenades Côtières' },
    'dest.atlas.tag.trekking': { en: 'Trekking', fr: 'Randonnée' },
    'dest.atlas.tag.day-trips': { en: 'Day Trips', fr: 'Excursions d\'un Jour' },
    'dest.atlas.tag.mule-tours': { en: 'Mule Tours', fr: 'Randonnées à Mulet' },
    'dest.merzouga.tag.desert-safari': { en: 'Desert Safari', fr: 'Safari dans le Désert' },
    'dest.merzouga.tag.overnight-camp': { en: 'Overnight Camp', fr: 'Campement Nocturne' },
    'dest.merzouga.tag.4x4-tours': { en: '4x4 Tours', fr: 'Tours en 4x4' },
    'dest.agadir.tag.beach-trips': { en: 'Beach Trips', fr: 'Voyages à la Plage' },
    'dest.agadir.tag.transfers': { en: 'Transfers', fr: 'Transferts' },
    'dest.agadir.tag.water-sports': { en: 'Water Sports', fr: 'Sports Nautiques' },
    'dest.fes.tag.city-tours': { en: 'City Tours', fr: 'Visites de Ville' },
    'dest.fes.tag.cultural-walks': { en: 'Cultural Walks', fr: 'Promenades Culturelles' },
    'dest.fes.tag.transfers': { en: 'Transfers', fr: 'Transferts' },
    'dest.chefchaouen.tag.walking-tours': { en: 'Walking Tours', fr: 'Visites à Pied' },
    'dest.chefchaouen.tag.photography': { en: 'Photography', fr: 'Photographie' },
    'dest.chefchaouen.tag.transfers': { en: 'Transfers', fr: 'Transferts' },
    'dest.ouarzazate.tag.film-tours': { en: 'Film Tours', fr: 'Tours Cinématographiques' },
    'dest.ouarzazate.tag.desert-trips': { en: 'Desert Trips', fr: 'Voyages dans le Désert' },
    'dest.ouarzazate.tag.kasbah-visits': { en: 'Kasbah Visits', fr: 'Visites de Kasbah' },

    /* Dest cards (transport page) */
    'dest.transport.marrakech.desc': { en: 'The Red City — vibrant souks, palaces, and gardens at the foot of the Atlas Mountains.', fr: 'La Ville Rouge — souks animés, palais et jardins au pied des montagnes de l\'Atlas.' },
    'dest.transport.essaouira.desc': { en: 'Coastal breeze, blue boats, and fresh seafood in this UNESCO-listed port city.', fr: 'Brise côtière, bateaux bleus et fruits de mer frais dans cette ville portuaire classée à l\'UNESCO.' },
    'dest.transport.merzouga': { en: 'Merzouga', fr: 'Merzouga' },
    'dest.transport.merzouga.desc': { en: 'The gateway to the Sahara — witness the largest sand dunes in Morocco.', fr: 'La porte d\'entrée du Sahara — admirez les plus grandes dunes de sable du Maroc.' },
    'dest.transport.atlas.desc': { en: 'Hike through valleys, waterfalls, and traditional Berber villages in the High Atlas.', fr: 'Randonnée à travers vallées, cascades et villages berbères traditionnels dans le Haut Atlas.' },
    'dest.transport.agadir.desc': { en: 'Sun, surf, and golden beaches — the perfect coastal escape on the Atlantic.', fr: 'Soleil, surf et plages dorées — l\'escapade côtière parfaite sur l\'Atlantique.' },
    'dest.tours.count12': { en: '12 Available Tours', fr: '12 Visites Disponibles' },
    'dest.tours.count8': { en: '8 Available Tours', fr: '8 Visites Disponibles' },
    'dest.tours.count6': { en: '6 Available Tours', fr: '6 Visites Disponibles' },
    'dest.tours.count10': { en: '10 Available Tours', fr: '10 Visites Disponibles' },
    'dest.tours.count7': { en: '7 Available Tours', fr: '7 Visites Disponibles' },

    /* ====== REVIEWS ====== */
    'reviews.label': { en: 'Testimonials', fr: 'Témoignages' },
    'reviews.section.label': { en: 'Testimonials', fr: 'Témoignages' },
    'reviews.title': { en: 'What Travelers Say About Us', fr: 'Ce Que Disent Les Voyageurs' },
    'reviews.title.transport': { en: 'What Travelers Say', fr: 'Avis des Voyageurs' },
    'reviews.subtitle': { en: 'Over 5,000 happy guests from 40+ countries trust ATLAS TRAVEL.', fr: 'Plus de 5 000 clients heureux de plus de 40 pays font confiance à ATLAS TRAVEL.' },
    'reviews.subtitle.transport': { en: 'Real reviews from real guests who experienced Morocco with us.', fr: 'De vrais avis de vrais clients qui ont découvert le Maroc avec nous.' },
    'reviews.summary': { en: '4.9 / 5 average rating from 500+ verified reviews', fr: '4.9 / 5 note moyenne sur plus de 500 avis vérifiés' },

    /* Review 1 */
    'review1.text': { en: '"Absolutely breathtaking. Our driver was professional and friendly, the desert camp was beyond what we expected. The camel ride at sunset was the highlight of our entire trip to Morocco. Will 100% book again!"', fr: '"Absolument à couper le souffle. Notre chauffeur était professionnel et sympathique, le camp dans le désert a dépassé nos attentes. La balade à chameau au coucher du soleil était le point culminant de notre voyage au Maroc. Je réserverai à 100% !"' },
    'review1.author': { en: 'Sarah M.', fr: 'Sarah M.' },
    'review1.role': { en: 'Sahara Desert Overnight — 🇬🇧 UK', fr: 'Nuit dans le Désert du Sahara — 🇬🇧 RU' },
    /* Review 2 */
    'review2.text': { en: '"Perfect service from start to finish. The driver was waiting at arrivals with a name sign, helped with our luggage, and the car was spotless. Exactly what you need after a long flight."', fr: '"Service parfait du début à la fin. Le chauffeur attendait à l\'arrivée avec une pancarte, a aidé avec nos bagages, et la voiture était impeccable. Exactement ce dont vous avez besoin après un long vol."' },
    'review2.author': { en: 'Jean-Pierre L.', fr: 'Jean-Pierre L.' },
    'review2.role': { en: 'Marrakech Airport Transfer — 🇫🇷 France', fr: 'Transfert Aéroport Marrakech — 🇫🇷 France' },
    /* Review 3 */
    'review3.text': { en: '"The guide was incredible — so knowledgeable about Berber culture. Lunch at the local family home was a magical experience. Highly recommend for anyone who wants to go beyond the tourist trail."', fr: '"Le guide était incroyable — tellement connaisseur de la culture berbère. Le déjeuner chez une famille locale était une expérience magique. Je recommande vivement à ceux qui veulent sortir des sentiers battus."' },
    'review3.author': { en: 'Emma & Tom', fr: 'Emma & Tom' },
    'review3.role': { en: 'Atlas Mountains Trek — 🇩🇪 Germany', fr: 'Randonnée dans l\'Atlas — 🇩🇪 Allemagne' },
    /* Review 4 */
    'review4.text': { en: '"We booked a private car to Essaouira and it was perfect. Clean vehicle, flexible timing, driver gave us great tips on where to eat. Price was very reasonable. Book with confidence!"', fr: '"Nous avons réservé une voiture privée pour Essaouira et c\'était parfait. Véhicule propre, horaires flexibles, le chauffeur nous a donné d\'excellents conseils pour manger. Prix très raisonnable. Réservez en toute confiance !"' },
    'review4.author': { en: 'Carlos R.', fr: 'Carlos R.' },
    'review4.role': { en: 'Essaouira Day Trip — 🇪🇸 Spain', fr: 'Excursion d\'un Jour à Essaouira — 🇪🇸 Espagne' },
    /* Review 5 */
    'review5.text': { en: '"As someone who loves food, this tour was a dream. So many flavors, hidden spots the tourists never find, and our guide spoke Arabic which made everything extra special."', fr: '"En tant qu\'amateur de gastronomie, cette visite était un rêve. Tant de saveurs, des endroits cachés que les touristes ne trouvent jamais, et notre guide parlait arabe ce qui rendait tout encore plus spécial."' },
    'review5.author': { en: 'Aisha K.', fr: 'Aisha K.' },
    'review5.role': { en: 'Marrakech Food Tour — 🇦🇪 UAE', fr: 'Visite Gastronomique de Marrakech — 🇦🇪 ÉAU' },
    'reviews.card1.text': { en: '"Absolutely breathtaking. Our driver was professional and friendly, the desert camp was beyond what we expected. The camel ride at sunset was the highlight of our entire trip to Morocco. Will 100% book again!"', fr: '"Absolument à couper le souffle. Notre chauffeur était professionnel et sympathique, le camp dans le désert a dépassé nos attentes. La balade à chameau au coucher du soleil était le point culminant de notre voyage au Maroc. Je réserverai à 100% !"' },
    'reviews.card1.name': { en: 'Sarah M.', fr: 'Sarah M.' },
    'reviews.card1.role': { en: 'Sahara Desert Overnight — 🇬🇧 UK', fr: 'Nuit dans le Désert du Sahara — 🇬🇧 RU' },
    'reviews.card2.text': { en: '"Perfect service from start to finish. The driver was waiting at arrivals with a name sign, helped with our luggage, and the car was spotless. Exactly what you need after a long flight."', fr: '"Service parfait du début à la fin. Le chauffeur attendait à l\'arrivée avec une pancarte, a aidé avec nos bagages, et la voiture était impeccable. Exactement ce dont vous avez besoin après un long vol."' },
    'reviews.card2.name': { en: 'Jean-Pierre L.', fr: 'Jean-Pierre L.' },
    'reviews.card2.role': { en: 'Marrakech Airport Transfer — 🇫🇷 France', fr: 'Transfert Aéroport Marrakech — 🇫🇷 France' },
    'reviews.card3.text': { en: '"The guide was incredible — so knowledgeable about Berber culture. Lunch at the local family home was a magical experience. Highly recommend for anyone who wants to go beyond the tourist trail."', fr: '"Le guide était incroyable — tellement connaisseur de la culture berbère. Le déjeuner chez une famille locale était une expérience magique. Je recommande vivement à ceux qui veulent sortir des sentiers battus."' },
    'reviews.card3.name': { en: 'Emma & Tom', fr: 'Emma & Tom' },
    'reviews.card3.role': { en: 'Atlas Mountains Trek — 🇩🇪 Germany', fr: 'Randonnée dans l\'Atlas — 🇩🇪 Allemagne' },
    'reviews.card4.text': { en: '"We booked a private car to Essaouira and it was perfect. Clean vehicle, flexible timing, driver gave us great tips on where to eat. Price was very reasonable. Book with confidence!"', fr: '"Nous avons réservé une voiture privée pour Essaouira et c\'était parfait. Véhicule propre, horaires flexibles, le chauffeur nous a donné d\'excellents conseils pour manger. Prix très raisonnable. Réservez en toute confiance !"' },
    'reviews.card4.name': { en: 'Carlos R.', fr: 'Carlos R.' },
    'reviews.card4.role': { en: 'Essaouira Day Trip — 🇪🇸 Spain', fr: 'Excursion d\'un Jour à Essaouira — 🇪🇸 Espagne' },
    'reviews.card5.text': { en: '"As someone who loves food, this tour was a dream. So many flavors, hidden spots the tourists never find, and our guide spoke Arabic which made everything extra special."', fr: '"En tant qu\'amateur de gastronomie, cette visite était un rêve. Tant de saveurs, des endroits cachés que les touristes ne trouvent jamais, et notre guide parlait arabe ce qui rendait tout encore plus spécial."' },
    'reviews.card5.name': { en: 'Aisha K.', fr: 'Aisha K.' },
    'reviews.card5.role': { en: 'Marrakech Food Tour — 🇦🇪 UAE', fr: 'Visite Gastronomique de Marrakech — 🇦🇪 ÉAU' },

    /* Reviews (transport page) */
    'review.transport1.text': { en: '"Absolutely fantastic service! Our driver was punctual, professional, and incredibly kind. The SUV was spotless and comfortable. Made our trip to Marrakech unforgettable."', fr: '"Service absolument fantastique ! Notre chauffeur était ponctuel, professionnel et incroyablement gentil. Le SUV était impeccable et confortable. A rendu notre voyage à Marrakech inoubliable."' },
    'review.transport1.author': { en: 'Sarah M.', fr: 'Sarah M.' },
    'review.transport1.role': { en: 'Traveled from Marrakech to Essaouira', fr: 'Voyage de Marrakech à Essaouira' },
    'review.transport2.text': { en: '"We booked a minivan for our family of 6 and it was perfect. Plenty of space, the kids loved the WiFi, and our driver went above and beyond to show us hidden gems along the way."', fr: '"Nous avons réservé un minivan pour notre famille de 6 et c\'était parfait. Beaucoup d\'espace, les enfants ont adoré le WiFi, et notre chauffeur a fait plus que son devoir pour nous montrer des joyaux cachés en chemin."' },
    'review.transport2.author': { en: 'James D.', fr: 'James D.' },
    'review.transport2.role': { en: 'Family trip to the Atlas Mountains', fr: 'Voyage en famille dans l\'Atlas' },
    'review.transport3.text': { en: '"The luxury car service was outstanding — from airport pickup to our hotel in Agadir. The refreshments and 5G WiFi were a great touch. Worth every euro!"', fr: '"Le service de voiture de luxe était exceptionnel — de la prise en charge à l\'aéroport jusqu\'à notre hôtel à Agadir. Les rafraîchissements et le WiFi 5G étaient une touche appréciable. Ça vaut chaque euro !"' },
    'review.transport3.author': { en: 'Amara L.', fr: 'Amara L.' },
    'review.transport3.role': { en: 'Business trip to Agadir', fr: 'Voyage d\'affaires à Agadir' },
    'review.transport4.text': { en: '"Best transport service in Morocco! Booked through WhatsApp and got a response in 2 minutes. Driver was waiting for us at the airport with a sign. Seamless experience."', fr: '"Le meilleur service de transport au Maroc ! Réservé via WhatsApp et réponse en 2 minutes. Le chauffeur nous attendait à l\'aéroport avec une pancarte. Expérience fluide."' },
    'review.transport4.author': { en: 'Thomas R.', fr: 'Thomas R.' },
    'review.transport4.role': { en: 'Airport transfer to Rabat', fr: 'Transfert aéroport vers Rabat' },
    'review.transport5.text': { en: '"We did the desert tour with TOREST and it was the highlight of our Morocco trip. The 4x4 handled the dunes perfectly. Highly recommend the Sahara sunset stop!"', fr: '"Nous avons fait le tour du désert avec TOREST et c\'était le point culminant de notre voyage au Maroc. Le 4x4 a parfaitement géré les dunes. Je recommande vivement l\'arrêt au coucher du soleil dans le Sahara !"' },
    'review.transport5.author': { en: 'Nina K.', fr: 'Nina K.' },
    'review.transport5.role': { en: 'Desert safari to Merzouga', fr: 'Safari dans le désert à Merzouga' },

    /* ====== TRUST SECTION ====== */
    'trust.label': { en: 'Why Travelers Choose Us', fr: 'Pourquoi Les Voyageurs Nous Choisissent' },
    'trust.title': { en: 'Built on Trust & Local Expertise', fr: 'Bâti sur la Confiance et l\'Expertise Locale' },
    'trust.subtitle': { en: 'We\'ve been hosting travelers since 2018. Here\'s why they keep coming back.', fr: 'Nous accueillons des voyageurs depuis 2018. Voici pourquoi ils reviennent.' },
    'trust.licensed': { en: 'Licensed & Insured', fr: 'Agréé & Assuré' },
    'trust.licensed.desc': { en: 'All drivers professionally licensed, vehicles fully insured, registered with Morocco\'s Ministry of Tourism.', fr: 'Tous les chauffeurs sont agréés, les véhicules sont entièrement assurés, enregistrés auprès du Ministère du Tourisme marocain.' },
    'trust.confirm': { en: 'Instant Confirmation', fr: 'Confirmation Instantanée' },
    'trust.confirm.desc': { en: 'Booking confirmed within minutes via WhatsApp or email. No waiting, no uncertainty.', fr: 'Réservation confirmée en quelques minutes via WhatsApp ou email. Pas d\'attente, pas d\'incertitude.' },
    'trust.fixed': { en: 'Fixed Pricing', fr: 'Prix Fixes' },
    'trust.fixed.desc': { en: 'What you see is what you pay. Zero hidden fees, no airport surcharges, no fuel surprises.', fr: 'Ce que vous voyez est ce que vous payez. Zéro frais cachés, pas de supplément aéroport, pas de surprise sur le carburant.' },
    'trust.local': { en: 'Local Expertise', fr: 'Expertise Locale' },
    'trust.local.desc': { en: 'Born and raised in Morocco. We know the hidden gems, best routes, and authentic experiences.', fr: 'Nés et élevés au Maroc. Nous connaissons les joyaux cachés, les meilleurs itinéraires et les expériences authentiques.' },
    'trust.support.title': { en: '24/7 Support', fr: 'Support 24/7' },
    'trust.support.desc': { en: 'Available around the clock via WhatsApp, phone, and email. Real humans, real help.', fr: 'Disponible 24h/24 via WhatsApp, téléphone et email. De vrais humains, une vraie aide.' },
    'trust.rating': { en: '4.9/5 Rating', fr: 'Note 4.9/5' },
    'trust.rating.desc': { en: '500+ verified reviews across TripAdvisor, Google, and Booking.com. Excellence is our standard.', fr: 'Plus de 500 avis vérifiés sur TripAdvisor, Google et Booking.com. L\'excellence est notre standard.' },
    'trust.card1.title': { en: 'Licensed & Insured', fr: 'Agréé & Assuré' },
    'trust.card1.desc': { en: 'All drivers professionally licensed, vehicles fully insured, registered with Morocco\'s Ministry of Tourism.', fr: 'Tous les chauffeurs sont agréés, les véhicules sont entièrement assurés, enregistrés auprès du Ministère du Tourisme marocain.' },
    'trust.card2.title': { en: 'Instant Confirmation', fr: 'Confirmation Instantanée' },
    'trust.card2.desc': { en: 'Booking confirmed within minutes via WhatsApp or email. No waiting, no uncertainty.', fr: 'Réservation confirmée en quelques minutes via WhatsApp ou email. Pas d\'attente, pas d\'incertitude.' },
    'trust.card3.title': { en: 'Fixed Pricing', fr: 'Prix Fixes' },
    'trust.card3.desc': { en: 'What you see is what you pay. Zero hidden fees, no airport surcharges, no fuel surprises.', fr: 'Ce que vous voyez est ce que vous payez. Zéro frais cachés, pas de supplément aéroport, pas de surprise sur le carburant.' },
    'trust.card4.title': { en: 'Local Expertise', fr: 'Expertise Locale' },
    'trust.card4.desc': { en: 'Born and raised in Morocco. We know the hidden gems, best routes, and authentic experiences.', fr: 'Nés et élevés au Maroc. Nous connaissons les joyaux cachés, les meilleurs itinéraires et les expériences authentiques.' },
    'trust.card5.title': { en: '24/7 Support', fr: 'Support 24/7' },
    'trust.card5.desc': { en: 'Available around the clock via WhatsApp, phone, and email. Real humans, real help.', fr: 'Disponible 24h/24 via WhatsApp, téléphone et email. De vrais humains, une vraie aide.' },
    'trust.card6.title': { en: '4.9/5 Rating', fr: 'Note 4.9/5' },
    'trust.card6.desc': { en: '500+ verified reviews across TripAdvisor, Google, and Booking.com. Excellence is our standard.', fr: 'Plus de 500 avis vérifiés sur TripAdvisor, Google et Booking.com. L\'excellence est notre standard.' },

    /* Trust section (transport page) */
    'trust.transport.label': { en: 'Why Travel with Us', fr: 'Pourquoi Voyager Avec Nous' },
    'trust.transport.title': { en: 'Trusted by Thousands', fr: 'Des Milliers Nous Font Confiance' },
    'trust.transport.subtitle': { en: 'We set the standard for premium travel in Morocco.', fr: 'Nous établissons la norme du voyage premium au Maroc.' },
    'trust.drivers': { en: 'Professional Drivers', fr: 'Chauffeurs Professionnels' },
    'trust.drivers.desc': { en: 'Licensed, vetted, and trained to provide the highest standard of service.', fr: 'Agréés, vérifiés et formés pour offrir le plus haut niveau de service.' },
    'trust.secure': { en: 'Secure Booking', fr: 'Réservation Sécurisée' },
    'trust.secure.desc': { en: 'Your data is encrypted and protected. Book with total peace of mind.', fr: 'Vos données sont cryptées et protégées. Réservez en toute sérénité.' },

    /* ====== FAQ ====== */
    'faq.label': { en: 'FAQ', fr: 'FAQ' },
    'faq.section.label': { en: 'FAQ', fr: 'FAQ' },
    'faq.title': { en: 'Frequently Asked Questions', fr: 'Questions Fréquemment Posées' },
    'faq.subtitle': { en: 'Everything you need to know before booking with us.', fr: 'Tout ce que vous devez savoir avant de réserver avec nous.' },
    'faq.subtitle.transport': { en: 'Everything you need to know before booking.', fr: 'Tout ce que vous devez savoir avant de réserver.' },

    /* FAQ items (index) */
    'faq.q1': { en: 'How do I book a transfer or activity?', fr: 'Comment réserver un transfert ou une activité ?' },
    'faq.a1': { en: 'Simply fill out our booking form or click the WhatsApp button. We confirm within 5–30 minutes with all details. You can also email or call us directly.', fr: 'Remplissez simplement notre formulaire de réservation ou cliquez sur le bouton WhatsApp. Nous confirmons sous 5 à 30 minutes avec tous les détails. Vous pouvez aussi nous envoyer un email ou nous appeler directement.' },
    'faq.q2': { en: 'What payment methods do you accept?', fr: 'Quels moyens de paiement acceptez-vous ?' },
    'faq.a2': { en: 'We accept cash (MAD, EUR, USD), bank transfer, and online payment via Stripe/PayPal (available on request). For WhatsApp bookings, you can pay upon pickup or in advance.', fr: 'Nous acceptons les espèces (MAD, EUR, USD), les virements bancaires et les paiements en ligne via Stripe/PayPal (sur demande). Pour les réservations WhatsApp, vous pouvez payer à la prise en charge ou à l\'avance.' },
    'faq.q3': { en: 'Can I cancel or modify my booking?', fr: 'Puis-je annuler ou modifier ma réservation ?' },
    'faq.a3': { en: 'Free cancellation up to 48 hours before your scheduled service. Modifications accepted up to 24 hours before (subject to availability). We understand plans change — just let us know.', fr: 'Annulation gratuite jusqu\'à 48 heures avant votre service prévu. Modifications acceptées jusqu\'à 24 heures avant (sous réserve de disponibilité). Nous comprenons que les plans changent — prévenez-nous simplement.' },
    'faq.q4': { en: 'Are prices per person or per vehicle?', fr: 'Les prix sont-ils par personne ou par véhicule ?' },
    'faq.a4': { en: 'Transport prices are per vehicle (not per person). Activity prices are per person unless stated otherwise. Group discounts are available for parties of 4 or more.', fr: 'Les prix des transports sont par véhicule (pas par personne). Les prix des activités sont par personne sauf indication contraire. Des réductions de groupe sont disponibles pour les groupes de 4 personnes ou plus.' },
    'faq.q5': { en: 'Do you offer child seats or baby seats?', fr: 'Proposez-vous des sièges enfants ou bébés ?' },
    'faq.a5': { en: 'Yes, available on request at no extra charge. Please mention the child\'s age and weight when booking so we provide the appropriate seat. We carry all types from infant to booster.', fr: 'Oui, disponibles sur demande sans frais supplémentaires. Veuillez mentionner l\'âge et le poids de l\'enfant lors de la réservation afin que nous fournissions le siège approprié. Nous avons tous les types, du nourrisson au rehausseur.' },
    'faq.q6': { en: 'What if my flight is delayed?', fr: 'Que faire si mon vol est retardé ?' },
    'faq.a6': { en: 'We track all flights in real-time. Your driver will always wait for you at no extra cost. No stress, no extra charges. We\'ve got you covered.', fr: 'Nous suivons tous les vols en temps réel. Votre chauffeur vous attendra toujours sans frais supplémentaires. Pas de stress, pas de frais supplémentaires. Nous sommes là pour vous.' },
    'faq.q7': { en: 'Do you speak English / French / Spanish?', fr: 'Parlez-vous anglais, français, espagnol ?' },
    'faq.a7': { en: 'Yes! Our team speaks English, French, Arabic, and Spanish. We can match you with a driver or guide in your preferred language. Just let us know when booking.', fr: 'Oui ! Notre équipe parle anglais, français, arabe et espagnol. Nous pouvons vous attribuer un chauffeur ou un guide dans la langue de votre choix. Faites-nous savoir lors de la réservation.' },
    'faq.q8': { en: 'Is tipping expected?', fr: 'Le pourboire est-il attendu ?' },
    'faq.a8': { en: 'Tipping is appreciated but never mandatory. If you\'re happy with the service, a small gesture (10–15% is customary) goes a long way. But your smile is the best tip!', fr: 'Le pourboire est apprécié mais jamais obligatoire. Si vous êtes satisfait du service, un petit geste (10–15% est habituel) est bienvenu. Mais votre sourire est le meilleur pourboire !' },

    /* FAQ items (transport page) */
    'faq.transport.q1': { en: 'What payment methods do you accept?', fr: 'Quels moyens de paiement acceptez-vous ?' },
    'faq.transport.a1': { en: 'We accept cash (EUR/MAD), credit/debit cards (Visa, Mastercard, AMEX), bank transfers, and online payments via Stripe. WhatsApp bookings can be paid upon pickup or in advance — whichever you prefer.', fr: 'Nous acceptons les espèces (EUR/MAD), les cartes de crédit/débit (Visa, Mastercard, AMEX), les virements bancaires et les paiements en ligne via Stripe. Les réservations WhatsApp peuvent être payées à la prise en charge ou à l\'avance — comme vous préférez.' },
    'faq.transport.q2': { en: 'What is your cancellation policy?', fr: 'Quelle est votre politique d\'annulation ?' },
    'faq.transport.a2': { en: 'Free cancellation up to 24 hours before your scheduled pickup. Within 24 hours, a 50% charge applies. No-shows are charged in full. We understand plans change — just let us know as soon as possible.', fr: 'Annulation gratuite jusqu\'à 24 heures avant votre prise en charge prévue. Moins de 24 heures, des frais de 50% s\'appliquent. Les absences sont facturées en totalité. Nous comprenons que les plans changent — prévenez-nous dès que possible.' },
    'faq.transport.q3': { en: 'How long does a typical transfer take?', fr: 'Combien de temps prend un transfert typique ?' },
    'faq.transport.a3': { en: 'Transfer times depend on distance and traffic. Marrakech to Essaouira takes ~2.5 hours, Marrakech to Merzouga ~7 hours. We provide real-time tracking and estimated arrival times for every booking.', fr: 'Les temps de transfert dépendent de la distance et du trafic. Marrakech à Essaouira prend ~2,5 heures, Marrakech à Merzouga ~7 heures. Nous fournissons un suivi en temps réel et des heures d\'arrivée estimées pour chaque réservation.' },
    'faq.transport.q4': { en: 'Are child seats available?', fr: 'Des sièges enfants sont-ils disponibles ?' },
    'faq.transport.a4': { en: 'Yes! We offer child seats and booster seats free of charge. Just let us know the age and weight of your child when booking, and we\'ll have the appropriate seat ready and installed.', fr: 'Oui ! Nous proposons des sièges enfants et des rehausseurs gratuitement. Faites-nous simplement savoir l\'âge et le poids de votre enfant lors de la réservation, et nous préparerons le siège approprié.' },
    'faq.transport.q5': { en: 'Can I book a multi-city itinerary?', fr: 'Puis-je réserver un itinéraire multi-villes ?' },
    'faq.transport.a5': { en: 'Absolutely! Our custom route service allows multiple stops. Want to go from Marrakech to the Atlas Mountains, then onwards to Merzouga? We\'ll build a tailor-made itinerary at a fixed price.', fr: 'Absolument ! Notre service d\'itinéraire personnalisé permet plusieurs arrêts. Vous voulez aller de Marrakech aux montagnes de l\'Atlas, puis continuer vers Merzouga ? Nous construirons un itinéraire sur mesure à prix fixe.' },
    'faq.transport.q6': { en: 'Do you offer airport pickup with name signs?', fr: 'Proposez-vous la prise en charge à l\'aéroport avec pancarte nominative ?' },
    'faq.transport.a6': { en: 'Yes, every airport transfer includes a professional meet-and-greet. Your driver will be waiting at arrivals with a sign displaying your name, help with luggage, and escort you directly to your vehicle.', fr: 'Oui, chaque transfert aéroport comprend un accueil professionnel. Votre chauffeur vous attendra à l\'arrivée avec une pancarte affichant votre nom, vous aidera avec les bagages et vous escortera directement jusqu\'à votre véhicule.' },

    /* ====== CTA SECTION ====== */
    'cta.title': { en: 'Your Morocco Adventure Starts Here', fr: 'Votre Aventure Marocaine Commence Ici' },
    'cta.text': { en: 'Book your private transport or dream experience today — and discover why thousands of travelers trust us to make their Morocco trip unforgettable.', fr: 'Réservez votre transport privé ou votre expérience de rêve dès aujourd\'hui — et découvrez pourquoi des milliers de voyageurs nous font confiance pour rendre leur voyage au Maroc inoubliable.' },
    'cta.book': { en: 'Book Transport', fr: 'Réserver Transport' },
    'cta.whatsapp': { en: 'WhatsApp Us', fr: 'WhatsApp' },

    /* ====== CONTACT / FOOTER ====== */
    'footer.brand': { en: 'ATLAS TRAVEL', fr: 'ATLAS TRAVEL' },
    'footer.desc': { en: 'Your Morocco, Perfectly Planned. Private transfers, desert adventures & cultural experiences — all in one place.', fr: 'Votre Maroc, Parfaitement Planifié. Transferts privés, aventures dans le désert et expériences culturelles — tout en un seul endroit.' },
    'footer.services': { en: 'Services', fr: 'Services' },
    'footer.company': { en: 'Company', fr: 'Entreprise' },
    'footer.contact': { en: 'Contact Us', fr: 'Contactez-Nous' },
    'footer.terms': { en: 'Terms of Service', fr: 'Conditions d\'Utilisation' },
    'footer.privacy': { en: 'Privacy Policy', fr: 'Politique de Confidentialité' },
    'footer.phone': { en: 'Phone', fr: 'Téléphone' },
    'footer.email': { en: 'Email', fr: 'Email' },
    'footer.whatsapp': { en: 'WhatsApp', fr: 'WhatsApp' },
    'footer.location': { en: 'Location', fr: 'Emplacement' },
    'footer.location.value': { en: 'Marrakech, Morocco', fr: 'Marrakech, Maroc' },
    'footer.hours': { en: 'Hours', fr: 'Horaires' },
    'footer.hours.value': { en: '6:00 – 22:00 daily', fr: '6:00 – 22:00 tous les jours' },
    'footer.copyright': { en: '© 2025 ATLAS TRAVEL Morocco. All rights reserved.', fr: '© 2025 ATLAS TRAVEL Maroc. Tous droits réservés.' },

    /* Footer (transport page) */
    'footer.transport.brand': { en: 'TOREST', fr: 'TOREST' },
    'footer.transport.desc': { en: 'Premium transport and travel experiences across Morocco. Your journey, our passion.', fr: 'Expériences de transport et de voyage premium à travers le Maroc. Votre voyage, notre passion.' },
    'footer.quicklinks': { en: 'Quick Links', fr: 'Liens Rapides' },
    'footer.connect': { en: 'Connect', fr: 'Suivez-Nous' },
    'footer.instagram': { en: 'Instagram', fr: 'Instagram' },
    'footer.facebook': { en: 'Facebook', fr: 'Facebook' },
    'footer.tiktok': { en: 'TikTok', fr: 'TikTok' },
    'footer.tripadvisor': { en: 'TripAdvisor', fr: 'TripAdvisor' },
    'footer.google': { en: 'Google', fr: 'Google' },
    'footer.heading.services': { en: 'Services', fr: 'Services' },
    'footer.heading.company': { en: 'Company', fr: 'Entreprise' },
    'footer.heading.contact': { en: 'Contact Us', fr: 'Contactez-Nous' },
    'footer.contact.whatsapp': { en: '+212 600 000 000', fr: '+212 600 000 000' },
    'footer.contact.email': { en: 'hello@atlastravel.ma', fr: 'hello@atlastravel.ma' },
    'footer.contact.address': { en: 'Marrakech, Morocco', fr: 'Marrakech, Maroc' },
    'footer.contact.hours': { en: '6:00 – 22:00 daily', fr: '6:00 – 22:00 tous les jours' },
    'footer.link.transport': { en: 'Private Transport', fr: 'Transport Privé' },
    'footer.link.destinations': { en: 'Destinations', fr: 'Destinations' },
    'footer.link.reviews': { en: 'Reviews', fr: 'Avis' },
    'footer.link.faq': { en: 'FAQ', fr: 'FAQ' },
    'footer.link.terms': { en: 'Terms of Service', fr: 'Conditions d\'Utilisation' },
    'footer.link.privacy': { en: 'Privacy Policy', fr: 'Politique de Confidentialité' },

    /* ====== BOOKING MODAL ====== */
    'modal.title': { en: 'Book Your Morocco Trip', fr: 'Réservez Votre Voyage au Maroc' },
    'modal.step1': { en: 'Trip Details', fr: 'Détails du Voyage' },
    'modal.step2': { en: 'Customer Information', fr: 'Informations Client' },
    'modal.step3': { en: 'Confirmation', fr: 'Confirmation' },
    'modal.step1.text': { en: 'Where and when — set up your trip details below.', fr: 'Où et quand — configurez les détails de votre voyage ci-dessous.' },
    'modal.step2.text': { en: 'Who\'s traveling? Just your name and phone.', fr: 'Qui voyage ? Juste votre nom et téléphone.' },
    'modal.step3.text': { en: 'Review everything and confirm your reservation.', fr: 'Vérifiez tout et confirmez votre réservation.' },

    /* Modal field labels */
    'modal.label.name': { en: 'Full Name', fr: 'Nom Complet' },
    'modal.label.phone': { en: 'Phone Number', fr: 'Numéro de Téléphone' },
    'modal.label.email': { en: 'Email', fr: 'Email' },
    'modal.label.pickup': { en: 'Pickup Location', fr: 'Lieu de Prise en Charge' },
    'modal.label.dest': { en: 'Destination', fr: 'Destination' },
    'modal.label.date': { en: 'Date', fr: 'Date' },
    'modal.label.time': { en: 'Time', fr: 'Heure' },
    'modal.label.vehicle': { en: 'Vehicle', fr: 'Véhicule' },
    'modal.label.passengers': { en: 'Passengers', fr: 'Passagers' },

    /* Modal placeholders */
    'modal.placeholder.name': { en: 'Your full name', fr: 'Votre nom complet' },
    'modal.placeholder.pickup': { en: 'Airport, hotel, or address', fr: 'Aéroport, hôtel ou adresse' },
    'modal.placeholder.dest': { en: 'City or landmark', fr: 'Ville ou lieu' },

    /* Modal summary */
    'modal.summary.service': { en: 'Service', fr: 'Service' },
    'modal.summary.name': { en: 'Name', fr: 'Nom' },
    'modal.summary.phone': { en: 'Phone', fr: 'Téléphone' },
    'modal.summary.email': { en: 'Email', fr: 'Email' },
    'modal.summary.pickup': { en: 'Pickup', fr: 'Prise en Charge' },
    'modal.summary.dest': { en: 'Destination', fr: 'Destination' },
    'modal.summary.datetime': { en: 'Date & Time', fr: 'Date & Heure' },
    'modal.summary.passengers': { en: 'Passengers', fr: 'Passagers' },
    'modal.summary.vehicle': { en: 'Vehicle', fr: 'Véhicule' },
    'modal.summary.total': { en: 'Total (includes driver, fuel, all taxes)', fr: 'Total (chauffeur, carburant, taxes inclus)' },
    'modal.summary.note': { en: 'Price includes: professional driver, fuel, tolls, insurance, and bottled water. No hidden fees.', fr: 'Le prix inclut : chauffeur professionnel, carburant, péages, assurance et eau minérale. Pas de frais cachés.' },
    'modal.label.destination': { en: 'Destination', fr: 'Destination' },
    'modal.summary.destination': { en: 'Destination', fr: 'Destination' },
    'modal.intro': { en: 'Enter your details and trip info.', fr: 'Entrez vos coordonnées et les informations du voyage.' },
    'modal.summary.intro': { en: 'Review your booking details. Everything included — no hidden fees.', fr: 'Vérifiez les détails de votre réservation. Tout est inclus — pas de frais cachés.' },
    'modal.seeSummary': { en: 'See Summary', fr: 'Voir le Récapitulatif' },

    /* Modal buttons */
    'modal.back': { en: 'Back', fr: 'Retour' },
    'modal.next': { en: 'Next Step', fr: 'Étape Suivante' },
    'modal.seesummary': { en: 'See Summary', fr: 'Voir le Récapitulatif' },
    'modal.confirm': { en: 'Confirm Booking', fr: 'Confirmer la Réservation' },
    'modal.confirm.reservation': { en: 'Confirm Reservation', fr: 'Confirmer la Réservation' },
    'modal.service.default': { en: 'Private Transport', fr: 'Transport Privé' },

    /* ====== TRANSPORT DESTINATIONS SECTION ====== */
    'dest.transport.label': { en: 'Explore Destinations', fr: 'Explorer les Destinations' },
    'dest.transport.subtitle': { en: 'From the bustling medinas to the golden dunes — discover Morocco\'s most iconic destinations.', fr: 'Des médinas animées aux dunes dorées — découvrez les destinations les plus emblématiques du Maroc.' },

    /* ====== CONTACT SECTION (transport page) ====== */
    'contact.label': { en: 'Get in Touch', fr: 'Prenez Contact' },
    'contact.title': { en: 'We\'d Love to Hear From You', fr: 'Nous Aimons Vous Entendre' },
    'contact.text': { en: 'Have a question, special request, or just want to say hello? Reach out — we\'re here 24/7.', fr: 'Une question, une demande spéciale ou simplement envie de dire bonjour ? Contactez-nous — nous sommes là 24h/24.' },

    /* ====== FLOATING ELEMENTS ====== */
    'float.whatsapp': { en: 'Chat with us! 💬', fr: 'Discutez avec nous ! 💬' },
    'whatsapp.tooltip': { en: 'Chat with us! 💬', fr: 'Discutez avec nous ! 💬' },
    'float.cta.transport': { en: 'Book Transport', fr: 'Réserver Transport' },
    'float.cta.whatsapp': { en: 'WhatsApp', fr: 'WhatsApp' },

    /* ====== ARIA LABELS ====== */
    'aria.lang': { en: 'Language', fr: 'Langue' },
    'aria.toggle': { en: 'Toggle menu', fr: 'Menu' },
    'aria.whatsapp': { en: 'Contact on WhatsApp', fr: 'Contactez sur WhatsApp' },
    'aria.backtotop': { en: 'Back to top', fr: 'Retour en haut' },
    'aria.social.instagram': { en: 'Instagram', fr: 'Instagram' },
    'aria.social.facebook': { en: 'Facebook', fr: 'Facebook' },
    'aria.social.tripadvisor': { en: 'TripAdvisor', fr: 'TripAdvisor' },
    'aria.social.google': { en: 'Google', fr: 'Google' },
    'aria.social.tiktok': { en: 'TikTok', fr: 'TikTok' },
    'aria.backToTop': { en: 'Back to top', fr: 'Retour en haut' },
    'aria.instagram': { en: 'Instagram', fr: 'Instagram' },
    'aria.facebook': { en: 'Facebook', fr: 'Facebook' },
    'aria.tripadvisor': { en: 'TripAdvisor', fr: 'TripAdvisor' },
    'aria.google': { en: 'Google', fr: 'Google' },

    /* ====== WHATSAPP MESSAGES ====== */
    'whatsapp.modal.header': { en: 'Hi! I\'d like to book a transport:\n\n', fr: 'Bonjour ! Je souhaite réserver un transport :\n\n' },
    'whatsapp.modal.name': { en: '👤 Name: ', fr: '👤 Nom : ' },
    'whatsapp.modal.phone': { en: '📞 Phone: ', fr: '📞 Téléphone : ' },
    'whatsapp.modal.email': { en: '📧 Email: ', fr: '📧 Email : ' },
    'whatsapp.modal.pickup': { en: '📍 Pickup: ', fr: '📍 Prise en charge : ' },
    'whatsapp.modal.dest': { en: '📍 Destination: ', fr: '📍 Destination : ' },
    'whatsapp.modal.date': { en: '📅 Date: ', fr: '📅 Date : ' },
    'whatsapp.modal.time': { en: '⏰ Time: ', fr: '⏰ Heure : ' },
    'whatsapp.modal.pax': { en: '👥 Passengers: ', fr: '👥 Passagers : ' },
    'whatsapp.modal.vehicle': { en: '🚗 Vehicle: ', fr: '🚗 Véhicule : ' },

    'whatsapp.flow.header': { en: 'Hi! I\'d like to book a transport:\n', fr: 'Bonjour ! Je souhaite réserver un transport :\n' },
    'whatsapp.flow.name': { en: '👤 Name: ', fr: '👤 Nom : ' },
    'whatsapp.flow.phone': { en: '📞 Phone: ', fr: '📞 Téléphone : ' },
    'whatsapp.flow.email': { en: '📧 Email: ', fr: '📧 Email : ' },
    'whatsapp.flow.pickup': { en: '📍 Pickup: ', fr: '📍 Prise en charge : ' },
    'whatsapp.flow.dest': { en: '🏁 Destination: ', fr: '🏁 Destination : ' },
    'whatsapp.flow.when': { en: '📅 When: ', fr: '📅 Quand : ' },
    'whatsapp.flow.pax': { en: '👥 Passengers: ', fr: '👥 Passagers : ' },
    'whatsapp.flow.vehicle': { en: '🚗 Vehicle: ', fr: '🚗 Véhicule : ' },

    /* ====== VALIDATION ====== */
    'validate.name': { en: 'Full name', fr: 'Nom complet' },
    'validate.pickup': { en: 'Pickup location', fr: 'Lieu de prise en charge' },
    'validate.dest': { en: 'Destination', fr: 'Destination' },
    'validate.date': { en: 'Date', fr: 'Date' },
    'validate.time': { en: 'Time', fr: 'Heure' },

    /* ====== SUCCESS MESSAGE ====== */
    'success.message': { en: '✅ Thank you! We\'ll call you within 5 minutes at the number provided. You can also reach us anytime on WhatsApp.', fr: '✅ Merci ! Nous vous rappelons dans les 5 minutes au numéro fourni. Vous pouvez aussi nous joindre à tout moment sur WhatsApp.' },

    /* ====== STICKY MOBILE CTA (transport) ====== */
    'sticky.book': { en: 'Book Transport', fr: 'Réserver Transport' },
    'sticky.whatsapp': { en: 'WhatsApp', fr: 'WhatsApp' },

    /* ====== MISCELLANEOUS ====== */
    'dest.transport.marrakech': { en: 'Marrakech', fr: 'Marrakech' },
    'dest.transport.essaouira': { en: 'Essaouira', fr: 'Essaouira' },
    'dest.transport.agadir': { en: 'Agadir', fr: 'Agadir' },
    'dest.transport.atlas': { en: 'Atlas Mountains', fr: 'Montagnes de l\'Atlas' }
  };

  /* ---- Lang engine ---- */
  const Lang = {
    current: 'en',

    init() {
      const saved = localStorage.getItem(KEY);
      if (saved && dict['nav.home'] && dict['nav.home'][saved]) {
        this.current = saved;
      }
      this.apply();
      this.bindSwitcher();
    },

    switch(code) {
      if (!dict['nav.home'] || !dict['nav.home'][code]) return;
      this.current = code;
      localStorage.setItem(KEY, code);
      this.apply();
    },

    apply() {
      this.translatePage();
      this.translatePlaceholders();
      this.translateAria();
      this.setDirection();
    },

    t(key) {
      const entry = dict[key];
      if (!entry) return key;
      return entry[this.current] || entry.en || key;
    },

    translatePage() {
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        const text = this.t(key);
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT') {
          el.value = text;
        } else {
          el.innerHTML = text;
        }
      });
    },

    translatePlaceholders() {
      document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        el.placeholder = this.t(el.dataset.i18nPlaceholder);
      });
    },

    translateAria() {
      document.querySelectorAll('[data-i18n-aria]').forEach(el => {
        el.setAttribute('aria-label', this.t(el.dataset.i18nAria));
      });
    },

    setDirection() {
      const html = document.documentElement;
      html.setAttribute('dir', 'ltr');
      html.setAttribute('lang', this.current === 'fr' ? 'fr' : 'en');
    },

    bindSwitcher() {
      document.querySelectorAll('.navbar-lang').forEach(sel => {
        sel.value = this.current;
        sel.addEventListener('change', e => {
          this.switch(e.target.value);
        });
        // sync other switchers
        document.querySelectorAll('.navbar-lang').forEach(s => {
          s.addEventListener('change', () => {
            document.querySelectorAll('.navbar-lang').forEach(ss => ss.value = Lang.current);
          });
        });
      });
    }
  };

  window.Lang = Lang;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => Lang.init());
  } else {
    Lang.init();
  }
})();
