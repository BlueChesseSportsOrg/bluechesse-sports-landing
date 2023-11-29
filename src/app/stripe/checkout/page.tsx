
import CheckoutForm from '../../components/CheckoutForm';

export default function Checkout() {

    return (
        <main className="flex min-h-screen flex-col items-center justify-center py-4 bg-black">
            <div id="checkout" className='bg-white text-black'>
                <CheckoutForm />
            </div>

        </main>
    );
}


