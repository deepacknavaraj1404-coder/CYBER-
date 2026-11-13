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
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Click outside to close backdrop */}
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-md rounded-3xl bg-[#0A1220] border border-[#1e3252] shadow-2xl p-6 sm:p-8 z-10 overflow-hidden">
        
        {/* Glow corner accent */}
        <div className="absolute -top-16 -right-16 w-40 h-40 bg-[#00E599]/15 rounded-full blur-2xl pointer-events-none"></div>

        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Logo & Header */}
        <div className="text-center space-y-2 mb-6">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#0D1728] border border-[#00E599]/40 shadow-[0_0_15px_rgba(0,229,153,0.2)] mx-auto">
            <Shield className="w-6 h-6 text-[#00E599]" />
          </div>
          <h3 className="text-2xl font-black text-white tracking-tight">
            {tab === 'login' ? 'Welcome Back to Cybrary' : 'Start Your 7-Day Free Trial'}
          </h3>
          <p className="text-xs text-slate-400">
            {tab === 'login' 
              ? 'Access your saved virtual labs, career progress, and scorecards.' 
              : 'Full access to 1,200+ virtual labs & certification curriculums.'}
          </p>
        </div>

        {/* Tabs: Sign Up vs Log In */}
        <div className="grid grid-cols-2 p-1 rounded-xl bg-[#060B13] border border-[#19253B] mb-6 text-xs font-semibold">
          <button
            onClick={() => { setTab('signup'); setSubmitted(false); }}
            className={`py-2 rounded-lg transition-all ${
              tab === 'signup' 
                ? 'bg-[#00E599] text-[#060B13] font-bold shadow-sm' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Create Account
          </button>
          <button
            onClick={() => { setTab('login'); setSubmitted(false); }}
            className={`py-2 rounded-lg transition-all ${
              tab === 'login' 
                ? 'bg-[#00E599] text-[#060B13] font-bold shadow-sm' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Log In
          </button>
        </div>

        {/* Demo Fast Fill Buttons */}
        <div className="mb-5 p-3 rounded-xl bg-[#0D1728] border border-[#19253B] flex items-center justify-between text-xs">
          <span className="text-slate-400 flex items-center gap-1 font-mono">
            <Sparkles className="w-3.5 h-3.5 text-[#00E599]" /> Quick demo:
          </span>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => handleFillDemo('soc')}
              className="px-2 py-1 rounded bg-[#132139] hover:bg-[#1a2e4e] text-[#00E599] font-mono text-[11px] transition-colors"
            >
              SOC Analyst
            </button>
            <button
              type="button"
              onClick={() => handleFillDemo('red')}
              className="px-2 py-1 rounded bg-[#132139] hover:bg-[#1a2e4e] text-cyan-400 font-mono text-[11px] transition-colors"
            >
              Red Team
            </button>
          </div>
        </div>

        {/* Success Alert */}
        {submitted ? (
          <div className="py-10 text-center space-y-3 animate-in zoom-in-95 duration-200">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-[#00E599] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-bold text-white">
              {tab === 'login' ? 'Authentication Successful!' : 'Account Initialized!'}
            </h4>
            <p className="text-xs text-slate-400 font-mono">
              Spinning up cloud hypervisor node... Redirecting to dashboard.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {tab === 'signup' && (
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Full Name
                </label>
                <input 
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Jordan Mitchell"
                  className="w-full bg-[#060B13] border border-[#19253B] focus:border-[#00E599] rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition-colors"
                  required
                />
              </div>
            )}

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">
                Work or Personal Email
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full bg-[#060B13] border border-[#19253B] focus:border-[#00E599] rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition-colors"
                  required
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-medium text-slate-300">
                  Password
                </label>
                {tab === 'login' && (
                  <a href="#" className="text-[11px] text-[#00E599] hover:underline">
                    Forgot password?
                  </a>
                )}
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input 
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full bg-[#060B13] border border-[#19253B] focus:border-[#00E599] rounded-xl pl-10 pr-10 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition-colors"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 px-4 rounded-xl font-bold text-sm text-[#060B13] bg-[#00E599] hover:bg-[#00c784] shadow-[0_0_15px_rgba(0,229,153,0.3)] transition-all flex items-center justify-center gap-2 mt-2"
            >
              <span>{tab === 'login' ? 'Sign In to Cybrary' : 'Start 7-Day Free Trial'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Social Logins */}
            <div className="pt-3 border-t border-[#19253B] space-y-2.5">
              <div className="text-center text-[11px] text-slate-500 font-mono">
                OR CONTINUE WITH
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-[#0D1728] border border-[#19253B] hover:border-slate-600 text-xs text-slate-300 transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
                  <span>GitHub</span>
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-[#0D1728] border border-[#19253B] hover:border-slate-600 text-xs text-slate-300 transition-colors"
                >
                  <Lock className="w-3.5 h-3.5 text-[#00E599]" />
                  <span>SAML SSO</span>
                </button>
              </div>
            </div>

            <p className="text-[10px] text-slate-500 text-center pt-2 font-mono">
              By proceeding, you accept Cybrary's Terms of Service and Privacy Policy.
            </p>
          </form>
        )}

      </div>
    </div>
  );
}
