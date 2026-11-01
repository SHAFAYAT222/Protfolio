import React, { useState } from 'react';
import { 
  X, 
  ExternalLink, 
  CheckCircle, 
  ShoppingBag, 
  Plus, 
  Minus, 
  Trash2, 
  Receipt, 
  Database, 
  Navigation, 
  Car, 
  UtensilsCrossed, 
  Package, 
  TrendingUp, 
  BarChart2, 
  Activity, 
  Play, 
  RotateCcw,
  Sparkles
} from 'lucide-react';
import { Github } from './SocialIcons';
import confetti from 'canvas-confetti';

export default function ProjectDemoModal({ project, isOpen, onClose }) {
  if (!isOpen || !project) return null;

  // State for Coffee Shop POS Demo
  const [posCart, setPosCart] = useState([
    { id: 1, name: "Iced Spanish Latte", price: 280, qty: 1 },
    { id: 2, name: "Butter Croissant", price: 150, qty: 2 }
  ]);
  const [lastReceipt, setLastReceipt] = useState(null);

  // State for Pathao SuperApp Demo
  const [superAppService, setSuperAppService] = useState('ride'); // 'ride', 'food', 'courier'
  const [pickupLoc, setPickupLoc] = useState('Kuril Chowrasta, Dhaka');
  const [dropoffLoc, setDropoffLoc] = useState('Gulshan 1, Dhaka (Wave Riders)');
  const [rideState, setRideState] = useState('idle'); // 'idle', 'searching', 'confirmed'

  // State for Algo Trader Demo
  const [selectedAsset, setSelectedAsset] = useState('BTC/USDT');
  const [activeIndicators, setActiveIndicators] = useState({ rsi: true, ema: true, macd: false });
  const [backtestResult, setBacktestResult] = useState(null);
  const [isSimulating, setIsSimulating] = useState(false);

  // Coffee Shop Menu Items
  const menuItems = [
    { id: 1, name: "Iced Spanish Latte", price: 280, cat: "Coffee" },
    { id: 2, name: "Butter Croissant", price: 150, cat: "Bakery" },
    { id: 3, name: "Single Origin Espresso", price: 180, cat: "Coffee" },
    { id: 4, name: "Cold Brew Nitro", price: 320, cat: "Coffee" },
    { id: 5, name: "Smoked Chicken Panini", price: 360, cat: "Food" },
  ];

  const addToPosCart = (item) => {
    setPosCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const updatePosQty = (id, delta) => {
    setPosCart(prev => prev.map(i => {
      if (i.id === id) {
        const newQty = i.qty + delta;
        return newQty > 0 ? { ...i, qty: newQty } : null;
      }
      return i;
    }).filter(Boolean));
  };

  const calculatePosTotal = () => {
    const subtotal = posCart.reduce((sum, item) => sum + item.price * item.qty, 0);
    const vat = Math.round(subtotal * 0.05);
    return { subtotal, vat, total: subtotal + vat };
  };

  const handleCheckoutPos = () => {
    const totals = calculatePosTotal();
    const receiptId = `TXN-${Math.floor(100000 + Math.random() * 900000)}`;
    setLastReceipt({
      id: receiptId,
      items: [...posCart],
      ...totals,
      timestamp: new Date().toLocaleTimeString()
    });
    setPosCart([]);
    confetti({ particleCount: 35, spread: 60, origin: { y: 0.6 } });
  };

  const handleSimulateRide = () => {
    setRideState('searching');
    setTimeout(() => {
      setRideState('confirmed');
      confetti({ particleCount: 40, spread: 70, origin: { y: 0.6 } });
    }, 1400);
  };

  const handleRunBacktest = () => {
    setIsSimulating(true);
    setBacktestResult(null);
    setTimeout(() => {
      setBacktestResult({
        totalTrades: 342,
        winRate: "68.4%",
        profitFactor: "2.18",
        maxDrawdown: "-4.2%",
        netReturn: "+41.6%",
        triggerSummary: "EMA 20/50 Bullish crossover confirmed with RSI pullback under 42."
      });
      setIsSimulating(false);
      confetti({ particleCount: 45, spread: 80, origin: { y: 0.6 } });
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl rounded-3xl bg-slate-900 border border-slate-700 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 bg-slate-950 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
              <Sparkles className="w-4 h-4" />
            </span>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm sm:text-base font-bold text-white font-display">
                  {project.title}
                </h3>
                <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-cyan-950 text-cyan-300 border border-cyan-800">
                  Interactive Live Sandbox
                </span>
              </div>
              <span className="text-xs text-slate-400 font-mono">
                Supervised by: {project.supervision.faculty} ({project.supervision.institution})
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body - Specialized for each project */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6">
          
          {/* 1. COFFEE SHOP POS DEMO */}
          {project.id === 'coffee-shop' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Menu Selection (7 Cols) */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <ShoppingBag className="w-4 h-4 text-emerald-400" />
                    <span>POS Terminal Menu (Touch/Click to Add)</span>
                  </h4>
                  <span className="text-xs font-mono text-cyan-400">Database-backed Inventory</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {menuItems.map(item => (
                    <button
                      key={item.id}
                      onClick={() => addToPosCart(item)}
                      className="p-3 rounded-xl bg-slate-950/80 hover:bg-slate-800 border border-slate-800 hover:border-emerald-500/50 text-left transition-all group flex flex-col justify-between"
                    >
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500">{item.cat}</span>
                        <div className="font-semibold text-white text-xs sm:text-sm group-hover:text-emerald-300">
                          {item.name}
                        </div>
                      </div>
                      <div className="mt-2 flex items-center justify-between text-xs">
                        <span className="font-mono text-emerald-400 font-bold">৳{item.price}</span>
                        <span className="p-1 rounded bg-slate-900 group-hover:bg-emerald-500 group-hover:text-slate-950 text-slate-400 transition-colors">
                          <Plus className="w-3 h-3" />
                        </span>
                      </div>
                    </button>
                  ))}
                </div>

                {lastReceipt && (
                  <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-xs">
                    <div className="flex items-center justify-between text-emerald-400 font-mono font-bold mb-1">
                      <span className="flex items-center gap-1.5">
                        <Receipt className="w-3.5 h-3.5" />
                        SQL Transaction Committed: {lastReceipt.id}
                      </span>
                      <span>{lastReceipt.timestamp}</span>
                    </div>
                    <p className="text-slate-300">
                      Successfully saved {lastReceipt.items.length} line items totaling ৳{lastReceipt.total} with 5% VAT into relational order history table.
                    </p>
                  </div>
                )}
              </div>

              {/* Live Cart & Bill (5 Cols) */}
              <div className="lg:col-span-5 rounded-2xl bg-slate-950 border border-slate-800 p-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
                    <span className="font-bold text-white text-xs uppercase tracking-wider font-mono">
                      Current Order Register
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      {posCart.reduce((sum, i) => sum + i.qty, 0)} Items
                    </span>
                  </div>

                  {posCart.length === 0 ? (
                    <div className="py-8 text-center text-slate-500 text-xs font-mono">
                      Order register empty.<br/>Click items to generate billing ticket.
                    </div>
                  ) : (
                    <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                      {posCart.map(item => (
                        <div key={item.id} className="flex items-center justify-between text-xs py-1.5 border-b border-slate-900">
                          <div className="truncate pr-2">
                            <span className="text-white font-medium">{item.name}</span>
                            <div className="text-[10px] text-slate-400 font-mono">৳{item.price} each</div>
                          </div>

                          <div className="flex items-center gap-2 shrink-0">
                            <button
                              onClick={() => updatePosQty(item.id, -1)}
                              className="p-1 rounded bg-slate-900 hover:bg-slate-800 text-slate-400"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="font-mono text-white text-xs w-4 text-center">{item.qty}</span>
                            <button
                              onClick={() => updatePosQty(item.id, 1)}
                              className="p-1 rounded bg-slate-900 hover:bg-slate-800 text-slate-400"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                            <span className="font-mono text-emerald-400 font-semibold w-12 text-right">
                              ৳{item.price * item.qty}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-slate-800/80 space-y-2 text-xs font-mono">
                  <div className="flex justify-between text-slate-400">
                    <span>Subtotal:</span>
                    <span>৳{calculatePosTotal().subtotal}</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>VAT (5%):</span>
                    <span>৳{calculatePosTotal().vat}</span>
                  </div>
                  <div className="flex justify-between text-white font-bold text-sm pt-1 border-t border-slate-800">
                    <span>Payable Total:</span>
                    <span className="text-emerald-400">৳{calculatePosTotal().total}</span>
                  </div>

                  <button
                    disabled={posCart.length === 0}
                    onClick={handleCheckoutPos}
                    className="w-full mt-3 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-cyan-400 hover:opacity-95 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-md shadow-emerald-500/20"
                  >
                    Commit &amp; Print Invoice
                  </button>
                </div>

              </div>

            </div>
          )}

          {/* 2. PATHAO SUPERAPP CLONE DEMO */}
          {project.id === 'pathao-clone' && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              
              {/* Left: Interactive Phone Mockup (6 Cols) */}
              <div className="md:col-span-6 flex justify-center">
                <div className="w-full max-w-sm rounded-[32px] bg-slate-950 border-4 border-slate-800 p-4 shadow-2xl relative">
                  {/* Phone Speaker Notch */}
                  <div className="w-20 h-3 bg-slate-800 rounded-full mx-auto mb-3"></div>

                  {/* Top SuperApp Tabs */}
                  <div className="grid grid-cols-3 gap-1 p-1 rounded-xl bg-slate-900 mb-4 text-xs font-medium">
                    <button
                      onClick={() => { setSuperAppService('ride'); setRideState('idle'); }}
                      className={`py-1.5 rounded-lg flex items-center justify-center gap-1.5 transition-all ${
                        superAppService === 'ride' ? 'bg-red-600 text-white font-bold shadow' : 'text-slate-400'
                      }`}
                    >
                      <Car className="w-3.5 h-3.5" />
                      <span>Ride</span>
                    </button>
                    <button
                      onClick={() => { setSuperAppService('food'); setRideState('idle'); }}
                      className={`py-1.5 rounded-lg flex items-center justify-center gap-1.5 transition-all ${
                        superAppService === 'food' ? 'bg-red-600 text-white font-bold shadow' : 'text-slate-400'
                      }`}
                    >
                      <UtensilsCrossed className="w-3.5 h-3.5" />
                      <span>Food</span>
                    </button>
                    <button
                      onClick={() => { setSuperAppService('courier'); setRideState('idle'); }}
                      className={`py-1.5 rounded-lg flex items-center justify-center gap-1.5 transition-all ${
                        superAppService === 'courier' ? 'bg-red-600 text-white font-bold shadow' : 'text-slate-400'
                      }`}
                    >
                      <Package className="w-3.5 h-3.5" />
                      <span>Parcel</span>
                    </button>
                  </div>

                  {/* Route Selector */}
                  <div className="space-y-2.5 text-xs bg-slate-900/80 p-3 rounded-2xl border border-slate-800 mb-4">
                    <div>
                      <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider block">Pickup:</span>
                      <input 
                        type="text" 
                        value={pickupLoc} 
                        onChange={(e) => setPickupLoc(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1.5 text-slate-200 text-xs focus:outline-none focus:border-red-500" 
                      />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider block">Destination:</span>
                      <input 
                        type="text" 
                        value={dropoffLoc} 
                        onChange={(e) => setDropoffLoc(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1.5 text-slate-200 text-xs focus:outline-none focus:border-red-500" 
                      />
                    </div>
                  </div>

                  {/* Fare & Booking card */}
                  <div className="p-3.5 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-900/60 border border-slate-800 text-xs space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-300 font-medium">Estimated Distance:</span>
                      <span className="font-mono text-cyan-400">4.8 km (~14 mins)</span>
                    </div>
                    <div className="flex items-center justify-between text-sm font-bold">
                      <span className="text-white">Calculated Fare:</span>
                      <span className="font-mono text-emerald-400">৳185 BDT</span>
                    </div>

                    {rideState === 'idle' && (
                      <button
                        onClick={handleSimulateRide}
                        className="w-full mt-2 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold transition-all shadow-md shadow-red-600/30"
                      >
                        Request Pathao {superAppService.toUpperCase()}
                      </button>
                    )}

                    {rideState === 'searching' && (
                      <div className="py-2 text-center text-yellow-400 font-mono text-xs flex items-center justify-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-yellow-400 animate-ping"></span>
                        <span>Matching Nearby Rider in Kuril...</span>
                      </div>
                    )}

                    {rideState === 'confirmed' && (
                      <div className="p-2 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-center text-xs">
                        <CheckCircle className="w-4 h-4 mx-auto mb-1 text-emerald-400" />
                        <span className="font-bold">Rider Dispatched!</span>
                        <div className="text-[10px] text-slate-400 font-mono">Hero Hunk (Dhaka Metro-HA-4219)</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Right: Architecture & Technical Scope (6 Cols) */}
              <div className="md:col-span-6 space-y-4 text-xs sm:text-sm text-slate-300">
                <h4 className="text-base font-bold text-white font-display">
                  State Architecture &amp; Multi-Service Layout
                </h4>
                <p className="leading-relaxed">
                  Supervised by <span className="text-emerald-400 font-semibold">{project.supervision.faculty}</span>, this clone implements a centralized React state manager that handles cross-module context switching (Ride, Food, Courier) without resetting persistent user sessions.
                </p>

                <div className="space-y-2 pt-2">
                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                    <span className="text-white font-semibold block mb-0.5">Dynamic Geolocation Pricing Formula</span>
                    <span className="text-slate-400 text-xs">Calculates base fare + peak time multiplier + distance gradient with live UI re-rendering.</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                    <span className="text-white font-semibold block mb-0.5">Mobile-First Touch Architecture</span>
                    <span className="text-slate-400 text-xs">Designed with thumb-zone touch ergonomics, responsive bottom sheets, and minimal layout shift.</span>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* 3. ALGORITHMIC MARKET ANALYZER DEMO */}
          {project.id === 'algorithmic-trader' && (
            <div className="space-y-5">
              
              {/* Asset & Indicator Controls */}
              <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-2xl bg-slate-950 border border-slate-800 text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-slate-400">Pair:</span>
                  {['BTC/USDT', 'ETH/USDT', 'SOL/USDT'].map(asset => (
                    <button
                      key={asset}
                      onClick={() => { setSelectedAsset(asset); setBacktestResult(null); }}
                      className={`px-3 py-1 rounded-lg font-mono transition-colors ${
                        selectedAsset === asset ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-slate-900 text-slate-400 hover:text-white'
                      }`}
                    >
                      {asset}
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-mono text-slate-400">Indicators:</span>
                  <button
                    onClick={() => setActiveIndicators(prev => ({ ...prev, rsi: !prev.rsi }))}
                    className={`px-2.5 py-1 rounded-md text-[11px] font-mono border ${
                      activeIndicators.rsi ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' : 'bg-slate-900 text-slate-500 border-slate-800'
                    }`}
                  >
                    RSI (14)
                  </button>
                  <button
                    onClick={() => setActiveIndicators(prev => ({ ...prev, ema: !prev.ema }))}
                    className={`px-2.5 py-1 rounded-md text-[11px] font-mono border ${
                      activeIndicators.ema ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40' : 'bg-slate-900 text-slate-500 border-slate-800'
                    }`}
                  >
                    EMA 20/50
                  </button>
                  <button
                    onClick={() => setActiveIndicators(prev => ({ ...prev, macd: !prev.macd }))}
                    className={`px-2.5 py-1 rounded-md text-[11px] font-mono border ${
                      activeIndicators.macd ? 'bg-teal-500/20 text-teal-300 border-teal-500/40' : 'bg-slate-900 text-slate-500 border-slate-800'
                    }`}
                  >
                    MACD
                  </button>
                </div>

                <button
                  disabled={isSimulating}
                  onClick={handleRunBacktest}
                  className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 hover:opacity-95 text-slate-950 font-bold flex items-center gap-1.5 font-mono"
                >
                  {isSimulating ? (
                    <>
                      <span className="w-2 h-2 rounded-full bg-slate-950 animate-ping"></span>
                      <span>Simulating...</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Run Backtest</span>
                    </>
                  )}
                </button>
              </div>

              {/* Chart Visual Simulation */}
              <div className="rounded-2xl bg-slate-950 border border-slate-800 p-5 font-mono text-xs">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4 text-slate-400">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-emerald-400" />
                    <span className="text-white font-bold">{selectedAsset} — 4H Timeframe Historical Pipeline</span>
                  </div>
                  <span className="text-emerald-400 font-mono">Current: $68,420.50 (+3.42%)</span>
                </div>

                {/* Simulated Candlestick graphic */}
                <div className="h-32 flex items-end justify-between gap-1 sm:gap-2 px-2 py-4 bg-slate-900/60 rounded-xl border border-slate-800/80">
                  {[45, 60, 55, 75, 40, 65, 80, 70, 90, 85, 95, 78, 88, 92, 100].map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                      <div className="w-0.5 bg-slate-600 h-2"></div>
                      <div 
                        className={`w-full rounded-sm transition-all duration-500 ${
                          i % 3 === 0 ? 'bg-red-500/80' : 'bg-emerald-400/80'
                        }`}
                        style={{ height: `${h}%` }}
                      ></div>
                      <div className="w-0.5 bg-slate-600 h-2"></div>
                    </div>
                  ))}
                </div>

                {/* Indicator readings */}
                <div className="mt-3 flex flex-wrap items-center gap-4 text-[11px] text-slate-400">
                  {activeIndicators.rsi && (
                    <span className="text-emerald-300">RSI: 48.2 (Neutral / Accumulation)</span>
                  )}
                  {activeIndicators.ema && (
                    <span className="text-cyan-300">EMA 20 ($67,910) &gt; EMA 50 ($66,420) — Bullish</span>
                  )}
                  {activeIndicators.macd && (
                    <span className="text-teal-300">MACD Histogram: +124.50 (Expanding)</span>
                  )}
                </div>
              </div>

              {/* Simulation Result Box */}
              {backtestResult && (
                <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 space-y-3 animate-fadeIn text-xs">
                  <div className="flex items-center justify-between text-emerald-400 font-mono font-bold">
                    <span className="flex items-center gap-1.5 text-sm">
                      <TrendingUp className="w-4 h-4" />
                      Backtest Execution Completed
                    </span>
                    <span>Sample: {backtestResult.totalTrades} Executed Trades</span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center font-mono">
                    <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800">
                      <span className="text-slate-400 block text-[10px]">Win Rate</span>
                      <span className="text-base font-bold text-emerald-400">{backtestResult.winRate}</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800">
                      <span className="text-slate-400 block text-[10px]">Profit Factor</span>
                      <span className="text-base font-bold text-cyan-400">{backtestResult.profitFactor}</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800">
                      <span className="text-slate-400 block text-[10px]">Max Drawdown</span>
                      <span className="text-base font-bold text-yellow-400">{backtestResult.maxDrawdown}</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800">
                      <span className="text-slate-400 block text-[10px]">Net Return</span>
                      <span className="text-base font-bold text-emerald-400">{backtestResult.netReturn}</span>
                    </div>
                  </div>

                  <p className="text-slate-300 font-sans text-xs pt-1">
                    <span className="font-semibold text-white">Strategy Trigger:</span> {backtestResult.triggerSummary}
                  </p>
                </div>
              )}

            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-200 hover:text-white transition-colors flex items-center gap-1.5 border border-slate-700"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Inspect Source on GitHub</span>
            </a>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium"
          >
            Close Sandbox
          </button>
        </div>

      </div>
    </div>
  );
}
