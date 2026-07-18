/**
 * Contact Chapter Data
 * 
 * Central data source for contact page metadata, form fields, and messaging.
 * Follows data-driven architecture pattern from other chapters.
 */

export interface ContactHero {
  chapterNumber: string;
  title: string;
  subtitle: string;
  description: string;
  volumeLabel: string;
  coordinates: string;
}

export interface ContactFormField {
  id: string;
  name: string;
  type: 'text' | 'email' | 'textarea' | 'select';
  label: string;
  placeholder: string;
  required: boolean;
  pattern?: string;
  maxLength?: number;
  rows?: number;
  options?: Array<{ value: string; label: string }>;
}

export interface ContactMethod {
  id: string;
  title: string;
  description: string;
  value: string;
  type: 'email' | 'phone' | 'url' | 'address';
  displayLabel?: string;
}

export interface ContactInfo {
  primaryEmail: string;
  linkedInUrl: string;
  resumeUrl: string;
}

/**
 * Contact Chapter Hero Metadata
 */
export const contactHero: ContactHero = {
  chapterNumber: '07',
  title: 'Contact',
  subtitle: 'Let\'s Work Together',
  description: 'Interested in exploring how operational frameworks scale globally? Reach out to discuss strategy, implementation, or potential collaborations.',
  volumeLabel: 'CONTACT // VOL 7',
  coordinates: '[COORDINATES: Available from session data]',
};

/**
 * Contact Form Fields
 * Organized by section: inquiry, contact info
 */
export const inquiryFormFields: ContactFormField[] = [
  {
    id: 'name',
    name: 'name',
    type: 'text',
    label: 'Full Name',
    placeholder: '[VALIDATION REQUIRED: e.g., Your Full Name]',
    required: true,
    maxLength: 100,
  },
  {
    id: 'email',
    name: 'email',
    type: 'email',
    label: 'Email Address',
    placeholder: '[VALIDATION REQUIRED: e.g., name@example.com]',
    required: true,
    pattern: '^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$',
  },
  {
    id: 'company',
    name: 'company',
    type: 'text',
    label: 'Company / Organization',
    placeholder: '[VALIDATION REQUIRED: e.g., Organization Name]',
    required: false,
    maxLength: 150,
  },
  {
    id: 'inquiry_type',
    name: 'inquiry_type',
    type: 'select',
    label: 'Inquiry Type',
    placeholder: '[VALIDATION REQUIRED: Select inquiry type]',
    required: true,
    options: [
      { value: 'strategy', label: '[VALIDATION REQUIRED: Strategic Consulting]' },
      { value: 'implementation', label: '[VALIDATION REQUIRED: Implementation Support]' },
      { value: 'collaboration', label: '[VALIDATION REQUIRED: Collaboration / Partnership]' },
      { value: 'speaking', label: '[VALIDATION REQUIRED: Speaking / Event]' },
      { value: 'other', label: '[VALIDATION REQUIRED: Other]' },
    ],
  },
  {
    id: 'message',
    name: 'message',
    type: 'textarea',
    label: 'Message',
    placeholder: '[VALIDATION REQUIRED: Tell us about your project or inquiry...]',
    required: true,
    maxLength: 2000,
    rows: 8,
  },
];

/**
 * Contact Methods
 * Alternative ways to reach out
 */
export const contactMethods: ContactMethod[] = [
  {
    id: 'email',
    title: 'Email',
    description: 'For inquiries and project discussions',
    value: '[VALIDATION REQUIRED: email@ryanmorrow.com]',
    type: 'email',
    displayLabel: '[VALIDATION REQUIRED: hello@ryanmorrow.dev]',
  },
  {
    id: 'linkedin',
    title: 'LinkedIn',
    description: 'Connect and follow on professional network',
    value: 'https://linkedin.com/in/ryanmorrow',
    type: 'url',
    displayLabel: 'linkedin.com/in/ryanmorrow',
  },
  {
    id: 'resume',
    title: 'Resume',
    description: 'Download full CV and background',
    value: '/resume.pdf',
    type: 'url',
    displayLabel: 'Download CV',
  },
];

/**
 * Contact Info (Primary contact points)
 */
export const contactInfo: ContactInfo = {
  primaryEmail: '[VALIDATION REQUIRED: hello@ryanmorrow.dev]',
  linkedInUrl: 'https://linkedin.com/in/ryanmorrow',
  resumeUrl: '/resume.pdf',
};

/**
 * Form Success Message
 */
export const formSuccessMessage = {
  title: '[VALIDATION REQUIRED: Message Received]',
  description: '[VALIDATION REQUIRED: Thank you for reaching out. I will review your inquiry and respond within 2-3 business days.]',
};

/**
 * Form Error Messages
 */
export const formErrorMessages = {
  name_required: 'Full name is required',
  name_invalid: 'Please enter a valid name',
  email_required: 'Email address is required',
  email_invalid: 'Please enter a valid email address',
  inquiry_type_required: 'Please select an inquiry type',
  message_required: 'Please provide a message',
  message_too_long: 'Message must be 2000 characters or fewer',
  general: '[VALIDATION REQUIRED: An error occurred. Please try again later.]',
};
