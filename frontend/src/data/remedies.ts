export interface Remedy {
  id: string;
  name: {
    en: string;
    ta: string;
  };
  symptoms: {
    en: string[];
    ta: string[];
  };
  ingredients: {
    en: string[];
    ta: string[];
  };
  preparation: {
    en: string;
    ta: string;
  };
  dosage: {
    en: string;
    ta: string;
  };
  safetyTips: {
    en: string[];
    ta: string[];
  };
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  prepTime: number; // in minutes
  submittedBy?: string;
  status: 'approved' | 'pending' | 'rejected';
}

export const remedies: Remedy[] = [
  {
    id: '1',
    name: {
      en: 'Turmeric Milk for Cold',
      ta: 'சளிக்கு மஞ்சள் பால்'
    },
    symptoms: {
      en: ['Common Cold', 'Cough', 'Sore Throat', 'Low Immunity'],
      ta: ['சாதாரண சளி', 'இருமல்', 'தொண்டை வலி', 'குறைந்த நோய் எதிர்ப்பு சக்தி']
    },
    ingredients: {
      en: ['1 cup milk', '1/2 tsp turmeric powder', '1/4 tsp black pepper', '1 tsp honey', 'Pinch of ginger powder'],
      ta: ['1 கப் பால்', '1/2 டீஸ்பூன் மஞ்சள் தூள்', '1/4 டீஸ்பூன் கருப்பு மிளகு', '1 டீஸ்பூன் தேன்', 'சிறிது இஞ்சி தூள்']
    },
    preparation: {
      en: 'Heat the milk in a saucepan. Add turmeric powder, black pepper, and ginger powder. Bring to a gentle boil. Remove from heat and add honey. Stir well and serve warm.',
      ta: 'ஒரு பாத்திரத்தில் பாலை சூடாக்கவும். மஞ்சள் தூள், கருப்பு மிளகு, இஞ்சி தூள் சேர்க்கவும். மெதுவாக கொதிக்க வைக்கவும். அடுப்பிலிருந்து இறக்கி தேன் சேர்க்கவும். நன்றாக கலந்து சூடாக பரிமாறவும்.'
    },
    dosage: {
      en: 'Drink once daily before bedtime for 3-5 days',
      ta: 'தினமும் இரவு படுக்கைக்கு முன் ஒருமுறை 3-5 நாட்கள் குடிக்கவும்'
    },
    safetyTips: {
      en: ['Not suitable for children under 1 year due to honey', 'Consult doctor if symptoms persist', 'May stain teeth - rinse mouth after consumption'],
      ta: ['தேன் காரணமாக 1 வயதுக்கு குறைவான குழந்தைகளுக்கு ஏற்றதல்ல', 'அறிகுறிகள் தொடர்ந்தால் மருத்துவரை அணுகவும்', 'பற்களில் கரை படலாம் - குடித்த பின் வாய் கொப்பளிக்கவும்']
    },
    category: 'respiratory',
    difficulty: 'easy',
    prepTime: 10,
    status: 'approved'
  },
  {
    id: '2',
    name: {
      en: 'Neem Leaf Paste for Skin Issues',
      ta: 'தோல் பிரச்சனைகளுக்கு வேப்பிலை பேஸ்ட்'
    },
    symptoms: {
      en: ['Acne', 'Eczema', 'Skin Irritation', 'Minor Cuts', 'Insect Bites'],
      ta: ['முகப்பரு', 'அரிக்கும் தோல் வியாதி', 'தோல் எரிச்சல்', 'சிறிய காயங்கள்', 'பூச்சி கடி']
    },
    ingredients: {
      en: ['10-15 fresh neem leaves', '1 tbsp rose water', '1/2 tsp turmeric powder', '1 tsp coconut oil'],
      ta: ['10-15 புதிய வேப்பிலைகள்', '1 டேபிள்ஸ்பூன் ரோஸ் வாட்டர்', '1/2 டீஸ்பூன் மஞ்சள் தூள்', '1 டீஸ்பூன் தேங்காய் எண்ணெய்']
    },
    preparation: {
      en: 'Wash neem leaves thoroughly. Grind them with rose water to form a smooth paste. Add turmeric powder and coconut oil. Mix well to create a uniform paste.',
      ta: 'வேப்பிலைகளை நன்றாக கழுவவும். ரோஸ் வாட்டருடன் சேர்த்து மையாக அரைக்கவும். மஞ்சள் தூள் மற்றும் தேங்காய் எண்ணெய் சேர்க்கவும். சமசமான பேஸ்ட் ஆக கலக்கவும்.'
    },
    dosage: {
      en: 'Apply on affected area, leave for 15-20 minutes, then wash with lukewarm water. Use 2-3 times per week.',
      ta: 'பாதிக்கப்பட்ட பகுதியில் தடவவும், 15-20 நிமிடங்கள் வைத்திருந்து பின் வெதுவெதுப்பான நீரில் கழுவவும். வாரத்திற்கு 2-3 முறை பயன்படுத்தவும்.'
    },
    safetyTips: {
      en: ['Test on small skin area first', 'Avoid contact with eyes', 'Discontinue if irritation occurs', 'Use only fresh neem leaves'],
      ta: ['முதலில் சிறிய தோல் பகுதியில் சோதிக்கவும்', 'கண்களில் படாமல் பார்த்துக்கொள்ளவும்', 'எரிச்சல் ஏற்பட்டால் நிறுத்தவும்', 'புதிய வேப்பிலைகளை மட்டும் பயன்படுத்தவும்']
    },
    category: 'skin',
    difficulty: 'medium',
    prepTime: 15,
    status: 'approved'
  },
  {
    id: '3',
    name: {
      en: 'Ginger Honey Tea for Digestion',
      ta: 'செரிமானத்திற்கு இஞ்சி தேன் டீ'
    },
    symptoms: {
      en: ['Indigestion', 'Nausea', 'Bloating', 'Loss of Appetite', 'Morning Sickness'],
      ta: ['அஜீரணம்', 'குமட்டல்', 'வயிறு உப்புசம்', 'பசியின்மை', 'காலை நேர குமட்டல்']
    },
    ingredients: {
      en: ['1-inch fresh ginger root', '1 cup water', '1 tbsp honey', '1/2 lemon juice', 'Few mint leaves (optional)'],
      ta: ['1 இன்ச் புதிய இஞ்சி', '1 கப் தண்ணீர்', '1 டேபிள்ஸ்பூன் தேன்', '1/2 எலுமிச்சை சாறு', 'சில புதினா இலைகள் (விரும்பினால்)']
    },
    preparation: {
      en: 'Slice ginger thinly. Boil water and add ginger slices. Simmer for 5-7 minutes. Strain the tea. Add honey and lemon juice. Garnish with mint leaves if desired.',
      ta: 'இஞ்சியை மெல்லியதாக நறுக்கவும். தண்ணீரை கொதிக்க வைத்து இஞ்சி துண்டுகளை சேர்க்கவும். 5-7 நிமிடங்கள் சிறு தீயில் வைக்கவும். வடிகட்டவும். தேன் மற்றும் எலுமிச்சை சாறு சேர்க்கவும். விரும்பினால் புதினா இலைகள் சேர்க்கவும்.'
    },
    dosage: {
      en: 'Drink 1 cup 30 minutes before meals, 2-3 times daily',
      ta: 'உணவுக்கு 30 நிமிடங்கள் முன் 1 கப், தினமும் 2-3 முறை குடிக்கவும்'
    },
    safetyTips: {
      en: ['Avoid if you have gallbladder stones', 'Consult doctor if pregnant', 'May interact with blood thinning medications'],
      ta: ['பித்தப்பை கற்கள் இருந்தால் தவிர்க்கவும்', 'கர்ப்பமாக இருந்தால் மருத்துவரை கேட்கவும்', 'இரத்தம் மெலிக்கும் மருந்துகளுடன் தொடர்பு கொள்ளலாம்']
    },
    category: 'digestive',
    difficulty: 'easy',
    prepTime: 12,
    status: 'approved'
  },
  {
    id: '4',
    name: {
      en: 'Tulsi Kashayam for Fever',
      ta: 'காய்ச்சலுக்கு துளசி கஷாயம்'
    },
    symptoms: {
      en: ['Fever', 'Body Aches', 'Headache', 'Respiratory Infections', 'General Weakness'],
      ta: ['காய்ச்சல்', 'உடல் வலி', 'தலைவலி', 'சுவாச தொற்று', 'பொதுவான பலவீனம்']
    },
    ingredients: {
      en: ['20 fresh tulsi leaves', '1 cup water', '1/2 tsp black pepper powder', '1 tsp jaggery', '1/4 tsp dry ginger powder'],
      ta: ['20 புதிய துளசி இலைகள்', '1 கப் தண்ணீர்', '1/2 டீஸ்பூன் கருப்பு மிளகு தூள்', '1 டீஸ்பூன் வெல்லம்', '1/4 டீஸ்பூன் சுக்கு தூள்']
    },
    preparation: {
      en: 'Wash tulsi leaves thoroughly. Boil water and add tulsi leaves. Add black pepper and dry ginger powder. Boil until water reduces to half. Strain and add jaggery. Mix well.',
      ta: 'துளசி இலைகளை நன்றாக கழுவவும். தண்ணீரை கொதிக்க வைத்து துளசி இலைகளை சேர்க்கவும். கருப்பு மிளகு மற்றும் சுக்கு தூள் சேர்க்கவும். தண்ணீர் பாதியாக குறையும் வரை கொதிக்க வைக்கவும். வடிகட்டி வெல்லம் சேர்க்கவும். நன்றாக கலக்கவும்.'
    },
    dosage: {
      en: 'Drink warm, 2-3 times daily on empty stomach until fever subsides',
      ta: 'வெதுவெதுப்பாக, காலியான வயிற்றில் தினமும் 2-3 முறை காய்ச்சல் குறையும் வரை குடிக்கவும்'
    },
    safetyTips: {
      en: ['Use only fresh tulsi leaves', 'Consult doctor if fever persists beyond 3 days', 'Not recommended for children under 2 years'],
      ta: ['புதிய துளசி இலைகளை மட்டும் பயன்படுத்தவும்', '3 நாட்களுக்கு மேல் காய்ச்சல் இருந்தால் மருத்துவரை அணுகவும்', '2 வயதுக்கு குறைவான குழந்தைகளுக்கு பரிந்துரைக்கப்படாது']
    },
    category: 'general',
    difficulty: 'medium',
    prepTime: 20,
    status: 'approved'
  },
  {
    id: '5',
    name: {
      en: 'Aloe Vera Gel for Burns',
      ta: 'தீக்காயத்திற்கு கற்றாழை ஜெல்'
    },
    symptoms: {
      en: ['Minor Burns', 'Sunburn', 'Skin Inflammation', 'Dry Skin', 'Minor Wounds'],
      ta: ['சிறிய தீக்காயங்கள்', 'சூரிய ஒளி காயம்', 'தோல் வீக்கம்', 'வறண்ட தோல்', 'சிறிய காயங்கள்']
    },
    ingredients: {
      en: ['1 fresh aloe vera leaf', '1 tsp rose water (optional)', '1/2 tsp coconut oil (optional)'],
      ta: ['1 புதிய கற்றாழை இலை', '1 டீஸ்பூன் ரோஸ் வாட்டர் (விரும்பினால்)', '1/2 டீஸ்பூன் தேங்காய் எண்ணெய் (விரும்பினால்)']
    },
    preparation: {
      en: 'Cut aloe vera leaf lengthwise. Scoop out the clear gel using a spoon. Mix with rose water if skin is very dry. Apply directly to affected area. For better consistency, you can blend the gel.',
      ta: 'கற்றாழை இலையை நீளவாக்கில் வெட்டவும். ஸ்பூன் மூலம் வெளிர் ஜெல்லை எடுக்கவும். தோல் மிகவும் வறண்டிருந்தால் ரோஸ் வாட்டர் கலக்கவும். பாதிக்கப்பட்ட பகுதியில் நேரடியாக தடவவும். சிறந்த பாதமுக்காக ஜெல்லை அரைக்கலாம்.'
    },
    dosage: {
      en: 'Apply gently 3-4 times daily until healing occurs',
      ta: 'குணமாகும் வரை தினமும் 3-4 முறை மெதுவாக தடவவும்'
    },
    safetyTips: {
      en: ['Use only the clear inner gel', 'Test on small area first', 'Keep the gel refrigerated for better effect', 'Avoid yellow latex near the skin'],
      ta: ['வெளிர் உள் ஜெல்லை மட்டும் பயன்படுத்தவும்', 'முதலில் சிறிய பகுதியில் சோதிக்கவும்', 'சிறந்த பலனுக்கு ஜெல்லை குளிர்சாதன பெட்டியில் வைக்கவும்', 'தோலுக்கு அருகில் உள்ள மஞ்சள் latex ஐ தவிர்க்கவும்']
    },
    category: 'skin',
    difficulty: 'easy',
    prepTime: 5,
    status: 'approved'
  },
  {
    id: '6',
    name: {
      en: 'Fenugreek Water for Diabetes',
      ta: 'சர்க்கரை நோய்க்கு வெந்தய நீர்'
    },
    symptoms: {
      en: ['High Blood Sugar', 'Diabetes Management', 'Weight Management', 'Cholesterol'],
      ta: ['உயர் இரத்த சர்க்கரை', 'நீரிழிவு மேலாண்மை', 'எடை மேலாண்மை', 'கொலஸ்ட்ரால்']
    },
    ingredients: {
      en: ['1 tbsp fenugreek seeds', '1 cup water'],
      ta: ['1 டேபிள்ஸ்பூன் வெந்தயம்', '1 கப் தண்ணீர்']
    },
    preparation: {
      en: 'Soak fenugreek seeds in water overnight. In the morning, strain and drink the water on an empty stomach. You can also consume the soaked seeds.',
      ta: 'வெந்தயத்தை இரவு முழுவதும் தண்ணீரில் ஊற வைக்கவும். காலையில் வடிகட்டி காலியான வயிற்றில் நீரை குடிக்கவும். ஊறிய வெந்தயத்தையும் சாப்பிடலாம்.'
    },
    dosage: {
      en: 'Drink daily on empty stomach for best results',
      ta: 'சிறந்த பலன்களுக்கு தினமும் காலியான வயிற்றில் குடிக்கவும்'
    },
    safetyTips: {
      en: ['Consult doctor if on diabetes medication', 'May lower blood sugar significantly', 'Avoid during pregnancy', 'Start with small amounts'],
      ta: ['நீரிழிவு மருந்து உட்கொண்டால் மருத்துவரை கலந்தாலோசிக்கவும்', 'இரத்த சர்க்கரையை கணிசமாக குறைக்கலாம்', 'கர்ப்ப காலத்தில் தவிர்க்கவும்', 'சிறிய அளவுகளில் தொடங்கவும்']
    },
    category: 'general',
    difficulty: 'easy',
    prepTime: 5,
    status: 'approved'
  },
  {
    id: '7',
    name: {
      en: 'Garlic Milk for Arthritis',
      ta: 'மூட்டு வலிக்கு பூண்டு பால்'
    },
    symptoms: {
      en: ['Joint Pain', 'Arthritis', 'Inflammation', 'Stiffness'],
      ta: ['மூட்டு வலி', 'கீல்வாதம்', 'வீக்கம்', 'விறைப்பு']
    },
    ingredients: {
      en: ['3-4 garlic cloves', '1 cup milk', '1/4 tsp turmeric', 'Pinch of black pepper'],
      ta: ['3-4 பூண்டு பற்கள்', '1 கப் பால்', '1/4 டீஸ்பூன் மஞ்சள்', 'சிறிது கருப்பு மிளகு']
    },
    preparation: {
      en: 'Crush garlic cloves. Heat milk and add crushed garlic, turmeric, and black pepper. Simmer for 5 minutes. Strain if desired and drink warm.',
      ta: 'பூண்டை நசுக்கவும். பாலை சூடாக்கி நசுக்கிய பூண்டு, மஞ்சள், கருப்பு மிளகு சேர்க்கவும். 5 நிமிடங்கள் சிறு தீயில் வைக்கவும். விரும்பினால் வடிகட்டி சூடாக குடிக்கவும்.'
    },
    dosage: {
      en: 'Drink once daily before bedtime',
      ta: 'தினமும் படுக்கைக்கு முன் ஒருமுறை குடிக்கவும்'
    },
    safetyTips: {
      en: ['May cause stomach upset in some', 'Avoid if allergic to garlic', 'Consult doctor if on blood thinners'],
      ta: ['சிலருக்கு வயிற்று கோளாறு ஏற்படலாம்', 'பூண்டு அலர்ஜி இருந்தால் தவிர்க்கவும்', 'இரத்தம் மெலிக்கும் மருந்துகளில் இருந்தால் மருத்துவரை கலந்தாலோசிக்கவும்']
    },
    category: 'general',
    difficulty: 'easy',
    prepTime: 10,
    status: 'approved'
  },
  {
    id: '8',
    name: {
      en: 'Amla Juice for Hair Growth',
      ta: 'முடி வளர்ச்சிக்கு நெல்லிக்காய் சாறு'
    },
    symptoms: {
      en: ['Hair Fall', 'Weak Hair', 'Premature Graying', 'Dandruff'],
      ta: ['முடி உதிர்தல்', 'பலவீன முடி', 'முன்கூட்டிய நரை', 'பொடுகு']
    },
    ingredients: {
      en: ['3-4 fresh amla fruits', '1 cup water', '1 tsp honey', '1/2 tsp lemon juice'],
      ta: ['3-4 புதிய நெல்லிக்காய்கள்', '1 கப் தண்ணீர்', '1 டீஸ்பூன் தேன்', '1/2 டீஸ்பூன் எலுமிச்சை சாறு']
    },
    preparation: {
      en: 'Deseed and chop amla. Blend with water to make a smooth juice. Strain and add honey and lemon juice. Mix well.',
      ta: 'நெல்லிக்காயை விதை நீக்கி நறுக்கவும். தண்ணீருடன் சேர்த்து மிக்ஸியில் அரைக்கவும். வடிகட்டி தேன் மற்றும் எலுமிச்சை சாறு சேர்க்கவும். நன்றாக கலக்கவும்.'
    },
    dosage: {
      en: 'Drink 1/4 cup daily on empty stomach or apply on scalp 2-3 times per week',
      ta: 'தினமும் காலியான வயிற்றில் 1/4 கப் குடிக்கவும் அல்லது வாரத்திற்கு 2-3 முறை தலையில் தடவவும்'
    },
    safetyTips: {
      en: ['May cause acidity in some', 'Use fresh amla for best results', 'Consult doctor if on medications'],
      ta: ['சிலருக்கு அமிலத்தன்மை ஏற்படலாம்', 'சிறந்த பலன்களுக்கு புதிய நெல்லிக்காய் பயன்படுத்தவும்', 'மருந்துகள் எடுத்துக்கொண்டால் மருத்துவரை கலந்தாலோசிக்கவும்']
    },
    category: 'skin',
    difficulty: 'medium',
    prepTime: 15,
    status: 'approved'
  },
  {
    id: '9',
    name: {
      en: 'Ajwain Water for Gas Relief',
      ta: 'வாயு தொல்லைக்கு ஓமம் நீர்'
    },
    symptoms: {
      en: ['Gas', 'Bloating', 'Stomach Pain', 'Indigestion'],
      ta: ['வாயு', 'வயிறு உப்புசம்', 'வயிற்று வலி', 'அஜீரணம்']
    },
    ingredients: {
      en: ['1 tsp ajwain seeds', '1 cup water', 'Pinch of salt'],
      ta: ['1 டீஸ்பூன் ஓமம்', '1 கப் தண்ணீர்', 'சிறிது உப்பு']
    },
    preparation: {
      en: 'Boil water and add ajwain seeds. Simmer for 5 minutes. Strain and add a pinch of salt. Drink warm.',
      ta: 'தண்ணீரை கொதிக்க வைத்து ஓமம் சேர்க்கவும். 5 நிமிடங்கள் சிறு தீயில் வைக்கவும். வடிகட்டி சிறிது உப்பு சேர்க்கவும். சூடாக குடிக்கவும்.'
    },
    dosage: {
      en: 'Drink 1 cup after meals as needed',
      ta: 'தேவைப்படும்போது உணவுக்கு பின் 1 கப் குடிக்கவும்'
    },
    safetyTips: {
      en: ['Avoid during pregnancy', 'May increase body heat', 'Do not consume in excess'],
      ta: ['கர்ப்ப காலத்தில் தவிர்க்கவும்', 'உடல் வெப்பத்தை அதிகரிக்கலாம்', 'அதிகமாக உட்கொள்ளாதீர்கள்']
    },
    category: 'digestive',
    difficulty: 'easy',
    prepTime: 8,
    status: 'approved'
  },
  {
    id: '10',
    name: {
      en: 'Honey Lemon Water for Weight Loss',
      ta: 'எடை குறைப்புக்கு தேன் எலுமிச்சை நீர்'
    },
    symptoms: {
      en: ['Obesity', 'Slow Metabolism', 'Weight Management'],
      ta: ['உடல் பருமன்', 'மெதுவான வளர்சிதை மாற்றம்', 'எடை மேலாண்மை']
    },
    ingredients: {
      en: ['1 tbsp honey', '1/2 lemon juice', '1 cup warm water', 'Pinch of cinnamon (optional)'],
      ta: ['1 டேபிள்ஸ்பூன் தேன்', '1/2 எலுமிச்சை சாறு', '1 கப் வெதுவெதுப்பான நீர்', 'சிறிது இலவங்கப்பட்டை (விரும்பினால்)']
    },
    preparation: {
      en: 'Heat water until warm (not boiling). Add honey and lemon juice. Stir well. Add cinnamon if desired.',
      ta: 'தண்ணீரை வெதுவெதுப்பாக சூடாக்கவும் (கொதிக்க வைக்க வேண்டாம்). தேன் மற்றும் எலுமிச்சை சாறு சேர்க்கவும். நன்றாக கலக்கவும். விரும்பினால் இலவங்கப்பட்டை சேர்க்கவும்.'
    },
    dosage: {
      en: 'Drink daily on empty stomach in the morning',
      ta: 'தினமும் காலையில் காலியான வயிற்றில் குடிக்கவும்'
    },
    safetyTips: {
      en: ['Use warm water, not hot', 'Do not add honey to boiling water', 'Best combined with healthy diet and exercise'],
      ta: ['சூடான நீரை பயன்படுத்தவும், சூடு அதிகமாக இருக்கக்கூடாது', 'கொதிக்கும் நீரில் தேன் சேர்க்க வேண்டாம்', 'ஆரோக்கியமான உணவு மற்றும் உடற்பயிற்சியுடன் சிறந்தது']
    },
    category: 'general',
    difficulty: 'easy',
    prepTime: 5,
    status: 'approved'
  },
  {
    id: '11',
    name: {
      en: 'Coconut Oil for Dry Skin',
      ta: 'வறண்ட தோலுக்கு தேங்காய் எண்ணெய்'
    },
    symptoms: {
      en: ['Dry Skin', 'Rough Patches', 'Cracked Heels', 'Eczema'],
      ta: ['வறண்ட தோல்', 'கரடுமுரடான பகுதிகள்', 'வெடித்த குதிகால்', 'அரிக்கும் தோல் வியாதி']
    },
    ingredients: {
      en: ['2 tbsp virgin coconut oil', '1 tsp honey (optional)', 'Few drops vitamin E oil (optional)'],
      ta: ['2 டேபிள்ஸ்பூன் தூய தேங்காய் எண்ணெய்', '1 டீஸ்பூன் தேன் (விரும்பினால்)', 'சில துளிகள் வைட்டமின் E எண்ணெய் (விரும்பினால்)']
    },
    preparation: {
      en: 'Warm the coconut oil slightly. Mix with honey and vitamin E if using. Apply generously on affected areas. Massage gently for better absorption.',
      ta: 'தேங்காய் எண்ணெயை சிறிது சூடாக்கவும். பயன்படுத்தினால் தேன் மற்றும் வைட்டமின் E உடன் கலக்கவும். பாதிக்கப்பட்ட பகுதிகளில் தாராளமாக தடவவும். சிறந்த உறிஞ்சுதலுக்கு மெதுவாக மசாஜ் செய்யவும்.'
    },
    dosage: {
      en: 'Apply 2-3 times daily, especially after bathing',
      ta: 'தினமும் 2-3 முறை, குறிப்பாக குளித்த பின் தடவவும்'
    },
    safetyTips: {
      en: ['Use virgin coconut oil for best results', 'Test on small area first', 'Can be left overnight', 'Safe for all skin types'],
      ta: ['சிறந்த பலன்களுக்கு தூய தேங்காய் எண்ணெய் பயன்படுத்தவும்', 'முதலில் சிறிய பகுதியில் சோதிக்கவும்', 'இரவு முழுவதும் வைக்கலாம்', 'அனைத்து தோல் வகைகளுக்கும் பாதுகாப்பானது']
    },
    category: 'skin',
    difficulty: 'easy',
    prepTime: 5,
    status: 'approved'
  },
  {
    id: '12',
    name: {
      en: 'Cumin Tea for Better Sleep',
      ta: 'நல்ல தூக்கத்திற்கு சீரக டீ'
    },
    symptoms: {
      en: ['Insomnia', 'Restlessness', 'Anxiety', 'Poor Sleep Quality'],
      ta: ['தூக்கமின்மை', 'அமைதியின்மை', 'பதட்டம்', 'மோசமான தூக்க தரம்']
    },
    ingredients: {
      en: ['1 tsp cumin seeds', '1 cup water', '1 tsp honey', 'Pinch of nutmeg powder'],
      ta: ['1 டீஸ்பூன் சீரகம்', '1 கப் தண்ணீர்', '1 டீஸ்பூன் தேன்', 'சிறிது ஜாதிக்காய் தூள்']
    },
    preparation: {
      en: 'Dry roast cumin seeds lightly. Boil water and add roasted cumin. Simmer for 5 minutes. Strain and add honey and nutmeg. Mix well.',
      ta: 'சீரகத்தை லேசாக வறுக்கவும். தண்ணீரை கொதிக்க வைத்து வறுத்த சீரகம் சேர்க்கவும். 5 நிமிடங்கள் சிறு தீயில் வைக்கவும். வடிகட்டி தேன் மற்றும் ஜாதிக்காய் சேர்க்கவும். நன்றாக கலக்கவும்.'
    },
    dosage: {
      en: 'Drink 30 minutes before bedtime',
      ta: 'படுக்கைக்கு 30 நிமிடங்கள் முன் குடிக்கவும்'
    },
    safetyTips: {
      en: ['Do not consume in excess', 'May increase body heat', 'Consult doctor if on sleep medication'],
      ta: ['அதிகமாக உட்கொள்ளாதீர்கள்', 'உடல் வெப்பத்தை அதிகரிக்கலாம்', 'தூக்க மருந்துகள் எடுத்தால் மருத்துவரை கலந்தாலோசிக்கவும்']
    },
    category: 'general',
    difficulty: 'easy',
    prepTime: 10,
    status: 'approved'
  },
  {
    id: '13',
    name: {
      en: 'Coriander Seed Water for Kidney Health',
      ta: 'சிறுநீரக ஆரோக்கியத்திற்கு கொத்தமல்லி விதை நீர்'
    },
    symptoms: {
      en: ['Kidney Stones', 'Urinary Tract Issues', 'Water Retention', 'Detoxification'],
      ta: ['சிறுநீரக கற்கள்', 'சிறுநீர் பாதை பிரச்சனைகள்', 'நீர் தேக்கம்', 'நச்சுத்தன்மை நீக்கம்']
    },
    ingredients: {
      en: ['2 tbsp coriander seeds', '2 cups water'],
      ta: ['2 டேபிள்ஸ்பூன் கொத்தமல்லி விதைகள்', '2 கப் தண்ணீர்']
    },
    preparation: {
      en: 'Soak coriander seeds in water overnight. In the morning, boil for 5 minutes. Let it cool and strain. Drink throughout the day.',
      ta: 'கொத்தமல்லி விதைகளை இரவு முழுவதும் தண்ணீரில் ஊற வைக்கவும். காலையில் 5 நிமிடங்கள் கொதிக்க வைக்கவும். குளிர வைத்து வடிகட்டவும். நாள் முழுவதும் குடிக்கவும்.'
    },
    dosage: {
      en: 'Drink 2 cups daily for 2-3 weeks',
      ta: '2-3 வாரங்களுக்கு தினமும் 2 கப் குடிக்கவும்'
    },
    safetyTips: {
      en: ['Consult doctor if you have kidney disease', 'Stay well hydrated', 'Not a substitute for medical treatment'],
      ta: ['சிறுநீரக நோய் இருந்தால் மருத்துவரை கலந்தாலோசிக்கவும்', 'நன்றாக நீர்ச்சத்துடன் இருக்கவும்', 'மருத்துவ சிகிச்சைக்கு மாற்றாக இல்லை']
    },
    category: 'general',
    difficulty: 'easy',
    prepTime: 8,
    status: 'approved'
  },
  {
    id: '14',
    name: {
      en: 'Moringa Leaf Powder for Anemia',
      ta: 'இரத்த சோகைக்கு முருங்கை இலை தூள்'
    },
    symptoms: {
      en: ['Anemia', 'Low Energy', 'Weakness', 'Iron Deficiency'],
      ta: ['இரத்த சோகை', 'குறைந்த ஆற்றல்', 'பலவீனம்', 'இரும்பு குறைபாடு']
    },
    ingredients: {
      en: ['1 tsp moringa leaf powder', '1 cup warm water', '1 tsp honey', '1/2 tsp lemon juice'],
      ta: ['1 டீஸ்பூன் முருங்கை இலை தூள்', '1 கப் வெதுவெதுப்பான நீர்', '1 டீஸ்பூன் தேன்', '1/2 டீஸ்பூன் எலுமிச்சை சாறு']
    },
    preparation: {
      en: 'Mix moringa powder in warm water. Add honey and lemon juice. Stir well until powder dissolves completely.',
      ta: 'முருங்கை தூளை வெதுவெதுப்பான நீரில் கலக்கவும். தேன் மற்றும் எலுமிச்சை சாறு சேர்க்கவும். தூள் முழுமையாக கரையும் வரை நன்றாக கலக்கவும்.'
    },
    dosage: {
      en: 'Drink once daily on empty stomach',
      ta: 'தினமும் காலியான வயிற்றில் ஒருமுறை குடிக்கவும்'
    },
    safetyTips: {
      en: ['Use pure moringa powder', 'Start with small amounts', 'Consult doctor if pregnant', 'May interact with medications'],
      ta: ['தூய முருங்கை தூள் பயன்படுத்தவும்', 'சிறிய அளவுகளில் தொடங்கவும்', 'கர்ப்பமாக இருந்தால் மருத்துவரை கலந்தாலோசிக்கவும்', 'மருந்துகளுடன் தொடர்பு கொள்ளலாம்']
    },
    category: 'general',
    difficulty: 'easy',
    prepTime: 5,
    status: 'approved'
  },
  {
    id: '15',
    name: {
      en: 'Betel Leaf for Mouth Ulcers',
      ta: 'வாய் புண்ணுக்கு வெற்றிலை'
    },
    symptoms: {
      en: ['Mouth Ulcers', 'Oral Sores', 'Bad Breath', 'Gum Inflammation'],
      ta: ['வாய் புண்', 'வாய் புண்கள்', 'வாய் துர்நாற்றம்', 'ஈறு வீக்கம்']
    },
    ingredients: {
      en: ['2 fresh betel leaves', '1/2 tsp honey', 'Pinch of turmeric'],
      ta: ['2 புதிய வெற்றிலைகள்', '1/2 டீஸ்பூன் தேன்', 'சிறிது மஞ்சள்']
    },
    preparation: {
      en: 'Wash betel leaves thoroughly. Grind with honey and turmeric to make a paste. Apply directly on ulcers or chew the leaf gently.',
      ta: 'வெற்றிலைகளை நன்றாக கழுவவும். தேன் மற்றும் மஞ்சளுடன் சேர்த்து அரைத்து பேஸ்ட் செய்யவும். புண்களில் நேரடியாக தடவவும் அல்லது இலையை மெதுவாக மென்று சாப்பிடவும்.'
    },
    dosage: {
      en: 'Apply 2-3 times daily or chew 1 leaf after meals',
      ta: 'தினமும் 2-3 முறை தடவவும் அல்லது உணவுக்கு பின் 1 இலை மென்று சாப்பிடவும்'
    },
    safetyTips: {
      en: ['Use fresh leaves only', 'Do not add tobacco', 'Avoid if allergic', 'Rinse mouth after use'],
      ta: ['புதிய இலைகளை மட்டும் பயன்படுத்தவும்', 'புகையிலை சேர்க்க வேண்டாம்', 'அலர்ஜி இருந்தால் தவிர்க்கவும்', 'பயன்படுத்திய பின் வாய் கொப்பளிக்கவும்']
    },
    category: 'general',
    difficulty: 'easy',
    prepTime: 5,
    status: 'approved'
  },
  {
    id: '16',
    name: {
      en: 'Cardamom Tea for Bad Breath',
      ta: 'வாய் துர்நாற்றத்திற்கு ஏலக்காய் டீ'
    },
    symptoms: {
      en: ['Bad Breath', 'Dry Mouth', 'Oral Hygiene', 'Digestive Odor'],
      ta: ['வாய் துர்நாற்றம்', 'வறண்ட வாய்', 'வாய் சுகாதாரம்', 'செரிமான வாசனை']
    },
    ingredients: {
      en: ['4-5 cardamom pods', '1 cup water', '1 tsp honey', 'Few mint leaves'],
      ta: ['4-5 ஏலக்காய்கள்', '1 கப் தண்ணீர்', '1 டீஸ்பூன் தேன்', 'சில புதினா இலைகள்']
    },
    preparation: {
      en: 'Crush cardamom pods lightly. Boil water and add cardamom and mint leaves. Simmer for 5 minutes. Strain and add honey. Can also chew cardamom directly.',
      ta: 'ஏலக்காய்களை லேசாக நசுக்கவும். தண்ணீரை கொதிக்க வைத்து ஏலக்காய் மற்றும் புதினா இலைகள் சேர்க்கவும். 5 நிமிடங்கள் சிறு தீயில் வைக்கவும். வடிகட்டி தேன் சேர்க்கவும். ஏலக்காயை நேரடியாகவும் மெல்லலாம்.'
    },
    dosage: {
      en: 'Drink after meals or chew 1-2 pods as needed',
      ta: 'உணவுக்கு பின் குடிக்கவும் அல்லது தேவைப்படும்போது 1-2 காய்களை மெல்லவும்'
    },
    safetyTips: {
      en: ['Safe for regular use', 'Can freshen breath instantly', 'Good for digestion', 'Use green cardamom'],
      ta: ['வழக்கமான பயன்பாட்டிற்கு பாதுகாப்பானது', 'சுவாசத்தை உடனடியாக புத்துணர்ச்சியாக்கும்', 'செரிமானத்திற்கு நல்லது', 'பச்சை ஏலக்காய் பயன்படுத்தவும்']
    },
    category: 'general',
    difficulty: 'easy',
    prepTime: 8,
    status: 'approved'
  },
  {
    id: '17',
    name: {
      en: 'Banana Peel for Acne',
      ta: 'முகப்பருவுக்கு வாழைப்பழ தோல்'
    },
    symptoms: {
      en: ['Acne', 'Pimples', 'Dark Spots', 'Skin Inflammation'],
      ta: ['முகப்பரு', 'பருக்கள்', 'கருமையான புள்ளிகள்', 'தோல் வீக்கம்']
    },
    ingredients: {
      en: ['1 ripe banana peel', '1 tsp aloe vera gel', '1/2 tsp honey'],
      ta: ['1 பழுத்த வாழைப்பழ தோல்', '1 டீஸ்பூன் கற்றாழை ஜெல்', '1/2 டீஸ்பூன் தேன்']
    },
    preparation: {
      en: 'Scrape the inside of banana peel. Mix with aloe vera gel and honey. Apply on acne-affected areas. Can also rub the inside of peel directly on skin.',
      ta: 'வாழைப்பழ தோலின் உட்புறத்தை சுரண்டவும். கற்றாழை ஜெல் மற்றும் தேனுடன் கலக்கவும். முகப்பரு பாதிக்கப்பட்ட பகுதிகளில் தடவவும். தோலின் உட்புறத்தை நேரடியாக தோலில் தேய்க்கலாம்.'
    },
    dosage: {
      en: 'Apply daily, leave for 15 minutes, then wash',
      ta: 'தினமும் தடவி, 15 நிமிடங்கள் வைத்திருந்து, பின் கழுவவும்'
    },
    safetyTips: {
      en: ['Use ripe banana peel', 'Wash face before application', 'Use fresh peel each time', 'Results may take 2-3 weeks'],
      ta: ['பழுத்த வாழைப்பழ தோல் பயன்படுத்தவும்', 'தடவுவதற்கு முன் முகத்தை கழுவவும்', 'ஒவ்வொரு முறையும் புதிய தோல் பயன்படுத்தவும்', 'முடிவுகள் 2-3 வாரங்கள் ஆகலாம்']
    },
    category: 'skin',
    difficulty: 'easy',
    prepTime: 5,
    status: 'approved'
  },
  {
    id: '18',
    name: {
      en: 'Sesame Oil Massage for Joint Pain',
      ta: 'மூட்டு வலிக்கு எள்ளெண்ணெய் மசாஜ்'
    },
    symptoms: {
      en: ['Joint Pain', 'Muscle Stiffness', 'Arthritis', 'Body Aches'],
      ta: ['மூட்டு வலி', 'தசை விறைப்பு', 'கீல்வாதம்', 'உடல் வலிகள்']
    },
    ingredients: {
      en: ['2 tbsp sesame oil', '1/2 tsp camphor powder', '2-3 garlic cloves (crushed)'],
      ta: ['2 டேபிள்ஸ்பூன் எள்ளெண்ணெய்', '1/2 டீஸ்பூன் கற்பூர தூள்', '2-3 பூண்டு பற்கள் (நசுக்கியது)']
    },
    preparation: {
      en: 'Heat sesame oil gently. Add crushed garlic and camphor. Warm until fragrant. Let it cool to comfortable temperature. Massage on affected joints.',
      ta: 'எள்ளெண்ணெயை மெதுவாக சூடாக்கவும். நசுக்கிய பூண்டு மற்றும் கற்பூரம் சேர்க்கவும். வாசனை வரும் வரை சூடாக்கவும். வசதியான வெப்பநிலைக்கு குளிர வைக்கவும். பாதிக்கப்பட்ட மூட்டுகளில் மசாஜ் செய்யவும்.'
    },
    dosage: {
      en: 'Massage daily before bedtime, leave overnight',
      ta: 'தினமும் படுக்கைக்கு முன் மசாஜ் செய்து, இரவு முழுவதும் வைக்கவும்'
    },
    safetyTips: {
      en: ['Test oil temperature before use', 'Avoid if skin is broken', 'Can be used warm', 'May stain clothes'],
      ta: ['பயன்படுத்தும் முன் எண்ணெய் வெப்பநிலையை சோதிக்கவும்', 'தோல் உடைந்திருந்தால் தவிர்க்கவும்', 'சூடாக பயன்படுத்தலாம்', 'ஆடைகளில் கறை படலாம்']
    },
    category: 'general',
    difficulty: 'easy',
    prepTime: 10,
    status: 'approved'
  },
  {
    id: '19',
    name: {
      en: 'Mint Leaves for Headache',
      ta: 'தலைவலிக்கு புதினா இலைகள்'
    },
    symptoms: {
      en: ['Headache', 'Migraine', 'Tension', 'Stress'],
      ta: ['தலைவலி', 'ஒற்றைத் தலைவலி', 'பதட்டம்', 'மன அழுத்தம்']
    },
    ingredients: {
      en: ['10-15 fresh mint leaves', '1 cup water', '1 tsp honey', 'Few drops lemon juice'],
      ta: ['10-15 புதிய புதினா இலைகள்', '1 கப் தண்ணீர்', '1 டீஸ்பூன் தேன்', 'சில துளிகள் எலுமிச்சை சாறு']
    },
    preparation: {
      en: 'Crush mint leaves. Boil water and add crushed leaves. Simmer for 5 minutes. Strain and add honey and lemon juice. Can also apply crushed leaves on forehead.',
      ta: 'புதினா இலைகளை நசுக்கவும். தண்ணீரை கொதிக்க வைத்து நசுக்கிய இலைகள் சேர்க்கவும். 5 நிமிடங்கள் சிறு தீயில் வைக்கவும். வடிகட்டி தேன் மற்றும் எலுமிச்சை சாறு சேர்க்கவும். நசுக்கிய இலைகளை நெற்றியில் தடவலாம்.'
    },
    dosage: {
      en: 'Drink as needed or apply paste on forehead for 15 minutes',
      ta: 'தேவைப்படும்போது குடிக்கவும் அல்லது பேஸ்ட்டை நெற்றியில் 15 நிமிடங்கள் தடவவும்'
    },
    safetyTips: {
      en: ['Use fresh mint leaves', 'Provides cooling effect', 'Consult doctor for severe headaches', 'Can be combined with rest'],
      ta: ['புதிய புதினா இலைகள் பயன்படுத்தவும்', 'குளிர்ச்சியான விளைவை வழங்குகிறது', 'கடுமையான தலைவலிக்கு மருத்துவரை கலந்தாலோசிக்கவும்', 'ஓய்வுடன் இணைக்கலாம்']
    },
    category: 'general',
    difficulty: 'easy',
    prepTime: 10,
    status: 'approved'
  },
  {
    id: '20',
    name: {
      en: 'Buttermilk for Acidity',
      ta: 'அமிலத்தன்மைக்கு மோர்'
    },
    symptoms: {
      en: ['Acidity', 'Heartburn', 'Stomach Upset', 'Indigestion'],
      ta: ['அமிலத்தன்மை', 'நெஞ்செரிச்சல்', 'வயிற்று கோளாறு', 'அஜீரணம்']
    },
    ingredients: {
      en: ['1 cup buttermilk', '1/4 tsp cumin powder', 'Pinch of salt', 'Few curry leaves'],
      ta: ['1 கப் மோர்', '1/4 டீஸ்பூன் சீரக தூள்', 'சிறிது உப்பு', 'சில கறிவேப்பிலைகள்']
    },
    preparation: {
      en: 'Mix buttermilk with cumin powder and salt. Add crushed curry leaves. Stir well. Drink fresh and cold.',
      ta: 'மோரை சீரக தூள் மற்றும் உப்புடன் கலக்கவும். நசுக்கிய கறிவேப்பிலைகள் சேர்க்கவும். நன்றாக கலக்கவும். புதிதாகவும் குளிர்ச்சியாகவும் குடிக்கவும்.'
    },
    dosage: {
      en: 'Drink 1 cup after meals or when acidity occurs',
      ta: 'உணவுக்கு பின் அல்லது அமிலத்தன்மை ஏற்படும்போது 1 கப் குடிக்கவும்'
    },
    safetyTips: {
      en: ['Use fresh buttermilk', 'Best consumed cold', 'Avoid if lactose intolerant', 'Provides instant relief'],
      ta: ['புதிய மோர் பயன்படுத்தவும்', 'குளிர்ச்சியாக உட்கொள்வது சிறந்தது', 'லாக்டோஸ் சகிப்புத்தன்மை இல்லாதவர்கள் தவிர்க்கவும்', 'உடனடி நிவாரணம் அளிக்கிறது']
    },
    category: 'digestive',
    difficulty: 'easy',
    prepTime: 5,
    status: 'approved'
  },
  {
    id: '21',
    name: {
      en: 'Pomegranate Peel Powder for Diarrhea',
      ta: 'வயிற்றுப்போக்குக்கு மாதுளை தோல் தூள்'
    },
    symptoms: {
      en: ['Diarrhea', 'Loose Motions', 'Stomach Infection', 'Dysentery'],
      ta: ['வயிற்றுப்போக்கு', 'தளர்ந்த மலம்', 'வயிற்று தொற்று', 'இரத்த வயிற்றுப்போக்கு']
    },
    ingredients: {
      en: ['1 tsp dried pomegranate peel powder', '1 cup water', '1/2 tsp honey', 'Pinch of salt'],
      ta: ['1 டீஸ்பூன் உலர்ந்த மாதுளை தோல் தூள்', '1 கப் தண்ணீர்', '1/2 டீஸ்பூன் தேன்', 'சிறிது உப்பு']
    },
    preparation: {
      en: 'Boil water and add pomegranate peel powder. Simmer for 5 minutes. Let it cool and strain. Add honey and salt. Mix well.',
      ta: 'தண்ணீரை கொதிக்க வைத்து மாதுளை தோல் தூள் சேர்க்கவும். 5 நிமிடங்கள் சிறு தீயில் வைக்கவும். குளிர வைத்து வடிகட்டவும். தேன் மற்றும் உப்பு சேர்க்கவும். நன்றாக கலக்கவும்.'
    },
    dosage: {
      en: 'Drink 2-3 times daily until symptoms improve',
      ta: 'அறிகுறிகள் மேம்படும் வரை தினமும் 2-3 முறை குடிக்கவும்'
    },
    safetyTips: {
      en: ['Use dried peel powder', 'Consult doctor if severe', 'Stay hydrated', 'Not for prolonged use'],
      ta: ['உலர்ந்த தோல் தூள் பயன்படுத்தவும்', 'கடுமையானதாக இருந்தால் மருத்துவரை கலந்தாலோசிக்கவும்', 'நீர்ச்சத்துடன் இருக்கவும்', 'நீண்ட கால பயன்பாட்டிற்கு அல்ல']
    },
    category: 'digestive',
    difficulty: 'medium',
    prepTime: 10,
    status: 'approved'
  },
  {
    id: '22',
    name: {
      en: 'Clove Oil for Toothache',
      ta: 'பல் வலிக்கு கிராம்பு எண்ணெய்'
    },
    symptoms: {
      en: ['Toothache', 'Gum Pain', 'Dental Sensitivity', 'Cavity Pain'],
      ta: ['பல் வலி', 'ஈறு வலி', 'பல் உணர்திறன்', 'பல் சொத்தை வலி']
    },
    ingredients: {
      en: ['3-4 drops clove oil', '1 tsp coconut oil', 'Cotton ball'],
      ta: ['3-4 துளிகள் கிராம்பு எண்ணெய்', '1 டீஸ்பூன் தேங்காய் எண்ணெய்', 'பஞ்சு பந்து']
    },
    preparation: {
      en: 'Mix clove oil with coconut oil. Soak cotton ball in the mixture. Apply directly on affected tooth. Can also chew whole cloves gently.',
      ta: 'கிராம்பு எண்ணெயை தேங்காய் எண்ணெயுடன் கலக்கவும். பஞ்சு பந்தை கலவையில் நனைக்கவும். பாதிக்கப்பட்ட பல்லில் நேரடியாக வைக்கவும். முழு கிராம்புகளை மெதுவாக மெல்லலாம்.'
    },
    dosage: {
      en: 'Apply as needed, leave for 15-20 minutes',
      ta: 'தேவைப்படும்போது தடவி, 15-20 நிமிடங்கள் வைக்கவும்'
    },
    safetyTips: {
      en: ['Do not apply pure clove oil directly', 'May cause burning sensation', 'Rinse mouth after use', 'Visit dentist for persistent pain'],
      ta: ['தூய கிராம்பு எண்ணெயை நேரடியாக தடவ வேண்டாம்', 'எரியும் உணர்வை ஏற்படுத்தலாம்', 'பயன்படுத்திய பின் வாய் கொப்பளிக்கவும்', 'தொடர்ந்த வலிக்கு பல் மருத்துவரை பார்க்கவும்']
    },
    category: 'general',
    difficulty: 'easy',
    prepTime: 3,
    status: 'approved'
  },
  {
    id: '23',
    name: {
      en: 'Onion Juice for Hair Fall',
      ta: 'முடி உதிர்தலுக்கு வெங்காய சாறு'
    },
    symptoms: {
      en: ['Hair Fall', 'Baldness', 'Weak Hair Roots', 'Thinning Hair'],
      ta: ['முடி உதிர்தல்', 'வழுக்கை', 'பலவீன முடி வேர்கள்', 'மெலிந்த முடி']
    },
    ingredients: {
      en: ['1 medium onion', '1 tbsp coconut oil', '1 tsp honey', 'Few drops lemon juice'],
      ta: ['1 நடுத்தர வெங்காயம்', '1 டேபிள்ஸ்பூன் தேங்காய் எண்ணெய்', '1 டீஸ்பூன் தேன்', 'சில துளிகள் எலுமிச்சை சாறு']
    },
    preparation: {
      en: 'Peel and chop onion. Blend and extract juice. Mix with coconut oil, honey, and lemon juice. Apply on scalp and massage gently.',
      ta: 'வெங்காயத்தை தோலுரித்து நறுக்கவும். அரைத்து சாறு எடுக்கவும். தேங்காய் எண்ணெய், தேன், எலுமிச்சை சாறு கலக்கவும். தலையில் தடவி மெதுவாக மசாஜ் செய்யவும்.'
    },
    dosage: {
      en: 'Apply 2-3 times per week, leave for 30 minutes before washing',
      ta: 'வாரத்திற்கு 2-3 முறை தடவி, கழுவுவதற்கு முன் 30 நிமிடங்கள் வைக்கவும்'
    },
    safetyTips: {
      en: ['Strong odor - use in well ventilated area', 'May cause eye irritation', 'Test on small area first', 'Results take 4-6 weeks'],
      ta: ['வலுவான வாசனை - நன்கு காற்றோட்டமான இடத்தில் பயன்படுத்தவும்', 'கண் எரிச்சலை ஏற்படுத்தலாம்', 'முதலில் சிறிய பகுதியில் சோதிக்கவும்', 'முடிவுகள் 4-6 வாரங்கள் எடுக்கும்']
    },
    category: 'skin',
    difficulty: 'medium',
    prepTime: 15,
    status: 'approved'
  },
  {
    id: '24',
    name: {
      en: 'Cinnamon Honey for Immunity',
      ta: 'நோய் எதிர்ப்பு சக்திக்கு இலவங்கப்பட்டை தேன்'
    },
    symptoms: {
      en: ['Low Immunity', 'Frequent Infections', 'Weakness', 'Seasonal Allergies'],
      ta: ['குறைந்த நோய் எதிர்ப்பு சக்தி', 'அடிக்கடி தொற்றுகள்', 'பலவீனம்', 'பருவகால அலர்ஜிகள்']
    },
    ingredients: {
      en: ['1/2 tsp cinnamon powder', '1 tbsp honey', '1 cup warm water'],
      ta: ['1/2 டீஸ்பூன் இலவங்கப்பட்டை தூள்', '1 டேபிள்ஸ்பூன் தேன்', '1 கப் வெதுவெதுப்பான நீர்']
    },
    preparation: {
      en: 'Mix cinnamon powder with honey to form a paste. Add to warm water and stir well. Can also consume the paste directly.',
      ta: 'இலவங்கப்பட்டை தூளை தேனுடன் கலந்து பேஸ்ட் செய்யவும். வெதுவெதுப்பான நீரில் சேர்த்து நன்றாக கலக்கவும். பேஸ்ட்டை நேரடியாகவும் உட்கொள்ளலாம்.'
    },
    dosage: {
      en: 'Drink daily on empty stomach for 2-3 weeks',
      ta: '2-3 வாரங்களுக்கு தினமும் காலியான வயிற்றில் குடிக்கவும்'
    },
    safetyTips: {
      en: ['Use Ceylon cinnamon if possible', 'May interact with diabetes medication', 'Do not exceed recommended amount', 'Consult doctor if pregnant'],
      ta: ['முடிந்தால் இலங்கை இலவங்கப்பட்டை பயன்படுத்தவும்', 'நீரிழிவு மருந்துகளுடன் தொடர்பு கொள்ளலாம்', 'பரிந்துரைக்கப்பட்ட அளவை மீற வேண்டாம்', 'கர்ப்பமாக இருந்தால் மருத்துவரை கலந்தாலோசிக்கவும்']
    },
    category: 'general',
    difficulty: 'easy',
    prepTime: 5,
    status: 'approved'
  },
  {
    id: '25',
    name: {
      en: 'Papaya for Digestive Health',
      ta: 'செரிமான ஆரோக்கியத்திற்கு பப்பாளி'
    },
    symptoms: {
      en: ['Constipation', 'Bloating', 'Poor Digestion', 'Stomach Discomfort'],
      ta: ['மலச்சிக்கல்', 'வயிறு உப்புசம்', 'மோசமான செரிமானம்', 'வயிற்று அசௌகரியம்']
    },
    ingredients: {
      en: ['1 cup ripe papaya chunks', '1 tsp honey', '1/4 tsp black salt', 'Few drops lemon juice'],
      ta: ['1 கப் பழுத்த பப்பாளி துண்டுகள்', '1 டீஸ்பூன் தேன்', '1/4 டீஸ்பூன் கருப்பு உப்பு', 'சில துளிகள் எலுமிச்சை சாறு']
    },
    preparation: {
      en: 'Cut ripe papaya into chunks. Add honey, black salt, and lemon juice. Mix well and consume fresh. Can also blend into juice.',
      ta: 'பழுத்த பப்பாளியை துண்டுகளாக வெட்டவும். தேன், கருப்பு உப்பு, எலுமிச்சை சாறு சேர்க்கவும். நன்றாக கலந்து புதிதாக உட்கொள்ளவும். சாறாகவும் அரைக்கலாம்.'
    },
    dosage: {
      en: 'Eat daily on empty stomach or 30 minutes before meals',
      ta: 'தினமும் காலியான வயிற்றில் அல்லது உணவுக்கு 30 நிமிடங்கள் முன் சாப்பிடவும்'
    },
    safetyTips: {
      en: ['Use ripe papaya only', 'Avoid during pregnancy', 'May cause allergic reactions in some', 'Rich in digestive enzymes'],
      ta: ['பழுத்த பப்பாளியை மட்டும் பயன்படுத்தவும்', 'கர்ப்ப காலத்தில் தவிர்க்கவும்', 'சிலருக்கு ஒவ்வாமை எதிர்வினைகளை ஏற்படுத்தலாம்', 'செரிமான நொதிகள் நிறைந்தது']
    },
    category: 'digestive',
    difficulty: 'easy',
    prepTime: 5,
    status: 'approved'
  },
  {
    id: '26',
    name: {
      en: 'Rice Water for Diarrhea',
      ta: 'வயிற்றுப்போக்குக்கு அரிசி நீர்'
    },
    symptoms: {
      en: ['Diarrhea', 'Dehydration', 'Stomach Upset', 'Weakness'],
      ta: ['வயிற்றுப்போக்கு', 'நீரிழப்பு', 'வயிற்று கோளாறு', 'பலவீனம்']
    },
    ingredients: {
      en: ['1/2 cup rice', '3 cups water', 'Pinch of salt'],
      ta: ['1/2 கப் அரிசி', '3 கப் தண்ணீர்', 'சிறிது உப்பு']
    },
    preparation: {
      en: 'Boil rice in water until well cooked. Strain and collect the rice water. Add a pinch of salt. Let it cool to room temperature.',
      ta: 'அரிசியை தண்ணீரில் நன்றாக வேக வைக்கவும். வடிகட்டி அரிசி நீரை சேகரிக்கவும். சிறிது உப்பு சேர்க்கவும். அறை வெப்பநிலைக்கு குளிர வைக்கவும்.'
    },
    dosage: {
      en: 'Drink 1 cup every 2-3 hours until symptoms improve',
      ta: 'அறிகுறிகள் மேம்படும் வரை 2-3 மணி நேரத்திற்கு ஒருமுறை 1 கப் குடிக்கவும்'
    },
    safetyTips: {
      en: ['Helps prevent dehydration', 'Use plain white rice', 'Consult doctor if severe', 'Safe for children'],
      ta: ['நீரிழப்பை தடுக்க உதவுகிறது', 'சாதாரண வெள்ளை அரிசி பயன்படுத்தவும்', 'கடுமையானதாக இருந்தால் மருத்துவரை கலந்தாலோசிக்கவும்', 'குழந்தைகளுக்கு பாதுகாப்பானது']
    },
    category: 'digestive',
    difficulty: 'easy',
    prepTime: 20,
    status: 'approved'
  },
  {
    id: '27',
    name: {
      en: 'Tamarind Water for Fever',
      ta: 'காய்ச்சலுக்கு புளி நீர்'
    },
    symptoms: {
      en: ['Fever', 'Body Heat', 'Thirst', 'Weakness'],
      ta: ['காய்ச்சல்', 'உடல் வெப்பம்', 'தாகம்', 'பலவீனம்']
    },
    ingredients: {
      en: ['1 tbsp tamarind pulp', '2 cups water', '1 tsp jaggery', 'Pinch of cumin powder'],
      ta: ['1 டேபிள்ஸ்பூன் புளி கூழ்', '2 கப் தண்ணீர்', '1 டீஸ்பூன் வெல்லம்', 'சிறிது சீரக தூள்']
    },
    preparation: {
      en: 'Soak tamarind in water for 30 minutes. Squeeze and extract juice. Add jaggery and cumin powder. Strain and drink.',
      ta: 'புளியை தண்ணீரில் 30 நிமிடங்கள் ஊற வைக்கவும். பிழிந்து சாறு எடுக்கவும். வெல்லம் மற்றும் சீரக தூள் சேர்க்கவும். வடிகட்டி குடிக்கவும்.'
    },
    dosage: {
      en: 'Drink 2-3 times daily until fever reduces',
      ta: 'காய்ச்சல் குறையும் வரை தினமும் 2-3 முறை குடிக்கவும்'
    },
    safetyTips: {
      en: ['Helps cool body temperature', 'Use fresh tamarind', 'Consult doctor if fever persists', 'Keep hydrated'],
      ta: ['உடல் வெப்பநிலையை குளிர்விக்க உதவுகிறது', 'புதிய புளி பயன்படுத்தவும்', 'காய்ச்சல் தொடர்ந்தால் மருத்துவரை கலந்தாலோசிக்கவும்', 'நீர்ச்சத்துடன் இருக்கவும்']
    },
    category: 'general',
    difficulty: 'easy',
    prepTime: 35,
    status: 'approved'
  },
  {
    id: '28',
    name: {
      en: 'Hibiscus for Blood Pressure',
      ta: 'இரத்த அழுத்தத்திற்கு செம்பருத்தி'
    },
    symptoms: {
      en: ['High Blood Pressure', 'Hypertension', 'Palpitations', 'Stress'],
      ta: ['உயர் இரத்த அழுத்தம்', 'உயர் இரத்த அழுத்த நோய்', 'இதயத் துடிப்பு', 'மன அழுத்தம்']
    },
    ingredients: {
      en: ['4-5 dried hibiscus flowers', '2 cups water', '1 tsp honey', 'Few drops lemon juice'],
      ta: ['4-5 உலர்ந்த செம்பருத்தி பூக்கள்', '2 கப் தண்ணீர்', '1 டீஸ்பூன் தேன்', 'சில துளிகள் எலுமிச்சை சாறு']
    },
    preparation: {
      en: 'Boil water and add dried hibiscus flowers. Steep for 10 minutes. Strain and add honey and lemon juice. Can be consumed hot or cold.',
      ta: 'தண்ணீரை கொதிக்க வைத்து உலர்ந்த செம்பருத்தி பூக்கள் சேர்க்கவும். 10 நிமிடங்கள் ஊற வைக்கவும். வடிகட்டி தேன் மற்றும் எலுமிச்சை சாறு சேர்க்கவும். சூடாகவோ குளிர்ச்சியாகவோ உட்கொள்ளலாம்.'
    },
    dosage: {
      en: 'Drink 1-2 cups daily for best results',
      ta: 'சிறந்த பலன்களுக்கு தினமும் 1-2 கப் குடிக்கவும்'
    },
    safetyTips: {
      en: ['Monitor blood pressure regularly', 'May interact with BP medication', 'Not recommended during pregnancy', 'Consult doctor before use'],
      ta: ['இரத்த அழுத்தத்தை தவறாமல் கண்காணிக்கவும்', 'BP மருந்துகளுடன் தொடர்பு கொள்ளலாம்', 'கர்ப்ப காலத்தில் பரிந்துரைக்கப்படாது', 'பயன்படுத்தும் முன் மருத்துவரை கலந்தாலோசிக்கவும்']
    },
    category: 'general',
    difficulty: 'easy',
    prepTime: 15,
    status: 'approved'
  },
  {
    id: '29',
    name: {
      en: 'Curry Leaves for Hair Health',
      ta: 'முடி ஆரோக்கியத்திற்கு கறிவேப்பிலை'
    },
    symptoms: {
      en: ['Premature Graying', 'Hair Fall', 'Weak Hair', 'Dry Scalp'],
      ta: ['முன்கூட்டிய நரை', 'முடி உதிர்தல்', 'பலவீன முடி', 'வறண்ட உச்சந்தலை']
    },
    ingredients: {
      en: ['2 cups fresh curry leaves', '1 cup coconut oil', '1 tbsp fenugreek seeds'],
      ta: ['2 கப் புதிய கறிவேப்பிலை', '1 கப் தேங்காய் எண்ணெய்', '1 டேபிள்ஸ்பூன் வெந்தயம்']
    },
    preparation: {
      en: 'Wash curry leaves thoroughly. Heat coconut oil and add curry leaves and fenugreek seeds. Fry until leaves turn crisp. Cool and strain. Store oil for use.',
      ta: 'கறிவேப்பிலைகளை நன்றாக கழுவவும். தேங்காய் எண்ணெயை சூடாக்கி கறிவேப்பிலை மற்றும் வெந்தயம் சேர்க்கவும். இலைகள் மொறுமொறுப்பாகும் வரை வறுக்கவும். குளிர வைத்து வடிகட்டவும். எண்ணெயை பயன்பாட்டிற்கு சேமிக்கவும்.'
    },
    dosage: {
      en: 'Apply oil on scalp 2-3 times per week, leave overnight',
      ta: 'வாரத்திற்கு 2-3 முறை உச்சந்தலையில் தடவி, இரவு முழுவதும் வைக்கவும்'
    },
    safetyTips: {
      en: ['Use fresh curry leaves', 'Store oil in cool place', 'Can also consume leaves daily', 'Regular use shows best results'],
      ta: ['புதிய கறிவேப்பிலை பயன்படுத்தவும்', 'எண்ணெயை குளிர்ந்த இடத்தில் சேமிக்கவும்', 'இலைகளை தினமும் உட்கொள்ளலாம்', 'வழக்கமான பயன்பாடு சிறந்த முடிவுகளை காட்டுகிறது']
    },
    category: 'skin',
    difficulty: 'medium',
    prepTime: 25,
    status: 'approved'
  },
  {
    id: '30',
    name: {
      en: 'Drumstick Leaves Soup for Bone Health',
      ta: 'எலும்பு ஆரோக்கியத்திற்கு முருங்கைக்கீரை சூப்'
    },
    symptoms: {
      en: ['Weak Bones', 'Joint Pain', 'Calcium Deficiency', 'Osteoporosis'],
      ta: ['பலவீன எலும்புகள்', 'மூட்டு வலி', 'கால்சியம் குறைபாடு', 'எலும்பு தளர்ச்சி நோய்']
    },
    ingredients: {
      en: ['2 cups drumstick leaves', '3 cups water', '2 garlic cloves', '1/2 tsp pepper', 'Pinch of turmeric', 'Salt to taste'],
      ta: ['2 கப் முருங்கைக்கீரை', '3 கப் தண்ணீர்', '2 பூண்டு பற்கள்', '1/2 டீஸ்பூன் மிளகு', 'சிறிது மஞ்சள்', 'தேவையான உப்பு']
    },
    preparation: {
      en: 'Wash drumstick leaves thoroughly. Boil water with garlic, pepper, and turmeric. Add drumstick leaves and cook for 5 minutes. Add salt. Can be blended for smooth soup.',
      ta: 'முருங்கைக்கீரையை நன்றாக கழுவவும். பூண்டு, மிளகு, மஞ்சளுடன் தண்ணீரை கொதிக்க வைக்கவும். முருங்கைக்கீரை சேர்த்து 5 நிமிடங்கள் வேக வைக்கவும். உப்பு சேர்க்கவும். மென்மையான சூப்புக்கு அரைக்கலாம்.'
    },
    dosage: {
      en: 'Consume 1 bowl 2-3 times per week',
      ta: 'வாரத்திற்கு 2-3 முறை 1 கிண்ணம் உட்கொள்ளவும்'
    },
    safetyTips: {
      en: ['Rich in calcium and iron', 'Use fresh leaves only', 'Beneficial for lactating mothers', 'Consult doctor if on blood thinners'],
      ta: ['கால்சியம் மற்றும் இரும்பு நிறைந்தது', 'புதிய இலைகளை மட்டும் பயன்படுத்தவும்', 'பால் கொடுக்கும் தாய்மார்களுக்கு பயனுள்ளது', 'இரத்தம் மெலிக்கும் மருந்துகளில் இருந்தால் மருத்துவரை கலந்தாலோசிக்கவும்']
    },
    category: 'general',
    difficulty: 'easy',
    prepTime: 15,
    status: 'approved'
  }
];

export const categories = {
  en: {
    respiratory: 'Respiratory',
    skin: 'Skin Care',
    digestive: 'Digestive',
    general: 'General Health'
  },
  ta: {
    respiratory: 'சுவாச மண்டலம்',
    skin: 'தோல் பராமரிப்பு',
    digestive: 'செரிமான மண்டலம்',
    general: 'பொது உடல்நலம்'
  }
};
