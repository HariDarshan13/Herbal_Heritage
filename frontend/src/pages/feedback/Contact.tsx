import { useState } from 'react';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Send, Loader2, Clock, MessageCircle } from 'lucide-react';

export default function Contact() {
  const { t } = useLanguage();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    urgency: 'medium'
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Failed to send message');

      toast({
        title: "Message Sent",
        description: "Thank you for contacting us! We'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        urgency: 'medium'
      });

    } catch (err: any) {
      toast({
        title: "Error",
        description: err.message || "Failed to send message",
        variant: 'destructive'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-nature py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-serif font-bold text-herbal mb-2">
              {t('contactUs')}
            </h1>
            <p className="text-muted-foreground">
              Get in touch with our team. We're here to help with your questions about traditional remedies.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-natural">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="bg-herbal text-white p-2 rounded-full">
                      <MessageCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <CardTitle>Send us a Message</CardTitle>
                      <CardDescription>
                        We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name & Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleChange('name', e.target.value)}
                          required
                          placeholder="Enter your full name"
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

                    {/* Subject */}
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => handleChange('subject', e.target.value)}
                        required
                        placeholder="What's this about?"
                      />
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        required
                        rows={6}
                        placeholder="Please describe your inquiry, question, or concern in detail..."
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
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="shadow-natural">
                <CardHeader>
                  <CardTitle className="text-herbal">Get in Touch</CardTitle>
                  <CardDescription>Multiple ways to reach us</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-herbal/10 p-2 rounded-full">
                      <Mail className="h-4 w-4 text-herbal" />
                    </div>
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-sm text-muted-foreground">info@herbalheritage.com</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-herbal/10 p-2 rounded-full">
                      <Phone className="h-4 w-4 text-herbal" />
                    </div>
                    <div>
                      <div className="font-medium">Phone</div>
                      <div className="text-sm text-muted-foreground">+91 9876543210</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-herbal/10 p-2 rounded-full">
                      <MapPin className="h-4 w-4 text-herbal" />
                    </div>
                    <div>
                      <div className="font-medium">Address</div>
                      <div className="text-sm text-muted-foreground">
                        Tamil Nadu, India<br />
                        Preserving Heritage Digitally
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-natural">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-herbal">
                    <Clock className="h-5 w-5" />
                    <span>Response Time</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-herbal rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="font-medium">General Inquiries</div>
                      <div className="text-muted-foreground">Within 24 hours</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-yellow-accent rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="font-medium">Technical Issues</div>
                      <div className="text-muted-foreground">Within 12 hours</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="font-medium">Urgent Safety Concerns</div>
                      <div className="text-muted-foreground">Within 2 hours</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
