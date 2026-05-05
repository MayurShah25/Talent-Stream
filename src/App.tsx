/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  LayoutDashboard, 
  Users, 
  GitMerge, 
  BarChart3, 
  Settings, 
  HelpCircle, 
  Search, 
  Bell, 
  History, 
  List, 
  Grid3X3, 
  ChevronDown, 
  MoreVertical, 
  ArrowDown, 
  ChevronRight, 
  ChevronLeft, 
  TrendingUp, 
  Zap, 
  FileText, 
  Plus 
} from 'lucide-react';
import { motion } from 'motion/react';
import { CANDIDATES, NAV_ITEMS } from './constants';

function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-outline-variant h-16 flex items-center justify-between px-8 transition-standard">
      <div className="flex-1 max-w-xl">
        <div className="relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors" size={18} />
          <input 
            type="text" 
            placeholder="Search candidates, skills, or locations..." 
            className="w-full bg-surface-container-low border-none rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary focus:bg-white transition-standard outline-none"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4">
          <button className="text-on-surface-variant hover:text-primary transition-standard relative">
            <Bell size={20} />
            <span className="absolute top-0 right-0 w-2 h-2 bg-error rounded-full border-2 border-white"></span>
          </button>
          <button className="text-on-surface-variant hover:text-primary transition-standard">
            <History size={20} />
          </button>
        </div>
        
        <div className="h-6 w-px bg-outline-variant"></div>
        
        <div className="flex items-center gap-3">
          <button className="bg-secondary-container text-on-secondary-container px-4 py-1.5 rounded text-xs font-semibold hover:brightness-95 transition-standard">
            Filter
          </button>
          <button className="bg-primary text-white px-4 py-1.5 rounded text-xs font-semibold shadow-sm hover:brightness-110 transition-standard">
            Start Analysis
          </button>
          <div className="relative group cursor-pointer">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOOsVxlkg4FeYbXyvKGJjHwXs0ICI9Inn3uaqIK98PyhrYrcnGVAb5nM67Qcj9SNbTG2-8Re5a8omINUX2fDc5ygBBINyFfQycTGnrUaDmnd5kOZZ0xhvP0_bd7jEZaaO4En_gEcT846dCOmqDuvuoVep2MOYM-zqlH8NAaHNsBgXiqKyKV2zk8OTc9LFsXq-04-Kx_2fhO_jydRp4Q7uiOST1kR-8ypWY5ZUTJBGrMonCjswFZxY_mRhMSQ6eetx_rgzsvFto7Sc" 
              alt="Avatar" 
              className="w-9 h-9 rounded-full border-2 border-outline-variant hover:border-primary transition-standard object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default function App() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-[240px] bg-white border-r border-outline-variant flex flex-col fixed inset-y-0 h-screen z-50 transition-standard">
        <div className="p-6 mb-8">
          <h1 className="text-2xl font-bold text-primary tracking-tight">TalentStream</h1>
          <p className="text-xs uppercase tracking-widest text-secondary font-semibold opacity-60 mt-1">Enterprise HR</p>
        </div>

        <nav className="flex-1 px-4 space-y-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href="#"
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-standard ${
                item.active 
                  ? 'bg-primary-container/10 text-primary font-semibold border-r-4 border-primary' 
                  : 'text-secondary hover:bg-surface-container hover:text-primary'
              }`}
            >
              <item.icon size={20} />
              <span className="text-sm font-medium">{item.label}</span>
            </a>
          ))}
        </nav>

        <div className="px-4 mb-4">
          <button className="w-full bg-primary hover:bg-primary-container text-white font-bold py-3 px-4 rounded-lg shadow-sm transition-standard flex items-center justify-center gap-2 group">
            <Plus size={18} className="group-hover:rotate-90 transition-transform" />
            Upload Resume
          </button>
        </div>

        <div className="p-4 border-t border-outline-variant mt-auto">
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-secondary hover:text-primary transition-standard">
            <HelpCircle size={20} />
            <span className="text-sm font-medium">Help Center</span>
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-[240px]">
        <Header />

        {/* Page Content */}
        <div className="p-8 max-w-[1600px] mx-auto">
          {/* Hero Section */}
          <section className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-on-surface">Candidate Library</h2>
              <p className="text-lg text-secondary mt-1">Manage and analyze your talent pool across all departments.</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex bg-surface-container-low rounded-lg p-1 border border-outline-variant">
                <button className="p-2 transition-standard bg-white shadow-sm rounded text-primary">
                  <List size={18} strokeWidth={2.5} />
                </button>
                <button className="p-2 transition-standard text-secondary hover:text-primary">
                  <Grid3X3 size={18} strokeWidth={2.5} />
                </button>
              </div>
            </div>
          </section>

          {/* Filters Bar */}
          <section className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'Experience', value: 'Senior (5-8y)' },
                { label: 'Skills', value: 'Python, AWS, React' },
                { label: 'Location', value: 'Remote / Hybrid' }
              ].map((filter, i) => (
                <button key={i} className="flex items-center gap-2 bg-white border border-outline-variant rounded-lg px-4 py-2 shadow-sm hover:border-primary group transition-standard">
                  <span className="text-xs font-medium text-secondary group-hover:text-primary">{filter.label}</span>
                  <span className="text-sm font-semibold text-on-surface">{filter.value}</span>
                  <ChevronDown size={14} className="text-secondary" />
                </button>
              ))}
              <button className="text-primary text-sm font-bold hover:underline transition-standard">
                Clear all filters
              </button>
            </div>
            <p className="text-xs font-semibold text-secondary uppercase tracking-wider">
              Showing 24 of 1,240 candidates
            </p>
          </section>

          {/* Candidates Table */}
          <div className="bg-white rounded-xl border border-outline-variant shadow-sm overflow-hidden mb-10">
            <table className="w-full text-left border-collapse">
              <thead className="bg-surface-container-low border-b border-outline-variant">
                <tr>
                  <th className="px-6 py-4 text-xs font-bold text-secondary uppercase tracking-widest">
                    <div className="flex items-center gap-2 cursor-pointer hover:text-primary transition-standard">
                      Name <ArrowDown size={14} />
                    </div>
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-secondary uppercase tracking-widest">Department</th>
                  <th className="px-6 py-4 text-xs font-bold text-secondary uppercase tracking-widest">Match Score</th>
                  <th className="px-6 py-4 text-xs font-bold text-secondary uppercase tracking-widest">Date Added</th>
                  <th className="px-6 py-4 text-xs font-bold text-secondary uppercase tracking-widest">Status</th>
                  <th className="px-6 py-4"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant">
                {CANDIDATES.map((candidate) => (
                  <motion.tr 
                    key={candidate.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="hover:bg-surface-container-low/30 transition-standard group cursor-pointer"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <img 
                          src={candidate.avatar} 
                          alt={candidate.name} 
                          className="w-10 h-10 rounded-full object-cover border border-outline-variant group-hover:border-primary transition-standard"
                        />
                        <div>
                          <p className="text-sm font-bold text-on-surface group-hover:text-primary transition-standard">{candidate.name}</p>
                          <p className="text-xs text-secondary">{candidate.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-on-surface font-medium">{candidate.department}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex-1 max-w-[100px] h-2 bg-surface-container rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${candidate.matchScore}%` }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                            className={`h-full ${candidate.matchScore > 80 ? 'bg-primary' : candidate.matchScore > 60 ? 'bg-secondary' : 'bg-error'}`}
                          ></motion.div>
                        </div>
                        <span className={`text-sm font-bold ${candidate.matchScore > 80 ? 'text-primary' : candidate.matchScore > 60 ? 'text-secondary' : 'text-error'}`}>
                          {candidate.matchScore}%
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-secondary font-medium">{candidate.dateAdded}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider border ${
                        candidate.status === 'Interviewing' ? 'bg-primary-container/10 text-primary border-primary/20' :
                        candidate.status === 'Shortlisted' ? 'bg-on-primary-container/10 text-primary-container border-primary-container/20' :
                        candidate.status === 'Under Review' ? 'bg-secondary-container/30 text-secondary border-outline' :
                        'bg-error-container/20 text-error border-error/20'
                      }`}>
                        {candidate.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="p-2 hover:bg-surface-container rounded-full text-secondary hover:text-primary transition-standard">
                        <MoreVertical size={18} />
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
            
            {/* Pagination */}
            <div className="bg-surface-container-low px-8 py-4 border-t border-outline-variant flex items-center justify-between">
              <span className="text-sm text-secondary font-medium tracking-tight">Page 1 of 52</span>
              <div className="flex items-center gap-2">
                <button className="p-2 rounded border border-outline-variant bg-white disabled:opacity-30 transition-standard cursor-pointer" disabled>
                  <ChevronLeft size={16} />
                </button>
                {[1, 2, 3, '...', 52].map((page, i) => (
                  <button 
                    key={i} 
                    className={`px-3 py-1 rounded border text-xs font-bold transition-standard ${
                      page === 1 
                        ? 'bg-primary-container/10 border-primary text-primary' 
                        : 'bg-white border-outline-variant text-secondary hover:bg-surface-container-high'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <button className="p-2 rounded border border-outline-variant bg-white hover:bg-surface-container-high transition-standard cursor-pointer">
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Dashboard Cards / Bento Grid */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl border border-outline-variant shadow-sm relative overflow-hidden group cursor-default"
            >
              <div className="relative z-10 transition-standard">
                <p className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em] mb-2">Active Applications</p>
                <h3 className="text-3xl font-bold text-on-surface">158</h3>
                <div className="flex items-center gap-2 text-primary mt-4 font-bold text-sm">
                  <TrendingUp size={16} />
                  <span>+12.5% this month</span>
                </div>
              </div>
              <FileText className="absolute -right-4 -bottom-4 text-primary opacity-[0.04] group-hover:scale-125 transition-transform duration-500" size={120} />
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl border border-outline-variant shadow-sm relative overflow-hidden group cursor-default"
            >
              <div className="relative z-10 transition-standard">
                <p className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em] mb-2">Average Match Rate</p>
                <h3 className="text-3xl font-bold text-on-surface">76%</h3>
                <div className="flex items-center gap-2 text-secondary mt-4 font-bold text-sm">
                  <BarChart3 size={16} />
                  <span>Consistent with industry</span>
                </div>
              </div>
              <Zap className="absolute -right-4 -bottom-4 text-primary opacity-[0.04] group-hover:scale-125 transition-transform duration-500" size={120} />
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-primary p-6 rounded-xl shadow-lg flex flex-col justify-between text-white relative overflow-hidden group"
            >
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-2">Ready for Analysis?</h3>
                <p className="text-sm font-medium opacity-90 leading-relaxed max-w-[240px]">
                  Unlock deeper insights into candidate skills using our proprietary AI model.
                </p>
              </div>
              <button 
                className="mt-6 bg-white py-3 px-6 rounded-lg text-primary font-bold text-sm hover:bg-surface transition-standard self-start shadow-md"
              >
                Bulk Analyze
              </button>
              <div className="absolute top-0 right-0 p-4 opacity-20">
                <Settings size={60} className="animate-spin-slow" />
              </div>
            </motion.div>
          </section>
        </div>
      </main>

      {/* FAB */}
      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 right-8 w-14 h-14 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center group z-50 overflow-hidden"
      >
        <Plus size={24} className="group-hover:rotate-90 transition-transform" />
      </motion.button>
    </div>
  );
}

