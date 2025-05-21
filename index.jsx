import { Button } from "../components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 to-green-100 p-6 text-center">
      <div className="max-w-3xl mx-auto py-12">
        <img
          src="/mochi-logo.png"
          alt="Mochi Logo"
          className="mx-auto w-32 h-32 rounded-full shadow-lg mb-6"
        />
        <h1 className="text-4xl font-bold mb-2">$MOCHI - The Squishiest Coin on Solana 🍡</h1>
        <p className="text-lg text-gray-700 mb-6">
          Say hello to the softest, most lovable meme coin on Solana. No utility. Just vibes.
        </p>

        <div className="bg-white rounded-2xl shadow-md p-6 text-left">
          <h2 className="text-2xl font-semibold mb-4">🍥 Token Details</h2>
          <ul className="space-y-2 text-gray-800">
            <li><strong>Token Name:</strong> Mochi Coin</li>
            <li><strong>Symbol:</strong> $MOCHI</li>
            <li><strong>Decimals:</strong> 9</li>
            <li><strong>Total Supply:</strong> 1,000,000,000,000</li>
            <li><strong>Token Address:</strong> 5kTnT54HK5DgukgJpSMJSWnkXebnumKYVJdi3EsMiKyw</li>
          </ul>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">🌐 Join the Mochi Movement</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild>
              <a href="https://phantom.app" target="_blank">Phantom Wallet</a>
            </Button>
            <Button asChild>
              <a href="https://jup.ag" target="_blank">Buy on Jupiter</a>
            </Button>
            <Button asChild>
              <a href="https://twitter.com" target="_blank">Twitter</a>
            </Button>
            <Button asChild>
              <a href="https://discord.com" target="_blank">Discord</a>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
