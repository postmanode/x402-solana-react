import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { WalletSectionProps } from "@/types";
import { cn } from "@/lib/utils";

export const WalletSection: React.FC<WalletSectionProps> = ({
  wallet,
  balance,
  network,
  showBalance = true,
  onDisconnect,
  theme,
  className,
  style,
}) => {
  const walletAddress = wallet?.publicKey?.toString() || wallet?.address;

  const formatAddress = (address: string) => {
    return `${address.slice(0, 4)}...${address.slice(-4)}`;
  };

  const getNetworkLabel = () => {
    return network === "solana" ? "Mainnet" : "Devnet";
  };

  if (!wallet || !walletAddress) {
    return (
      <Card className={cn("border-dashed", className)} style={style}>
        <CardContent className="p-4 text-center text-muted-foreground">
          <p className="text-sm">No wallet connected</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div
      className={cn(
        "rounded-lg p-4",
        className
      )}
      style={style}
    >
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Wallet Picture */}
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold text-sm">
                {walletAddress.slice(0, 2).toUpperCase()}
              </span>
            </div>
            <div>
              <div
                className={cn(
                  "text-xs font-medium",
                  theme === "light" || theme === "solana-light"
                    ? "text-[#71717A]"
                    : "text-[#FFFFFF66]"
                )}
              >
                Connected Wallet
              </div>
              <div
                className={cn(
                  "text-sm font-mono",
                  theme === "light" || theme === "solana-light"
                    ? "text-black"
                    : "text-white"
                )}
              >
                {formatAddress(walletAddress)}
              </div>
            </div>
          </div>
          <button
            onClick={onDisconnect}
            className={cn(
              "text-sm font-medium transition-colors",
              theme === "light" || theme === "solana-light"
                ? "text-red-500 hover:text-red-700"
                : "text-[#FFFFFF66] hover:opacity-80"
            )}
          >
            Disconnect
          </button>
        </div>

        {showBalance && balance && (
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-slate-600">
              USDC Balance
            </span>
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-slate-900">
                {balance}
              </span>
              <span className="text-xs font-semibold text-slate-500 bg-slate-200 px-2 py-1 rounded-md">
                USDC
              </span>
            </div>
          </div>
        )}

        {network && (
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-slate-600">Network</span>
            <Badge
              variant="outline"
              className="text-xs border-slate-300 text-slate-700"
            >
              {getNetworkLabel()}
            </Badge>
          </div>
        )}
      </div>
    </div>
  );
};

WalletSection.displayName = "WalletSection";
