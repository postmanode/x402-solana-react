import { useState } from "react";
import { X402Paywall } from "../components/X402Paywall";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

// Import wallet adapter styles (must be BEFORE globals.css for proper override)
import "@solana/wallet-adapter-react-ui/styles.css";

type Theme =
  | "solana-light"
  | "solana-dark"
  | "dark"
  | "light"
  | "seeker"
  | "terminal"
  | "seeker-2";

function DemoContent() {
  const [currentTheme] = useState<Theme>("solana-light");
  const rpcUrl = import.meta.env.VITE_SOLANA_RPC_URL;

  return (
    <>
      {/* Theme Switcher temporarily disabled
      <div className="fixed top-4 right-4 z-50">
        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-slate-200">
          <h3 className="text-sm font-semibold text-slate-700 mb-3">Theme</h3>
          <div className="grid grid-cols-2 gap-2">
            {(["light", "dark"] as Theme[]).map((theme) => (
              <Button
                key={theme}
                onClick={() => setCurrentTheme(theme)}
                variant={currentTheme === theme ? "default" : "outline"}
                size="sm"
                className={`text-xs ${currentTheme === theme
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "text-slate-600 hover:bg-slate-50"
                  }`}
              >
                {theme.charAt(0).toUpperCase() + theme.slice(1)}
              </Button>
            ))}
          </div>
        </div>
      </div>
      */}

      <X402Paywall
        amount={0.01}
        description="Premium Demo Content Access"
        network="solana" // or "solana-devnet"
        theme={currentTheme}
        rpcUrl={rpcUrl} // Recommended to have a custom rpc url to avoid rate limits
        showBalance={true}
        showNetworkInfo={true}
        onPaymentSuccess={(txId) => {
          console.log("Payment successful!", txId);
          alert(`Payment successful! Transaction ID: ${txId}`);
        }}
        onPaymentError={(error) => {
          console.error("Payment failed:", error);
          alert(`Payment failed: ${error.message}`);
        }}
      >
        {/* Premium Content */}
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-2xl shadow-2xl border-0">
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-4xl font-bold bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                🎉 Welcome to Premium!
              </CardTitle>
              <CardDescription className="text-lg text-slate-600 mt-2">
                You've successfully unlocked exclusive content
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 pt-4">
              <div className="bg-gradient-to-r from-emerald-100 via-blue-100 to-purple-100 p-6 rounded-xl border border-slate-200">
                <h3 className="font-semibold text-slate-800 mb-4 text-lg">
                  🚀 Premium Features Unlocked:
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span className="text-slate-700">Advanced Analytics</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-slate-700">Priority Support</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-slate-700">Exclusive Content</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                      <span className="text-slate-700">API Access</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center space-y-4">
                <p className="text-slate-600">
                  Thank you for supporting our project! Your payment helps us
                  build better Web3 tools.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button
                    onClick={() => window.location.reload()}
                    variant="outline"
                    className="border-slate-300 hover:bg-slate-50"
                  >
                    Reset Demo
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </X402Paywall>
    </>
  );
}

function App() {
  return <DemoContent />;
}

export default App;
