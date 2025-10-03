import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from '@/hooks/use-toast';
import { PlusCircle, Loader2, AlertTriangle, Keyboard } from 'lucide-react';

// Tamil Keyboard Layout (simplified)
const tamilKeys = [
  ['அ','ஆ','இ','ஈ','உ','ஊ','எ','ஏ','ஐ','ஒ','ஓ','ஔ'],
  ['க','ங','ச','ஞ','ட','ண','த','ந','ப','ம'],
  ['ய','ர','ல','வ','ழ','ள','ற','ன'],
  ['','ா','ி','ீ','ு','ூ','ெ','ே','ை','ொ','ோ','ௌ','்'],
  ['SPACE','BACK']
];

function VirtualKeyboard({ onInsert, onClose }: { onInsert: (char: string) => void; onClose: () => void }) {
  return (
    <div className="absolute z-50 bg-white shadow-lg border rounded-md p-3 grid gap-2">
      {tamilKeys.map((row, i) => (
        <div key={i} className="flex gap-2">
          {row.map((key) => (
            <Button
              key={key}
              type="button"
              variant="secondary"
              className="px-3"
              onClick={() => {
                if (key === 'SPACE') onInsert(' ');
                else if (key === 'BACK') onInsert('BACK');
                else onInsert(key);
              }}
            >
              {key}
            </Button>
          ))}
        </div>
      ))}
      <div className="flex justify-end">
        <Button type="button" variant="outline" size="sm" onClick={onClose}>
          Close
        </Button>
      </div>
    </div>
  );
}

