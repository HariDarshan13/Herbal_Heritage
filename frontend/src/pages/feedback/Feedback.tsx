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
import { remedies } from '@/data/remedies';
import { toast } from '@/hooks/use-toast';
import { MessageSquare, Star, Send, Loader2 } from 'lucide-react';

export default function Feedback() {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    type: '',
    remedyId: '',
    rating: '',
    subject: '',
    message: '',
    email: '',
    name: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL || 'https://herbal-heritage-backendssss.onrender.com'}/api/feedback`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Something went wrong');

      toast({
        title: "Feedback Submitted",
        description: "Thank you for your feedback! We'll review it shortly.",
      });

      // Reset form
      setFormData({
        type: '',
        remedyId: '',
        rating: '',
        subject: '',
        message: '',
        email: '',
        name: ''
      });

    } catch (err: any) {
      toast({
        title: "Error",
        description: err.message || 'Failed to submit feedback',
        variant: 'destructive'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const renderStars = (rating: number, onRatingChange: (rating: number) => void) => {
    return (
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => onRatingChange(star)}
            className={`p-1 transition-smooth ${star <= rating ? 'text-yellow-accent' : 'text-muted-foreground'} hover:text-yellow-accent`}
          >
            <Star className={`h-6 w-6 ${star <= rating ? 'fill-current' : ''}`} />
          </button>
        ))}
      </div>
    );
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-nature py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-serif font-bold text-herbal mb-2">
              {t('provideFeedback')}
            </h1>
            <p className="text-muted-foreground">
              Help us improve by sharing your experience with our remedies
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Feedback Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-natural">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="bg-herbal text-white p-2 rounded-full">
                      <MessageSquare className="h-5 w-5" />
                    </div>
                    <div>
                      <CardTitle>Share Your Feedback</CardTitle>
                      <CardDescription>
                        Your input helps improve our remedy database
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Your Name</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleChange('name', e.target.value)}
                          required
                          placeholder="Enter your name"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          required
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    {/* Feedback Type */}
                    <div className="space-y-2">
                      <Label>Feedback Type</Label>
                      <Select value={formData.type} onValueChange={(value) => handleChange('type', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select feedback type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="remedy-review">Remedy Review</SelectItem>
                          <SelectItem value="general-feedback">General Feedback</SelectItem>
                          <SelectItem value="suggestion">Suggestion</SelectItem>
                          <SelectItem value="issue-report">Report Issue</SelectItem>
                          <SelectItem value="question">Question</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Remedy Selection */}
                    {formData.type === 'remedy-review' && (
                      <div className="space-y-2">
                        <Label>Select Remedy</Label>
                        <Select value={formData.remedyId} onValueChange={(value) => handleChange('remedyId', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Choose a remedy to review" />
                          </SelectTrigger>
                          <SelectContent>
                            {remedies.filter(r => r.status === 'approved').map((remedy) => (
                              <SelectItem key={remedy.id} value={remedy.id}>
                                {remedy.name[language]}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    )}

                    {/* Rating */}
                    {formData.type === 'remedy-review' && (
                      <div className="space-y-2">
                        <Label>Rating</Label>
                        <div className="flex items-center space-x-2">
                          {renderStars(parseInt(formData.rating) || 0, (rating) => handleChange('rating', rating.toString()))}
                          <span className="text-sm text-muted-foreground ml-2">
                            {formData.rating ? `${formData.rating} out of 5 stars` : 'Select a rating'}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Subject */}
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => handleChange('subject', e.target.value)}
                        required
                        placeholder="Brief description of your feedback"
                      />
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <Label htmlFor="message">{t('comments')}</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        required
                        rows={6}
                        placeholder="Please share your detailed feedback, experience, or suggestions..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-herbal hover:bg-herbal-dark transition-smooth"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Submit Feedback
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Feedback Guidelines */}
              <Card className="shadow-natural">
                <CardHeader>
                  <CardTitle className="text-herbal">Feedback Guidelines</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-herbal rounded-full mt-2 flex-shrink-0"></div>
                    <span>Be specific about your experience with remedies</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-herbal rounded-full mt-2 flex-shrink-0"></div>
                    <span>Include any side effects or reactions</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-herbal rounded-full mt-2 flex-shrink-0"></div>
                    <span>Suggest improvements or corrections</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-herbal rounded-full mt-2 flex-shrink-0"></div>
                    <span>Report any safety concerns immediately</span>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card className="shadow-natural">
                <CardHeader>
                  <CardTitle className="text-herbal">Need Help?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <p>If you have urgent questions or need immediate assistance:</p>
                  <div className="space-y-2">
                    <div>Email: feedback@herbalheritage.com</div>
                    <div>Phone: +91 9876543210</div>
                  </div>
                   <Button variant="outline" className="w-full mt-3" asChild>
                    <Link to="/contact">
                      {t('contactUs')}
                     </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
