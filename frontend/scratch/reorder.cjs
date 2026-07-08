const fs = require('fs');
const file = 'src/pages/customer/Home.jsx';
let content = fs.readFileSync(file, 'utf8');

function extractSection(content, startComment, endComment) {
    const startIdx = content.indexOf(`{/* ${startComment} */}`);
    if (startIdx === -1) return '';
    let endIdx = content.length;
    if (endComment) {
        endIdx = content.indexOf(`{/* ${endComment} */}`);
        if (endIdx === -1) endIdx = content.length;
    }
    return content.substring(startIdx, endIdx);
}

// 1. Hero (from Hero Section to Restaurant Grid logic which doesn't have a comment)
const heroStart = content.indexOf('{/* Hero Section */}');
// The grid starts at <section className="mb-14">\n                    <h2 className="text-2xl font-bold text-gray-900 tracking-tight mb-6">Explore Restaurants</h2>
const gridStart = content.indexOf('<section className="mb-14">\n                    <h2 className="text-2xl font-bold');
const heroCode = content.substring(heroStart, gridStart);

const gridCode = content.substring(gridStart, content.indexOf('{/* Core SaaS Features */}'));
const coreFeaturesCode = extractSection(content, 'Core SaaS Features', 'QR Ordering Feature Section');
const qrOrderingCode = extractSection(content, 'QR Ordering Feature Section', 'Order Types Feature Section');
const orderTypesCode = extractSection(content, 'Order Types Feature Section', 'Notifications Feature Section');
const notificationsCode = extractSection(content, 'Notifications Feature Section', 'Reports & Analytics Feature Section');
const reportsCode = extractSection(content, 'Reports & Analytics Feature Section', 'Security Feature Section');
const integrationsCode = extractSection(content, 'Tech Stack & Integrations Section', 'Subscription System Section');
const appPreviewCode = extractSection(content, 'Mobile App Preview', 'Customer Testimonials');
const testimonialsCode = extractSection(content, 'Customer Testimonials', 'FAQ Section');
const pricingCode = extractSection(content, 'Subscription & Pricing Section', 'Features Highlights Section');
const faqCode = extractSection(content, 'FAQ Section', 'Contact Us Section');
const footerCode = extractSection(content, 'Footer', 'DUMMY_END');

const trustedByCode = `
                {/* Trusted By Restaurants */}
                <section className="mb-16 border-y border-gray-100 py-8 bg-gray-50/50">
                    <div className="text-center mb-6">
                        <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Trusted by 10,000+ Restaurants Worldwide</p>
                    </div>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale">
                        <div className="text-2xl font-black text-gray-800">Pizza Hut</div>
                        <div className="text-2xl font-black text-gray-800 italic">Domino's</div>
                        <div className="text-2xl font-black text-gray-800">SUBWAY</div>
                        <div className="text-2xl font-black text-gray-800 font-serif">KFC</div>
                        <div className="text-2xl font-black text-gray-800">Burger King</div>
                    </div>
                </section>
`;

const kitchenWorkflowCode = `
                {/* Kitchen Workflow */}
                <section className="mb-24 bg-gray-900 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative shadow-2xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
                    <div className="text-center mb-12 relative z-10">
                        <h2 className="text-3xl font-black tracking-tight mb-4">Seamless Kitchen Workflow (KDS)</h2>
                        <p className="text-gray-400 font-medium max-w-2xl mx-auto">Digitize your kitchen. Route orders directly to the right stations and never miss a beat.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10 items-center">
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center text-red-500 shrink-0"><ChefHat size={24} /></div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">Color-Coded Tickets</h4>
                                    <p className="text-gray-400 text-sm">Instantly know which orders are new, cooking, or delayed based on automated color coding.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 shrink-0"><Clock size={24} /></div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">Prep Time Tracking</h4>
                                    <p className="text-gray-400 text-sm">Monitor average prep times per dish and identify bottlenecks in your kitchen assembly line.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center text-emerald-400 shrink-0"><Monitor size={24} /></div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">Multi-Station Routing</h4>
                                    <p className="text-gray-400 text-sm">Automatically send drinks to the bar and food to the grill station.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-800 p-4 rounded-2xl border border-gray-700 shadow-inner">
                            <div className="flex justify-between items-center mb-4 border-b border-gray-700 pb-2">
                                <span className="font-bold text-gray-300">Station: Grill</span>
                                <span className="px-2 py-1 bg-red-500/20 text-red-400 rounded text-xs font-bold">12 Pending</span>
                            </div>
                            <div className="space-y-3">
                                <div className="bg-red-500/10 border border-red-500/30 p-3 rounded-lg">
                                    <div className="flex justify-between text-sm mb-2"><span className="font-bold text-red-400">Order #1042</span><span className="text-gray-400">14m ago</span></div>
                                    <div className="text-white font-medium">2x Truffle Burger</div>
                                    <div className="text-gray-400 text-xs mt-1">No onions, extra cheese</div>
                                </div>
                                <div className="bg-yellow-500/10 border border-yellow-500/30 p-3 rounded-lg">
                                    <div className="flex justify-between text-sm mb-2"><span className="font-bold text-yellow-400">Order #1043</span><span className="text-gray-400">5m ago</span></div>
                                    <div className="text-white font-medium">1x Classic Cheeseburger</div>
                                </div>
                                <div className="bg-gray-700 p-3 rounded-lg opacity-50">
                                    <div className="flex justify-between text-sm mb-2"><span className="font-bold text-gray-400">Order #1044</span><span className="text-gray-500">Just now</span></div>
                                    <div className="text-white font-medium">1x Vegan Patty</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
`;

const newMainContent = heroCode + 
                       trustedByCode + 
                       coreFeaturesCode + 
                       qrOrderingCode + 
                       orderTypesCode + 
                       kitchenWorkflowCode + 
                       reportsCode + 
                       integrationsCode + 
                       appPreviewCode + 
                       testimonialsCode + 
                       pricingCode + 
                       faqCode;

const preMain = content.substring(0, heroStart);

const postMainStart = content.indexOf('{/* Footer */}');
const postMain = content.substring(postMainStart);

const newContent = preMain + newMainContent + '            </main>\n\n            ' + postMain;

fs.writeFileSync(file, newContent);
console.log('Successfully reordered Home.jsx');
