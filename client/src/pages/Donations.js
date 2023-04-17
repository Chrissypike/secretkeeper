import { Elements} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { PaymentElement } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

export default function donationForm() {
    const choices = {
      clientSecret: '{{CLIENT_SECRET}}',
    };
  
    return (
      <Elements stripe={stripePromise} options={choices}>
        <form>
            <PaymentElement />
            <button>Submit</button>
        </form>
      </Elements>
    );
  };