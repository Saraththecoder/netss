export interface ServiceItem {
  slug: string;
  title: string;
  category: 'bird-safety' | 'invisible-grill' | 'sports-industrial';
  categoryLabel: string;
  tagline: string;
  description: string;
  materialSpec: string;
  priceIndicator: string;
  features: string[];
  faqs: { question: string; answer: string }[];
}

export const servicesData: ServiceItem[] = [
  // 1. Balcony Safety Nets
  {
    slug: 'balcony-safety-nets',
    title: 'Balcony Safety Nets',
    category: 'bird-safety',
    categoryLabel: 'Bird & Child Safety Nets',
    tagline: 'High-durability HDPE netting to protect your family and keep birds away.',
    description: 'Our premium Balcony Safety Nets provide a high-tensile protective barrier for high-rise residential apartments. Crafted using imported UV-stabilized copolymer nylon and high-density polyethylene (HDPE), these nets protect toddlers and pets from accidental falls while keeping pigeons and pest birds out, without obstructing your outdoor view or refreshing breeze.',
    materialSpec: '100% Virgin HDPE, UV Resistant, 0.8mm to 2.5mm thickness, 30+ kg breaking strength.',
    priceIndicator: 'Starting from ₹12 / sq.ft.',
    features: ['5 Years Performance Warranty', 'UV-Stabilized Copolymer (Weatherproof)', 'High Breaking Resistance (Child Safe)', 'Translucent & Minimal Visual Impact'],
    faqs: [
      { question: 'Will this block my balcony view or ventilation?', answer: 'No. Our high-tensile translucent nets are designed to have minimal visual presence. You get 100% natural light and airflow while staying fully protected.' },
      { question: 'What is the lifespan of these safety nets?', answer: 'Our HDPE and nylon copolymer nets are UV-stabilized and built to endure harsh sunlight and rains, easily lasting between 5 to 8 years.' }
    ]
  },
  // 2. Kids Net for Balcony
  {
    slug: 'kids-net-for-balcony',
    title: 'Kids Safety Nets for Balcony',
    category: 'bird-safety',
    categoryLabel: 'Bird & Child Safety Nets',
    tagline: 'Heavy-duty childproofing nets to safeguard your toddlers on high floors.',
    description: 'Ensure absolute peace of mind with our dedicated Kids Balcony Safety Nets. Tailored specifically with double-knotted high-strength polyethylene, these safety systems eliminate any possibility of children slipping through balcony railings, giving them a secure space to play.',
    materialSpec: 'Double-knotted premium nylon, 15mm-30mm mesh size, 45 kg load capacity per node.',
    priceIndicator: 'Starting from ₹15 / sq.ft.',
    features: ['High Load Carrying Capacity', 'No Sharp Edges (Baby Safe)', 'Rustproof SS 316 Anchoring Accessories', 'Free Professional Tensioning Adjustment'],
    faqs: [
      { question: 'Can these nets bear the weight of an active child?', answer: 'Yes, our child-safety nets are anchored using heavy-duty stainless steel fasteners and double-knotted cords that easily support weights up to 50+ kg.' },
      { question: 'Do you provide free installation?', answer: 'Yes, we provide free site inspection and professional installation by certified high-rise technicians.' }
    ]
  },
  // 3. Pets Safety Nets
  {
    slug: 'pets-safety-nets',
    title: 'Pets Safety Nets',
    category: 'bird-safety',
    categoryLabel: 'Bird & Child Safety Nets',
    tagline: 'Keep your cats, dogs, and birds safe from falling off open windows and balconies.',
    description: 'Protect your curious furry companions with cat-proof and dog-friendly netting solutions. Engineered with reinforced bite-resistant threads, our Pets Safety Nets prevent animals from chewing through or jumping off high balconies, keeping them safe.',
    materialSpec: 'Bite-resistant reinforced nylon filament with stainless steel wire core option.',
    priceIndicator: 'Starting from ₹14 / sq.ft.',
    features: ['Bite & Claw Scratch Resistant', 'Optimal Mesh Sizing (Prevent paws getting stuck)', 'Durable Steel Core Reinforced Options', 'Weather-Resistant Coating'],
    faqs: [
      { question: 'Is the material safe if my cat tries to chew it?', answer: 'Yes, our materials are non-toxic, lead-free, and reinforced with core filaments to prevent tearing or chemical ingestion.' },
      { question: 'Can it be installed on windows and sliding doors?', answer: 'Absolutely. We custom fit the frames and nets over window grills, open balconies, and service shafts.' }
    ]
  },
  // 4. Pigeon Safety Nets
  {
    slug: 'pigeon-safety-nets',
    title: 'Pigeon Safety Nets',
    category: 'bird-safety',
    categoryLabel: 'Bird & Child Safety Nets',
    tagline: 'Permanent pigeon control solutions without hurting the birds.',
    description: 'Pigeons can cause massive hygienic issues and structural damage. Our Pigeon Safety Nets provide a highly effective, non-lethal physical barrier that prevents pigeons from nesting in your balconies, window sills, and air conditioner ducts.',
    materialSpec: 'Heavy-duty 1mm HDPE nylon netting, 40mm mesh size to target pigeons specifically.',
    priceIndicator: 'Starting from ₹11 / sq.ft.',
    features: ['100% Bird-Friendly Physical Exclusion', 'Zero Maintenance & Easy Washable', 'Acid-Proof & Rust-Proof Anchors', 'Flawless Aesthetic Integration'],
    faqs: [
      { question: 'Does this harm the birds?', answer: 'No. Our nets act as a simple physical barrier. Pigeons simply cannot land or enter, directing them to search for other nesting zones without getting hurt.' },
      { question: 'Will dust or bird droppings stick to the net?', answer: 'Our nets feature a smooth dust-repellent coating. Rainwater washes away minimal dust, keeping them self-cleaning.' }
    ]
  },
  // 5. Pigeon Nets
  {
    slug: 'pigeon-nets',
    title: 'Pigeon Prevention Nets',
    category: 'bird-safety',
    categoryLabel: 'Bird & Child Safety Nets',
    tagline: 'Keep your residential areas clean, quiet, and pigeon-free.',
    description: 'Block out annoying pigeon nesting and keep your home hygienic. Our specialized Pigeon Nets are custom tensioned to cover open ducts, terraces, and utility areas seamlessly. Say goodbye to toxic dust and droppings.',
    materialSpec: 'High Density Polyethylene Monofilament, 0.9mm thread, UV-resistant.',
    priceIndicator: 'Starting from ₹10 / sq.ft.',
    features: ['Highly Cost-Effective Control', 'Acidic Dropping Proof', 'Quick 2-Hour Fitment', 'Robust Border Rope Anchoring'],
    faqs: [
      { question: 'Do you cover AC outdoor shafts?', answer: 'Yes, AC outdoor vents are primary nesting grounds. We build custom boxed net covers for easy AC service accessibility.' }
    ]
  },
  // 6. Pigeon Nets Installation
  {
    slug: 'pigeon-nets-installation',
    title: 'Professional Pigeon Nets Installation',
    category: 'bird-safety',
    categoryLabel: 'Bird & Child Safety Nets',
    tagline: 'Expert high-rise technicians offering clean and secure net fitments.',
    description: 'We do not just sell nets; we offer premium, long-lasting installation services. Our certified high-rise structural technicians use premium anchors, tensioners, and border cords to ensure your nets stay taut, secure, and beautiful for years.',
    materialSpec: 'All installations use SS-304/316 anchor hooks and heavy-duty nylon casing cords.',
    priceIndicator: 'Starting from ₹12 / sq.ft. (Including materials & labor)',
    features: ['Certified Safety-Harness Technicians', 'Heavy-Duty SS Anchoring (No sagging)', 'Same-Day Fast Installation', 'Post-Fitment Clean Inspection'],
    faqs: [
      { question: 'How long does the installation take?', answer: 'For standard balconies, it takes about 1.5 to 3 hours. Larger duct areas or multi-balcony complexes can take up to a day.' }
    ]
  },
  // 7. Bird Spikes
  {
    slug: 'bird-spikes',
    title: 'Anti-Roosting Bird Spikes',
    category: 'bird-safety',
    categoryLabel: 'Bird & Child Safety Nets',
    tagline: 'Premium polycarbonate and stainless steel spikes for ledges and beams.',
    description: 'Prevent birds from perching on narrow ledges, pipes, air conditioners, and parapet walls. Our professional Anti-Roosting Bird Spikes are long-lasting, humane, and practically invisible from a distance.',
    materialSpec: 'SS-316 Grade Spikes mounted on high-grade UV Polycarbonate base strips.',
    priceIndicator: 'Starting from ₹80 / linear foot.',
    features: ['SS 304 High-Tensile Rustproof Spikes', 'UV Resistant Polycarbonate Base (No yellowing)', 'Easy Adhesive or Screw Mounting', 'Zero Maintenance Long-Term Solution'],
    faqs: [
      { question: 'Do spikes hurt the birds?', answer: 'No. The spikes simply make it physically impossible for birds to land. They see the spikes and fly away safely without any injury.' }
    ]
  },
  // 8. Bird Protection Nets
  {
    slug: 'bird-protection-nets',
    title: 'Bird Protection Systems',
    category: 'bird-safety',
    categoryLabel: 'Bird & Child Safety Nets',
    tagline: 'Shield your buildings from all pest birds with multi-mesh netting.',
    description: 'Keep your building facades and structures pristine. Our structural Bird Protection Nets offer complete multi-species protection (from small sparrows to larger crows and eagles), preventing roosting, nesting, and building deterioration.',
    materialSpec: 'UV Copolymer nylon, multi-size mesh configurations (15mm to 50mm).',
    priceIndicator: 'Starting from ₹12 / sq.ft.',
    features: ['All-species Exclusion System', 'Architectural Grade Tensioning', 'Highly Weatherproof & Flame Retardant', 'Available in Multiple Color Outlines'],
    faqs: [
      { question: 'Can this cover large atrium roofs?', answer: 'Yes, we are highly experienced in rigging wide-span open atriums and industrial roofs using high-tension stainless steel wire cables.' }
    ]
  },
  // 9. Anti Bird Nets
  {
    slug: 'anti-bird-nets',
    title: 'Anti-Bird Exclusion Nets',
    category: 'bird-safety',
    categoryLabel: 'Bird & Child Safety Nets',
    tagline: 'Top-tier nylon barriers for windows, balconies, and duct shafts.',
    description: 'Block birds from entering key ventilation shafts, courtyards, and home spaces. Our Anti-Bird Nets are knotted to precision, offering high load-bearing thresholds and outstanding aesthetic integration.',
    materialSpec: '15mm, 20mm, 35mm, and 50mm mesh size options in high-strength monofilaments.',
    priceIndicator: 'Starting from ₹11 / sq.ft.',
    features: ['High-Tenacity Nylon Cords', 'Weather-Stable up to 80°C', 'Fungus and Rot Resistant', 'Virtually Invisible Profiles'],
    faqs: [
      { question: 'How do you anchor these nets?', answer: 'We drill robust SS hooks into walls at 1-foot intervals, running a high-tension border cable to keep the net perfectly aligned without any sagging.' }
    ]
  },
  // 10. Pigeon Nets for Balconies
  {
    slug: 'pigeon-nets-for-balconies',
    title: 'Pigeon Nets for Balconies',
    category: 'bird-safety',
    categoryLabel: 'Bird & Child Safety Nets',
    tagline: 'Say goodbye to unhygienic pigeon messes on your private balconies.',
    description: 'Enjoy a cleaner, safer, and cleaner balcony workspace. Custom measured and professionally tensioned, our premium pigeon netting bars prevent droppings, feathers, and nest debris from compromising your family health.',
    materialSpec: 'UV stabilized high density copolymer, highly chemical resistant.',
    priceIndicator: 'Starting from ₹12 / sq.ft.',
    features: ['Zero Odor & Stain-Repellent Cordage', 'Unobstructed Sunlight & Airflow', 'Tailored Cutouts for pipes and units', 'Complimentary First-Year Tension Adjustment'],
    faqs: [
      { question: 'What colors do these nets come in?', answer: 'We offer them in Translucent/Clear, Slate Black, and Ocean Blue to match your building exterior theme.' }
    ]
  },
  // 11. Sparrow Protection Nets
  {
    slug: 'sparrow-protection-nets',
    title: 'Sparrow Protection Nets',
    category: 'bird-safety',
    categoryLabel: 'Bird & Child Safety Nets',
    tagline: 'Micro-mesh netting to prevent small birds from nesting inside your ceilings.',
    description: 'Keep small birds like sparrows and starlings from entering AC ventilation holes, false ceilings, and interior crevices. Our micro-mesh sparrow nets offer small mesh clearances to exclude tiny birds while allowing complete air ventilation.',
    materialSpec: '15mm micro-mesh ultra-strong nylon monofilament.',
    priceIndicator: 'Starting from ₹14 / sq.ft.',
    features: ['15mm Micro-Mesh Sizing', 'High Light Transmission', 'Lightweight yet highly tensile', 'Sleek Non-Obtrusive Framing'],
    faqs: [
      { question: 'Will this restrict exhaust fan air flow?', answer: 'Not at all. The 15mm mesh size ensures optimal aerodynamic performance for exhaust ducts and industrial chimneys.' }
    ]
  },
  // 12. Anti Seagull Nets
  {
    slug: 'anti-seagull-nets',
    title: 'Anti-Seagull Coastal Nets',
    category: 'bird-safety',
    categoryLabel: 'Bird & Child Safety Nets',
    tagline: 'Heavy-duty coastal grade nets for seaside villas and apartments.',
    description: 'Designed to combat aggressive marine birds like seagulls. Built with thick marine-grade copolymer filament, these nets stand up to high salty coastal winds, UV radiation, and heavy impacts.',
    materialSpec: '2.5mm heavy-gauge marine-treated HDPE cord, 75mm mesh size.',
    priceIndicator: 'Starting from ₹18 / sq.ft.',
    features: ['Coastal Saline-Resistant Treatment', 'High Impact Heavy Gauge Cords', 'Corrosion-Free Brass/SS Anchors', 'Rigged for High Wind Speeds'],
    faqs: [
      { question: 'Do these resist sea breeze corrosion?', answer: 'Yes, all our coastal fittings use Marine Grade 316 Stainless Steel hooks to completely prevent rust and oxidation.' }
    ]
  },
  // 13. Grill Balcony Safety Nets
  {
    slug: 'grill-balcony-safety-nets',
    title: 'Grill Balcony Safety Nets',
    category: 'bird-safety',
    categoryLabel: 'Bird & Child Safety Nets',
    tagline: 'Add an extra layer of protection over your traditional iron window grills.',
    description: 'Traditional iron window grills have gaps that pigeons and small pets can slip through. Our Grill Safety Nets wrap over traditional metal grates, providing high-tensile security against falls and nests.',
    materialSpec: 'Tension-treated monofilament copolymer, custom sizing.',
    priceIndicator: 'Starting from ₹12 / sq.ft.',
    features: ['Closes critical gaps in metal grills', 'Rust-Free Overlaying Anchors', 'Easy to clean and vacuum', 'Discrete appearance'],
    faqs: [
      { question: 'Will it damage my existing iron grills?', answer: 'No, we secure the nets using heavy-duty nylon ties and non-invasive hooks without scratching or damaging your existing paint.' }
    ]
  },
  // 14. Terrace Top Nets
  {
    slug: 'terrace-top-nets',
    title: 'Terrace Top Protection Nets',
    category: 'bird-safety',
    categoryLabel: 'Bird & Child Safety Nets',
    tagline: 'Cover large open-air terraces to exclude birds and prevent falling objects.',
    description: 'Transform your high-rise terrace into a safe, functional open-air playground. Our Terrace Top Nets provide high-tension overhead grids that exclude pigeons and eagles while ensuring people and pets play with absolute safety.',
    materialSpec: 'Thick-gauge knotted HDPE cord with robust steel support pillars.',
    priceIndicator: 'Starting from ₹16 / sq.ft.',
    features: ['Large Wide-Span Cable Rigging', 'High wind resistance structural calculation', 'Excellent durability under direct sunlight', 'Heavy-Duty Fall Protection Rating'],
    faqs: [
      { question: 'Do we need steel pillar supports?', answer: 'For wide terraces without walls, we install custom-engineered sleek steel structural pillars to secure the high-tension border cables.' }
    ]
  },
  // 15. Industrial Safety Nets
  {
    slug: 'industrial-safety-nets',
    title: 'Industrial Safety & Debris Nets',
    category: 'bird-safety',
    categoryLabel: 'Bird & Child Safety Nets',
    tagline: 'Heavy-duty fall protection nets for factories, warehouses, and sites.',
    description: 'Maintain strict workplace safety protocols. Our heavy-duty Industrial Safety Nets prevent tool fallouts, protect workers at high elevations, and exclude birds from huge factory hangars and logistics warehouses.',
    materialSpec: 'Border-reinforced PP/HDPE nets, breaking strength up to 350 kg.',
    priceIndicator: 'Starting from ₹20 / sq.ft.',
    features: ['IS-5175 Safety Standard Compliant', 'Impact Energy Absorption Core', 'Fire Retardant Grade Copolymer', 'Debris Containment Mesh Liners'],
    faqs: [
      { question: 'Are these certified for construction sites?', answer: 'Yes, all our industrial safety nets undergo rigorous batch testing and meet Indian Standard IS-5175 specifications.' }
    ]
  },
  // 16. Building Safety Nets
  {
    slug: 'building-safety-nets',
    title: 'Building Safety & Construction Nets',
    category: 'bird-safety',
    categoryLabel: 'Bird & Child Safety Nets',
    tagline: 'Professional high-rise building containment and fall-prevention netting.',
    description: 'Protect high-rise construction spaces and architectural facades. Our Building Safety Nets are engineered to arrest falling debris, concrete blocks, and tools, keeping technicians on site and pedestrians below fully safe.',
    materialSpec: '12mm border rope, 4mm mesh rope, knotted polypropylene.',
    priceIndicator: 'Starting from ₹18 / sq.ft.',
    features: ['High Impact Fall Containment', 'Dual Layer (Nets + Micro Mesh debris sheets)', 'UV Stabilized for long open exposure', 'SS Hook / Rope Sling Anchoring'],
    faqs: [
      { question: 'Can these catch falling concrete debris?', answer: 'Yes, when coupled with our micro-mesh liner sheets, they intercept both small nails/mortar dust and heavy falling concrete chunks.' }
    ]
  },
  // 17. Duct Area Safety Nets
  {
    slug: 'duct-area-safety-nets',
    title: 'Duct Area Safety Nets',
    category: 'bird-safety',
    categoryLabel: 'Bird & Child Safety Nets',
    tagline: 'Secure the open duct shafts of residential buildings from unhygienic pigeons.',
    description: 'Residential duct areas and plumbing shafts are primary breeding grounds for pigeons, creating toxic odors and respiratory risks. Our Duct Area Safety Nets cover the entire vertical height of open building shafts, blocking bird access permanently.',
    materialSpec: 'High tenacity UV nylon net, 1.5mm to 2mm gauge, 40mm mesh.',
    priceIndicator: 'Starting from ₹13 / sq.ft.',
    features: ['Vertical Shaft High-Tension Anchoring', 'Highly Aerodynamic (No noise in high winds)', 'Corrosion-Free Heavy Fasteners', 'Prevents trash accumulation in shafts'],
    faqs: [
      { question: 'How do you clean duct area nets?', answer: 'They require no manual cleaning. Their dust-repellent nature and high-tension fitment ensure rain and wind naturally clean them.' }
    ]
  },
  // 18. Open Area Safety Nets
  {
    slug: 'open-area-safety-nets',
    title: 'Open Area Safety Nets',
    category: 'bird-safety',
    categoryLabel: 'Bird & Child Safety Nets',
    tagline: 'Custom wide-span net rigs for courtyards, schools, and atriums.',
    description: 'Secure large, open-air high-ceiling spaces like school playgrounds, hotel courtyards, and shopping mall atriums. We configure and tension wide-span nets using high-tension structural steel rigging lines.',
    materialSpec: 'High-strength UV polymer monofilament, custom structural steel framework.',
    priceIndicator: 'Starting from ₹15 / sq.ft.',
    features: ['Wide-Area Engineered Rigging', 'Durable under heavy wind loads', 'Virtually Invisible Overhead Coverage', '5 Years Comprehensive Warranties'],
    faqs: [
      { question: 'Can we install these without wall supports?', answer: 'Yes. We erect heavy-gauge hollow-section iron or stainless steel poles to anchor the high-tension networks securely.' }
    ]
  },
  // 19. Staircase Safety Nets
  {
    slug: 'staircase-safety-nets',
    title: 'Staircase Safety Nets',
    category: 'bird-safety',
    categoryLabel: 'Bird & Child Safety Nets',
    tagline: 'Protect kids and elderly from dangerous falls in stairwells and banisters.',
    description: 'Stairwells in schools, residential complexes, and villas pose high risks for kids and senior citizens. Our Staircase Safety Nets cover open banisters and central spiral voids, creating a soft but extremely sturdy fall-safety barrier.',
    materialSpec: 'Highly elastic soft-nylon copolymer, tight 20mm mesh.',
    priceIndicator: 'Starting from ₹14 / sq.ft.',
    features: ['Impact Cushioning Fiber Mesh', 'Soft Textured Threading (No friction burns)', 'Custom Fit for Spiral and Straight Stairwells', 'Clean and Minimal Visual Footprint'],
    faqs: [
      { question: 'Will it spoil the beauty of my wooden banisters?', answer: 'We use ultra-fine translucent or matching color cords and non-invasive wood-friendly anchoring sleeves to maintain your interior aesthetics.' }
    ]
  },
  // 20. Swimming Pool Safety Nets
  {
    slug: 'swimming-pool-safety-nets',
    title: 'Swimming Pool Safety Nets',
    category: 'bird-safety',
    categoryLabel: 'Bird & Child Safety Nets',
    tagline: 'Keep children and pets safe from accidental pool drowning.',
    description: 'Accidental drowning is a major hazard for properties with swimming pools. Our high-tension Swimming Pool Safety Nets fit tightly over open pools, supporting weights up to 100+ kg to completely protect children and pets from entering the water unsupervised.',
    materialSpec: '4mm heavy-gauge blue polyethylene cord, UV and chlorine treated.',
    priceIndicator: 'Starting from ₹25 / sq.ft.',
    features: ['Supports 100+ kg impact weight', 'Chlorine and Salt Water Proof Cordage', 'Quick Tensioning Hook System (Easy on/off in 5 min)', 'Lightweight and compact storage'],
    faqs: [
      { question: 'Is it easy for me to remove and reinstall the net daily?', answer: 'Yes, the pool net features a quick-release tensioning wheel and lightweight plastic/brass deck hooks. You can remove or secure it in under 5 minutes.' }
    ]
  },
  // 21. Monkey Net for Balconies
  {
    slug: 'monkey-net-for-balconies',
    title: 'Monkey Safety Nets for Balcony',
    category: 'bird-safety',
    categoryLabel: 'Bird & Child Safety Nets',
    tagline: 'Heavy-gauge steel-reinforced nets to keep destructive monkeys away.',
    description: 'Monkeys can easily tear through standard bird nets and cause damage. Our specialized Monkey Nets are built with thick high-density polyethylene and integrated stainless steel cores, creating an impenetrable barrier against monkeys.',
    materialSpec: '3.0mm thick reinforced HDPE with internal steel wire braiding.',
    priceIndicator: 'Starting from ₹16 / sq.ft.',
    features: ['Chew-proof & Cut-proof Steel Core', 'Heavy-Duty SS Drill Fastening', 'Toughened Border Cable Alignment', 'Resists aggressive monkey attacks'],
    faqs: [
      { question: 'Can monkeys tear through this net?', answer: 'No, the steel-wire core prevents chewing or tearing. When installed with high-tension SS anchors, monkeys cannot pull it apart.' }
    ]
  },
  // 22. HDPE Nets & Nylon Nets
  {
    slug: 'hdpe-nets-nylon-nets',
    title: 'HDPE Nets & Nylon Safety Nets',
    category: 'bird-safety',
    categoryLabel: 'Bird & Child Safety Nets',
    tagline: 'Industrial-grade polymer nets built for high-end strength and durability.',
    description: 'We stock and install both High-Density Polyethylene (HDPE) and Copolymer Nylon safety nets. Discover which material suits your needs best, from lightweight, dust-free HDPE to maximum stretch, high-impact Nylon networks.',
    materialSpec: '100% virgin nylon copolymer & high-density polyethylene options.',
    priceIndicator: 'Starting from ₹12 / sq.ft.',
    features: ['UV Stabilized polymer cores', 'High node-breaking thresholds', 'Diverse colors & mesh configurations', 'Certified batch testing'],
    faqs: [
      { question: 'What is the difference between HDPE and Nylon?', answer: 'HDPE is plastic-based, completely waterproof, lighter, and doesn\'t absorb moisture (great for outdoor bird control). Nylon has higher elasticity and impact resistance, making it better for fall-safety.' }
    ]
  },

  // 2. Invisible Grill Nets / Invisible Grills
  // 23. Invisible Grill Nets
  {
    slug: 'invisible-grill-nets',
    title: 'Stainless Steel Invisible Grills',
    category: 'invisible-grill',
    categoryLabel: 'Invisible Grill Systems',
    tagline: 'The modern replacement for ugly iron grills. Maximum safety, zero view blockage.',
    description: 'Upgrade your home aesthetics with our premium Invisible Grills. Replacing heavy, old-fashioned iron window grills, these high-tensile stainless steel cables are spaced at 2 to 4 inches, providing complete safety against falls while preserving the stunning panoramic views of your high-rise apartment.',
    materialSpec: '316 Marine Grade Stainless Steel Wire with high-performance Nylon/Teflon coating, 2mm-3mm diameter.',
    priceIndicator: 'Starting from ₹110 / sq.ft. (Including installation)',
    features: ['High-Grade SS 316 Wire Core', 'Rust-Proof and Salt-Water Proof Coating', 'Breaking Threshold of up to 400+ kg', 'Compatible with smart home security alarms'],
    faqs: [
      { question: 'Can these steel cables be cut by intruders?', answer: 'Our invisible grills are made of high-tensile 316 Marine Grade Stainless Steel. Cutting them requires industrial wire-cutters, making them highly secure against typical intrusions.' },
      { question: 'Do they rust over time?', answer: 'Not at all. We use Grade 316 SS wires coated in protective Nylon/Teflon, guaranteeing zero rust even in highly humid and coastal environments.' }
    ]
  },
  // 24. Invisible Grill Nets for Balcony
  {
    slug: 'invisible-grill-nets-for-balcony',
    title: 'Invisible Grills for Balcony',
    category: 'invisible-grill',
    categoryLabel: 'Invisible Grill Systems',
    tagline: 'Protect your balcony with high-tension, premium architectural steel cables.',
    description: 'Secure your high-rise balconies without feeling caged. Our Balcony Invisible Grills feature vertical or horizontal stainless steel lines anchored to a heavy-gauge aluminum track, providing premium protection for kids and pets while maintaining an open, elegant look.',
    materialSpec: 'Grade 316 Stainless Steel wire core, heavy anodized aluminum tracks.',
    priceIndicator: 'Starting from ₹120 / sq.ft.',
    features: ['Unobstructed Panoramic Skyline Views', 'Integrated Aluminum H-Track Anchoring', 'Optimal 3-inch gap (Child & Pet Safe)', 'Sleek, Minimalistic and Modern Visuals'],
    faqs: [
      { question: 'Can they be installed horizontally or vertically?', answer: 'Yes, we can install them either vertically (recommended for children) or horizontally, depending on your building structure and design preferences.' }
    ]
  },
  // 25. Invisible Net for Balcony
  {
    slug: 'invisible-net-for-balcony',
    title: 'Invisible Balcony Safety Systems',
    category: 'invisible-grill',
    categoryLabel: 'Invisible Grill Systems',
    tagline: 'Combine high-tensile safety with a clean, open skyline view.',
    description: 'Get the best of both worlds with our Invisible Balcony Nets and steel systems. Spaced perfectly to provide heavy-duty security against falls, these systems integrate seamlessly into modern luxury facades and penthouse apartments.',
    materialSpec: 'Teflon-shielded SS 316 wire cable, high corrosion resistance.',
    priceIndicator: 'Starting from ₹115 / sq.ft.',
    features: ['High Light Transmittance', 'Architectural-grade premium fitment', 'Easy clean and maintenance free', 'Fire-Safe (Can be cut with cutters in emergencies)'],
    faqs: [
      { question: 'Are these grills safe in case of fire emergencies?', answer: 'Yes, unlike rigid iron grates that trap residents, invisible grills can be snipped with a specialized wire cutter in case of an emergency evacuation.' }
    ]
  },

  // 3. Sports Nets
  // 26. Cricket Practice Nets
  {
    slug: 'cricket-practice-nets',
    title: 'Cricket Practice Nets',
    category: 'sports-industrial',
    categoryLabel: 'Sports Nets & Rigging',
    tagline: 'High-impact cricket enclosures for schools, academies, and private lawns.',
    description: 'Refine your batting and bowling techniques in a controlled environment. Our premium Cricket Practice Nets are engineered to absorb heavy leather cricket ball impacts, preventing safety issues and keeping sports practice highly efficient.',
    materialSpec: 'Heavy-gauge 2.5mm to 3.5mm HDPE, knotted, tight 1.75-inch mesh.',
    priceIndicator: 'Starting from ₹15 / sq.ft.',
    features: ['Heavy Leather Impact Resistant', 'Overhead Rooftop Containment Rigs', 'Sturdy MS/GI steel framework setups', 'UV Stabilized against extreme heat'],
    faqs: [
      { question: 'Do you set up the metal pole structures?', answer: 'Yes, we supply and install heavy-gauge galvanized iron (GI) support frames, custom-built to support heavy impacts and wind pressure.' }
    ]
  },
  // 27. Sports Ball Stop Nets
  {
    slug: 'sports-ball-stop-nets',
    title: 'Sports Ball Stop Netting',
    category: 'sports-industrial',
    categoryLabel: 'Sports Nets & Rigging',
    tagline: 'High perimeter netting to prevent sports balls from flying out of court.',
    description: 'Prevent soccer balls, basketballs, and tennis balls from flying out of sports grounds, breaking window panes, or causing vehicle accidents. Our Sports Ball Stop Nets provide secure high-perimeter boundaries.',
    materialSpec: 'Knotted high density polyethylene, 40mm to 100mm mesh variants.',
    priceIndicator: 'Starting from ₹14 / sq.ft.',
    features: ['High Perimeter Boundaries (up to 30+ feet)', 'Saline and weather treated fiber core', 'Excellent impact energy dissipation', 'Low Wind-Resistance Mesh Clearance'],
    faqs: [
      { question: 'What heights can you install these stop nets?', answer: 'We custom engineer high-mast steel wire structures to hoist ball stop nets up to heights of 30 to 45 feet.' }
    ]
  },
  // 28. Football Stop Netting
  {
    slug: 'football-stop-netting',
    title: 'Football Boundary Stop Netting',
    category: 'sports-industrial',
    categoryLabel: 'Sports Nets & Rigging',
    tagline: 'Extremely tough, thick-cord nets to contain high-velocity footballs.',
    description: 'Keep football matches contained and secure. Engineered with thick-gauge double-knotted HDPE cords, our Football Stop Nets absorb high-velocity impacts without tearing or losing shape, maintaining safe boundaries.',
    materialSpec: '3.0mm thick gauge HDPE, 100mm square mesh spacing.',
    priceIndicator: 'Starting from ₹16 / sq.ft.',
    features: ['Heavy impact absorption', 'Square mesh shape (Prevents deformation)', 'UV Treated for outdoor heat stability', 'Anti-Sagging tension system rigging'],
    faqs: [
      { question: 'Will the net sag over time due to weather?', answer: 'No, we rig our nets with a high-tension internal steel wire core that maintains horizontal layout alignment without sagging.' }
    ]
  },
  // 29. Terrace Cricket Nets
  {
    slug: 'terrace-cricket-nets',
    title: 'Terrace Cricket Practice Nets',
    category: 'sports-industrial',
    categoryLabel: 'Sports Nets & Rigging',
    tagline: 'Convert your empty rooftop into a professional sports academy.',
    description: 'Make the most of your rooftop space. Our Terrace Cricket Nets enclose the entire perimeter and roof of your terrace, allowing players to play full cricket shots without any fear of losing balls or causing accidents below.',
    materialSpec: 'Full box cage design using 2.5mm UV-treated HDPE, double-locked boundaries.',
    priceIndicator: 'Starting from ₹18 / sq.ft.',
    features: ['360-Degree Box Enclosure Design', 'Frictionless and safe ball returns', 'Highly wind-resistant framing', 'Safe play environment on rooftops'],
    faqs: [
      { question: 'Is it safe to construct this on residential rooftops?', answer: 'Yes, we use structural lightweight high-tensile galvanized framing to ensure zero load issues on your building roof.' }
    ]
  },
  // 30. Sports Nets Installation
  {
    slug: 'sports-nets-installation',
    title: 'Professional Sports Nets Installation',
    category: 'sports-industrial',
    categoryLabel: 'Sports Nets & Rigging',
    tagline: 'Turnkey sports netting setups with engineered metal supports.',
    description: 'Get full-fledged turnkey design, manufacturing, and rigging for your sports facilities. From school fields to sports academies, our engineers set up heavy-duty, certified safety containment networks.',
    materialSpec: 'Turnkey industrial rigging using certified steel wire cables and anchors.',
    priceIndicator: 'Starting from ₹15 / sq.ft. (Including poles & cabling)',
    features: ['Turnkey Design & Execution', 'Structural Steel GI Column Anchors', 'Batched Strength Certificates', 'Fast 48-Hour Professional Execution'],
    faqs: [
      { question: 'Do you offer custom sizing?', answer: 'Yes, we custom fabricate the framing, poles, and net mesh dimensions to match your specific layout exactly.' }
    ]
  },
  // 31. All Sports Nets
  {
    slug: 'all-sports-nets',
    title: 'All-Sports Safety Netting',
    category: 'sports-industrial',
    categoryLabel: 'Sports Nets & Rigging',
    tagline: 'Custom nets for golf, tennis, volleyball, basketball, and hockey.',
    description: 'We fabricate and install customized high-performance netting systems for all sports, including fine-mesh golf impact nets, volleyball perimeter lines, tennis backstops, and customized multi-sport indoor play complexes.',
    materialSpec: 'Nylon & HDPE monofilaments with diverse mesh spacing (10mm to 120mm).',
    priceIndicator: 'Starting from ₹14 / sq.ft.',
    features: ['Golf, Tennis & Soccer Custom Mesh Sizes', 'Heavy-Duty double-lock borders', 'Anti-Friction fiber textures', 'Durable, long-term and UV stable'],
    faqs: [
      { question: 'Do you supply golf practice nets?', answer: 'Yes, we install specialized ultra-fine high-impact nets specifically designed to arrest high-velocity golf balls without bounce-back hazards.' }
    ]
  }
];
