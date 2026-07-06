import { Search, Book, Clock, Users, ChefHat } from 'lucide-react';

const mockRecipes = [
    { name: 'Paneer Tikka Masala', category: 'Main Course', prepTime: '15m', difficulty: 'Medium' },
    { name: 'Garlic Naan', category: 'Bakery', prepTime: '5m', difficulty: 'Easy' },
    { name: 'Avocado Green Bowl', category: 'Salad', prepTime: '8m', difficulty: 'Easy' },
    { name: 'Ribeye Steak', category: 'Grill', prepTime: '20m', difficulty: 'Hard' },
];

const ChefRecipes = () => {
    return (
        <div className="w-full max-w-[1600px] mx-auto font-sans space-y-6">
            <div className="flex justify-between items-end mb-6">
                <div>
                    <h2 className="text-2xl font-bold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>Digital Recipe Book</h2>
                    <p className="text-gray-400 text-sm mt-1">Standardized recipes and plating instructions.</p>
                </div>
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                    <input type="text" placeholder="Search recipe..." className="bg-[#1e2330] border border-[#2a3040] text-gray-200 pl-10 pr-4 py-2.5 rounded-xl text-sm focus:outline-none focus:border-orange-500 min-w-[300px]" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {mockRecipes.map((recipe, i) => (
                    <div key={i} className="bg-[#1e2330] rounded-2xl border border-[#2a3040] p-5 hover:border-orange-500/50 hover:shadow-lg transition-all cursor-pointer group">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-3 bg-[#151923] text-orange-400 rounded-xl group-hover:bg-orange-500/10 transition-colors">
                                <Book size={24} />
                            </div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 bg-[#151923] px-2 py-1 rounded border border-[#2a3040]">
                                {recipe.category}
                            </span>
                        </div>
                        <h3 className="font-bold text-white text-lg mb-4 leading-tight">{recipe.name}</h3>
                        
                        <div className="flex justify-between items-center text-sm border-t border-[#2a3040] pt-4">
                            <span className="flex items-center gap-1.5 text-gray-400"><Clock size={16} /> {recipe.prepTime}</span>
                            <span className="flex items-center gap-1.5 text-gray-400"><ChefHat size={16} /> {recipe.difficulty}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ChefRecipes;
