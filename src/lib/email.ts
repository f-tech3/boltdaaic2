import toast from 'react-hot-toast';

interface EmailData {
  name: string;
  subject: 'general' | 'event';
  message: string;
  eventDetails?: {
    eventName: string;
    startDate: string;
    endDate?: string;
    organizer: string;
    website?: string;
  };
}

export async function sendEmail(data: EmailData): Promise<boolean> {
  try {
    const formData = new FormData();
    formData.append('access_key', 'fda3edef-646f-446a-95f2-c91ed5b82637');
    formData.append('name', data.name);
    formData.append('subject', data.subject === 'event' ? 'New Event Submission' : 'General Inquiry');
    
    // Construct message based on subject type
    let message = data.message;
    if (data.subject === 'event' && data.eventDetails) {
      message = `
Event Details:
- Name: ${data.eventDetails.eventName}
- Start Date: ${data.eventDetails.startDate}
- End Date: ${data.eventDetails.endDate || 'N/A'}
- Organizer: ${data.eventDetails.organizer}
- Website: ${data.eventDetails.website || 'N/A'}

Additional Information:
${data.message}
      `.trim();
    }
    
    formData.append('message', message);
    formData.append('to', 'daaic.dev@gmail.com');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    });

    const result = await response.json();

    if (result.success) {
      toast.success('Message sent successfully!');
      return true;
    } else {
      throw new Error(result.message || 'Failed to send message');
    }
  } catch (error) {
    console.error('Error sending email:', error);
    toast.error('Failed to send message. Please try again.');
    return false;
  }
}