export default function SubmitRemedy() {
  const { t } = useLanguage();
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();
  
  const [isLoading, setIsLoading] = useState(false);
  const [showKeyboard, setShowKeyboard] = useState<{ field: string | null }>({ field: null });
  const [formData, setFormData] = useState({
    nameEn: '',
    nameTa: '',
    category: '',
    difficulty: '',
    prepTime: '',
    symptomsEn: '',
    symptomsTa: '',
    ingredientsEn: '',
    ingredientsTa: '',
    preparationEn: '',
    preparationTa: '',
    dosageEn: '',
    dosageTa: '',
    safetyTipsEn: '',
    safetyTipsTa: '',
  });

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleKeyboardInsert = (char: string) => {
    if (!showKeyboard.field) return;
    const field = showKeyboard.field;
    setFormData(prev => {
      const current = prev[field as keyof typeof prev] as string;
      if (char === 'BACK') return { ...prev, [field]: current.slice(0, -1) };
      return { ...prev, [field]: current + char };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isAuthenticated) {
      toast({
        title: "Authentication Required",
        description: "Please log in to submit a remedy",
        variant: "destructive"
      });
      navigate('/user/login');
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL || 'https://herbal-heritage-backendssss.onrender.com'}/api/remedies`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, userId: user?.id })
      });

      if (!res.ok) throw new Error("Failed to submit remedy");

      toast({
        title: "Success",
        description: "Your remedy has been submitted for review!",
      });

      // reset form
      setFormData({
        nameEn: '', nameTa: '', category: '', difficulty: '', prepTime: '',
        symptomsEn: '', symptomsTa: '', ingredientsEn: '', ingredientsTa: '',
        preparationEn: '', preparationTa: '', dosageEn: '', dosageTa: '',
        safetyTipsEn: '', safetyTipsTa: ''
      });
    } catch (err: any) {
      toast({ title: "Error", description: err.message || "Something went wrong", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  // Tamil field wrapper with keyboard
  const TamilField = ({ id, label, value, placeholder, rows = 3 }: { id: string, label: string, value: string, placeholder: string, rows?: number }) => (
    <div className="space-y-2 relative">
      <Label htmlFor={id}>{label}</Label>
      <div className="flex gap-2 items-start">
        <Textarea
          id={id}
          value={value}
          onChange={(e) => handleChange(id, e.target.value)}
          required
          placeholder={placeholder}
          rows={rows}
        />
        <Button type="button" size="icon" variant="outline" onClick={() => setShowKeyboard({ field: id })}>
          <Keyboard className="h-4 w-4" />
        </Button>
      </div>
      {showKeyboard.field === id && <VirtualKeyboard onInsert={handleKeyboardInsert} onClose={() => setShowKeyboard({ field: null })} />}
    </div>
  );

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-nature py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-serif font-bold text-herbal mb-2">{t('submitRemedy')}</h1>
            <p className="text-muted-foreground">Share your traditional healing knowledge with the community</p>
          </div>

          <Card className="shadow-natural">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="bg-herbal text-white p-2 rounded-full">
                  <PlusCircle className="h-5 w-5" />
                </div>
                <div>
                  <CardTitle>New Remedy Submission</CardTitle>
                  <CardDescription>All submissions will be reviewed before publication</CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">

                {/* Basic Info */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-herbal">Basic Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="nameEn">Remedy Name (English)</Label>
                      <Input id="nameEn" value={formData.nameEn} onChange={(e) => handleChange('nameEn', e.target.value)} required placeholder="e.g., Turmeric Milk for Cold" />
                    </div>
                    <TamilField id="nameTa" label="Remedy Name (Tamil)" value={formData.nameTa} placeholder="e.g., சளிக்கு மஞ்சள் பால்" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <Label>Category</Label>
                      <Select value={formData.category} onValueChange={(v) => handleChange('category', v)}>
                        <SelectTrigger><SelectValue placeholder="Select category" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="respiratory">Respiratory</SelectItem>
                          <SelectItem value="digestive">Digestive</SelectItem>
                          <SelectItem value="skin">Skin Care</SelectItem>
                          <SelectItem value="general">General Health</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Difficulty</Label>
                      <Select value={formData.difficulty} onValueChange={(v) => handleChange('difficulty', v)}>
                        <SelectTrigger><SelectValue placeholder="Select difficulty" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="easy">Easy</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="hard">Hard</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="prepTime">Preparation Time (minutes)</Label>
                      <Input id="prepTime" type="number" min="1" value={formData.prepTime} onChange={(e) => handleChange('prepTime', e.target.value)} required placeholder="15" />
                    </div>
                  </div>
                </div>

                {/* Symptoms */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-herbal">Symptoms Treated</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="symptomsEn">Symptoms (English)</Label>
                      <Textarea id="symptomsEn" value={formData.symptomsEn} onChange={(e) => handleChange('symptomsEn', e.target.value)} required placeholder="Common Cold, Cough, Sore Throat" rows={3} />
                    </div>
                    <TamilField id="symptomsTa" label="Symptoms (Tamil)" value={formData.symptomsTa} placeholder="சளி, இருமல், தொண்டை வலி" rows={3} />
                  </div>
                </div>

                {/* Ingredients */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-herbal">Ingredients</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="ingredientsEn">Ingredients (English)</Label>
                      <Textarea id="ingredientsEn" value={formData.ingredientsEn} onChange={(e) => handleChange('ingredientsEn', e.target.value)} required placeholder="1 cup milk, 1/2 tsp turmeric powder" rows={4} />
                    </div>
                    <TamilField id="ingredientsTa" label="Ingredients (Tamil)" value={formData.ingredientsTa} placeholder="1 கப் பால், 1/2 டீஸ்பூன் மஞ்சள் தூள்" rows={4} />
                  </div>
                </div>

                {/* Preparation */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-herbal">Preparation Method</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="preparationEn">Preparation (English)</Label>
                      <Textarea id="preparationEn" value={formData.preparationEn} onChange={(e) => handleChange('preparationEn', e.target.value)} required placeholder="Step by step preparation..." rows={5} />
                    </div>
                    <TamilField id="preparationTa" label="Preparation (Tamil)" value={formData.preparationTa} placeholder="படிப்படியாக தயாரிப்பு முறை..." rows={5} />
                  </div>
                </div>

                {/* Dosage */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-herbal">Dosage</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="dosageEn">Dosage (English)</Label>
                      <Textarea id="dosageEn" value={formData.dosageEn} onChange={(e) => handleChange('dosageEn', e.target.value)} required placeholder="Drink once daily before bedtime" rows={3} />
                    </div>
                    <TamilField id="dosageTa" label="Dosage (Tamil)" value={formData.dosageTa} placeholder="தினமும் இரவு படுக்கும் முன் ஒருமுறை" rows={3} />
                  </div>
                </div>

                {/* Safety Tips */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-herbal flex items-center space-x-2">
                    <AlertTriangle className="h-5 w-5" />
                    <span>Safety Tips</span>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="safetyTipsEn">Safety Tips (English)</Label>
                      <Textarea id="safetyTipsEn" value={formData.safetyTipsEn} onChange={(e) => handleChange('safetyTipsEn', e.target.value)} required placeholder="Important safety considerations..." rows={4} />
                    </div>
                    <TamilField id="safetyTipsTa" label="Safety Tips (Tamil)" value={formData.safetyTipsTa} placeholder="முக்கிய பாதுகாப்பு குறிப்புகள்..." rows={4} />
                  </div>
                </div>

                <div className="flex justify-end space-x-4 pt-6 border-t">
                  <Button type="button" variant="outline" onClick={() => navigate('/remedies')}>{t('cancel')}</Button>
                  <Button type="submit" disabled={isLoading} className="bg-herbal hover:bg-herbal-dark transition-smooth min-w-32">
                    {isLoading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Submitting...</> : t('submit')}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
