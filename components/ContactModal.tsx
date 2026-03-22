import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Status = 'idle' | 'sending' | 'success' | 'error';

const inputClass =
  'bg-transparent border-b border-[#3D4236]/30 focus:border-[#3D4236] outline-none py-2 text-sm w-full text-[#3D4236] placeholder:text-[#3D4236]/30 placeholder:uppercase transition-colors';

const labelClass = 'text-xs font-bold uppercase tracking-widest text-[#3D4236]/60 mb-1 block';

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('https://formspree.io/f/myknaobq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name, email, subject, message }),
      });
      if (res.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-6"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.97 }}
        transition={{ duration: 0.2 }}
        className="flex flex-row rounded-2xl overflow-hidden shadow-2xl max-w-2xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left panel */}
        <div className="w-56 shrink-0 bg-[#7C8356] text-[#F5F2EA] p-10 flex flex-col justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest opacity-60 mb-4">Connect</p>
            <h2 className="text-2xl font-bold leading-snug">
              Let's craft something together.
            </h2>
          </div>
          <div>
            <p className="text-xs opacity-60 leading-relaxed mb-3">
              Currently accepting new projects for 2026.
            </p>
            <span className="text-lg opacity-50">✧</span>
          </div>
        </div>

        {/* Right panel */}
        <div className="flex-1 bg-[#F5F2EA] p-10 relative flex flex-col">
          <button
            onClick={onClose}
            className="absolute top-5 right-6 text-[#3D4236] opacity-50 hover:opacity-100 transition-opacity text-xl leading-none"
            aria-label="Close"
          >
            ×
          </button>

          {status === 'success' ? (
            <div className="flex-1 flex items-center justify-center">
              <p className="text-center text-[#3D4236] font-medium text-lg leading-relaxed">
                Message sent.<br />I'll be in touch soon. ✦
              </p>
            </div>
          ) : (
            <>
              <form onSubmit={handleSubmit} className="flex flex-col gap-6 flex-1">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className={labelClass}>Name</label>
                    <input
                      className={inputClass}
                      placeholder="Alex Mercer"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Email</label>
                    <input
                      type="email"
                      className={inputClass}
                      placeholder="hello@studio.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Subject</label>
                  <input
                    className={inputClass}
                    placeholder="Project Inquiry"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>

                <div>
                  <label className={labelClass}>Message</label>
                  <textarea
                    className={`${inputClass} resize-none`}
                    placeholder="Tell me about your vision..."
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="bg-[#3D4236] text-[#F5F2EA] rounded-full px-8 py-4 text-sm font-bold uppercase tracking-widest inline-flex items-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-60"
                  >
                    {status === 'sending' ? 'Sending...' : 'Contact'}
                    <ArrowUpRight size={16} />
                  </button>
                  {status === 'error' && (
                    <p className="text-red-500 text-xs mt-2">
                      Something went wrong. Please try again.
                    </p>
                  )}
                </div>
              </form>

              <div className="flex items-center justify-between pt-6 border-t border-[#3D4236]/10 mt-6">
                <span className="text-xs uppercase tracking-widest text-[#3D4236] opacity-50">
                  Est. 2026
                </span>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="text-xs uppercase tracking-widest text-[#3D4236] opacity-50 hover:opacity-100 transition-opacity"
                  >
                    Instagram
                  </a>
                  <a
                    href="#"
                    className="text-xs uppercase tracking-widest text-[#3D4236] opacity-50 hover:opacity-100 transition-opacity"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
};
