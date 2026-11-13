import React, { useState, useEffect } from 'react';
import { 
  X, 
  Shield, 
  Lock, 
  Mail, 
  Eye, 
  EyeOff, 
  CheckCircle2, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

export default function AuthModal({ isOpen, onClose, initialTab = 'signup', prefilledEmail = '' }) {
  const [tab, setTab] = useState(initialTab);
  const [email, setEmail] = useState(prefilledEmail);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [fullName, setFullName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setTab(initialTab);
    if (prefilledEmail) setEmail(prefilledEmail);
  }, [initialTab, prefilledEmail]);

  if (!isOpen) return null;

  const handleFillDemo = (type) => {
    if (type === 'soc') {
      setEmail('soc.analyst@cybrary.test');
      setPassword('CyberDefense2026!');
      setFullName('Jordan Mitchell');
    } else {
      setEmail('redteam.lead@cybrary.test');
      setPassword('ZeroDayHunter99!');
      setFullName('Morgan Reed');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 1600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
      
      <div className="absolute inset-0" onClick={onClose}></div>

      <div className="relative w-full max-w-md rounded-xl bg-slate-900 border border-slate-700 shadow-2xl p-6 sm:p-7 z-10">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Logo & Header */}
        <div className="text-center space-y-1.5 mb-5">
          <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-emerald-400 mx-auto">
            <Shield className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold text-white tracking-tight">
            {tab === 'login' ? 'Sign in to Cybrary' : 'Start Your 7-Day Free Trial'}
          </h3>
          <p className="text-xs text-slate-400">
            {tab === 'login' 
              ? 'Access your cloud labs, career paths, and skill scorecards.' 
              : 'Full access to 1,250+ virtual labs & certification tracks.'}
          </p>
        </div>

        {/* Tab Toggle */}
        <div className="grid grid-cols-2 p-1 rounded-lg bg-slate-950 border border-slate-800 mb-4 text-xs font-semibold">
          <button
            onClick={() => { setTab('signup'); setSubmitted(false); }}
            className={`py-1.5 rounded transition-colors ${
              tab === 'signup' 
                ? 'bg-emerald-500 text-slate-950 font-bold' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Create Account
          </button>
          <button
            onClick={() => { setTab('login'); setSubmitted(false); }}
            className={`py-1.5 rounded transition-colors ${
              tab === 'login' 
                ? 'bg-emerald-500 text-slate-950 font-bold' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Log In
          </button>
        </div>

        {/* Demo Fast Fill */}
        <div className="mb-4 p-2.5 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between text-xs">
          <span className="text-slate-400 flex items-center gap-1 font-mono text-[11px]">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" /> Fast demo fill:
          </span>
          <div className="flex gap-1.5">
            <button
              type="button"
              onClick={() => handleFillDemo('soc')}
              className="px-2 py-0.5 rounded bg-slate-900 hover:bg-slate-800 text-emerald-400 font-mono text-[11px] transition-colors border border-slate-800"
            >
              SOC Analyst
            </button>
            <button
              type="button"
              onClick={() => handleFillDemo('red')}
              className="px-2 py-0.5 rounded bg-slate-900 hover:bg-slate-800 text-cyan-400 font-mono text-[11px] transition-colors border border-slate-800"
            >
              Red Team
            </button>
          </div>
        </div>

        {/* Success Alert */}
        {submitted ? (
          <div className="py-8 text-center space-y-2 animate-in zoom-in-95 duration-150">
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-white">
              {tab === 'login' ? 'Authentication Verified' : 'Account Ready!'}
            </h4>
            <p className="text-xs text-slate-400 font-mono">
              Redirecting to your personalized Cybrary workspace...
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3.5">
            {tab === 'signup' && (
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Full Name
                </label>
                <input 
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Jordan Mitchell"
                  className="w-full bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 outline-none transition-colors"
                  required
                />
              </div>
            )}

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Work or Personal Email
              </label>
              <div className="relative">
                <Mail className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-lg pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 outline-none transition-colors"
                  required
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-xs font-medium text-slate-300">
                  Password
                </label>
                {tab === 'login' && (
                  <a href="#" className="text-[11px] text-emerald-400 hover:underline">
                    Forgot?
                  </a>
                )}
              </div>
              <div className="relative">
                <Lock className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input 
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-lg pl-9 pr-9 py-2 text-xs text-white placeholder-slate-500 outline-none transition-colors"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white"
                >
                  {showPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-2.5 px-4 rounded-lg font-bold text-xs text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors flex items-center justify-center gap-1.5 mt-2"
            >
              <span>{tab === 'login' ? 'Sign In to Cybrary' : 'Start 7-Day Free Trial'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Social Logins */}
            <div className="pt-2 border-t border-slate-800 space-y-2">
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="flex items-center justify-center gap-1.5 py-1.5 px-3 rounded bg-slate-950 border border-slate-800 hover:border-slate-700 text-xs text-slate-300 transition-colors"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
                  <span>GitHub</span>
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="flex items-center justify-center gap-1.5 py-1.5 px-3 rounded bg-slate-950 border border-slate-800 hover:border-slate-700 text-xs text-slate-300 transition-colors"
                >
                  <Lock className="w-3 h-3 text-emerald-400" />
                  <span>SAML SSO</span>
                </button>
              </div>
            </div>

            <p className="text-[10px] text-slate-400 text-center font-mono">
              By proceeding, you accept Cybrary's Terms of Service and Privacy Policy.
            </p>
          </form>
        )}

      </div>
    </div>
  );
}
