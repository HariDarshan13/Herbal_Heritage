import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'ta';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation data
const translations = {
  en: {
    // Navigation
    home: "Home",
    remedies: "Remedies",
    submitRemedy: "Submit Remedy",
    bookmarks: "Bookmarks",
    feedback: "Feedback",
    profile: "Profile",
    login: "Login",
    register: "Register",
    logout: "Logout",
    admin: "Admin",
    
    // Common
    search: "Search",
    filter: "Filter",
    save: "Save",
    cancel: "Cancel",
    submit: "Submit",
    edit: "Edit",
    delete: "Delete",
    back: "Back",
    next: "Next",
    previous: "Previous",
    loading: "Loading...",
    
    // Home page
    herbalHeritage: "Herbal Heritage",
    tagline: "Preserving Traditional Tamil Healing Wisdom",
    heroSubtitle: "Discover time-tested natural remedies passed down through generations",
    exploreRemedies: "Explore Remedies",
    learnMore: "Learn More",
    
    // Remedies
    allRemedies: "All Remedies",
    symptoms: "Symptoms",
    ingredients: "Ingredients",
    preparation: "Preparation",
    dosage: "Dosage",
    safetyTips: "Safety Tips",
    bookmark: "Bookmark",
    remedyDetails: "Remedy Details",
    
    // User
    email: "Email",
    password: "Password",
    confirmPassword: "Confirm Password",
    fullName: "Full Name",
    phoneNumber: "Phone Number",
    createAccount: "Create Account",
    signIn: "Sign In",
    forgotPassword: "Forgot Password?",
    
    // Feedback
    provideFeedback: "Provide Feedback",
    rating: "Rating",
    comments: "Comments",
    reportIssue: "Report Issue",
    contactUs: "Contact Us",
    
    // Voice search
    voiceSearch: "Voice Search",
    listening: "Listening...",
    speakNow: "Speak now",
  },
  ta: {
    // Navigation
    home: "முகப்பு",
    remedies: "மருத்துவ குறிப்புகள்",
    submitRemedy: "மருத்துவ குறிப்பு சமர்ப்பிக்க",
    bookmarks: "புக்மார்க்குகள்",
    feedback: "கருத்து",
    profile: "சுயவிவரம்",
    login: "உள்நுழைவு",
    register: "பதிவு",
    logout: "வெளியேறு",
    admin: "நிர்வாகி",
    
    // Common
    search: "தேடல்",
    filter: "வடிகட்டு",
    save: "சேமி",
    cancel: "ரத்து",
    submit: "சமர்ப்பிக்க",
    edit: "திருத்து",
    delete: "நீக்கு",
    back: "பின்னால்",
    next: "அடுத்து",
    previous: "முந்தைய",
    loading: "ஏற்றுகிறது...",
    
    // Home page
    herbalHeritage: "மூலிகை பாரம்பரியம்",
    tagline: "பாரம்பரிய தமிழ் மருத்துவ அறிவை பாதுகாத்தல்",
    heroSubtitle: "தலைமுறைகளாக கடத்தப்பட்ட நேரம் சோதிக்கப்பட்ட இயற்கை மருத்துவத்தை கண்டறியுங்கள்",
    exploreRemedies: "மருத்துவ குறிப்புகளை அறிய",
    learnMore: "மேலும் அறிய",
    
    // Remedies
    allRemedies: "அனைத்து மருத்துவ குறிப்புகள்",
    symptoms: "அறிகுறிகள்",
    ingredients: "பொருட்கள்",
    preparation: "தயாரிப்பு",
    dosage: "அளவு",
    safetyTips: "பாதுகாப்பு குறிப்புகள்",
    bookmark: "புக்மார்க்",
    remedyDetails: "மருத்துவ விவரங்கள்",
    
    // User
    email: "மின்னஞ்சல்",
    password: "கடவுச்சொல்",
    confirmPassword: "கடவுச்சொல்லை உறுதிப்படுத்தவும்",
    fullName: "முழு பெயர்",
    phoneNumber: "தொலைபேசி எண்",
    createAccount: "கணக்கை உருவாக்கு",
    signIn: "உள்நுழைய",
    forgotPassword: "கடவுச்சொல்லை மறந்துவிட்டீர்களா?",
    
    // Feedback
    provideFeedback: "கருத்து தெரிவிக்கவும்",
    rating: "மதிப்பீடு",
    comments: "கருத்துகள்",
    reportIssue: "சிக்கலை தெரிவிக்கவும்",
    contactUs: "எங்களை தொடர்பு கொள்ளுங்கள்",
    
    // Voice search
    voiceSearch: "குரல் தேடல்",
    listening: "கேட்கிறது...",
    speakNow: "இப்போது பேசுங்கள்",
  },
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ta' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};