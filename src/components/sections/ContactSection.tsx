import React, { useState } from 'react';
import { Dribbble, Linkedin, Instagram } from 'lucide-react';
import BehanceIcon from './BehanceIcon.tsx';
import emailjs from 'emailjs-com';

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/gihan-pradeep-4287a2282/', label: 'LinkedIn' },
    { icon: Dribbble, href: 'https://dribbble.com/gihanelf', label: 'Dribbble' },
    { icon: Instagram, href: 'https://www.instagram.com/wlf_sha/', label: 'Instagram' },
    { icon: BehanceIcon, href: 'https://www.behance.net/gihanpradeep/projects', label: 'Behance' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: undefined }));
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);

      // Use EmailJS to send the email
      emailjs
        .sendForm('service_tej2bh7', 'template_loixwor', e.target as HTMLFormElement, 'xg979wez_32NeM2xy')
        .then(
          () => {
            setIsSubmitting(false);
            setSubmitSuccess(true);
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setSubmitSuccess(false), 5000);
          },
          (error) => {
            setIsSubmitting(false);
            console.error('Email sending error: ', error);
          }
        );
    }
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute top-20 right-0 w-64 h-64 bg-accent/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-20 w-80 h-80 bg-secondary/10 rounded-full filter blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          Get In <span className="text-primary neon-glow">Touch</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Let's create something amazing together.</h3>
            <p className="text-foreground/80 mb-8">
              Whether you have a project or just want to chat, drop me a message. I’m always open to new ideas.
            </p>

            <div className="mb-8">
              <p className="font-medium mb-2">Connect with me:</p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-3 glass rounded-full hover:text-primary hover:border-primary transition-all duration-300 animate-glow"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div className="glass rounded-lg p-6 backdrop-blur-lg">
              <p className="font-medium mb-2">Email me directly:</p>
              <a href="mailto:pgihan29@gmail.com" className="text-primary hover:underline break-all">
                pgihan29@gmail.com
              </a>
            </div>
          </div>

          <div className="glass p-6 md:p-8 rounded-lg backdrop-blur-lg relative z-10 overflow-hidden">
            {submitSuccess && (
              <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-md rounded-lg z-50 animate-fade-in">
                <div className="text-center p-6">
                  <div className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">Message Sent!</h3>
                  <p className="text-foreground/80">Thanks for reaching out. I’ll get back to you soon.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full glass bg-background/30 border ${errors.name ? 'border-red-500' : 'border-foreground/10'} rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary/50`}
                  placeholder="John Doe"
                />
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full glass bg-background/30 border ${errors.email ? 'border-red-500' : 'border-foreground/10'} rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary/50`}
                  placeholder="john@example.com"
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full glass bg-background/30 border ${errors.message ? 'border-red-500' : 'border-foreground/10'} rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary/50`}
                  placeholder="I'd like to discuss a project..."
                ></textarea>
                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`btn btn-primary w-full flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>Send Message</>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
