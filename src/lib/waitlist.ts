import toast from 'react-hot-toast';

export async function joinWaitlist(email: string): Promise<boolean> {
  try {
    const response = await fetch('https://api.getwaitlist.com/api/v1/waiter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        waitlist_id: '22521',
        referral_link: window.location.href,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to join waitlist');
    }

    const data = await response.json();
    return true;
  } catch (error) {
    console.error('Error joining waitlist:', error);
    return false;
  }
}