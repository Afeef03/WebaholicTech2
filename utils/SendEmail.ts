import { FormData } from "@/components/Contact";
import { ToastContainer, toast } from 'react-toastify';

export function sendEmails(data: FormData) {
  const apiEndpoint = '/api/email';

  fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      toast.success(response.message, {
        theme: 'dark'
      });
    })
    .catch((err) => {
      toast.error('Failed to send email', {
        theme: 'dark'
      });
      console.error(err);
    });
}